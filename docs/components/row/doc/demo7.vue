
<template>
     <div class="components-grid-demo">
    <c-row>
      <c-col :span="8" class="color1"><div>col-8</div></c-col>
      <c-col :span="8" :offset="8" class="color2"><div>col-8 | offset-8</div></c-col>
    </c-row>
    <c-row>
      <c-col :span="6" :offset="8" class="color1"><div>col-6 | offset-8</div></c-col>
      <c-col :span="6" :offset="4" class="color2"><div>col-6 | offset-4</div></c-col>
    </c-row>
    <c-row>
      <c-col :span="12" :offset="8" class="color1"><div>col-12 | offset-8</div></c-col>
    </c-row>
     </div>
  </template>
  