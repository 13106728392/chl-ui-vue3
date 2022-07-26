<template>
  <c-input placeholder="请输入" clearable @change="changeText" />

  <c-icon type="c-icon-link"></c-icon>


  <c-button type="primary" size="mini">primary</c-button>
  <c-button type="info" size="mini" circle>info</c-button>
  <c-button type="text" size="mini">success</c-button>
  <c-button type="warning" size="mini" icon="c-icon-link"></c-button>
  <c-button type="danger" size="mini" @click="clickBtn">danger</c-button>
  <c-button type="danger" size="mini" plain>plain</c-button>


  <c-button type="danger" size="mini" @click="handerClick" plain>Message</c-button>

  <c-button type="success" size="mini" @click="handerClick1" plain>success</c-button>

  <c-switch v-model="state1">switch</c-switch>
  <c-switch type="warning" v-model="state1" @change="defaultChange('switch2')">
    <template #open>开</template>
    <template #close>关</template>
  </c-switch>


  <c-button type="primary" @click="openModal">openModal</c-button>




</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'

const changeText = (data: string) => {
  console.log(data)
}

const ok = () => { 
  console.log('ok')
}
const onClose = ()=>{
  console.log('onClose')
}
const clickBtn = () => {
  console.log(55)
}

const state1 = ref(false)
const instance = getCurrentInstance()
const { $message ,$modal} = instance.appContext.config.globalProperties
const defaultChange = (val) => {
  console.log(val)
}

const openModal = ()=>{
  $modal({
      content: 'error',
      type: 'warning',
      onClose: () => {
        console.log('onClose')
      },
      confirm :()=>{
        console.log('confirm')
      }
  })
  
}
const handerClick = () => {
  // $message.success('你好呀')
  $message(
    {
      content: 'error',
      type: 'error',
      onClose: () => {
        console.log(6777)
      },
      duration: 0

    }

  )
}

const handerClick1 = () => {
  $message(
    {
      content: 'success',
      type: 'success',
      onClose: () => {
        console.log(77777)
      },
      // duration: 0
    }
  )
}




</script>
