<template>
   
    <c-button @click="open1">左边-left</c-button>
    <c-button @click="open2">上边-top</c-button>
    <c-button @click="open3">右边-right</c-button>
    <c-button @click="open4">下边-bottom</c-button>
  

  <c-drawer 
    v-model="drawerShow"
    title="基本使用"
    :direction="direction"
  >
    <div>我来啦。。。</div>
  </c-drawer >
</template>

<script setup>
import { ref } from "vue";

const drawerShow = ref(false);
const direction = ref('left');

const open1 = () => {
  drawerShow.value = true
  direction.value = 'left'
}
const open2 = () => {
  drawerShow.value = true
  direction.value = 'top'
}
const open3 = () => {
  drawerShow.value = true
  direction.value = 'right'
}
const open4 = () => {
  drawerShow.value = true
  direction.value = 'bottom'
}
</script>