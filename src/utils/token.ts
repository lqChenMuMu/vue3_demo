export const SET_TOKEN = (token: string) => {
    localStorage.setItem('token', token);
}

export const GET_TOKEN = () => {
    return localStorage.getItem('token');
}

//本地存储删除数据方法
export const REMOVE_TOKEN = () => {
    localStorage.removeItem('TOKEN')
}

export const SET_USERNAME = (token: string) => {
    localStorage.setItem('username', token);
}

export const GET_USERNAME = () => {
    return localStorage.getItem('username');
}