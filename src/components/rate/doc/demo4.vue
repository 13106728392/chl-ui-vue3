<template>
    <c-rate v-model="value" disabled></c-rate>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const value = ref(2)
  </script>