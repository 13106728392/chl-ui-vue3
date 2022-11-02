<template>
    <ul class="c-menu" :class="`c-menu-${mode}`">
        <slot></slot>
    </ul>
</template>

<script lang="ts" setup>
import { getCurrentInstance, provide, ref, defineProps } from 'vue'
import emiter from '../../utils/emiter'

name: 'Menu'
const props = defineProps({
    uniqueOpened: Boolean,
    mode: {
        type: String,
        default: 'vertical',
        validator: (value) => ['vertical', 'horizontal'].includes(value),
    },
})

const instance = getCurrentInstance()
instance.currName = ref(null)
provide('menu', instance)

const { on } = emiter()

on('item-click', (item) => {
    instance.currName.value = item
})


</script>
