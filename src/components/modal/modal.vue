<template>
  <div style="display: inline-block">
    <teleport to="body" :disabled="!teleprot">
      <transition name="fade" appear>
        <div class="c-mask" @click="maskcancel(true)" v-if="isShow"></div>
      </transition>
      <div class="c-modal" :class="modalClassName[type]">
        <transition
          name="scale"
          @before-enter="setOrigin"
          @before-leave="setOrigin"
          @after-leave="afterLeave"
          appear
        >
          <div
            class="c-modal-content"
            v-show="isShow"
            :class="{ 'c-modal-confirm-wrap': type !== '' }"
            :style="modalStyle"
          >
            <div
              class="c-modal-close"
              v-if="closable"
              @click="maskcancel(false)"
            >
              <i class="c-icon-x"></i>
            </div>

            <div class="c-modal-head">
              <template v-if="!$slots.head">
                <i v-if="type !== ''" :class="modalClassName[type]"></i>
                {{ title }}
              </template>
              <slot v-else name="head"></slot>
            </div>

            <div class="c-modal-body">
              <template v-if="type !== ''">
                {{ content }}
              </template>
              <slot v-else></slot>
            </div>

            <div class="c-modal-footer">
              <template v-if="!$slots.footer">
                <Button
                  type="info"
                  size="mini"
                  v-if="!(type !== '' && type !== 'confirm')"
                  plain
                  @click="cancel"
                  >{{ cancelText }}</Button
                >
                <Button
                  type="primary"
                  size="mini"
                  :loading="loading"
                  @click="confirm"
                  >{{ okText }}</Button
                >
              </template>
              <slot v-else name="footer"></slot>
            </div>
          </div>
        </transition>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import Button from "../button";
import {
  defineEmits,
  defineProps,
  ref,
  computed,
  reactive,
  getCurrentInstance,
} from "vue";
import { icon, modalClassName } from "../../utils/type";
import { isFunction } from "../../utils/isType";

name: "Modal";   // 尚未完善,可改造成$modal模式
const props = defineProps({
  content: [String, Number, Boolean],
  loading: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function,
    default: null,
  },
  confirm: {
    type: Function,
    default: null,
  },
  title: {
    type: String,
    default: "info",
  },
  type: {
    type: String,
    default: "info",
  },
  closable: {
    // 是否可以关闭
    type: Boolean,
    default: true,
  },
  mouseClick: Object,
  width: {
    type: Number,
    default: 500,
  },
  top: {
    type: Number,
    default: 100,
  },
  style: {
    type: Object,
    default: {},
  },
  cancelText: {
    type: String,
    default: "取消",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  teleprot: {
    // 是否插入到body
    type: Boolean,
    default: false,
  },
  okText: {
    type: String,
    default: "确定",
  },
  closeOnClickModal: {
    // 是否可以点击屏蔽层管理
    type: Boolean,
    default: true,
  },
});

let mousePosition = props.mouseClick;
// const isShow = ref(props.modelValue)

// 绑定model
const isShow = ref(props.modelValue) || ref(false);

// 定位置
const modalStyle = computed(() => {
  const dest = {
    width: props.width + "px",
    top: props.top + "px",
    ...props.style,
  };
  return dest;
});

// 确定方法
const confirm = () => {
  isShow.value = false;
  if (props.confirm && isFunction(props.confirm)) {
    props.confirm();
  }
};

// 取消
const cancel = () => {
  isShow.value = false;
  if (props.onClose && isFunction(props.onClose)) {
    props.onClose();
  }
};

// 关闭
const maskcancel = (isClickModal) => {
  if (props.closeOnClickModal && isClickModal) return;
  if (props.closable) {
    cancel();
  }
};

const setOrigin = (el) => {
  if (mousePosition) {
    const { x, y } = mousePosition;
    const width =
      (document.documentElement.clientWidth -
        parseFloat(modalStyle.value.width)) /
      2;
    const top = parseFloat(modalStyle.value.top);
    el.style.transformOrigin = `${x - width}px ${y - top}px 0`;
  }
};

let instance = getCurrentInstance(); // 获得当前实例

const afterLeave = () => {
  document.body.style.overflow = "";
  if (!props.teleprot) {
    instance.vnode.el.parentElement?.removeChild(instance.vnode.el);
  }
};

const emits = defineEmits([
  "cancel",
  "update:modelValue",
]);
</script>
