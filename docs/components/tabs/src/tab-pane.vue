<template>
  <div class="c-tab-pane">
    <slot></slot>
  </div>
</template>


<script lang="ts" setup>
import { computed,inject } from 'vue';
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
  },
  disabled:{
    type: Boolean,
    default:false
  },
})

</script>


