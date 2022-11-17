<template>
  <div class="c-option-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cOption"
};
</script>

<script setup>
const props = defineProps({
  value: {
    required: true
  },
  label: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
})
</script>
