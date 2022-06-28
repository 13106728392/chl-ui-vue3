<template>
  <i 
    @click="clickHandler" 
    :class="type"
    :style="{color}"
    ></i>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";
  name: 'Cicon'
  const props = defineProps({
  type: String,
  color: String || 'black',
});

// 触发点击事件
const clickHandler = ()=>{
    emits('click')
}

const  emits  = defineEmits(['click'])

  
</script>
