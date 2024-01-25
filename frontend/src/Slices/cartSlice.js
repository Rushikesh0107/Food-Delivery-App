import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-hot-toast'

const initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    total: localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            //console.log(product);
            const existingProduct = state.cart.find(item => item?._id === product._id);

            if(existingProduct) {
                toast.error("Product already exists in cart");
                return
            }

            state.cart.push(product)
            state.totalItems++;
            state.total += product.price

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            localStorage.setItem("total", JSON.stringify(state.total));

            toast.success("Product added to cart");
        },

        removeFromCart: (state, action) => {
            const product  = action.payload;

            const existingProduct = state.cart.find(item => item?._id === product._id);

            if(existingProduct) {
                state.cart = state.cart.filter(item => item?._id !== product._id);
                state.totalItems--;
                state.total -= product.price * existingProduct.quantity;

                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
                localStorage.setItem("total", JSON.stringify(state.total));

                // window.location.reload();

            } else {
                toast.error("Product doesn't exist in cart");
            }
            toast.success("Product removed from cart");
        },

        increaseQuantity: (state, action) => {
            const product = action.payload;

            const existingProduct = state.cart.find(item => item?._id === product._id);

            if(!existingProduct) {
                toast.error("Product doesn't exist in cart");
                return
            }

            if(existingProduct.quantity === 5) {
                toast.error("Product quantity cannot be more than 5");
                return
            }

            if(existingProduct) {
                existingProduct.quantity++;
                state.total += product.price;

                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));

                // window.location.reload();
            }
        },

        decreaseQuantity: (state, action) => {
            const product = action.payload;

            const existingProduct = state.cart.find(item => item?._id === product._id);

            
            
            if(!existingProduct) {
                toast.error("Product doesn't exist in cart");
                return
            }

            if(existingProduct.quantity === 1) {
                toast.error("Product quantity cannot be less than 1");
                return
            }

            if(existingProduct) {
                existingProduct.quantity--;
                state.total -= product.price;

                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));

                //window.location.reload();
            }
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

export const {addToCart, setNumberOfItems, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;