<template>
    <label class="c-radio" :class="[
        { 'is-disabled': isDisabled },
        { 'is-checked': selVal == label },
        { 'is-bordered': border },
    ]">
        <span class="c-radio__input" :class="{
            'is-checked': selVal == label,
            'is-disabled': isDisabled
        }">
            <span class="c-radio__inner"></span>
            <input class="c-radio__original" type="radio" :name="name" v-model="selVal" :value="label"
                :disabled="isDisabled" @change="handleChange">
        </span>

        <span class="c-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { provide, nextTick, computed, ref ,inject} from 'vue';
const emit = defineEmits(['update:modelValue','change'])

const props = defineProps({
    border: {  // 是否有边框
        type: Boolean,
        default: false
    },
    modelValue: { // 默认显示的星数
        type: String || Number,
        default: null
    },
    name:{ // 
        type: String || Number,
        default: null
    },
    label: {
        type: String || Number,
        default: null
    },
    disabled: { // 是否可点
        type: Boolean,
        default: false
    }
})

// 无限注入
const radioGroup = inject('radioGroup','');
const changeEvent = inject('changeEvent','');
const isGroup = computed(() => {
  return radioGroup
})

const selVal = computed({
  get() {
    return isGroup.value ? radioGroup.val.value : props.modelValue
  },
  set(val) {
    if(isGroup.value) {
      changeEvent(val)
    } else {
      emit('update:modelValue',val)
    }
  }
})

const isDisabled = computed(() => {
  return isGroup.value ? radioGroup.disabled.value || props.disabled : props.disabled
})


// 切换值
const handleChange = ()=>{} 


</script>