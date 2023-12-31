import { asyncHandler }from '../utils/asyncHandler.js'
import { ApiErrors } from '../utils/ApiErrors.js'
import { ApiResponse } from '../utils/ApiResponseHandler.js'
import { User } from '../models/User.model.js'
import  { uploadOnCloudinary } from '../utils/cloundinary.js'

const registerUser = asyncHandler(async (req, res) => {
    
    const {fullname, username, email, password} = req.body;

    if(
        [fullname, username, email, password].some((field) => field.trim() === "")
    ) {
        throw new ApiErrors(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(existedUser){
        throw new ApiErrors(400, "Username or email already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    if(!avatarLocalPath){
        throw new ApiErrors(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    const user = await User.create({
        fullname,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar.url,
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if(!createdUser){
        throw new ApiErrors(400, "Something went wrong while creating user");
    }

    return res
    .status(201)
    .json(
        new ApiResponse(
            201,
            createdUser,
            "User created successfully"
        )
    )
})

export {
    registerUser
}