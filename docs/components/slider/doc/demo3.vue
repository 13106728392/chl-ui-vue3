<template>
    <c-slider :min="5" :max="20" v-model="value" />
  </template>
  
  <script>
  import {reactive} from 'vue'
  export default {
    setup(){
      const value = reactive([10, 15])
  
      return {
        value,
      }
    }
  }
  </script>