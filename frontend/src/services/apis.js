const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

//console.log(BASE_URL);

export const authEndpoints  = {
    LOGIN_API: BASE_URL + '/users/login',
    REGISTER_API: BASE_URL + '/users/register',
}