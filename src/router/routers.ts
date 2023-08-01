export const constantRoute = [
  {
    // 登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    // 赛事列表
    path: '/',
    component: () => import('@/views/gameShow/index.vue'),
    name: 'gameShow',
    meta: {
      title: '赛事列表',
      hidden: true,
    },
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
]

export const dynamicRoute = [
  {
    // 后台首页
    path: '/home',
    component: () => import('@/layout/admin/index.vue'),
    name: 'adminHome',
    meta: {
      title: '',
      icon: '',
      hidden: false,
      menu: 'home',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/admin/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          hidden: false,
          menu: 'home',
        },
      }
    ]
  },
  {
    // 赛事管理
    path: '/admin/game',
    component: () => import('@/layout/admin/index.vue'),
    name: 'adminGameManage',
    meta: {
      hidden: false,
      menu: 'game',
    },
    children: [
      {
        path: '/game',
        component: () => import('@/views/admin/game/index.vue'),
        meta: {
          title: '赛事管理',
          icon: 'Suitcase',
          hidden: false,
          menu: 'game',
        },
      }
    ]
  },
  {
    // 报名设置
    path: '/admin/setting',
    component: () => import('@/layout/admin/index.vue'),
    name: 'adminSetting',
    meta: {
      title: '报名设置',
      icon: 'Cpu',
      hidden:false,
      menu: 'setting',
    },
    children: [
    {
      path: '/admin/setting/optional',
      component: () => import('@/views/admin/setting/optional/index.vue'),
      name: 'adminSettingOptional',
      meta:{
        title: '报名必填',
        hidden: false,
        menu: 'optional',
        icon: 'Money'
      }
    },
    {
      path: '/admin/setting/rules',
      component: () => import('@/views/admin/setting/rules/index.vue'),
      name: 'adminSettingRules',
      meta:{
        title: '报名规则',
        hidden: false,
        menu: 'rules',
        icon: 'Printer'
      }
    }
    ]

  }
]

export const anyRoute = {
  // 任意路由
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
  },
}

export const WHITE_PATH = ['/login', '/404', '/']
