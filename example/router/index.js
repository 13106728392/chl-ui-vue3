import { createRouter, createWebHashHistory } from 'vue-router'
import { data } from './data.json'
import Home from '../views/Home.vue'
// vite glob导入解决
const modules = import.meta.glob('@/components/*/*.md')


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

data.forEach((item) => {
  const title = item.title
    .split(' ')
    .reverse()
    .join(' ')

  routes.push({
    path: item.routePath,
    name: item.componentName,
    meta: {
      title,
    },
    component:modules['/src/components/'+ item.componentPath]
  })
})

console.log(routes,'ssss',modules)


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  
  document.title = title
})

export default router
