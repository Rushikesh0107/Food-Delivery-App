import {toast} from 'react-hot-toast'

import {setLoading, setToken} from "../../Slices/authSlice.js"
import {apiConnector} from "../apiConnector.js"
import {authEndpoints} from "../apis.js"

const {
    LOGIN_API,
    REGISTER_API,
} = authEndpoints;

//====================Login====================

export const login = (username, password, navigate)  => {
    return async (dispatch) => {
        const toastId = toast.loading('Logging in...');
        dispatch(setLoading(true));

        try {
            const response = await apiConnector(
                "POST",
                LOGIN_API,
                {username, password},
            )

            console.log(response.data);

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("Login Successfull");
            dispatch(setToken(response.data.accessToken));

            localStorage.setItem("user", JSON.stringify({ ...response.data.user}));
            localStorage.setItem("token", response.data?.accessToken);

            navigate("/")
        } catch (error) {
            toast.error(error.response?.data?.message)
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        } 
    }
}
