export interface loginFormData {
    username: string;
    password: string;
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
        menus: string[]
        buttons: string[]
    }
}