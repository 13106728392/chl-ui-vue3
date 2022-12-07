<template>
  <c-button @click="drawerShow=true">点击打开</c-button>

  <c-drawer 
    v-model="drawerShow"
    title="基本使用"
    :with-header="false"
  >
    <div>我来啦。。。</div>
  </c-drawer >
</template>

<script setup>
import { ref } from "vue";

const drawerShow = ref(false);
</script>