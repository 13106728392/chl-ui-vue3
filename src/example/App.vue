<template>
    <c-input placeholder="请输入" clearable @change="changeText" />
   
    <c-icon type="c-icon-link"></c-icon>


    <c-button type="primary" size="mini">primary</c-button>
    <c-button type="info" size="mini" circle>info</c-button>
    <c-button type="text" size="mini" >success</c-button>
    <c-button type="warning" size="mini" icon="c-icon-link"  ></c-button>
    <c-button type="danger" size="mini" @click="clickBtn">danger</c-button>
  <c-button type="danger" size="mini" plain>plain</c-button>


  <c-button type="danger" size="mini" @click="handerClick" plain>Message</c-button>
  


    


</template>

<script setup lang="ts">
  import {getCurrentInstance} from 'vue'
  import cInput from  '../components/input' 
  import cIcon from  '../components/icon' 
  import cButton from  '../components/button' 
  import cMessage from '../components/message'
  
  const changeText =(data:string)=>{
    console.log(data)
  }
  const clickBtn =()=>{
    console.log(55)
  }

  const instance = getCurrentInstance()
  console.log(instance)
  const {$message} = instance.appContext.config.globalProperties
  const handerClick = () => {
    $message.success('你好呀')
  }
  



</script>
