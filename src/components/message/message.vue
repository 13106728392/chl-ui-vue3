<template>
  <transition name="slideY-fade" @after-leave="afterLeave" appear>
    <div class="c-message" :class="className[type]" v-show="isShow">
      <i :class="icon[type]" />
      <div class="content">
        {{ content }}
      </div>
      <i class="c-icon-x close-able" v-show="closeBtn"/>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {
  defineEmits,
  defineProps,
  ref,
  computed,
  getCurrentInstance,
} from "vue";
import { icon, className } from "./type";

name: "Message";
const instance = getCurrentInstance();
const isShow = ref(true);

const props = defineProps({
  content: [String, Number, Boolean],
  type: {
    type: String,
    default: "info",
  },
  duration: {
    type: Number,
    default: 300000,
  },
  closeBtn:{
    type:Boolean,
    default:false,
  }
});

const autoClose = ()=>{
    
}


if (props.duration > 0) {
  setTimeout(close, props.duration);
}

function close() {
  isShow.value = false;
}

const afterLeave = () => {
  instance.vnode.el.parentElement?.removeChild(instance.vnode.el);
};
</script>
