<template>
  <c-checkbox v-model="checked1" disabled>备选项</c-checkbox>
  <c-checkbox v-model="checked2" disabled>备选项</c-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
</script>