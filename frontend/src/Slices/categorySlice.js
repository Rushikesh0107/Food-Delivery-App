import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    categoryId: "",
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setCategoryID: (state, action) => {
            state.categoryId = action.payload;
        }
    }
});

export const {setCategories, setCategoryID} = categorySlice.actions;

export default categorySlice.reducer;

