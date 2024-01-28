import {toast} from "react-hot-toast";

import { apiConnector } from "../apiConnector";
import { setUser } from "../../Slices/profileSlice";
import { setAddress } from "../../Slices/addressSlice";

import { userEndpoints } from "../apis";


const { 
    UPDATE_USER_AVATAR_API,
    UPDATE_USER_INFO_API, 
    UPDATE_USER_ADDRESS_API,
} = userEndpoints;

//=========================UPDATE_USER_AVATAR=================================

export const updateUserAvatar = (avatar) => {
    console.log(avatar);
    return async (dispatch) => {
        const toastId = toast.loading("Updating avatar...");
        
        try {
            const response = await apiConnector(
                "PATCH",
                UPDATE_USER_AVATAR_API,
                avatar,
                {
                    "Content-Type": "multipart/form-data",
                    "authorization": "Bearer " + localStorage.getItem("accessToken"),
                }
            )

            if(response.status === 200) {
                toast.success(response.data.message);
            }
            //console.log(response.data.data);
            //dispatch(setUser(response.data.data))
            localStorage.setItem("user", JSON.stringify(response.data.data));

            toast.dismiss(toastId);

        } catch(error) {
            console.log(error);
            toast.error(error.response.data.message);
            toast.dismiss(toastId);
        }
    }
}

//=========================UPDATE_PROFILE=================================

export const updateProfile = (profile) => {
    return async (dispatch) => {
        const toastId = toast.loading("Updating profile...");

        try{
            const response = await apiConnector(
                "PATCH",
                UPDATE_USER_INFO_API,
                profile,
                {
                    "authorization": "Bearer " + localStorage.getItem("accessToken"),
                    "Content-Type": "application/json",
                }
            )

            if(response.status === 200){
                toast.success(response.data.message);
            }

            dispatch(setUser(response.data.data));
            localStorage.setItem("user", JSON.stringify(response.data.data));

            toast.dismiss(toastId);
        } catch(error){
            console.log("ERROR WHILE UPDATING PROFILE", error);
            toast.dismiss(toastId);
            toast.error(error.response.data.message);
        }
    }
}


//=========================UPDATE_USER_ADDRESS=================================

export const updateUserAddress = (address) => {
    // console.log(address);
    return async (dispatch) => {
        const toastId = toast.loading("Updating address...");
        const user = JSON.parse(localStorage.getItem("user"));

        try{
            const response = await apiConnector(
                "PATCH",
                `${UPDATE_USER_ADDRESS_API}/${user._id}`,
                address,
                {
                    "authorization": "Bearer " + localStorage.getItem("accessToken"),
                    "Content-Type": "application/json",
                }
            )

            if(response.status === 200){
                toast.success(response.data.message);
            }

            dispatch(setAddress(response.data.data));
            localStorage.setItem("user", JSON.stringify(response.data.data));

            toast.dismiss(toastId);
        } catch(error){
            console.log("ERROR WHILE UPDATING ADDRESS", error);
            toast.dismiss(toastId);
            toast.error(error.response.data.message);
        }
    }
}