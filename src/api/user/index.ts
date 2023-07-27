import request from '@/utils/request';

import { loginFormData, loginResponseData, userInfoResponseData } from './type'

enum API {
    LOGIN_URL = '/api/user/login',
    GET_INFO_URL = '/api/user/info',
    LOGOUT_URL = '/api/user/logout'
}


export const login = (data: loginFormData) => {
    request.post<any, loginResponseData>(API.LOGIN_URL, data)
}

export const getInfo = () => {
    request.get<any, userInfoResponseData>(API.GET_INFO_URL)
}

export const logout = () => {
    request.post<any,any>(API.LOGOUT_URL)
}