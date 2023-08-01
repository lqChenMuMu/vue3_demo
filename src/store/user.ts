import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { UserInfo } from './types/types'
import { login, getInfo } from '@/api/user/index'
import {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute, dynamicRoute, anyRoute } from '@/router/routers'
import router from '@/router'
import cloneDeep from 'lodash/cloneDeep'

function filterUserMenu(dynamicRouter: any, menu: any) {
  return dynamicRouter.filter((route: any) => {
    debugger
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
    menus: [],
    avatar: '',
    username: '',
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
      // 设置用户可以操作的菜单权限
      debugger
      const userDynamicRoutes = filterUserMenu(
        cloneDeep(dynamicRoute),
        result.data.menus,
      )
      const userRoutes = [...constantRoute, ...userDynamicRoutes, anyRoute]
      userInfo.menus = userRoutes
      // 手动加载动态路由和任意路由
      ;[...userDynamicRoutes, anyRoute].forEach((route: any) => {
        router.addRoute(route)
      })
      return 'ok'
    } else {
      return Promise.reject(new Error(result.msg))
    }
  }

  let userLogout = () => {}

  return { userInfo, userLogin, userLogout, getUserInfo }
})
