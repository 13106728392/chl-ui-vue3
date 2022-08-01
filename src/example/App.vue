
<template>
  <c-input placeholder="请输入" clearable @change="changeText" />

  <c-icon type="c-icon-link"></c-icon>

  <c-button type="primary" size="mini">primary</c-button>
  <c-button type="info" size="mini" circle>info</c-button>
  <c-button type="text" size="mini">success</c-button>
  <c-button type="warning" size="mini" icon="c-icon-link"></c-button>
  <c-button type="danger" size="mini" @click="clickBtn">danger</c-button>
  <c-button type="danger" size="mini" plain>plain</c-button>

  <c-button type="danger" size="mini" @click="handerClick" plain>Message</c-button>

  <c-button type="success" size="mini" @click="handerClick1" plain>success</c-button>

  <c-switch v-model="state1">switch</c-switch>
  <c-switch type="warning" v-model="state1" @change="defaultChange('switch2')">
    <template #open>开</template>
    <template #close>关</template>
  </c-switch>

  <c-button type="primary" @click="openModal">openModal</c-button>

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


  <div class="components-grid-demo">
    <c-carousel width="500px" height="250px" autoplay>
      <c-carousel-item :class="`color${item}`" :key="item" v-for="item in 4">
        {{ item }}
      </c-carousel-item>
    </c-carousel>
  </div>

  <div class="components-grid-demo">
  <c-menu style="width: 256px" >
    <c-menu-item name="1">导航一</c-menu-item>
    <c-sub-menu name="2">
      <template #title>导航二</template>
      <c-menu-item-group title="小标题">
        <c-menu-item name="2-1">子菜单一</c-menu-item>
        <c-menu-item name="2-2">子菜单二</c-menu-item>
      </c-menu-item-group>
    </c-sub-menu>
    <c-sub-menu name="3">
      <template #title>导航三</template>
      <c-menu-item-group>
        <c-menu-item name="3-1">子菜单一</c-menu-item>
        <c-menu-item name="3-2">子菜单二</c-menu-item>
      </c-menu-item-group>
    </c-sub-menu>
    <c-menu-item name="4">导航四</c-menu-item>
  </c-menu>
  </div>

 <div class="components-grid-demo">
    <c-menu   mode="horizontal">
    <c-menu-item name="1">导航一</c-menu-item>
    <c-sub-menu name="2">
      <template #title>导航二</template>
      <c-menu-item-group title="小标题">
        <c-menu-item name="2-1">子菜单一</c-menu-item>
        <c-menu-item name="2-2">子菜单二</c-menu-item>
      </c-menu-item-group>
    </c-sub-menu>
    <c-sub-menu name="3">
      <template #title>导航三</template>
      <c-menu-item-group>
        <c-menu-item name="3-1">子菜单一</c-menu-item>
        <c-menu-item name="3-2">子菜单二</c-menu-item>
      </c-menu-item-group>
    </c-sub-menu>
    <c-menu-item name="4">导航四</c-menu-item>
  </c-menu>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";

const changeText = (data: string) => {
  console.log(data);
};

const ok = () => {
  console.log("ok");
};
const onClose = () => {
  console.log("onClose");
};
const clickBtn = () => {
  console.log(55);
};

const state1 = ref(false);
const instance = getCurrentInstance();
const { $message, $modal } = instance?.appContext.config.globalProperties;
const defaultChange = (val) => {
  console.log(val);
};

const openModal = () => {
  $modal({
    content: "error",
    type: "warning",
    onClose: () => {
      console.log("onClose");
    },
    confirm: () => {
      console.log("confirm");
    },
  });
};
const handerClick = () => {
  // $message.success('你好呀')
  $message({
    content: "error",
    type: "error",
    onClose: () => {
      console.log(6777);
    },
    duration: 0,
  });
};

const handerClick1 = () => {
  $message({
    content: "success",
    type: "success",
    onClose: () => {
      console.log(77777);
    },
    // duration: 0
  });
};
</script>
<style lang="less" scoped>
.components-grid-demo {
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  display: block;
}

.color1 {
  background-color: rgb(108, 250, 153);
}

.color2 {
  background-color: rgb(89, 211, 235);
}

.color3 {
  background-color: rgb(249, 211, 107);
}

.color4 {
  background-color: rgb(247, 122, 77);
}
</style>
