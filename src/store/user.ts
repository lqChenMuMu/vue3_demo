import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { UserInfo } from './types/types'
import { login } from '@/api/user/index'
import { loginFormData, loginResponseData } from '@/api/user/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'


export const useUserStore = defineStore('user', () => {
    const userInfo = reactive<UserInfo>({
        token: GET_TOKEN(),
        roles: [],
        menus: []
    })

    let userLogin = async (data: loginFormData) => {
        let result: loginResponseData = await login(data);
        if (result.code === 0) {
            SET_TOKEN(result.data as string);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.msg));
        }
    }

    return { userInfo, userLogin }
})