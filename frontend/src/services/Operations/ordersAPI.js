import { apiConnector } from "../apiConnector";
import { orderEndpoints } from "../apis";
import { setOrderedItems } from "../../Slices/orderSlice";
import { setOrderDetails } from "../../Slices/orderSlice";
import {toast } from 'react-hot-toast'
import { setAdminOrders } from "../../Slices/orderSlice";

const {
    FETCH_ORDER_API,
    FETCH_ALL_ORDERS_API,
} = orderEndpoints

//=======================fetch-orders-for-user=======================

export const fetchOrders = () => {
    return async (dispatch) => {
        try {
            const response = await apiConnector(
                "GET",
                FETCH_ORDER_API,
                null,
                {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            )

            if(response?.data?.status > 400){
                throw new Error("Something went wrong")
            }

            //console.log(response.data.data[0].orderItems);


            dispatch(setOrderedItems(response.data.data[0].orderItems))
            dispatch(setOrderDetails(response.data.data))


        } catch (error){
            console.log("ERROR WHILE FETCHING ERROR",error)
        }
    }
}

//=======================fetch-all-orders============================

export const fetchAllOrders = () => {
    return async (dispatch) => {

        const toastId = toast.loading("Fetching all orders")

        try{
            const response  = await apiConnector(
                "GET",
                FETCH_ALL_ORDERS_API,
                null,
                {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            )

            if(response.data.status === 404){
                toast.dismiss(toastId)
                return toast.error("No orders found")
            }

            if(response.data.status > 400){
                toast.dismiss(toastId)
                throw new Error("Something went wrong")
            }

            //console.log(response.data.data);

            dispatch(setAdminOrders(response.data.data));

            toast.dismiss(toastId)
            //toast.success("Orders fetched successfully")
        } catch (error) {
            console.log("ERROR WHILE FETCHING ALL ORDERS",error)
            toast.dismiss(toastId)
            toast.error("Something went wrong while fetching all orders")
        }
    }
}
