<template>
  <div class="c-slider" @mouseenter="handleEnter" @mouseleave="handleLeave">
    <tooltip v-if="range" :content="start.num" v-model="isTooltip">
      <div
        class="c-slider-dot"
        :style="{
          left: `${start.x}%`,
        }"
        @mousedown="handleDown($event, 'start')"
      ></div>
    </tooltip>

    <tooltip :content="end.num" v-model="isTooltip">
      <div
        class="c-slider-dot"
        :style="{
          left: `${end.x}%`,
        }"
        @mousedown="handleDown($event, 'end')"
      ></div>
    </tooltip>

    <div class="c-slider-bar" :style="propress"></div>

    <div class="c-slider-step" v-if="steps > 0">
      <i v-for="i in steps" :key="i"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  ref,
  toRefs,
  getCurrentInstance,
  onMounted,
  computed,
  watchEffect,
} from 'vue'
import { on, off } from '../../utils/dom'
import tooltip from '../tooltip/index'
import { isArray } from '../../utils/isType'


const emits= defineEmits(['update:modelValue']) 
const  props = defineProps ({
    modelValue: [Number, Array],
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
    step: Boolean,
    showTooltip: Boolean,
  })

 
    const { modelValue, max, min, step, showTooltip } = toRefs(props)
    const instance = getCurrentInstance()
    const propress = reactive({
      width:0,
       maxWidth:0,
       left:0
    })
    const isTooltip = ref(false)
    const space = ref(0)
    const range = ref(isArray(props.modelValue))
    const steps = ref(0)
    const isHover = ref(false)
    const isDrag = ref(false)

    const start = reactive({
      num: range.value ? props.modelValue[0] : 0,
      x:0,
      y:0
    })
    const end = reactive({
      num: range.value ? props.modelValue[1] : props.modelValue,
    })

    const state = reactive({
      modelValue: null,
    })

    const model = computed({
      get() {
        return state.modelValue
      },
      set({ start, end }) {
        if (range.value) {
          const modelValue = model.value
          modelValue[0] = start
          modelValue[1] = end
          emits('update:modelValue', state.modelValue)
        } else {
          state.modelValue = end
          emits('update:modelValue', state.modelValue)
        }
      },
    })

    onMounted(() => {
      useSpace()
      useSlider()

      window.addEventListener('resize', () => {
        useSpace()
        useSlider()
      })
    })

    const usePos = (dot) =>
      ((dot.num - min.value) / (max.value - min.value)) * 100

    watchEffect(() => {
      isTooltip.value = isDrag.value || isHover.value || showTooltip.value

      state.modelValue = props.modelValue
      if (!range.value) {
        end.num = props.modelValue
        end.x = usePos(end)
        propress.width = end.x + '%'
      }
    })
    
    const useSpace = () => {
      const el = instance.vnode.el
      propress.maxWidth = el.getBoundingClientRect().width
      space.value = propress.maxWidth / (max.value - min.value)
      step.value && (steps.value = max.value - min.value + 1)
    }

    const useSlider = () => {
      start.x = range.value ? usePos(start) : 0
      end.x = usePos(end)

      let a = start
      let b = end
      if (end.x >= start.x) {
        a = end
        b = start
      }
      
      propress.width = a.x - b.x + '%'
      propress.left = b.x + '%'
      model.value = {
        start: b.num,
        end: a.num,
      }
    }

    const handleDown = (e, type) => {
      const dot = type === 'start' ? start : end
      const touchX = e.screenX - dot.num * space.value + space.value * min.value
      isDrag.value = true
      on(document, 'mousemove', move)
      on(document, 'mouseup', () => {
        isDrag.value = false
        off(document, 'mousemove', move)
      })

      function move(e) {
        e.preventDefault()
        let mx = e.screenX - touchX
        mx < 0 && (mx = 0)
        mx > propress.maxWidth && (mx = propress.maxWidth)
        const num = Math.round(mx / space.value) + min.value
        dot.num = num
        useSlider()
      }
    }

    function handleEnter() {
      isHover.value = true
    }

    function handleLeave() {
      isHover.value = false
    }

   
</script>
