<template>
    <div>
      <c-radio-group v-model="radio1">
        <c-radio-button label="上海"></c-radio-button>
        <c-radio-button label="北京"></c-radio-button>
        <c-radio-button label="广州"></c-radio-button>
        <c-radio-button label="深圳"></c-radio-button>
      </c-radio-group>
    </div>
    <div style="margin-top: 20px;">
      <c-radio-group v-model="radio2">
        <c-radio-button label="上海"></c-radio-button>
        <c-radio-button label="北京" disabled></c-radio-button>
        <c-radio-button label="广州"></c-radio-button>
        <c-radio-button label="深圳"></c-radio-button>
      </c-radio-group>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const radio1 = ref('上海')
  const radio2 = ref('上海')
  </script>