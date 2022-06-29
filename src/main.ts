import { createApp } from 'vue'
import App from './example/App.vue'
import {createPinia} from 'pinia'
import './theme/index.less'
import message from './components/message'

const app = createApp(App)
// 挂载全局访问属方法获取
app.config.globalProperties.$message = message



// import store from './store'// 引入
    app.
    use(createPinia())
    .mount('#app') // 使用