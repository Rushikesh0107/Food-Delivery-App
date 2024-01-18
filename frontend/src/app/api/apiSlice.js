import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/v1"
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: data => ({
                url: "/users/register",
                method: "POST",
                body: data
            })
        })
    })
})

export const {useSignupMutation} = apiSlice;

export default apiSlice.reducer;

