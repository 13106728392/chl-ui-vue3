<template>
    <c-slider :min="5" :max="10" step v-model="value" />
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const value = ref(6)
  
      return {
        value,
      }
    }
  }
  </script>