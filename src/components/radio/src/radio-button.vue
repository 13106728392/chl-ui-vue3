<template>
    <label class="c-radio-button" :class="[
        { 'is-active': selVal === label },
        { 'is-disabled': isDisabled },
    ]">
        <input type="radio" class="c-radio-button__original" :name="name" v-model="selVal" :value="label"
            :disabled="isDisabled">
        <span class="c-radio-button__inner">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>
  
  
<script lang="ts" setup>
import { computed, inject } from 'vue'
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    label: {
        type: String || Number,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const radioGroup = inject('radioGroup', '');
const changeEvent = inject('changeEvent', '');
const isGroup = computed(() => {
    return radioGroup
})

const selVal = computed({
    get() {
        return isGroup.value ? radioGroup.val.value : props.label
    },
    set(val) {
        changeEvent(val)
    }
})

const isDisabled = computed(() => {
    return props.disabled
})
</script>
  