

<template>
    <c-carousel width="500px" height="250px" autoplay>
      <c-carousel-item :class="`demo-carousel color${item}`" v-for="item in 4">
        {{item}}
      </c-carousel-item>
    </c-carousel>
  </template>