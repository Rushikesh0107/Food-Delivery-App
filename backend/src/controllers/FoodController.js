import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import { uploadOnCloudinary } from "../utils/cloundinary.js";
import { Food } from "../models/Food.model.js";

const addFood = asyncHandler(async (req, res) => {

    const {title, category, description, price } = req.body

    if([title || category || description || price].some((field) => field?.trim() === "")){
        throw new ApiErrors(400, "All fields are required")
    }

    const existedFood = await Food.findOne({
        $or: [{title}]
    })

    if(existedFood){
        throw new ApiErrors(400, "Food already exists")
    }

    //console.log(req);

    const foodImageLocalPath = req.file?.path

    if(!foodImageLocalPath){
        throw new ApiErrors(400, "Food image is required")
    }

    const foodImage = await uploadOnCloudinary(foodImageLocalPath, "Food-Image")

    if(!foodImage){
        throw new ApiErrors(400, "Something went wrong while uploading food image")
    }

    const food = await Food.create({
        title,
        category,
        description,
        price,
        foodImage: foodImage.url,
    })

    if(!food){
        throw new ApiErrors(400, "Something went wrong while creating food")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(
            201,
            food,
            "Food created successfully"
        )
    )
})

export {
    addFood
}