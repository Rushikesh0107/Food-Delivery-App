import {toast} from 'react-hot-toast'
import { apiConnector } from '../apiConnector'
import { setCategories } from '../../Slices/categorySlice'
import { categoryEndpoints } from '../apis'


const {
    GET_CATEGORIES_API,
    GET_CATEGORIES_BY_TITLE_API
} = categoryEndpoints;


//====================Get Categories====================

export const getCategories = () => {
    return async (dispatch) => {

        // console.log(GET_CATEGORIES_API);
         
        try{
            const response = await apiConnector(
                "GET",
                GET_CATEGORIES_API,
                null,
                {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            )

            const categories = response.data.data;
            dispatch(setCategories(categories));
        } catch (error){
            console.log("GET_CATEGORIES_API ERROR", error);
        }
    }
}

//====================Get-Category-By-Id====================

export const getCategoryByTitle = (title) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading Category...");

        console.log(GET_CATEGORIES_BY_TITLE_API);
        console.log(title);

        toast.dismiss(toastId);
    }
}
