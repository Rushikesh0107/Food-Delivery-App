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
    GET_CATEGORIES_BY_TITLE_API: BASE_URL + `/category/get-category-by-title`,
}

export const foodEndpoints = {
    GET_ALL_FOODS_API: BASE_URL + '/food/get-all-foods',
    GET_FOOD_BY_CATEGORY_API: BASE_URL + `/food/get-foods-by-category`,
    GET_FOOD_BY_ID_API: BASE_URL + `/food/get-food-by-id`,
}

export const cartEndpoints = {
    GET_CART_API: BASE_URL + '/cart/fetch-user-cart',
    GET_FOOD_IN_CART_BY_ID_API: BASE_URL + `/food/get-food-by-id`,
    ADD_TO_CART_API: BASE_URL + '/cart/add-to-cart',
    REMOVE_FROM_CART_API: BASE_URL + '/cart/remove-from-cart',
}