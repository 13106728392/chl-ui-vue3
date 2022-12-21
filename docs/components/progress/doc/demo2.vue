<template>
    <div class="demo-progress">
      <c-progress 
        :text-inside="true" 
        :stroke-width="26" 
        :percentage="70" 
      />
      <c-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="100"
        status="success"
      />
      <c-progress
        :text-inside="true"
        :stroke-width="22"
        :percentage="80"
        status="warning"
      />
      <c-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="error"
      />
    </div>
  </template>
  
  <style scoped>
  .demo-progress .c-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }
  </style>