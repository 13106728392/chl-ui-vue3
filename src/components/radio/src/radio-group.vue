<template>
    <div class="c-radio-group">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>

import { provide, nextTick, computed } from 'vue';
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
    modelValue: {
        type: String || Number,
        default: null
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const val = computed(() => props.modelValue)
const disabled = computed(() => props.disabled)

const changeEvent = (value) => {
    emit('update:modelValue', value)
    nextTick(() => emit('change', value))
}

provide('radioGroup', {
    val,
    disabled
})
provide('changeEvent', changeEvent)

</script>
  