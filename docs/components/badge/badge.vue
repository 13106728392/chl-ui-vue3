<template>
  <span :class="'c-badge'">
    <template v-if="status !== ''">
      <i :class="[`c-badge-${status}`, shine && 'c-badge-shine']"></i>
      {{ text }}
    </template>
    <sup class="c-badge-count" v-else>{{ count }}</sup>
  </span>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, computed } from "vue";


const props = defineProps({
  text: [String, Number],
  status: {
    type: String,
    default: '',
    validator: (value:String) =>
      [
        '',
        'success',
        'primary',
        'warning',
        'info',
        'error',
        'default',
      ].includes(value),
  },
  count: [String, Number],
  shine: Boolean,
})




</script>
