import { asyncHandler } from "../utils/asyncHandler.js"
import { instance } from "../index.js"
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import crypto from "crypto";
import {Order} from "../models/order.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";

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

    const {razorpay_payment_id, razorpay_order_id, razorpay_signature, user, address, cart, amount} = req.body.bodyData;

    //console.log(req.body.bodyData);

    if(!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
        throw new ApiErrors(400, "Invalid request")
    }

    const date = new Date()

   const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

    const add = `${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.state}, ${address.pincode}`


    const isAuthentic = expectedSignature === razorpay_signature;

    if(isAuthentic) {
        const orderCreated = await Order.create({
            userId: user._id,
            orderItems: cart,
            orderTotal: cart.length,
            deliveryAddress: add,
            grandTotal: amount,
            paymentMethod: "Razorpay",
            paymentStatus: "Paid",
            orderDate: date.toDateString(),
        })

        if(!orderCreated) {
            throw new ApiErrors(500, "Order creation failed")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                orderCreated,
                "Order created successfully"
            )
        )
    }

    throw new ApiErrors(400, "Payment verification failed")

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