import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import gloablComponent from './components/index'
//引入模板的全局的样式
import '@/styles/index.scss'
import router from './router'


const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(gloablComponent)
app.use(router)
app.mount('#app')
