
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
 