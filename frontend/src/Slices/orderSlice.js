import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orderedItems: [],
    orderDetails: {},
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderedItems: (state, action) => {
            state.orderedItems = action.payload;
        },
        setOrderDetails: (state, action) => {
            state.orderDetails = action.payload;
        }
    }
})

export const {setOrderedItems, setOrderDetails} = orderSlice.actions;

export default orderSlice.reducer;