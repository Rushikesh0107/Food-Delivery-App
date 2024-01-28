import {toast} from "react-hot-toast";

import { apiConnector } from "../apiConnector";
import { setUser } from "../../Slices/profileSlice";

import { userEndpoints } from "../apis";


const { 
    UPDATE_USER_AVATAR_API 
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
        console.log(profile);
    }
}