
<template>
    <c-slider v-model="value" />
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const value = ref(20)
  
      return {
        value,
      }
    }
  }
  </script>
  