

<template>
    <c-switch v-model="state1" type="primary"></c-switch>
    <c-switch v-model="state2" type="info"></c-switch>
    <c-switch v-model="state3" type="danger"></c-switch>
    <c-switch v-model="state4" type="success"></c-switch>
    <c-switch v-model="state5" type="warning"></c-switch>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const state1 = ref(true)
      const state2 = ref(true)
      const state3 = ref(true)
      const state4 = ref(true)
      const state5 = ref(true)
  
      return {
        state1,
        state2,
        state3,
        state4,
        state5,
      }
    }
  }
  </script>