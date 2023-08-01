import router from '@/router'
import { WHITE_PATH } from '@/router/routers'
//@ts-ignore
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })

import { useUserStore } from '@/store/user'

//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to, from, next) => {
    //to:你将要访问那个路由
    //from:你从来个路由而来
    //next:路由的放行函数
    nprogress.start()
    debugger;

    // 不需要登录的页面直接放行
    if(WHITE_PATH.includes(to.path)){
        next();
        return;
    }

    // 1. 获取仓库中的token
    const token = useUserStore().userInfo.token
    // 2. 获取仓库中的用户名
    const username = useUserStore().userInfo.username
    console.log(to.path)
    console.log(username)
    // 有token表示已登录
    if (token) {
        // 有username 放行
        if (username) {
            next();
        } else {
            // 获取用户登录信息
            await useUserStore().getUserInfo();
            //放行
            //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
            next({ ...to })
        }
    } else {
        // 跳转到登录界面
        //用户未登录判断
        if (to.path == '/login') {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }
})

//全局后置守卫
router.afterEach((to: any, from: any) => {
    nprogress.done()
})
