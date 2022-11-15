<template>
    <c-row>
      <c-col>
        <c-rate v-model="value1" character="A"></c-rate>
      </c-col>
      <c-col style="margin-top:20px">
        <c-rate v-model="value2" character="好" allow-half></c-rate>
      </c-col>
      <c-col style="margin-top:20px">
        <c-rate v-model="value3" icon="smile-filling"></c-rate>
      </c-col> 
    </c-row>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  const value1 = ref(2);
  const value2 = ref(2);
  const value3 = ref(2);
  </script>