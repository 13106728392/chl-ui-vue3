<template>
    <c-input placeholder="请输入" clearable @change="changeText" />
    <!-- <i class="x-icon-heart-on"></i> -->

    <c-icon type="x-icon-link"></c-icon>
    <c-button type="primary" size="mini">ghjghgh</c-button>
     <c-button type="info" size="mini">ghjghgh</c-button>
      <c-button type="success" size="mini">ghjghgh</c-button>
       <c-button type="warning" size="mini">ghjghgh</c-button>
        <c-button type="danger" size="mini" @click="clickBtn">ghjghgh</c-button>

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
