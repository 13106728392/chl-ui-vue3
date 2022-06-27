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
          @click="handerInput()"
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
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  type: String,
  iconBefore: String,
  iconAfter: String,
  maxlength: Number,
  block: Boolean,
  clearable: Boolean,
  modelValue: [String, Number],
});






</script>
