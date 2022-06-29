<template>
  <transition name="slideY-fade" @after-leave="afterLeave" appear>
    <div class="c-message" v-show="isShow">
      <span><i :class="icon[type]" />{{ content }}</span>
    </div>
  </transition>
</template>



<script lang="ts" setup>
import { defineEmits, defineProps, ref ,computed ,getCurrentInstance} from "vue";

    name:'Message'
    const instance = getCurrentInstance()
    const isShow = ref(true)

   const props = defineProps({
        content: [String, Number, Boolean],
        type: String,
        duration: {
            type: Number,
            default: 2000,
        },
    })

    if (props.duration > 0) {
      setTimeout(close, props.duration)
    }

    function close() {
      isShow.value = false
    }

    const icon = {
      info: 'c-icon-info info',
      error: 'c-icon-c-circle error',
      success: 'c-icon-check-circle success',
      warning: 'c-icon-alert-triangle warning',
      loading: 'c-icon-loader loading',
    }


    const afterLeave = ()=>{
        instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
    }



</script>
