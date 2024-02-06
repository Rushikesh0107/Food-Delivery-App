import {toast} from 'react-hot-toast'
import { apiConnector } from '../apiConnector'
import {setToken} from '../../Slices/authSlice'
import { adminEndpoints } from '../apis'
import { setUser } from '../../Slices/profileSlice'
import { removeItem } from '../../Slices/ItemsSlice'

const { 
    ADMIN_LOGIN_API,
    ADD_FOOD_API,
    ADD_CATEGORY_API,
    DELETE_FOOD_API,
    DELETE_DELIVERED_ORDERS_API
} = adminEndpoints;

export const adminLogin = (username, password, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading('Logging in...');
        //console.log(username, password);
        try{
            const response = await apiConnector(
                "POST",
                ADMIN_LOGIN_API,
                {username, password}
                );
            //console.log(response);
            if(response.status === 200){
                //console.log(response.data.data.user);
                localStorage.setItem('accessToken', response.data.data.accessToken);
                localStorage.setItem("user", JSON.stringify(response.data.data.user));
                dispatch(setUser(response.data.data.user));
                dispatch(setToken(response.data.data.accessToken));
            }
            toast.dismiss(toastId);
            toast.success("Login successful");
            navigate("/admin-dashboard")
        } catch(error){
            console.log("ERROR OCCURED AT ADMIN LOGIN API", error);
            toast.dismiss(toastId);
        }
    }
}

export const addFood = (title, description, price, category, foodImage ) => {
    return async(dispatch) => {
        const toastId = toast.loading("Adding food...");
        try{
            const response = await apiConnector(
                "POST",
                ADD_FOOD_API,
                {title, description, price, category, foodImage},
                {
                    "Content-Type": "multipart/form-data",
                    "authorization": "Bearer " + localStorage.getItem("accessToken"),
                }
            );

            // console.log(response);
            if(response.status === 201){
                toast.dismiss(toastId);
                toast.success("Food added successfully");
            }
        } catch(error){
            console.log("ERROR OCCURED AT ADD FOOD API", error);
            toast.dismiss(toastId);
            toast.error(error.response.data.data)
        }
    }
}

export const addCategory = (title, categoryImage) => {
    return async (dispatch) => {
        const toastId = toast.loading("Adding category...");
        //console.log(title, categoryImage);

        try{
            const response = await apiConnector(
                "POST",
                ADD_CATEGORY_API,
                {title, categoryImage},
                {
                    "authorization": "Bearer " + localStorage.getItem("accessToken"),
                    "content-type": "multipart/form-data"
                }
            )

            if(response.status === 201){
                toast.dismiss(toastId);
                toast.success("Category added successfully");
            }

        } catch(error){
            console.log("ERROR OCCURED AT ADD CATEGORY API", error);
            toast.dismiss(toastId);
            toast.error(error.response.data.data)
        }
    }
}

export const deleteFood = (foodId) => {
    return async (dispatch) => {
        const toastId = toast.loading("Deleting food...");
        const token = localStorage.getItem("accessToken");
        //console.log(token);
        try{
            const response = await apiConnector(
                "DELETE",
                `${DELETE_FOOD_API}/${foodId}`,
                null,
                {
                    "authorization": "Bearer " + token,
                }
            )

            if(response.status === 200){
                toast.dismiss(toastId);
                toast.success("Food deleted successfully");
            }
            
            dispatch(removeItem(foodId));
            
            toast.dismiss(toastId);

        } catch(error){
            console.log("ERROR OCCURED AT DELETE FOOD API", error);
            toast.dismiss(toastId);
            toast.error(error.response.data.data)
        }
    }
}

//=======================delete-delivered-orders=======================

export const deleteDeliveredOrder = (id) => {
    return async (dispatch) => {
        const toastId = toast.loading("Deleting order")
        //console.log(DELETE_DELIVERED_ORDERS_API);
        try{
            const response = await apiConnector(
                "DELETE",
                `${DELETE_DELIVERED_ORDERS_API}/${id}`,
                null,
                {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            )

            if(response.data.status === 404){
                return toast.error("No order found")
            } 

            if(response.data.status > 400){
                return toast.error("Something went wrong while deleting order")
            }

            toast.dismiss(toastId)
            toast.success("Order deleted successfully")
        } catch (error){
            console.log("ERROR WHILE DELETING ORDER",error)
            toast.dismiss(toastId)
            toast.error("Something went wrong while deleting order")
        }
    }
}