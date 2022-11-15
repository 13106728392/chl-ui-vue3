<template>
     <div class="components-grid-demo">
    <c-row type="flex" justify="start" >
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
    </c-row>
    <c-row type="flex" justify="end">
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
    </c-row>
    <c-row type="flex" justify="center">
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
    </c-row>
    <c-row type="flex" justify="space-between">
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
    </c-row>
    <c-row type="flex" justify="space-around">
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
      <c-col :span="4" class="color1"><div>col-4</div></c-col>
      <c-col :span="4" class="color2"><div>col-4</div></c-col>
    </c-row>
     </div>
  </template>
  