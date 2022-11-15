<template>
    <c-row>
      <c-col>
        <c-rate v-model="value1" clearable></c-rate> clearable: true
      </c-col>
      <c-col style="margin-top:20px">
        <c-rate v-model="value2"></c-rate> clearable: false
      </c-col>  
    </c-row>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  const value1 = ref(2);
  const value2 = ref(2);
  </script>