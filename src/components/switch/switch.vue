<template>
    <button class="c-switch" @click="handerClick" :class="[
        `c-switch-${type}`,
        {
            'c-switch-checked': modelValue,
            'c-switch-disabled': disabled,
        },
    ]">
        <span class="c-switch-inner">
            <slot v-if="modelValue" name="open"></slot>
            <slot v-else name="close"></slot>
        </span>
    </button>
</template>
<script lang="ts" setup>
import {
    defineEmits,
    defineProps,
    ref,
    computed,
    getCurrentInstance,
} from "vue";
name: 'Switch'
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
        validator: (value) =>
            ['success', 'primary', 'warning', 'info', 'danger'].includes(value),
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: Boolean,
        default: false
    }
});


const handerClick = () => {
    console.log(props.modelValue)
    if (props.disabled) {
        return
      }
      emits('update:modelValue', !props.modelValue)
      emits('change', !props.modelValue)
}

const emits = defineEmits(['update:modelValue','change'])





</script>