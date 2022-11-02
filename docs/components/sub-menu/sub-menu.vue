<template>
  <li class="c-submenu" :class="{ 'is-active': isActive }" @click="handleClick">
    <div class="c-menu-title">
      <slot name="title"></slot>
      <i class="c-arrow" :class="{ 'is-active': isActive }"></i>
    </div>
    <transition name="scaleY" ref="trigger" v-if="horizontal">
      <ul class="c-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </transition>
    <CollapseTransition v-else>
      <ul class="c-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </CollapseTransition>
  </li>
</template>

<script lang="ts" setup>
import {
  inject,
  ref,
  toRefs,
  watch,
  getCurrentInstance,
  onMounted,
  defineProps,
} from "vue";
import CollapseTransition from "../transitions/collapse-transition.vue";
import emiter from "../../utils/emiter";

const props = defineProps({
  name: [String, Number],
});
name: "SubMenu";
const { name } = toRefs(props);
const { dispatch, on } = emiter();
const menu = inject("menu", { props: {} });
const isActive = ref(false);
const isChild = ref("");
const Instance = getCurrentInstance();
const horizontal = menu.props.mode === "horizontal";

watch(menu?.currName, (value) => {
  
  if (menu.props?.uniqueOpened) {
    if (value !== name?.value) {
      isActive.value = false;
    }
    if (isChild.value === value) {
      isActive.value = true;
    }
  }
  if (horizontal) {
    if (value !== name?.value) {
      isActive.value = false;
    }
    // if (isChild.value === value) {
    //   isActive.value = true;
    // }
  }
});

on("item-click", (item) => {
  isChild.value = item;
});

const handleClick = () => {
  dispatch("item-click", name?.value);
  isActive.value = !isActive.value;
};

onMounted(() => {
  if (horizontal) {
    document.addEventListener("click", (e) => {
      const el = Instance?.vnode.el;
      if (!el?.contains(e.target)) {
        isActive.value = false;
      }
    });
  }
});
</script>
