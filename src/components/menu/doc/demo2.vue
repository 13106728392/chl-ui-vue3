

<template>
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
  </template>
  