import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    signupData: null,
    accessToken: localStorage.getItem("accessToken") || null, 
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSignupData(state, action){
            state.signupData = action.payload
        },
        setToken(state, action){
            state.accessToken = action.payload
        },
        logout(state, action){
            state.accessToken = null
            localStorage.removeItem("accessToken")
            state.signupData = null
        }
    }
})

export const {setSignupData, setToken} = authSlice.actions

export default authSlice.reducer