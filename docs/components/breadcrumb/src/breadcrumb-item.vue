<template>
    <li class="c-breadcrumb-item">
      <a class="c-breadcrumb-item__link" :href="to" @click="handleClick" v-if="to">
        <slot></slot>
      </a>
      <span class="c-breadcrumb-item__span" v-else>
        <slot/>
      </span>
      <span>
        <i class="c-breadcrumb-item__separator icon" :class="separatorClass" v-if="separatorClass"></i>
        <span class="c-breadcrumb-item__separator" v-else> {{ separator }} </span>
      </span>
    </li>
  </template>
  

  <script setup lang="ts">
  import { inject } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    to: {
      type: [String, Object],
    }
  })
  
  const router = useRouter()
  const breadcrumbKey = inject('breadcrumbKey')
  const { separator,separatorClass } = breadcrumbKey
  
  const handleClick = (e) => {
    event.preventDefault();
    router.push(props.to)
  }
  </script>
  
