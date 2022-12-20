<template>
    <div class="demo-progress">
      <c-progress :percentage="50" />
      <c-progress :percentage="100" :format="format"></c-progress>
      <c-progress :percentage="100" status="success"></c-progress>
      <c-progress :percentage="100" status="warning"></c-progress>
      <c-progress :percentage="50" status="error"></c-progress>
    </div>
  </template>
  
  <script setup>
  const format = (percentage) => (percentage === 100 ? '满' : `${percentage}%`)
  </script>
  
  <style scoped>
  .demo-progress .c-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }
  </style>