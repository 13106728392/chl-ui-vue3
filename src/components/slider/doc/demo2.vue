
<template>
    <c-slider :min="5" :max="10" v-model="value" />
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const value = ref(8)
  
      return {
        value,
      }
    }
  }
  </script>
  