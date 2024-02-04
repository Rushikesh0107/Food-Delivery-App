import { asyncHandler } from "../utils/asyncHandler.js"
import { instance } from "../index.js"
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import crypto from "crypto";

const checkout = asyncHandler(async (req, res) => {

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

    const {razorpay_payment_id, razorpay_order_id, razorpay_signature, amount} = req.body;

   const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');


    const isAuthentic = expectedSignature === razorpay_signature;

    if(isAuthentic) {
        console.log(req.body);
        res.redirect("http://localhost:5173/order")
    }

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