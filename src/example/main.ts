import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import '../theme/index.less'
import Chl from '../components'



const app = createApp(App)



// import store from './store'// 引入
    app.
    use(createPinia())
    .use(Chl)
    .mount('#app') // 使用