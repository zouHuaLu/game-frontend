import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import  router from './router'
import '../public/reset.css'

let app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
  }).use(router)
app.mount('#app')
