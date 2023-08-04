export const managerRouters = [
    {
        // 后台首页
        name: 'managerHome',
        path: '/manager/home',
        component: () => import('@/layout/manager/index.vue'),
        meta: {
            title: '首页',
            icon: 'HomeFilled',
            hidden: false,
            menu: 'manager_home',
        },
        children: [
            {
                name: 'managerHome',
                path: '/manager/home',
                component: () => import('@/views/manager/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'HomeFilled',
                    hidden: false,
                    menu: 'manager_home',
                },
            }
        ]
    },
    {
        // 参赛单位管理
        path: '/manager/unit',
        component: () => import('@/layout/manager/index.vue'),
        meta: {
            hidden: false,
            menu: 'manager_unit',
        },
        children: [
            {
                path: '/manager/unit',
                component: () => import('@/views/manager/unit/index.vue'),
                name: 'managerUnitManage',
                meta: {
                    title: '参赛单位管理',
                    icon: 'Suitcase',
                    hidden: false,
                    menu: 'manager_unit',
                },
            }
        ]
    }
]

