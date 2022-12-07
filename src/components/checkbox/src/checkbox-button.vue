<template>
  <label 
    class="c-checkbox-button"
    :class="[
    { 'is-checked': isChecked },
    { 'is-disabled': isDisabled }
    ]"
  >
    <input 
      type="checkbox" 
      class="c-checkbox-button__original"
      :name="name"
      v-model="model"
      :value="label"
      :disabled="isDisabled"
    >
    <span class="c-checkbox-button__inner">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>


<script setup lang="ts">
import { computed,inject, } from 'vue';
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  label:{
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const checkboxGroup = inject('checkboxGroup',{});

const isGroup = computed(() => {
  return checkboxGroup.modelValue ? true : false
})

const model = computed({
  get() {
    return isGroup.value ? checkboxGroup.modelValue.value : props.modelValue
  },
  set(val) {
    if(isGroup.value) {
      checkboxGroup.changeEvent(val)
    } else {
      emit('update:modelValue',val)
    }
  }
})

const isChecked = computed(() => {
  if(isGroup.value) {
    return model.value.includes(props.label);
  } else {
    return model.value
  }
})

const isDisabled = computed(() => {
  return props.disabled
})

</script>
