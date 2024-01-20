import {toast} from  "react-hot-toast"

import {apiConnector} from "../apiConnector.js"
import { addressEndpoints } from "../apis.js"
import { setAddress } from "../../Slices/addressSlice.js" 

const {
    ADD_ADDRESS_API
} = addressEndpoints;

//====================Add Address========================

export const addAddress = (addressLine1, addressLine2, city, state, pincode, deliveryInstructions, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Adding address...");
        const {token} = localStorage.getItem("accessToken");

        const userId = JSON.parse(localStorage.getItem("user"))._id;
        
        const address = {
            addressLine1,
            addressLine2,
            city,
            state,
            pincode,
            deliveryInstructions,
            userId,
        };
        
        try {
            const response = await apiConnector(
                "POST",
                ADD_ADDRESS_API,
                address,
                {
                    authorization: `Bearer ${token}`,
                }
            )

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            dispatch(setAddress(response.data.data.address));
            toast.dismiss(toastId);
            toast.success("Address added successfully");
            navigate("/");
        } catch (error) {
            console.log("ADD ADDRESS ERROR: ", error);
            toast.error("Error adding address");
            toast.dismiss(toastId);
        }
        toast.dismiss(toastId);
    }
    
}
