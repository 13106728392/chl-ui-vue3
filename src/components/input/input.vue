<template>
  <div
    class="c-from-input"
    :class="{
      'c-input-icon-before': iconBefore && iconBefore !== '',
      'c-input-icon-after': (iconAfter && iconAfter !== '') || clearable,
      'c-input-block': block,
    }"
  >
    <template v-if="type !== 'textarea'">
      <input
        class="c-input"
        v-bind="$attrs"
        :type="type"
        @input="handerInput"
        :value="text"
      />
      <i
        class="c-after"
        v-if="iconAfter && iconAfter !== ''"
        :class="iconAfter"
      ></i>
      <i
        class="c-before"
        v-if="iconBefore && iconBefore !== ''"
        :class="iconBefore"
      ></i>
      <transition name="fade">
        <span
          class="c-icon-x"
          v-if="clearable && textLength > 0"
          @click="clearText"
        ></span>
      </transition>
    </template>
    <template v-else>
      <textarea
        class="c-textarea"
        v-bind="$attrs"
        @input="handerInput"
        :value="text"
        :maxlength="maxlength"
      >
      </textarea>
      <span class="c-textarea-maxlength">
        {{ textLength }}/{{ maxlength }}
      </span>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps, ref ,computed } from "vue";
// 绑定的值
const text = ref('')

const props = defineProps({
  type: String,
  iconBefore: String,
  iconAfter: String,
  maxlength: Number,
  block: Boolean,
  clearable: Boolean,
  modelValue: [String, Number],
});
//1、暴露内部数据
const  emits = defineEmits(['change']);

const textLength = computed(() => text.value.length)

// 组件自己的方法
const  handerInput = (e:any ) => {
  text.value = e ? e.target.value : ''
  //2、触发父组件中暴露的childFn方法并携带数据
  emits('change',text.value)
}
const clearText = ()=>{
  text.value = ''
  emits('change',text.value)
}

</script>
