<template>
    <div style="display: inline-block">
        <teleport to="body" :disabled="!teleprot">
            <transition name="fade" appear>
                <div class="c-mask" @click="maskcancel" v-if="isShow"></div>
            </transition>
            <div class="c-modal" :class="{ confirm: type !== '' }">
                <transition name="scale" @before-enter="setOrigin" @before-leave="setOrigin" @after-leave="afterLeave"
                    appear>
                    <div class="c-modal-content" v-show="isShow" :class="{ 'c-modal-confirm-wrap': type !== '' }"
                        :style="modalStyle">
                        <div class="c-modal-close" v-if="closable" @click="cancel">
                            <i class="c-icon-x"></i>
                        </div>

                        <div class="c-modal-head">
                            <template v-if="!$slots.head">
                                <i v-if="type !== ''" :class="className[type]"></i>
                                {{ title }}
                            </template>
                            <slot v-else name="head"></slot>
                        </div>

                        <div class="c-modal-body">
                            <template v-if="type !== ''">
                                {{ content }}
                            </template>
                            <slot v-else></slot>
                        </div>

                        <div class="c-modal-footer">
                            <template v-if="!$slots.footer">
                                <Button class="c-modal-btn" v-if="!((type !== '') && (type !== 'confirm'))" plain
                                    @click="cancel">{{ cancelText }}</Button>
                                <Button class="c-modal-btn" type="primary" :loading="loading" @click="ok">{{ okText
                                }}</Button>
                            </template>
                            <slot v-else name="footer"></slot>
                        </div>
                    </div>
                </transition>
            </div>
        </teleport>
    </div>
</template>

<script lang="ts" setup>
import {
    defineEmits,
    defineProps,
    ref,
    computed,
    reactive,
    getCurrentInstance,
} from "vue";
import { icon, className } from "../../utils/type";
import { isFunction } from "../../utils/isType";



name: "Modal";
const props = defineProps({
    content: [String, Number, Boolean],
    title: {
        type: String,
        default: "info",
    },
    type: {
        type: String,
        default: "info",
    },
    closable: {
        type: Boolean,
        default: true
    },
    mouseClick: Object,
    width: {
        type: Number,
        default: 500,
    },
    top: {
        type: Number,
        default: 100,
    },
    style: {
        type: Object,
        default: {}
    },
    cancelText: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Boolean,
        default: false
    }

})


let mousePosition = props.mouseClick
// const isShow = ref(props.modelValue)


const isShow = computed(() => {
    return props.modelValue

})



const modalStyle = computed(() => {
    const dest = {
        width: props.width + 'px',
        top: props.top + 'px',
        ...props.style,
    }
    return dest
})

const cancel = () => { }
const maskcancel = () => { }
const setOrigin = (el) => {
    if (mousePosition) {
        const { x, y } = mousePosition
        const width =
            (document.documentElement.clientWidth -
                parseFloat(modalStyle.value.width)) /
            2
        const top = parseFloat(modalStyle.value.top)
        el.style.transformOrigin = `${x - width}px ${y - top}px 0`
    }
}

let instance = getCurrentInstance() // 获得当前实例

const afterLeave = () => {
    document.body.style.overflow = ''
    if (!teleprot.value) {
        instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
    }
}




</script>