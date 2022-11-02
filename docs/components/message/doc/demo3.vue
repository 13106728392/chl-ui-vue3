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
         $message({
            content: "error",
            type: "error",
            onClose: () => {
              console.log(6777);
            },
            duration: 0,
          });
  
              }
      return {
        info
      }
    }
  }
  </script>
  
  