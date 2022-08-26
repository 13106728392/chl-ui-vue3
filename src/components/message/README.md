---
title: Message 消息
tag: Feedback
---

# Message 消息
> 消息通知

## 演示
> 最基本的提示，默认在 `3` 秒后消失。
 `message` 会被挂载在 `vue` 全局属性中, 当然也可以引入 `chl-ui` 直接使用
```html
<template>
   <c-button type='primary' @click="handerClick">显示普通提示</c-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $message(
          {
            content: '显示信息提示',
            type: 'info',
          }
        )
      }
      return {
        handerClick
      }
    }
  }
</script>
```



## 提示类型
> 调用 `message` 下的 `info` `error` `success` `warning`来选择合适的场景。
 
```html
<template>
   <c-button type="info" plain @click="open1">显示信息提示</c-button>
   <c-button type="danger" plain @click="open2">显示错误提示</c-button>
   <c-button type="success" plain @click="open3">显示成功提示</c-button>
   <c-button type="warning" plain @click="open4">显示警告提示</c-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const open1 = () => {
        $message(
            {
              content: '显示信息提示',
              type: 'info',
            }
          )
      }
      const open2 = () => {
          $message(
            {
              content: '显示错误提示',
              type: 'error',
            }
          )
      }
      const open3 = () => {
          $message(
            {
              content: '显示成功提示',
              type: 'success',
            }
          )
      }
      const open4 = () => {
          $message(
            {
              content: '显示警告提示',
              type: 'warning',
            }
          )
      }
      return {
        open1,
        open2,
        open3,
        open4
      }
    }
  }
</script>
```



## 等待中

 关闭时间为 `0` 的时候需要手动关闭
```html
<template>
  <c-button type="primary" plain @click="info">3秒后自动关闭</c-button>
</template>
<script>
import {getCurrentInstance} from 'vue'
export default {
  setup(){
    const instance = getCurrentInstance()
    const {$message} = instance.appContext.config.globalProperties

    const info = () => {
      $message(
        {
          content: 'message 消息',
          type: 'info',
          onClose: () => {
            console.log(6777)
          },
          duration: 3000
        })
            }
    return {
      info
    }
  }
}
</script>
```

