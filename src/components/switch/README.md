---
title: Switch 开关
tag: Data Entry
---

# Switch 开关
> 开关选择器

## 演示
> 切换状态时，触发事件
 当状态改变时，会触发 `change` 事件
```html
<template>
   <c-switch v-model="state1"></c-switch>
   <c-switch v-model="state2" @change="change"></c-switch> 
</template>

<script>
import {ref, getCurrentInstance} from 'vue'
export default {
  setup(){
    const instance = getCurrentInstance()
    const {$message} = instance.appContext.config.globalProperties

    const state1 = ref(true)
    const state2 = ref(false)

    const change = (status) => {
      $message.success('switch2状态：' + status)
    }

    return {
      state1,
      state2,
      change
    }
  }
}
</script>
```



## 文字和图标
> 自定义内容, 建议文字长度保持统一
 使用 `open` 和 `close` 插槽
```html
<template>
  <c-switch v-model="state1">
    <template #open>开</template>
    <template #close>关</template>
  </c-switch>

  <c-switch v-model="state2">
    <template #open>打开</template>
    <template #close>关闭</template>
  </c-switch>

  <c-switch v-model="state3">
    <template #open>
      <x-icon type="x-icon-check"/>
    </template>
    <template #close>
      <x-icon type="x-icon-x" />
    </template>
  </c-switch>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const state1 = ref(false)
    const state2 = ref(true)
    const state3 = ref(true)

    return {
      state1,
      state2,
      state3
    }
  }
}
</script>
```


## 不同色系
> 提供了 `primary` `info` `danger` `success` `warning` 五种颜色， 默认`primary`

```html
<template>
  <c-switch v-model="state1" type="primary"></c-switch>
  <c-switch v-model="state2" type="info"></c-switch>
  <c-switch v-model="state3" type="danger"></c-switch>
  <c-switch v-model="state4" type="success"></c-switch>
  <c-switch v-model="state5" type="warning"></c-switch>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const state1 = ref(true)
    const state2 = ref(true)
    const state3 = ref(true)
    const state4 = ref(true)
    const state5 = ref(true)

    return {
      state1,
      state2,
      state3,
      state4,
      state5,
    }
  }
}
</script>
```



## 不可点击
> 禁止点击状态

```html
<template>
  <c-switch v-model="state" :disabled="disabled"></c-switch>
  <x-button @click="disabled = !disabled">{{ disabled ? '激活' : '禁止' }}</x-button>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const state = ref(true)
    const disabled = ref(true)

    return {
      state,
      disabled
    }
  }
}
</script>
```
