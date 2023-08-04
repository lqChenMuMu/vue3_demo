import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { UserInfo } from './types/types'
import { login, getInfo, logout } from '@/api/user/index'
import {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute, anyRoute } from '@/router/commonRouters'
import { adminRouters } from '@/router/adminRouters'
import { managerRouters } from '@/router/managerRouters'
import router from '@/router'
import cloneDeep from 'lodash/cloneDeep'

function filterUserMenu(dynamicRouter: any, menu: any) {
  if (null == menu || undefined == menu || menu.length == 0) {
    return [];
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

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive<UserInfo>({
    token: GET_TOKEN(),
    roles: [],
    adminMenus: [],
    managerMenus: [],
    unitMenus: [],
    avatar: '',
    username: '',
    endpoint: '',
  })

  let userLogin = async (data: loginFormData) => {
    let result: loginResponseData = await login(data)
    if (result.code === 0) {
      SET_TOKEN(result.data as string)
      return 'ok'
    } else {
      return Promise.reject(new Error(result.msg))
    }
  }

  let getUserInfo = async () => {
    let result: userInfoResponseData = await getInfo()
    if (result.code === 0) {
      userInfo.username = result.data.username
      userInfo.avatar = result.data.avatar
      userInfo.endpoint = result.data.endpoint

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
        cloneDeep(managerRouters),
        result.data.unitMenus,
      )
      debugger;
      userInfo.adminMenus = [...constantRoute, ...userAdminMenus, anyRoute]
      userInfo.managerMenus = [...constantRoute, ...userManagerMenus, anyRoute]
      userInfo.unitMenus = [...constantRoute, ...userUnitMenus, anyRoute]
        // 手动加载动态路由和任意路由
        ;[...userAdminMenus, ...userManagerMenus, ...userUnitMenus, anyRoute].forEach((route: any) => {
          router.addRoute(route)
        })
      return 'ok'
    } else {
      return Promise.reject(new Error(result.msg))
    }
  }

  let userLogout = async () => {  //退出登录请求
    const result: any = await logout()
    if (result.code == 0) {
      //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
      userInfo.token = ''
      userInfo.username = ''
      userInfo.avatar = ''
      userInfo.adminMenus = [],
      userInfo.managerMenus = [],
      userInfo.unitMenus = [],
      userInfo.endpoint = '',
      REMOVE_TOKEN()
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  }

  return { userInfo, userLogin, userLogout, getUserInfo }
})
