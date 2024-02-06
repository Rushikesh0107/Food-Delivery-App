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



export const checkout = async (amount, dispatch, user, navigate, address, cart) => {
    const toastId = toast.loading("Loading...")

    const token = localStorage.getItem("accessToken")

    try{
        const orderResponse = await apiConnector(
            "POST",
            CHECKOUT_API,
            {
                amount: amount,
            },   
            {
                "authorization": `Bearer ${token}`
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
            prefill: {
                name: user.fullname,
                email: user.email,
                contact: user.phone
            },
            notes: {
                address: address
            },
            handler: function (response) {
                verifyPayment({...response, amount, user, address, cart}, navigate, dispatch)
            },
            theme: {
                "color": "#121212"
            },
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

async function verifyPayment (bodyData, navigate, dispatch){
    
    const toastId = toast.loading("Loading...")
    //console.log(bodyData);

    try{
        const response = await apiConnector(
            "POST",
            PAYMNET_VERIFICATION_API,
            {bodyData},
            {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        )

        if(!response.data.success) {
            throw new Error(response?.data?.message)
        }

        toast.success("Payment Successful")
        navigate("/order")
        dispatch(resetCart())
    } catch(error) {
        console.log("PAYMENT VERIFICATION ERROR", error);
        toast.error("PAYMENT VERIFICATION FAILED")
    }
    toast.dismiss(toastId)
}


