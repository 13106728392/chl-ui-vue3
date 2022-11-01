
<template>
    <c-button type="primary" plain @click="to = 500">滚动到 500</c-button>
    <c-button type="primary" plain @click="to = 1200">滚动到 1200</c-button>
    <x-badge :count="to" />
  
    <c-scroll :height="150" v-model:to="to"  :alwaysVisible="false">
      <div class="demo-scroll-item" v-for="item in 50">{{item}}</div>
    </c-scroll>
  </template>
  
  <script>
    import {getCurrentInstance, ref} from 'vue'
    export default {
      setup(){
        const to = ref(0)
  
        return {
          to,
        }
      }
    }
  </script>
  