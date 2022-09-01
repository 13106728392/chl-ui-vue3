<div align="center">
</div>

## 介绍
`chl-ui-vue3`是vue3组件库,适合用于vue3组件学习。

文档地址：https://13106728392.github.io/chl-ui-vue3/#/


## 安装
```
npm install chl-ui-vue3
// or
yarn add chl-ui-vue3
```


## 快速上手
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 引入Chlui
import Chlui from 'chl-ui-vue3'
import 'chl-ui-vue3/dist/style.css'

createApp(App)
.use(router)
.use(Chlui) // 注册到Vue中
.mount('#app')
```
## 注意
```
尽量使用vue3架构项目运行
```


## 开发
下载项目进行依赖安装 `npm install` or `yarn`

```
# 运行
yarn serve

# 打包文档
yarn build

# 打包组件
yarn lib
```

## 辅助工具的变动
```
## 浏览器支持
仅支持现代浏览器


## 说明文档
    编写ing...
