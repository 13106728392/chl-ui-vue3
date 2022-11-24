<template>
    <div>
      <c-radio v-model="radio1" label="1" border>备选项1</c-radio>
      <c-radio v-model="radio1" label="2" border>备选项2</c-radio>
      <c-radio v-model="radio1" label="3" border>备选项3</c-radio>
    </div>
    <div style="margin-top: 20px">
      <c-radio-group v-model="radio2">
        <c-radio label="1" border>备选项1</c-radio>
        <c-radio label="2" border>备选项2</c-radio>
        <c-radio label="3" border>备选项3</c-radio>
      </c-radio-group>
    </div>
    <div style="margin-top: 20px">
      <c-radio-group v-model="radio3">
        <c-radio label="1" border>备选项1</c-radio>
        <c-radio label="2" border disabled>备选项2</c-radio>
        <c-radio label="3" border>备选项3</c-radio>
      </c-radio-group>
    </div>
    <div style="margin-top: 20px">
      <c-radio-group v-model="radio4" disabled>
        <c-radio label="1" border>备选项1</c-radio>
        <c-radio label="2" border>备选项2</c-radio>
        <c-radio label="3" border>备选项3</c-radio>
      </c-radio-group>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const radio1 = ref('1')
  const radio2 = ref('1')
  const radio3 = ref('1')
  const radio4 = ref('1')
  </script>