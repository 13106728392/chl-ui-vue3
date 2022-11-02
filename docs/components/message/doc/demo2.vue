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
          $message({
             content: "info",
             type: "info",
             onClose: () => {
               console.log(6777);
             },
           });
 
       }
       const open2 = () => {
             $message({
             content: "danger",
             type: "danger",
             onClose: () => {
               console.log(6777);
             },
           });
 
       }
       const open3 = () => {
           
              $message({
             content: "success",
             type: "success",
             onClose: () => {
               console.log(6777);
             },
           });
 
       }
       const open4 = () => {
            $message({
             content: "warning",
             type: "warning",
             onClose: () => {
               console.log(6777);
             },
           });
 
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
 
 