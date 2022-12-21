<template>

<div class="c-time-panel__wrap">
    <div class="c-time-panel__title" v-if="title">{{title}}</div>
    <div class="c-time-panel__content">
      <div class="c-time-spinner__wrapper" ref="hourCol">
        <ul class="c-time-spinner__ul">
          <li 
            :class="getCellCls(item)"
            v-for="(item,index) in hoursList" 
            :key="index" 
            @click="handleClick('hour',item,index)"
          >
            {{ formatTime(item.text) }}
          </li>
        </ul>
      </div>
      <div class="c-time-spinner__wrapper" ref="minuteCol">
        <ul class="c-time-spinner__ul">
          <li 
            :class="getCellCls(item)"
            v-for="(item,index) in minutesList" 
            :key="index" 
            @click="handleClick('minute',item,index)"
          >
            {{ formatTime(item.text) }}
          </li>
        </ul>
      </div>
      <div class="c-time-spinner__wrapper" ref="secondCol">
        <ul class="c-time-spinner__ul">
          <li 
            :class="getCellCls(item)"
            v-for="(item,index) in secondsList" 
            :key="index"
            @click="handleClick('second',item,index)"
          >
            {{ formatTime(item.text) }}
          </li>
        </ul>
      </div> 
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps,ref,computed,nextTick} from 'vue'
import { deepCopy} from '../../../utils/time';
const emits = defineEmits(['on-change','item-click']);
const props =defineProps({
    hours:{
        type: [Number, String],
        default: NaN 
    },
    minutes:{
        type: [Number, String],
        default: NaN 
    },
    seconds:{
        type: [Number, String],
        default: NaN 
    }
}) 




const hoursList = computed(() => {
  let hours = [];
  const hour_tmpl = {
    text: 0,
    selected: false,
    disabled: false,
    hide: false
  };
  for (let i = 0; i < 24; i++) {
    const hour = deepCopy(hour_tmpl);
    hour.text = i;

    if (props.hours == i) hour.selected = true;
    hours.push(hour);
  }
  return hours;
})

const minutesList = computed(() => {
  let minutes = [];
  const minute_tmpl = {
    text: 0,
    selected: false,
    disabled: false,
    hide: false
  };
  for (let i = 0; i < 60; i++) {
    const minute = deepCopy(minute_tmpl);
    minute.text = i;

    if (props.minutes == i) minute.selected = true;
    minutes.push(minute);
  }
  return minutes;
})

const secondsList = computed(() => {
  let seconds = [];
  const second_tmpl = {
    text: 0,
    selected: false,
    disabled: false,
    hide: false
  };
  for (let i = 0; i < 60; i++) {
    const second = deepCopy(second_tmpl);
    second.text = i;
    
    if (props.seconds == i) second.selected = true;
    seconds.push(second);
  }
  return seconds;
})



const formatTime = (text:number|string) => {
  return text < 10 ? '0' + text : text;
}


const getCellCls = (cell) => {
  return [
    'c-time-spinner__item',
    {
      'cell-selected': cell.selected,
      'cell-disabled': cell.disabled
    }
  ]
}

const hourCol = ref(null);
const minuteCol = ref(null);
const secondCol = ref(null);


const handleClick= (type,item,index)=>{

    if (item.disabled) return;
  const targetMaps = {
    hour: hourCol.value,
    minute: minuteCol.value,
    second: secondCol.value,
  };
  const target = targetMaps[type];

  const scroll = () => {
    if (target) {
      scrollTo(target,index);
    }
  };
  emits('item-click',type, item, scroll)
}


// 重置滚动位置
const resetScroll = (arr) => {
  nextTick(() => {
    [hourCol, minuteCol, secondCol].forEach((ref, index) => {
      scrollTo(ref.value, Number(arr[index]));
    });
  })
}


// 滚动到顶部
const scrollTo = (target, index) => {
  const firstItemHeight = target.querySelector('.c-time-spinner__item').clientHeight;
  nextTick(() => {
    target.scrollTop = index * firstItemHeight
  })
}


defineExpose({
  resetScroll
})

</script>