import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    address: null,
};

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload;
        }
    }
});

export const {setAddress} = addressSlice.actions;

export const selectAddress = (state) => state.address.address;

export default addressSlice.reducer;

