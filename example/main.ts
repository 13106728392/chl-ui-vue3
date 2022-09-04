import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import '@/theme/index.less' 
import './style/docs.less'
import './style/hljs.less' // 代码高亮代码

import router from './router'
import Chl from '@/components'

// import Chl from '../../dist/chl.es.js'



const app = createApp(App)

// import store from './store'// 引入
    app.
    use(createPinia())
    .use(Chl)
    .use(router)
    .mount('#app') // 使用