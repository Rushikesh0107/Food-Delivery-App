import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slices/authSlice.js';
import profileReducer from '../Slices/profileSlice.js';
import addressReducer from '../Slices/addressSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        addresss: addressReducer,
    },
})