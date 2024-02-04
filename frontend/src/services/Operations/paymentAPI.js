import {toast} from 'react-hot-toast'
import {apiConnector} from '../apiConnector'
import { paymentEndpoints } from '../apis'
import Logo from "../../assets/Logo/Logo.png"
import { resetCart } from '../../Slices/cartSlice'

const {
    CHECKOUT_API,
    GET_API_KEY,
    PAYMNET_VERIFICATION_API
} = paymentEndpoints



export const checkout = async (amount, dispatch, user, navigate) => {
    const toastId = toast.loading("Loading...")

    try{
        const orderResponse = await apiConnector(
            "POST",
            CHECKOUT_API,
            {
                amount: amount,
            }   

        )

        if(!orderResponse.data.success) {
            throw new Error(orderResponse?.data?.message)
        }

        const RAZORPAY_API_KEY = await apiConnector(
            "GET",
            GET_API_KEY,
            null,
        )

        if(!RAZORPAY_API_KEY.data.success) {
            throw new Error(RAZORPAY_API_KEY?.data?.message)
        }


        let options = {
            key: RAZORPAY_API_KEY.data.data, 
            amount: amount, 
            order_id: orderResponse.data.data.id,
            currency: "INR",
            name: "NutrifyMeals",
            description: "Thank you for purchasing us.",
            image: "https://res.cloudinary.com/ddara3sez/image/upload/v1706332902/exv4dtqjsbjknadvqywq.png",
            callback_url: "http://localhost:8000/api/v1/payment/verify-payment",
            prefill: {
                name: user.fullname,
                email: user.email,
                contact: user.phone
            },
            theme: {
                "color": "#121212"
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function (response) {
            toast.error("oops, payment failed");
            console.log("payment failed.... ", response.error);
        })
        
    } catch(error) {
        toast.error(error.message)
        console.log(error);
        toast.dismiss(toastId)
    }
    toast.dismiss(toastId)
}


