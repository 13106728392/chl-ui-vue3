import { createApp } from 'vue'
import App from './example/App.vue'
import {createPinia} from 'pinia'
import './theme/index.less'
// import store from './store'// 引入
createApp(App).
    use(createPinia())
    .mount('#app') // 使用