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

export const WHITE_PATH = ['/login', '/404', '/']