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
    ADD_TO_CART_API: BASE_URL + '/cart/add-to-cart',
    REMOVE_FROM_CART_API: BASE_URL + '/cart/remove-from-cart',
}

export const adminEndpoints = {
    ADMIN_LOGIN_API: BASE_URL + '/admin-login',
    
    //Food Endpoints
    
    ADD_FOOD_API: BASE_URL + '/food/add-food',
    DELETE_FOOD_API: BASE_URL + '/food/delete-food',

    //Category Endpoints

    ADD_CATEGORY_API: BASE_URL + '/category/create-category',
}

export const userEndpoints = {
    UPDATE_USER_AVATAR_API: BASE_URL + '/users/update-avatar',
    UPDATE_USER_INFO_API: BASE_URL + '/users/update-details',
    UPDATE_USER_ADDRESS_API: BASE_URL + '/address/update-address',
}

export const paymentEndpoints = {
    CHECKOUT_API: BASE_URL + '/payment/checkout',
    GET_API_KEY: BASE_URL + '/payment/get-key',
    PAYMNET_VERIFICATION_API: BASE_URL + '/payment/verify-payment',
}

export const orderEndpoints = {
    FETCH_ORDER_API: BASE_URL + '/orders/fetch-order',
}

