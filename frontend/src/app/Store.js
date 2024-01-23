import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slices/authSlice.js';
import profileReducer from '../Slices/profileSlice.js';
import addressReducer from '../Slices/addressSlice.js';
import categoryReducer from '../Slices/categorySlice.js';
import itemsReducer from '../Slices/ItemsSlice.js'
import cartReducer from '../Slices/cartSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        addresss: addressReducer,
        category: categoryReducer,
        item: itemsReducer,
        cart: cartReducer,
    },
})