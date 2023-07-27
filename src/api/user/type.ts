export interface loginFormData {
    username: string;
    password: string;
}

export interface ResponseData {
    code: number;
    message: string;
    data: any;
}

export interface loginResponseData extends ResponseData {
    data: string;
}

export interface userInfoResponseData extends ResponseData {
    data: {
        name: string
        rules: string[]
        avatar: string
        routes: string[]
        buttons: string[]
    }
}