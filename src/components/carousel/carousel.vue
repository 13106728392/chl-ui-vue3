<template>
  <div class="c-carousel" :style="`width:${width}; height: ${height}`" @mouseover="mouseover" @mouseleave="mouseleave">
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
      <i v-for="(item, i) in items" :key="i" :class="{ active: inActive === i }" @click="handerDot(i)"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import emitter from "../../utils/emiter";

import {
  defineEmits,
  defineProps,
  ref,
  computed,
  watchEffect,
  reactive,
  provide,
  onUnmounted,
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
const transitionName = ref('slide-right')  // classname样式
// 触发
const { on } = emitter()
// 顺序绑定实例uid
on('carousel-item', (uid: Number) => {
  items.push(uid)
})

// 对应的active页面
watchEffect(() => {
  inUid.value = items[inActive.value]
})

// 无限层级触发，变化index值
provide("carousel-active", inUid);
provide('carousel-name', transitionName)

// 触发变换
const setCarousel = (num: Number, className: String) => {
  inActive.value += num
  transitionName.value = className

  if (inActive.value < 0) {
    inActive.value = items.length - 1
  }
  if (inActive.value >= items.length) {
    inActive.value = 0
  }
}

// 设定具体的页面
const handerDot = (num: Number) => {
  const now = num - inActive.value
  setCarousel(now, now < 0 ? 'slide-left' : 'slide-right')
};


// 是否自动播放
let time = null

// 鼠标over
const mouseover = () => {
  stopPlay()
}

// 鼠标离开
const mouseleave = () => {
  startPlay()
};

const startPlay = () => {
  if (props.autoplay && props.interval && !time) {
    time = setInterval(() => {
      setCarousel(1, 'slide-right')
    }, props.interval * 1000)
  }
}

const stopPlay = () => {
  clearInterval(time)
  time = null
}

// 进入触发
startPlay()


// 页面卸载清除定时器
onUnmounted(() => {
  stopPlay()
})


</script>
