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
    }
]

export const anyRoute = {
    // 任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
}