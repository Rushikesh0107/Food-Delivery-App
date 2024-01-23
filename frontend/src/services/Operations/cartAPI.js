import {toast } from 'react-hot-toast'

import { apiConnector } from '../apiConnector'
import { addToCart, setNumberOfItems } from '../../Slices/cartSlice'

import { cartEndpoints } from '../apis'
import { setLoading } from '../../Slices/ItemsSlice';

const {
    GET_CART_API,
    ADD_TO_CART_API,
    REMOVE_FROM_CART_API,
} = cartEndpoints;

//====================Get Cart====================

export const getCart = () => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading Cart...");

        try {
            const response = await apiConnector(
                "GET",
                GET_CART_API,
                null,
                {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            )
            const cart = response.data.data;
            dispatch(addToCart(cart));
            dispatch(setNumberOfItems(cart.length));
            toast.dismiss(toastId);
        } catch (error) {
            console.log("GET_CART_API ERROR", error);
            toast.dismiss(toastId);
            dispatch(setLoading(false));
        }
        dispatch(setLoading(false));
    }
}

//====================Add To Cart====================

export const addToCartAPI = (productId, quantity) => {
    return async (dispatch) => {
        const toastId = toast.loading("Adding to Cart...");
        const data = {
            productId,
            quantity,
        }

        try {
            const response = await apiConnector(
                "POST",
                ADD_TO_CART_API,
                data,
                {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            )
            const cart = response.data.data;
            dispatch(addToCart(cart));
            toast.dismiss(toastId);
        } catch (error) {
            console.log("ADD_TO_CART_API ERROR", error);
            toast.dismiss(toastId);
        }
    }
}