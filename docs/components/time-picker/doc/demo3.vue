<template>
    <c-time-picker v-model="value1" disabled placeholder="请选择时间"></c-time-picker>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const value1 = ref('03:12:30')
  </script>