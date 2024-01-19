import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    signupData: null,
    loading: false,
    token: localStorage.getItem('token') || null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.signupData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    }
})

export const {setsignupData,setLoading, setToken} = authSlice.actions;

export default authSlice.reducer;