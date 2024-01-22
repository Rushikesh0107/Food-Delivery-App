import {toast} from 'react-hot-toast'
import { apiConnector } from '../apiConnector'
import { setCategories } from '../../Slices/categorySlice'
import { categoryEndpoints } from '../apis'
import {setItems} from '../../Slices/ItemsSlice'

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

        try {
            const response = await apiConnector(
                "GET",
                `${GET_CATEGORIES_BY_TITLE_API}/${title}`,
                null,
                {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            )
            const category = response.data.data.value;
            dispatch(setItems(category))
            toast.dismiss(toastId);
        } catch (error) {
            console.log("GET_CATEGORY_BY_TITLE_API ERROR", error);
            toast.dismiss(toastId);
        }
    }
}
