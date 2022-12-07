<template>
  <div>
    <c-checkbox v-model="checked1" border>备选项1</c-checkbox>
    <c-checkbox v-model="checked2" border>备选项2</c-checkbox>
  </div>
  <div style="margin-top: 20px">
    <c-checkbox-group v-model="checkboxGroup1">
      <c-checkbox label="备选项1" border></c-checkbox>
      <c-checkbox label="备选项2" border disabled></c-checkbox>
    </c-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <c-checkbox-group v-model="checkboxGroup2" disabled>
      <c-checkbox label="备选项1" border></c-checkbox>
      <c-checkbox label="备选项2" border></c-checkbox>
    </c-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checkboxGroup1 = ref(['备选项1'])
const checkboxGroup2 = ref([])
</script>