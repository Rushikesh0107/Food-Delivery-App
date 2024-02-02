import { asyncHandler } from "../utils/asyncHandler.js"
import { instance } from "../index.js"
import { ApiResponse } from "../utils/ApiResponseHandler.js";

const checkout = asyncHandler(async (req, res) => {

    console.log(req.body);

    const options = {
        amount: Number(req.body.amount) * 100, 
    }

    const order = await instance.orders.create(options)

    //console.log(order);
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            order,
            "Order created successfully"
        )
    )
})


const paymentVerification = asyncHandler(async (req, res) => {
    console.log(req.body);

    
})


const getKey = asyncHandler(async (req, res) => {
    const key = process.env.RAZORPAY_API_KEY;
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            key,
            "Key fetched successfully"
        )
    )})

export {
    checkout,
    paymentVerification,
    getKey,
}