<template>
  <div
    class="c-carousel"
    :style="`width:${width}; height: ${height}`"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <div class="c-carousel-left" @click="setCarousel(-1, 'slide-left')">
      <i class="c-icon-chevron-left"></i>
    </div>
    <div class="c-carousel-right" @click="setCarousel(1, 'slide-right')">
      <i class="c-icon-chevron-right"></i>
    </div>
    <div class="c-carousel-warp">
      <slot></slot>
    </div>
    <div class="c-carousel-dot">
      <i
        v-for="(item, i) in items"
        :key="i"
        :class="{ active: inActive === i }"
        @click="handerDot(i)"
      ></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  ref,
  computed,
  reactive,
  provide,
} from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 300,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  interval: {
    type: Number,
    default: 3,
  },
});
const inActive = ref(0); // 当前活动
const inUid = ref(0); // 当期下标
const items = reactive([]); // 渲染arr

provide("carousel-active", inUid);

// 鼠标over
const mouseover = () => {};

// 鼠标离开
const mouseleave = () => {};

// 触发变换
const setCarousel = (num: Number, className: String) => {};
// 设定具体的页面
const handerDot = (num: Number) => {};
</script>
