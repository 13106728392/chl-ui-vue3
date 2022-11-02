<template>
    <li class="c-menu-item" @click.stop="handleClick" :class="{ active: isActive }">
        <slot></slot>
    </li>
</template>

<script lang="ts" setup>
import { getCurrentInstance, provide, ref, toRefs,defineProps,inject ,computed} from 'vue'
import emiter from '../../utils/emiter'

name: 'MenuItem'
const props = defineProps({
    name: [String, Number],
})

const { name } = toRefs(props)

const menu = inject('menu', { props: {} })

const { dispatch } = emiter()

const isActive = computed(() => menu.currName.value === name.value)
const handleClick = () => {
    dispatch('item-click',name?.value)
}

</script>
