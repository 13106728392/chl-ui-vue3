<template>
  <c-button @click="outDrawer = true">点击打开</c-button>

  <c-drawer 
    title="我是外面的 Drawer"
    v-model="outDrawer"
    width="50%">
    <div>
    <c-button @click="innerDrawer = true">打开里面的!</c-button>
    <c-drawer 
      title="我是里面的 Drawer"
      :append-to-body="true"
      v-model="innerDrawer">
      <p>快到碗里来！</p>
    </c-drawer >
    </div>
  </c-drawer >
</template>

<script setup>
import { ref } from "vue";

const outDrawer = ref(false);
const innerDrawer = ref(false);
</script>