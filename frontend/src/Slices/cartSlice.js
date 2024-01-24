import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-hot-toast'

const initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    total: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            product.qauntity = 1;
            console.log(product);
            const existingProduct = state.cart.find(item => item?._id === product._id);

            if(existingProduct) {
                toast.error("Product already exists in cart");
                return
            }

            state.cart.push(product)
            state.totalItems++;
            //state.total += product.price

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            localStorage.setItem("total", JSON.stringify(state.total));

            toast.success("Product added to cart");
        },

        resetCart: (state) => {
            state.cart = [];
            state.totalItems = 0;
            state.total = 0;

            localStorage.removeItem("cart");
            localStorage.removeItem("totalItems");
            localStorage.removeItem("total");
        }
    }
});

export const {addToCart, setNumberOfItems, setProductsInCart} = cartSlice.actions;

export default cartSlice.reducer;