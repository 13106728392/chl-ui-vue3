<template>
  <div class="c-select" v-inside>
    <div class="c-select-input" :class="selectInputClass" @mouseenter="inputHovering = true"
      @mouseleave="inputHovering = false">
      <input class="c-select-input__inner" type="text" autocomplete="off" :readonly="!searchable"
        :placeholder="placeholder" :value="selectVal" @input="input" :disabled="disabled">
      <i class="c-icon c-icon-chevron-down select-icon" :style="[{ transform: rotate }]" v-show="!showClose"></i>
      <i class="c-icon icon-close select-icon" v-if="showClose" @click="handleClearClick"></i>
    </div>
    <transition name="slide-fade">
      <div class="c-select-option" v-if="isShow">
        <div class="c-select-option-find">
          <ul>
            <li v-for="(item, index) in optionsData" :key="index" class="c-option-item" :class="{
              'c-option-disabled': item.disabled,
              'c-option-active': activeIndex == index || item.selected || selectVal == item.label
            }" @click="selChange(item, index)">
              {{ item.label }}
              <i class="iconfont icon-select-bold" v-if="multiple && item.selected"></i>
            </li>
            <p class="no-data" v-if="!optionsData.length">无匹配数据</p>
          </ul>
        </div>
      </div>

    </transition>
  </div>
</template>
<script lang="ts" setup>

import {
  defineEmits,
  defineProps,
  ref,
  reactive,
  computed,
  useSlots,
  getCurrentInstance,
onMounted,
} from "vue";
const emit = defineEmits(["update:modelValue","change"]);

const props = defineProps({
  disabled: { // 是否可
    type: Boolean,
    default: false
  },
  multiple: { // 是否多个标签
    type: Boolean,
    default: false
  },
  modelValue: { // 默认值
    type: String,
    default: ''
  },
  searchable: { // 是否可以搜索
    type: Boolean,
    default: false
  },
  placeholder: { // 默认提示
    type: String,
    default: '请选择'
  },
  clearable: { // 是否清空
    type: Boolean,
    default: false
  }
})
interface itemObj {
    label: string;
    value: string;
    [propName: string]: any;
}
const inputHovering = ref(false);
const selectVal = ref(props.modelValue)
const rotate = ref("rotate(0deg)");
const optionsData:itemObj[]= ref([]);
const isShow = ref(false);
let allData = [] // 过滤数据使用
const activeIndex =ref(-1) // 当前高亮显示


const showClose = computed(() => {
  return props.clearable && selectVal.value && inputHovering.value
})

// 是否可触摸
const selectInputClass = computed(() => {
  return {
    'c-select-input-disabled': props.disabled
  }
})

// 清空
const handleClearClick = (event) => {
  event.stopPropagation();
  isShow.value = false
  selectVal.value = ''
  activeIndex.value = -1
  emit("update:modelValue", '');
}

// 获取焦点
const onFocus = () => { 
  isShow.value = true
  rotate.value = "rotate(180deg)"
}

// 失去焦点
const onBlur = () => { 
  isShow.value = false
  rotate.value = "rotate(0deg)"
}

const vInside = {
  // el 是select中input区域
  beforeMount(el) {
    el.handler = (e) => {
      if (props.disabled) return
      if (el.contains(e.target)) {
        onFocus()
        // 选择之后并且没disabled 关闭
        if (e.target.className.indexOf('c-option-item') > -1 &&
          e.target.className.indexOf('c-option-disabled') == -1 &&
          !props.multiple) {
          onBlur()
        }
      } else {
        onBlur()
      }
    }
    if (typeof document !== "undefined") {
      document.addEventListener("click", el.handler);
    }
  },
  unmounted(el) {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", el.handler);
    }
  }
}

// 输入进行模糊搜索
const input = (event) => { 
  selectVal.value = event.target.value;
  let filterList = allData.filter((item) => {
    return item['label'].toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
  })
  optionsData.value = filterList
}

const slots = useSlots()
const updateSlots = () => {
  if (!slots.default) {
    optionsData.value = [];
    return;
  }
  const data = slots.default()[0].children || [] // 获取slots的数据
  optionsData.value = allData = data.map(item=>item.props)
}

// 选择事件
let labels = [];
let indexs = [];
const selChange=(item:itemObj,index:number)=>{
  if(item.disabled) return
  // 单选
  if(!props.multiple){
    activeIndex.value = index
    selectVal.value = item.value
    // 触发父节点更新
    emit("update:modelValue", item.value);
    emit("change", { lable: item.label, value: item.value, index: index });
  }else{
    // 多选逻辑
    item.selected = !item.selected;
    if (item.selected) {
      selectVal.value.push(item.label);
      labels.push(item.label);
      indexs.push(index);
    } else {
      selectVal.value.splice(selectVal.value.indexOf(item.label), 1);
      labels.splice(labels.indexOf(item.label), 1);
      indexs.splice(indexs.indexOf(index), 1);
    }
    emit("update:modelValue", selectVal.value);
    emit("change", { lable: labels, value: selectVal.value, index: indexs });
  }
}



onMounted(()=>{
  updateSlots()
})

</script>