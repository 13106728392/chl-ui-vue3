
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
         $message({
           content: "error",
           type: "error",
           onClose: () => {
             console.log(6777);
           },
         });
 
       }
       return {
         handerClick
       }
     }
   }
 </script>