import { BaseResponse } from '@/api/common'

export interface loginFormData {
    account: string;
    password: string;
    validCode: string,
    validCodeReqNo: string
}

export interface ResponseData {
    code: number;
    msg: string;
    data: any;
}

export interface loginResponseData extends ResponseData {
    data: string;
}

export interface userInfoResponseData extends ResponseData {
    data: {
        username: string
        rules: string[]
        avatar: string
        adminMenus: string[]
        managerMenus: string[]
        unitMenus: string[]
        buttons: string[],
        endpoint: number
    }
}

export interface validImgRespData extends BaseResponse {
    data: {
        validCodeBase64: string,
        validCodeReqNo: string
    }
}