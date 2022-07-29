<template>
  <transition :name="inName" mode="out-in">
    <div class="c-carousel-item" v-show="isShow">
      <slot></slot>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  ref,
  computed,
  inject,
  watch,
  getCurrentInstance,
} from "vue";
import emitter from "../../utils/emiter";
const props = defineEmits({});
const inActive = inject("carousel-active");
const inName = inject("carousel-name");
// 获取当前实例
const instance = getCurrentInstance();
const { dispatch } = emitter();


dispatch("carousel-item", instance.uid || null);
name: "CarouselItem";

const isShow = computed(() => {
  return inActive.value === instance.uid;
});
</script>
