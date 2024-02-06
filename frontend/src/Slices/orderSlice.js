import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orderedItems: [],
    orderDetails: {},
    adminOrders: [],
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
        },
        setAdminOrders: (state, action) => {
            state.adminOrders = action.payload;
        }
    }
})

export const {setOrderedItems, setOrderDetails, setAdminOrders} = orderSlice.actions;

export default orderSlice.reducer;