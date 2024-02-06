import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import { Order } from "../models/order.model.js";


const fetchOrder = asyncHandler(async(req, res)=>{
    const id = req.user._id;

    if(!id){
        throw new ApiErrors(400, "Invalid request")
    }

    const order = await Order.find({userId: id}).sort({createdAt: -1});

    if(!order){
        return res
        .status(404)
        .json(
            new ApiResponse(
                404,
                null,
                "No order found"
            )
        )
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            order,
            "Order fetched successfully"
        )
    )
})


export {
    fetchOrder
}