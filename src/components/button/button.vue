<template>
  <button class="c-btn" :class="className" :disabled="isDisabled" @click="click">
    <span v-if="load" class="c-load"></span>
    <span class="c-btn-content" :style="style">
      <i v-if="icon !== ''" :class="icon" />
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </span>
  </button>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps, ref ,computed } from "vue";
// 绑定的值
// const text = ref('')

const props = defineProps({
  type: {
      type: String,
      default: 'default',
      validator: (value:String) =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
          'default',
          'text',
        ].includes(value),
    },
     size: {
      type: String,
      default: 'md',
      validator: (value) => ['lg', 'sm', 'md'].includes(value),
    },
    icon: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
});




const useClass = (props:any) => {
  return computed(() => {
    return [
      props.type && `c-btn-${props.type}`,
      props.size !== '' || props.size ? `c-btn-${props.size}` : '',
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-block': props.block,
        disabled: props.disabled,
      },
      props.value && 'c-btn-loading',
    ];
  });
};

  const className = useClass(props);



const click = ()=>{
    emits('click')
}

const emits = defineEmits(['click'])


</script>
