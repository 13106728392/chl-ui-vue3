<template>
    <c-scroll :height="150" @onScroll="scroll">
      <div class="demo-scroll-item" v-for="item in count">{{item}}</div>
    </c-scroll>
  </template>
  
  <script>
    import {getCurrentInstance, ref} from 'vue'
    export default {
      setup(){
        const instance = getCurrentInstance()
        const {$message} = instance.appContext.config.globalProperties
  
        const count = ref(4)
  
        const scroll = (val) => {
          if(val >= 0.8){
              count.value += 3
          }
        }
        return {
          scroll,
          count
        }
      }
    }
  </script>
  