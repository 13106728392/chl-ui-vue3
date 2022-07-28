<template>
  <component :is="tag" :class="classes" :style="style">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, computed, inject } from "vue";
import { isNumber, isString } from "../../utils/isType";
const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  span: {
    type: Number,
    default: 24,
  },
  offset: Number,
  order: Number,
  xs: [Number, Object],
  sm: [Number, Object],
  md: [Number, Object],
  lg: [Number, Object],
});
name: "Col";

const Row = inject("Row", { props: {} });
let classes = ["c-col"];

let isSpan = true;
["xs", "sm", "md", "lg"].forEach((item) => {
  if (isNumber(props[item])) {
    isSpan = false;
    classes.push(`c-col-${item}-${props[item]}`);
  } else if (isString(props[item])) {
    isSpan = false;
    props[item].span && classes.push(`c-col-${item}-${props[item].span}`);
    props[item].offset &&
      classes.push(`c-col-offset-${item}-${props[item].span}`);
  }
});

if (isSpan) {
  classes = [`c-col-sp-${props.span}`];
  props.offset && classes.push(`c-col-offset-sp-${props.offset}`);
}

if (Row.type === "flex") {
  props.order && classes.push(`c-col-order-${props.order}`);
}

const style = computed(() => {
  const ret = {};
  if (Row.gutter) {
    ret.paddingLeft = `${Row.gutter / 2}px`;
    ret.paddingRight = ret.paddingLeft;
  }
  return ret;
});
</script>
