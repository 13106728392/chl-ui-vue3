<template>
    <c-input placeholder="请输入" clearable @change="changeText" />
   
    <c-icon type="c-icon-link"></c-icon>


    <c-button type="primary" size="mini">primary</c-button>
    <c-button type="info" size="mini">info</c-button>
    <c-button type="success" size="mini" :loading="true" >success</c-button>
    <c-button type="warning" size="mini" icon="c-icon-link"  >warning</c-button>
    <c-button type="danger" size="mini" @click="clickBtn">danger</c-button>




</template>

<script setup lang="ts">
  import cInput from  '../components/input' 
  import cIcon from  '../components/icon' 
  import cButton from  '../components/button' 
  
  const changeText =(data:string)=>{
    console.log(data)
  }
  const clickBtn =()=>{
    console.log(55)
  }



</script>
