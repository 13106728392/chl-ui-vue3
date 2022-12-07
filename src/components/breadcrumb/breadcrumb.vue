<template>
    <ul class="c-breadcrumb">
      <slot></slot>
    </ul>
  </template>

  <script setup lang="ts">
  import { provide } from 'vue';
  const props = defineProps({
    // 分割符字符串
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  })
  
  provide('breadcrumbKey',props)
  </script>
  
