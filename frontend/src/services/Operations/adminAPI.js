import {toast} from 'react-hot-toast'
import { apiConnector } from '../apiConnector'
import {setToken} from '../../Slices/authSlice'
import { adminEndpoints } from '../apis'
import { setUser } from '../../Slices/profileSlice'

const { 
    ADMIN_LOGIN_API,
    ADD_FOOD_API,
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