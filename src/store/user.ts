import { defineStore } from 'pinia'
import { UserInfo } from './types/types'
import { login, getInfo, logout } from '@/api/user/index'
import router from '@/router'
import {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type'

interface UserStoreState {
  userInfo: UserInfo
}


export const useUserStore = defineStore({
  id: 'user',
  state: (): UserStoreState => {
    return {
      userInfo: {
        token: '',
        roles: [],
        adminMenus: [],
        managerMenus: [],
        unitMenus: [],
        unitRouters: [],
        adminRouters: [],
        managerRouters: [],
        hasRouter: false,
        avatar: '',
        username: '',
        endpoint: '',
      }
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      let result: loginResponseData = await login(data)
      if (result.code === 200) {
        this.userInfoReset();
        this.userInfo.token = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    userInfoReset() {
      this.userInfo.token = ''
      this.userInfo.username = ''
      this.userInfo.avatar = ''
      this.userInfo.adminMenus = []
      this.userInfo.managerMenus = []
      this.userInfo.unitMenus = []
      this.userInfo.adminRouters = []
      this.userInfo.managerRouters = []
      this.userInfo.unitRouters = []
      this.userInfo.endpoint = ''
    },

    async getUserInfo() {
      let result: userInfoResponseData = await getInfo()
      if (result.code === 0) {
        debugger;
        this.userInfo.username = result.data.username
        this.userInfo.avatar = result.data.avatar
        this.userInfo.endpoint = result.data.endpoint
        this.userInfo.adminMenus = result.data.adminMenus
        this.userInfo.managerMenus = result.data.managerMenus
        this.userInfo.unitMenus = result.data.unitMenus
        // 登录之后路由需要重新加载
        this.userInfo.hasRouter = false
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    async userLogout() {
      //退出登录请求
      const result: any = await logout()
      if (result.code == 0) {
        this.userInfo.token = ''
        this.userInfo.username = ''
        this.userInfo.avatar = ''
        this.userInfo.adminMenus = []
        this.userInfo.managerMenus = []
        this.userInfo.unitMenus = []
        this.userInfo.endpoint = ''
        location.reload()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
      }
    ]
  },
})
