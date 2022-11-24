<template>
    <div class="c-tabs__header" :class="typeClass">
      <div class="c-tabs__nav-scroll">
        <div class="c-tabs__nav">
          <component
            v-for="(pane,index) in panes"
            :is="getLabelNode(pane)"
            :key="index"
          />
        </div>
      </div>
    </div>
  </template>

  
<script lang="ts" setup>
import {ref,reactive,computed,h} from 'vue';



const emits = defineEmits(["onTabClick"]);
const props = defineProps({
  panes: {
    type: Array,
    default: [],
  },
  currentName: {
    type: String,
  },
  active_color: {
    type: String,
  },
  type: {
    type: String,
    default: "line",
  },
  tabPosition: {
    type: String
  },
  activeColor: {
    type: String,
    default: '',
  }
})



const typeClass = computed(() => {
  return {
    [`tabs_header_${props.type}`]: props.type,
    [`is-${props.tabPosition}`]: props.tabPosition
  }
});

const hanleClick = (pane, $event) => {
  const tabName = pane.props.name
  emits("onTabClick", tabName, $event);
}

const isActive = (pane) => {
  return props.currentName === pane.props.name
}



const getLabelNode = (pane)=>{
  // console.log(pane.props)
  // h函数渲染虚拟dom
  return h(
    "div",
    {
      class: {
        'c-tabs__item': true,
        'is-active': isActive(pane),
        'is-disabled': pane.props.disabled
      },
      style: { 
        color: isActive(pane) ? props.activeColor : '',
        borderBottom: props.activeColor && isActive(pane) ? `2px solid ${props.activeColor}` : '',
      },
      onClick: pane.props.disabled ? null : ($event) => hanleClick(pane, $event),
    },
    [
      h(
        'i',
        {
          class: `iconfont ${pane.props.icon}`
        }
      ),
      pane.props.label,
    ]
  );

}
</script>