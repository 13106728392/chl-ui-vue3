<template>
    <div :class="classes" @mouseleave="handleMouseleave">
        <div v-for="item in count" :key="item" @mousemove="handleMousemove(item, $event)" :class="starCls(item)">
            <span class="c-icon favorite" v-if="!character && !icon">
                <span class="c-icon favorite-half" type="half"></span>
            </span>
            <template v-if="character">
                <span class="c-rate-star-first" type="half">{{ character }}</span>
                <span class="c-rate-star-second">{{ character }}</span>
            </template>
            <i class="c-icon other-icon" :class="['c-icon-' + icon]" v-if="icon">
                <i class="c-icon other-icon-half" :class="['c-icon-' + icon]" type="half"></i>
            </i>
        </div>
        <div class="c-rate-text" v-if="showText && currentValue > 0">
            <slot>{{ currentValue }} 星</slot>
        </div>


    </div>
</template>
<script lang="ts" setup>

import { computed, defineProps, reactive, watch, toRefs } from 'vue'

const emits = defineEmits(['update:modelValue', 'on-change'])
const props = defineProps({
    count: { // 数量
        type: Number,
        default: 5
    },
    disabled: { // 是否可触摸
        type: Boolean,
        default: false
    },
    modelValue: { // 默认显示的星数
        type: Number,
        default: 0
    },
    allowHalf: { // 可否半星
        type: Boolean,
        default: false
    },
    character: { // 自定义字符串
        type: String,
        default: ''
    },
    icon: { // 自定义图标
        type: String,
        default: ''
    },
    showText: { // 是否显示当前星数
        type: Boolean,
        default: false
    },
    clearable: { // 是否可清除
        type: Boolean,
        default: false
    }

})


const state = reactive({
    hoverIndex: -1,
    isHover: false,
    currentValue: props.modelValue,
    isHalf: props.allowHalf && props.modelValue.toString().indexOf('.') > -1,
})


watch(() => props.modelValue, (newVal) => {
    state.currentValue = newVal
}, { immediate: true })



const classes = computed(() => {
    return [
        'c-rate',
        {
            'c-rate-disabled': props.disabled
        }
    ]
})


const starCls = (value) => {
    const currentIndex = state.isHover ? state.hoverIndex : state.currentValue;

    let full = false;
    let isLast = false;

    if (currentIndex >= value) full = true;

    if (state.isHover) {
        isLast = currentIndex === value;
    } else {
        isLast = Math.ceil(state.currentValue) === value;
    }
    return [
        'c-rate-star',
        {
            'c-rate-star-full': (!isLast && full) || (isLast && !state.isHalf),
            'c-rate-star-zero': !full,
            'c-rate-star-half': isLast && state.isHalf,
        }
    ]
}



const setHalf = (val) => {
    state.isHalf = props.allowHalf && val.toString().indexOf('.') > -1;
}


const handleMouseleave = () => {
    if (props.disabled) return;
    state.isHover = false;
    setHalf(state.currentValue);
    state.hoverIndex = -1;
}


// 鼠标经过
const handleMousemove = (value, event) => {
    if (props.disabled) return;
    state.isHover = true;
    if (props.allowHalf) {
        const type = event.target.getAttribute('type') || false;
        state.isHalf = type === 'half';
    } else {
        state.isHalf = false;
    }
    // hoverIndex 为整
    state.hoverIndex = value;
}



const handleClick = (value) => {
    if (props.disabled) return;
    if (state.isHalf) value -= 0.5;

    if (props.clearable && Math.abs(value - state.currentValue) < 0.01) {
        value = 0
    }

    // 点击事件触发
    state.currentValue = value;
    emits('update:modelValue', value)
    emits('on-change', value)
}

const { currentValue } = toRefs(state);
</script>