import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import '@/theme/index.less' 
import './style/docs.less'
import './style/hljs.less' // 代码高亮代码
// import demoblock from './views/demoblock.vue'
import hljs from "highlight.js";
import router from './router'
import Chl from '@/components'
// import store from './store'// 引入
// import Chl from '../../dist/chl.es.js'
const app = createApp(App)


    app.
    use(createPinia())
    .use(Chl)
    .use(router)
    // .component('demoblock', demoblock
    .mount('#app') // 使用

    
// 代码高亮
app.directive("highlight", function (el) {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    })
  })