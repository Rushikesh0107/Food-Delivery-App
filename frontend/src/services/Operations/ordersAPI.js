import { apiConnector } from "../apiConnector";
import { orderEndpoints } from "../apis";
import { setOrderedItems } from "../../Slices/orderSlice";
import { setOrderDetails } from "../../Slices/orderSlice";

const {
    FETCH_ORDER_API
} = orderEndpoints


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