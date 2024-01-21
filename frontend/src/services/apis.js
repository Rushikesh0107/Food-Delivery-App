const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

//console.log(BASE_URL);

export const authEndpoints  = {
    LOGIN_API: BASE_URL + '/users/login',
    REGISTER_API: BASE_URL + '/users/register',
    LOGOUT_API: BASE_URL + '/users/logout',
}

export const addressEndpoints = {
    ADD_ADDRESS_API: BASE_URL + '/address/add-address',
}

export const categoryEndpoints = {
    GET_CATEGORIES_API: BASE_URL + '/category/get-all-categories',
}