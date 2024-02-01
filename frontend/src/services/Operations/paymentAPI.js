import {toast} from 'react-hot-toast'
import {apiConnector} from '../apiConnector'
import { paymentEndpoints } from '../apis'
import Logo from "../../assets/Logo/Logo.png"

const {
    CHECKOUT_API,
    GET_API_KEY
} = paymentEndpoints

function loadScrip(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
        }

        script.onerror = () => {
            resolve(false)
        }

        document.body.appendChild(script);
    })
}


export const checkout = async (amount, dispatch, user) => {
    const toastId = toast.loading("Loading...")

    try{
        const res = await loadScrip("https://checkout.razorpay.com/v1/checkout.js")

        if(!res) {
            toast.error("Razorpay SDK failed to load. Are you online?")
            return;
        }

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
            amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "NutrifyMeals",
            description: "Thank you for purchasing us.",
            image: Logo,
            order_id: orderResponse.data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:8000/api/v1/payment/verify-payment",
            prefill: {
                name: user.fullname,
                email: user.email,
                contact: user.phone
            },
            theme: {
                "color": "#121212"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        
    } catch(error) {
        toast.error(error.message)
        console.log(error);
        toast.dismiss(toastId)
    }
    toast.dismiss(toastId)
}
