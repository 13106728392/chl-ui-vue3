<template>
    <c-radio-group v-model="radioVal">
      <c-radio :label="1">备选项1</c-radio>
      <c-radio :label="2">备选项2</c-radio>
      <c-radio :label="3">备选项3</c-radio>
    </c-radio-group>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const radioVal = ref('1')
  </script>