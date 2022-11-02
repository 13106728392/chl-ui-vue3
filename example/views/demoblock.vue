<template>
  <div class="chl-code-box">
    <transition name="fade">
      <pre class="language-html" v-if="showCode" v-highlight>
      <code class="language-html">{{ sourceCode }}</code>
    </pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <i :class="iconClass"></i>
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import emitter from "../utils/bus";
// vite glob导入解决
const modules = import.meta.glob('@/components/*/*.vue')

const props = defineProps({
 
  compname: {
    type: String,
    default: "",
    require: true,
  },
  demoname: {
    type: String,
    default: "",
    require: true,
  },
});


const showCode = ref(false); // 默认不显示代码
const sourceCode = ref(""); // 展示的源代码
const isDev = import.meta.env.MODE === 'pro';

console.log(isDev)
// const isDev = true

const iconClass = computed(() => {
  return [
    'iconfont',
    showCode.value ?  'c-icon-arrow-up' :'c-icon-arrow-down' 
  ]
})

const showOrhideCode = () => {
  emitter.emit('previewChange', 'ok');
  showCode.value = !showCode.value;
}


// 获取源代码
const getSourceCode = async () => {
  if (isDev) {
    let msg = await import(`/src/components/${props.compname}/doc/${props.demoname}.vue?raw`)
    sourceCode.value =msg.default
  } else {
    sourceCode.value = await fetch(`/chl-ui-vue3/src/components/${props.compname}/doc/${props.demoname}.vue`).then(res => res.text());
  }
}

onMounted(() => {
  getSourceCode()
})

</script>

<style lang='less' scoped>
.chl-code-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  position: relative;
  transition: all 1s ease-out;

  &:hover {
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  }

  pre {
    margin-top: -15px;
    margin-bottom: 0;
  }

  .showCode {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    background: #f9f9f9;
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }

    span {
      margin-left: 10px;
    }
  }
}
</style>
