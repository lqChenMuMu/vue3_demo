import { defineStore } from 'pinia'
import { UserInfo } from './types/types'
import { login, getInfo, logout } from '@/api/user/index'
import {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
// import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN,SET_USERNAME,GET_USERNAME } from '@/utils/token'
import { constantRoute, anyRoute } from '@/router/commonRouters'
import { adminRouters } from '@/router/adminRouters'
import { managerRouters } from '@/router/managerRouters'
import { unitRouters } from '@/router/unitRouters'
import router from '@/router'
import cloneDeep from 'lodash/cloneDeep'

function filterUserMenu(dynamicRouter: any, menu: any) {
  if (null == menu || undefined == menu || menu.length == 0) {
    return []
  }
  return dynamicRouter.filter((route: any) => {
    if (menu.includes(route.meta.menu)) {
      if (route.children && route.children.length > 1) {
        route.children = filterUserMenu(route.children, menu)
      }
      return true
    }
  })
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {
      token: '',
      roles: [],
      adminMenus: [],
      managerMenus: [],
      unitMenus: [],
      avatar: '',
      username: '',
      endpoint: '',
    },
  }),
  actions: {
    async userLogin(data: loginFormData) {
      let result: loginResponseData = await login(data)
      if (result.code === 0) {
        // SET_TOKEN(result.data as string)
        this.userInfo.token = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    async getUserInfo() {
      let result: userInfoResponseData = await getInfo()
      if (result.code === 0) {
        console.log('username')
        this.userInfo.username = result.data.username
        // SET_USERNAME(userInfo.username)
        this.userInfo.avatar = result.data.avatar
        this.userInfo.endpoint = result.data.endpoint

        // 设置用户可以操作的菜单权限
        const userAdminMenus = filterUserMenu(
          cloneDeep(adminRouters),
          result.data.adminMenus,
        )
        const userManagerMenus = filterUserMenu(
          cloneDeep(managerRouters),
          result.data.managerMenus,
        )
        const userUnitMenus = filterUserMenu(
          cloneDeep(unitRouters),
          result.data.unitMenus,
        )
        this.userInfo.adminMenus = [
          ...constantRoute,
          ...userAdminMenus,
          anyRoute,
        ]
        this.userInfo.managerMenus = [
          ...constantRoute,
          ...userManagerMenus,
          anyRoute,
        ]
        this.userInfo.unitMenus = [...constantRoute, ...userUnitMenus, anyRoute]
        // 手动加载动态路由和任意路由
        ;[
          ...userAdminMenus,
          ...userManagerMenus,
          ...userUnitMenus,
          anyRoute,
        ].forEach((route: any) => {
          debugger;
          router.addRoute(route)
        })
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    async userLogout() {
      //退出登录请求
      const result: any = await logout()
      if (result.code == 0) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.userInfo.token = ''
        this.userInfo.username = ''
        this.userInfo.avatar = ''
        this.userInfo.adminMenus = []
        this.userInfo.managerMenus = []
        this.userInfo.unitMenus = []
        this.userInfo.endpoint = ''
        // REMOVE_TOKEN()
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
