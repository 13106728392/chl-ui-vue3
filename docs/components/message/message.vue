<template>
  <transition name="slideY-fade" @after-leave="afterLeave" appear>
    <div class="c-message" :class="className[type]" v-show="isShow">
      <i :class="icon[type]" />
      <div class="content">
        {{ content }}
      </div>
      <i class="c-icon-x close-able" @click="close" v-show="closeBtn" />
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
import { icon, className } from "../../utils/type";
import { isFunction } from "../../utils/isType";

name: "Message";
const instance = getCurrentInstance();
const isShow = ref(true);
let closeBtn = ref(false)

const props = defineProps({
  content: [String, Number, Boolean],
  type: {
    type: String,
    default: "info",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  onClose: {
    type: Function,
    default: ()=>{},
  },
});


if (props.duration > 0) {
  setTimeout(close, props.duration);
}else{
   closeBtn.value= true
}

function close() {
  isShow.value = false;
}

const afterLeave = () => {
  if (props.onClose && isFunction(props.onClose)) {
    props.onClose();
  }
  instance.vnode.el.parentElement?.removeChild(instance.vnode.el);
};
</script>
