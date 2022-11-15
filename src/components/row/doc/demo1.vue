
<template>
  <div class="components-grid-demo">
    <c-row>
      <c-col :span="24" class="color1">24: 100%</c-col>
    </c-row>
    <c-row>
      <c-col :span="12" class="color2">12: 50%</c-col>
      <c-col :span="12" class="color3">12: 50%</c-col>
    </c-row>
    <c-row>
      <c-col :span="8" class="color1">8: 33.33%</c-col>
      <c-col :span="8" class="color2">8: 33.33%</c-col>
      <c-col :span="8" class="color1">8: 33.33%</c-col>
    </c-row>
    <c-row>
      <c-col :span="6" class="color3">6: 25%</c-col>
      <c-col :span="6" class="color2">6: 25%</c-col>
      <c-col :span="6" class="color3">6: 25%</c-col>
      <c-col :span="6" class="color2">6: 25%</c-col>
    </c-row>
    <c-row>
      <c-col :span="16" class="color1">16: 66.66%</c-col>
      <c-col :span="8" class="color2">8: 33.33%</c-col>
    </c-row>
  </div>
</template>