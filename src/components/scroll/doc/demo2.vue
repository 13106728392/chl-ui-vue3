<template>
    <c-button type="primary" plain @click="handleClick(true)">添加内容</c-button>
    <c-button type="danger" plain @click="handleClick(false)">减少内容</c-button>
    <c-scroll :height="150" @onScroll="scroll">
        <div class="demo-scroll-item" v-for="item in count">{{ item }}</div>
    </c-scroll>
</template>
  
<script>
import { getCurrentInstance, ref } from 'vue'
export default {
    setup() {
        const instance = getCurrentInstance()
        const { $message } = instance.appContext.config.globalProperties
        const count = ref(3)

        const scroll = (val) => {
            if (val === 0) {
                $message({
                    content: "到顶部了",
                });
            } else if (val === 1) {
                $message({
                    content: "到底部了",
                });
            }
        }

        const handleClick = (val) => {
            if (val) {
                count.value += 3
            } else {
                count.value -= 3
                count.value = count.value < 0 ? 0 : count.value
            }
        }

        return {
            scroll,
            count,
            handleClick
        }
    }
}
</script>