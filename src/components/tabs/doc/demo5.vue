<template>
  <div>
    <c-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <c-radio-button label="top"></c-radio-button>
      <c-radio-button label="right"></c-radio-button>
      <c-radio-button label="bottom"></c-radio-button>
      <c-radio-button label="left"></c-radio-button>
    </c-radio-group>
    <c-tabs v-model="activeName" :tab-position="tabPosition" style="height: 200px;">
      <c-tab-pane label="选项一" name="first">内容一</c-tab-pane>
      <c-tab-pane label="选项二" name="second">内容二</c-tab-pane>
      <c-tab-pane label="选项三" name="third">内容三</c-tab-pane>
      <c-tab-pane label="选项四" name="fourth">内容四</c-tab-pane>
    </c-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabPosition = ref('top')
const activeName = ref('first')
</script>