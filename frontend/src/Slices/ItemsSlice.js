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
        }
    }
});

export const {setItems, setLoading} = itemSlice.actions;

export default itemSlice.reducer;