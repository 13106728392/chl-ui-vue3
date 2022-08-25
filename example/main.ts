import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import '../src/theme/index.less' 
import router from './router'
import Chl from '../src/components'

// import Chl from '../../dist/chl.es.js'



const app = createApp(App)

// import store from './store'// 引入
    app.
    use(createPinia())
    .use(Chl)
    .use(router)
    .mount('#app') // 使用