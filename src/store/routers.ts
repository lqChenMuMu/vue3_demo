import { defineStore } from 'pinia'
import { useUserStore } from '@/store/user'
import router from '@/router'
import { anyRoute } from '@/router/commonRouters'
import { adminRouters } from '@/router/adminRouters'
import { managerRouters } from '@/router/managerRouters'
import { unitRouters } from '@/router/unitRouters'
//@ts-ignore
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

export const useRoutersStore = defineStore({
  id: 'routers_store',
  actions: {
    hasRouters() {
      let hasRouters = router.hasRoute('adminHome') || router.hasRoute('managerHome') || router.hasRoute('unitHome');
      return useUserStore().userInfo.hasRouter && hasRouters
    },

    initRouters() {
       // 设置用户可以操作的菜单权限
       const userAdminMenus = filterUserMenu(
        cloneDeep(adminRouters),
        useUserStore().userInfo.adminMenus,
      )
      useUserStore().userInfo.adminRouters = userAdminMenus;
      const userManagerMenus = filterUserMenu(
        cloneDeep(managerRouters),
        useUserStore().userInfo.managerMenus,
      )
      useUserStore().userInfo.managerRouters = userManagerMenus;
      const userUnitMenus = filterUserMenu(
        cloneDeep(unitRouters),
        useUserStore().userInfo.unitMenus,
      )
      useUserStore().userInfo.unitRouters = userUnitMenus;
      let allRouters = [
        ...userAdminMenus,
        ...userManagerMenus,
        ...userUnitMenus,
        anyRoute
      ]
      allRouters.forEach((route: any) => {
        router.addRoute(route)
      })
      // 路由加载完成设置
      console.log('路由加载完成')
      useUserStore().userInfo.hasRouter = true
    }
  },
});