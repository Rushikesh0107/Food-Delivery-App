import {toast} from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import {setItems} from "../../Slices/ItemsSlice"
import { foodEndpoints } from "../apis"


const {
    GET_ALL_FOODS_API,  
    GET_FOOD_BY_CATEGORY_API,
} = foodEndpoints;

//====================Get All Foods====================

export const getAllFoods = () => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading Foods...");
        //console.log("all wali req ho rahi hai");

        try {
            const response = await apiConnector(
                "GET",
                GET_ALL_FOODS_API,
                null,
                {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            )
            const foods = response.data.data;
            //console.log(foods);
            dispatch(setItems(foods))
            toast.dismiss(toastId);
        } catch (error) {
            console.log("GET_ALL_FOODS_API ERROR", error);
            toast.dismiss(toastId);
        }
    }
}

//====================Get-Food-By-Category====================

export const getFoodByCategory = (id) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading Foods...");
        //console.log(id);

        try {
            const response = await apiConnector(
                "GET",
                `${GET_FOOD_BY_CATEGORY_API}/${id}`,
                null,
                {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            )
            const foods = response.data.data;

            dispatch(setItems(foods))
            toast.dismiss(toastId);
        } catch (error) {
            console.log("GET_FOOD_BY_CATEGORY_API ERROR", error);
            toast.dismiss(toastId);
        }
    }
}

