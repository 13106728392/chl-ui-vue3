<template>
    <c-rate v-model="valueHalf" allow-half></c-rate>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const valueHalf = ref(2.5)
  </script>