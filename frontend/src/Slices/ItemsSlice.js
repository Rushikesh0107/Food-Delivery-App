import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isLoading: false,
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload)
        }
    }
});

export const {setItems, removeItem, setLoading} = itemSlice.actions;

export default itemSlice.reducer;