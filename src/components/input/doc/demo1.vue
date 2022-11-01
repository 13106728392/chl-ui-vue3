<template>
    <c-input placeholder="请输入" type="text" v-model="value" />
    <c-input placeholder="请输入" type="password" v-model="value" style="margin-left:5px" />
    <div style="margin-top: 10px">
      输入框值：{{value}}
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const value = ref('')
  
      return {
        value
      }
    }
  }
  </script>
  