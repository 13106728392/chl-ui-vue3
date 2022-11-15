<template>
    <c-rate v-model="value" @on-change="onChange"></c-rate>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const value = ref(0);
  
  const onChange = (value) => {
    console.log(value);
  }
  </script>