import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    isLoading: false,
    numberOfItems: 0,
    productsInCart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cart.find((x) => x.product === item.product);
            if (existItem) {
                state.cart = state.cart.map((x) =>
                    x.product === existItem.product ? (item) : (x)
                );
            } else {
                state.cart = [...state.cart, item];
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((x) => x.product !== action.payload);
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setNumberOfItems: (state, action) => {
            state.numberOfItems = action.payload;
        },
        setProductsInCart: (state, action) => {
            state.productsInCart.push(action.payload)
        },
    },
});

export const {addToCart, removeFromCart, setLoading, setNumberOfItems} = cartSlice.actions;

export default cartSlice.reducer;