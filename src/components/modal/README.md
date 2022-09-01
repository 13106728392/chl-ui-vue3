---
title: Modal 对话框
tag: Feedback
---

# Modal 对话框
> 模态对话框

## 演示
> 使用 'click' 控制打开关闭

```html
<template>
   <c-button type="primary" @click="openModal">openModal</c-button>
</template>

<script>
  import {ref, getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
     const {$modal } = instance?.appContext.config.globalProperties;

      const openModal = () => {
        $modal({
          content: "error",
          type: "warning",
          onClose: () => {
            console.log("onClose");
          },
          confirm: () => {
            console.log("confirm");
          },
        });
      }
      return {
        openModal
      }
    }
  }
</script>
```