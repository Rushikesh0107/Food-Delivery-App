import { asyncHandler }from '../utils/asyncHandler.js'
import { ApiErrors } from '../utils/ApiErrors.js'
import { ApiResponse } from '../utils/ApiResponseHandler.js'
import { User } from '../models/User.model.js'
import  { uploadOnCloudinary } from '../utils/cloundinary.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

const generateAccessAndRefreshToken = async (id) => {
    try {
        const user = await User.findById(id)
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiErrors(400, "Something went wrong while generating tokens")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    
    try {
        const {fullname, username, email, password, phone} = req.body;
    
        if(!(fullname && username && email && password && phone)) {
            throw new ApiErrors(400, "All fields are required")
        }
    
        const existedUser = await User.findOne({
            $or: [{username}, {email}]
        })
    
        if(existedUser){
            throw new ApiErrors(400, "Username or email already exists")
        }
    
        //console.log(req);
    
        const avatarLocalPath = req.files?.avatar[0]?.path;
    
        if(!avatarLocalPath){
            throw new ApiErrors(400, "Avatar file is required")
        }
    
        const avatar = await uploadOnCloudinary(avatarLocalPath, "profile-photo");
    
        const user = await User.create({
            fullname,
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            phone,
            password,
            avatar: avatar.url,
        })
    
        const createdUser = await User.findById(user._id).select("-password -refreshToken");
    
        if(!createdUser){
            throw new ApiErrors(400, "Something went wrong while creating user");
        }
    
        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
    
        const option = {
            httpOnly: true,
            secure: true
        }
    
        return res
        .status(201)
        .cookie("refreshToken", refreshToken, option)
        .cookie("accessToken", accessToken, option)
        .json(
            new ApiResponse(
                201,
                {
                    createdUser,
                    accessToken
                },
                "User created successfully"
            )
        )
    } catch (error) {
        console.log("ERROR OCCURED AT REGISTER USER API", error);
        const avatarPath = req.files?.avatar[0]?.path;

        if (fs.existsSync(avatarPath)) {
            fs.unlink(avatarPath, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                }
            });
        }

        return res
        .status(error.statusCode)
        .json(
            new ApiResponse(
                error.statusCode,
                error.message,
                "Something went wrong while creating user"
            )
        )
    }
})

const loginUser = asyncHandler (async (req, res) => {
    const {username, email, password} = req.body;
    
    if(!(email || username)){
        throw new ApiErrors(400, "Username or email is required")
    }
    
    if(!password){
        throw new ApiErrors(400, "Password is required")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!user){
        return res
        .status(400)
        .json(
            new ApiResponse(
                400,
                {},
                "User not found"
            )
        )
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    //console.log(isPasswordCorrect);

    if(!isPasswordCorrect){
        //throw new ApiErrors(400, "Password is not correct")
        return res
        .status(400)
        .json(
            new ApiResponse(
                400,
                {},
                "Password is not correct"
            )
        )
    }


    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
    
    const logedInUser = await User.findById(user._id).select("-password -refreshToken");

    const option = {
        httpOnly: true,
    }

    return res
    .status(200)
    .cookie("refreshToken", refreshToken, option)
    .cookie("accessToken", accessToken, option)
    .json(
        new ApiResponse(
            200,
            {
                user: logedInUser,
                accessToken
            },
            "User loged in successfully"
        )
    )
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id, 
        {
            $set: {
                refreshToken: ""
            }
        },
        {
            new: true,
        }
    );

    const option = {
        httpOnly: true,
    }

    return res
    .status(200)
    .clearCookie("refreshToken", option)
    .clearCookie("accessToken", option)
    .json(
        new ApiResponse(
            200,
            {},
            "User loged out successfully"
        )
    )
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    
    const incommingUserId = req.body.userId

    if(!incommingUserId){
        throw new ApiErrors(400, "id is required")
    }

    const user = await User.findById(incommingUserId)

    if(!user){
        throw new ApiErrors(404, "User not found")
    }

    const incomingRefreshToken = user.refreshToken


    if (!incomingRefreshToken) {
        throw new ApiErrors(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiErrors(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiErrors(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefreshToken(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiErrors(401, error?.message || "Invalid refresh token")
    }

})

const changeCurrentPassword = asyncHandler(async(req, res) => {
    const {oldPassword, newPassword} = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
    //console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
        throw new ApiErrors(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"))
})

const getCurrentUser = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        req.user,
        "User fetched successfully"
    ))
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullname, username, email, phone} = req.body

    if (!(fullname || email || phone || username)) {
        throw new ApiErrors(400, "Any one field is required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullname,
                username: username.toLowerCase(),
                email: email.toLowerCase(),
                phone
            }
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
});

const updateUserAvatar = asyncHandler(async(req, res) => {
    const avatarLocalPath = req.files?.avatar[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiErrors(400, "Avatar file is missing")
    }

    //TODO: delete old image - assignment

    const currentAvatar = req.user?.avatar;

    const urlParts = currentAvatar.split("/");
    const n = urlParts.length;
    const inp = urlParts[n - 2] + "/" + urlParts[n - 1];
    const newInp = inp.split(".")
    //console.log(newInp[0]);

    if (newInp) {
        await cloudinary.api.delete_resources(newInp[0]);
    }
    
    const avatar = await uploadOnCloudinary(avatarLocalPath, "profile-photo")
    
    if (!avatar.url) {
        throw new ApiErrors(400, "Error while uploading on avatar")
        
    }
    
    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                avatar: avatar.url
            }
        },
        {new: true}
        ).select("-password")
        
        
        return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Avatar image updated successfully")
    )
})


export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    generateAccessAndRefreshToken
}