import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const {setItems, setItemForParticularCategory} = itemSlice.actions;

export default itemSlice.reducer;