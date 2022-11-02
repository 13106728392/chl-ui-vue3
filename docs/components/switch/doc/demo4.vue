<template>
    <c-switch v-model="state" :disabled="disabled"></c-switch>
    <c-button @click="disabled = !disabled">{{ disabled ? '激活' : '禁止' }}</c-button>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const state = ref(true)
      const disabled = ref(true)
  
      return {
        state,
        disabled
      }
    }
  }
  </script>
  