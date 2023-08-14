import request from '@/utils/request';

import { loginFormData, loginResponseData, userInfoResponseData, validImgRespData } from './type'

enum API {
    LOGIN_URL = '/auth/login',
    GET_INFO_URL = '/auth/info',
    LOGOUT_URL = '/auth/logout',
    VALID_IMG = '/auth/getPicCaptcha'
}


export const login = (data: loginFormData) =>
    request.post<any, loginResponseData>(API.LOGIN_URL, data)


export const getInfo = () => {
    return request.get<any, userInfoResponseData>(API.GET_INFO_URL)
}

export const logout = () => {
    return request.post<any, any>(API.LOGOUT_URL)
}

export const validImg = () => {
    return request.get<any, validImgRespData>(API.VALID_IMG)
}