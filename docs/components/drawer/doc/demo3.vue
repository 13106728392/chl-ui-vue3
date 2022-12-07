<template>
  <c-button @click="drawerShow=true">自定义内容</c-button>

  <c-drawer 
    v-model="drawerShow"
    title="基本使用"
  >
    <div>
      <m-input v-model="value" placeholder="请输入" clearable></m-input>
      <p>输入的值为：{{value}}</p>
    </div>
    <template #footer>
      <span class="drawer-footer">
        <c-button @click="drawerShow = false" style="margin-right: 20px">取消</c-button>
        <c-button type="primary" @click="drawerShow = false">确定</c-button>
      </span>
    </template>
  </c-drawer >
</template>

<script setup>
import { ref } from "vue";

const drawerShow = ref(false);
const value = ref('');
</script>