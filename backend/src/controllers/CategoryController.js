import { asyncHandler } from "../utils/asyncHandler.js"
import { Category } from "../models/Category.model.js"
import { ApiErrors } from "../utils/ApiErrors.js"
import { ApiResponse } from "../utils/ApiResponseHandler.js"
import { uploadOnCloudinary } from "../utils/cloundinary.js"

const createCategory = asyncHandler(async (req, res) => {

    const { title , value} = req.body

    if(!title){
        throw new ApiErrors(400, "Title is required")
    }

    console.log(req);

    const categoryImageLocalPath = req.file?.path
    console.log(categoryImageLocalPath);

    if(!categoryImageLocalPath){
        throw new ApiErrors(400, "Category image is required")
    }

    const categoryImage = await uploadOnCloudinary(categoryImageLocalPath, "Category-Image")

    if(!categoryImage){
        throw new ApiErrors(400, "Something went wrong while uploading category image")
    }

    const category = await Category.create({
        title,
        value,
        categoryImage: categoryImage.url
    })

    if(!category){
        throw new ApiErrors(400, "Something went wrong while creating category")
    }
        
    return res
    .status(201)
    .json(
        new ApiResponse(
            201,
            category,
            "Category created successfully"
        )
    )
})

const getAllCategories = asyncHandler(async (req, res) => {
    return res.status(200)
    .json(
        new ApiResponse(
            200,
            await Category.find({}),
            "All categories"
        )
    )
})

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params.id

    if(!id){
        throw new ApiErrors(400, "Category id is required")
    }

    const category = await Category.findByIdAndDelete(id)

    if(!category){
        throw new ApiErrors(400, "Something went wrong while deleting category")
    }

    return res.status(200)
    .json(
        new ApiResponse(
            200,
            category,
            "Category deleted successfully"
        )
    )
})

export {
    createCategory,
    getAllCategories,
    deleteCategory
}