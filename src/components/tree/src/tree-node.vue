<template>
  <ul class="c-tree-node" :style="nodeStyle">
    <div :class="[
      'c-tree-node__content'
    ]" @click.stop="handleToggle(items)">
      <span :class="expandIconClass">
        <i class="icon" :class="iconClass"></i>
      </span>
      <c-checkbox class="c-tree-node-checkbox" v-if="showCheckbox" v-model="items.isChecked"
        :indeterminate="items.indeterminate" :disabled="items.disabled" @change="handleCheckChange">
      </c-checkbox>
      <span>{{ items.label }}</span>
      <node-content :data="items" :render-content="renderContent" :parent-data="parentData" />
    </div>
    <div class="c-tree-ul-box" v-if="isShow" v-show="items.isOpen">
      <tree-node v-for="(it, j) in items.children" :key="j" :items="it" :label="label" :children="children"
        :show-checkbox="showCheckbox" :index="index + 1" :node-key="nodeKey"
        :default-expanded-keys="defaultExpandedKeys" :default-checked-keys="defaultCheckedKeys"
        :default-expand-all="defaultExpandAll" :render-content="renderContent" :parent-data="items.children">
      </tree-node>
    </div>
  </ul>
</template>
  

<script lang="ts" setup>
import { defineProps, ref, computed, inject, onMounted, nextTick, watch } from 'vue';
import nodeContent from './node-content.vue'
import cCheckbox from '../../checkbox'


const props = defineProps({
  items: {
    type: Object,
    default: () => { }
  },
  label: {
    type: String,
    default: ''
  },
  children: {
    type: String,
    default: ''
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  index: {
    type: Number,
    default: 0
  },
  nodeKey: {
    type: String,
    default: ''
  },
  // 默认展开项
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  // 默认选中项
  defaultCheckedKeys: {
    type: Array,
    default: () => []
  },
  // 默认展开所有
  defaultExpandAll: {
    type: Boolean,
    default: false
  },
  renderContent: {
    type: Function,
    default: () => null
  },
  parentData: {
    type: Array,
    default: () => []
  },
})




const checkboxChange = inject('checkboxChange')
const toggleChange = inject('toggle-change')
const checkedChange = inject('checked-change')

onMounted(() => {
  _initDefault()
})

watch(() => props.defaultCheckedKeys, (val) => {
  if (val) {
    _initDefault()
  }
})


const iconClass = computed(() => {
  return {
    'c-icon-chevron-right': props.items.children && props.items.children.length
  }
})

const expandIconClass = computed(() => {
  return [
    '',
    {
      expanded: props.items.isOpen
    }
  ]
})

const nodeStyle = computed(() => {
  return {
    'padding-left': props.index * 15 + 'px'
  }
})


const isShow = computed(() => {
  return props.items.children && props.items.children.length
})


const handleToggle = (item) => {
  item.isOpen = !item.isOpen
  // 展开/收起子节点时触发
  toggleChange(item)
}


const handleCheckChange = (val) => {
  updateChildChecked(props.items, val)   // 设置子级
  updateParentChecked()   // 设置父级

  checkedChange(props.items)
}


const updateParentChecked = () => {
  nextTick(() => {
    checkboxChange && checkboxChange()
  })
}


// 选中一个节点时，递归地遍历下面所属的所有子节点
const updateChildChecked = (item, val) => {
  item.isChecked = val
  if (item.children && item.children.length) {
    item.children.forEach(el => {
      updateChildChecked(el, val)
    })
  }
}


// 初始化默认的展开项和选中项
const _initDefault = () => {
  let { items, nodeKey, defaultExpandedKeys, defaultCheckedKeys, defaultExpandAll } = props
  const nodeKeyValue = items[nodeKey];
  const isExpand = defaultExpandedKeys.includes(nodeKeyValue) || defaultExpandAll;
  const isChecked = defaultCheckedKeys.includes(nodeKeyValue);
  items.isOpen = isExpand
  items.isChecked = isChecked

  nextTick(() => {
    // 设置默认节点，需要默认勾选对应的所有子节点
    if (isChecked) {
      updateChildChecked(props.items, isChecked);
    }
    updateParentChecked();
  })
}


</script>

<style leng="less">
.slide-top-enter-active,
.slide-top-leave-active {
  transition: all .3s ease;
  /* transform: translateY(0); */
  opacity: 1;
}

.slide-top-enter-from,
.slide-top-leave-to {
  /* transform: translateY(-100%); */
  opacity: 0;
}
</style>