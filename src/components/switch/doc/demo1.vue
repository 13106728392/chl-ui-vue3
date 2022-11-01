
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
 