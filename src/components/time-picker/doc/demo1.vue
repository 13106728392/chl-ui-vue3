<template>
    <c-time-picker v-model="value1" placeholder="请选择时间" @on-change="onChange"></c-time-picker>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const value1 = ref('03:12:30')
  
  const onChange = (val) => {
    console.log(val);
  }
  </script>