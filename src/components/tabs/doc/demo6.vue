<template>
  <c-tabs v-model="activeName" activeColor="#42B983">
    <c-tab-pane label="选项一" name="first">内容一</c-tab-pane>
    <c-tab-pane label="选项二" name="second">内容二</c-tab-pane>
    <c-tab-pane label="选项三" name="third">内容三</c-tab-pane>
    <c-tab-pane label="选项四" name="fourth">内容四</c-tab-pane>
  </c-tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('first')
</script>