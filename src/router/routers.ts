export const constantRoute = [
  {
    // 登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    // 赛事列表
    path: '/',
    component: () => import('@/views/gameShow/index.vue'),
    name: 'gameShow',
  },
  {
    // 后台首页
    path: '/home',
    component: () => import('@/layout/admin/index.vue'),
    name: 'adminHome'
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
]

export const dynamicRoute = [
  {
    // 赛事管理
    path: '/admin/game',
    component: () => import('@/layout/admin/index.vue'),
    name: 'adminGameManage',
  }
]

export const anyRoute = {
  // 任意路由
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
}

export const WHITE_PATH = ['/login', '/404', '/'];
