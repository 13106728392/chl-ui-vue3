
<template>
    <c-switch v-model="state1">
      <template #open>开</template>
      <template #close>关</template>
    </c-switch>
  
    <c-switch v-model="state2">
      <template #open>打开</template>
      <template #close>关闭</template>
    </c-switch>
  
    <c-switch v-model="state3">
      <template #open>
        <c-icon type="c-icon-check"/>
      </template>
      <template #close>
        <c-icon type="c-icon-x" />
      </template>
    </c-switch>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const state1 = ref(false)
      const state2 = ref(true)
      const state3 = ref(true)
  
      return {
        state1,
        state2,
        state3
      }
    }
  }
  </script>
  