<template>
  <li class="c-menu-group">
    <div class="c-menu-title" v-if="title && title !== ''" @click.stop>
      {{ title }}
    </div>
    <ul class="c-menu">
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
  name: 'MenuItemGroup'
  const  props = defineProps({
    title: String,
  })

</script>
