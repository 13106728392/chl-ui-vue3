import { defineStore } from 'pinia'

// 1.定义导出容器
// 参数1：容器ID，未来Pinia会把所有的容器挂载到根容器
// 参数2：选项对象
export const useMainStore = defineStore('main', {
  // 用来储存全局状态
  // 1.必须是函数（为了在服务端渲染的时候避免交叉请求导致污染）
  // 2.必须是箭头函数（更方便TS的类型推导）
  state: () => {
    return {
      count: 100,
      sum: 200,
    }
  },
})