<template>
  <component :is="tag" :class="classes" :style="style">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, computed, inject ,getCurrentInstance,provide} from "vue";
  name: 'Row'
 const props = defineProps({
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (value) =>
        ['start', 'center', 'end', 'space-between', 'space-around'].includes(value),
    },
    align: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'center', 'bottom'].includes(value),
    },
  })

    const classes = ['c-row']

    if (props.type === 'flex') {
      classes.push('c-row-flex')
      props.justify && classes.push(`c-row-flex-justify-${props.justify}`)
      props.align && classes.push(`c-row-flex-align-${props.align}`)
    }

    const style = computed(() => {
      const ret = {}
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    })

    provide('Row', getCurrentInstance())

  
</script>
