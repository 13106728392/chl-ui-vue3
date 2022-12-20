<template>
    <div class="demo-progress">
      <c-progress type="circle" :percentage="0" />
      <c-progress type="circle" :percentage="25" />
      <c-progress type="circle" :percentage="100" status="success" />
      <c-progress type="circle" :percentage="70" status="warning" />
      <c-progress type="circle" :percentage="50" status="error" />
    </div>
  </template>
  
  <style scoped>
  .demo-progress .c-progress--circle {
    margin-right: 15px;
  }
  </style>