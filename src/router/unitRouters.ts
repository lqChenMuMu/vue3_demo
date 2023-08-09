export const unitRouters = [
    {
        // 后台首页
        name: 'unitHome',
        path: '/unit/home',
        component: () => import('@/layout/unit/index.vue'),
        meta: {
            title: '首页',
            icon: 'HomeFilled',
            hidden: false,
            menu: 'unit_home',
        },
        children: [
            {
                name: 'unitHome',
                path: '/unit/home',
                component: () => import('@/views/unit/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'HomeFilled',
                    hidden: false,
                    menu: 'unit_home',
                },
            }
        ]
    },
    {
        // 参赛单位管理
        path: '/unit/personEvent',
        component: () => import('@/layout/unit/index.vue'),
        meta: {
            hidden: false,
            menu: 'unit_person_event',
        },
        children: [
            {
                path: '/unit/personEvent',
                component: () => import('@/views/unit/personEvent/index.vue'),
                name: 'managerUnitManage',
                meta: {
                    title: '个人项目',
                    icon: 'Suitcase',
                    hidden: false,
                    menu: 'unit_person_event',
                },
            }
        ]
    }
]

