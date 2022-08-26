---
title: Menu 导航菜单
tag: Navigation

---

# Menu 导航菜单
> 为页面和功能提供导航的菜单列表


## 演示
> 水平的顶部导航菜单

```html
<template>
  <c-menu mode="horizontal">
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
```



## 垂直菜单
> 垂直菜单，可内嵌子菜单，目前仅支持二级菜单

```html
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
```


## 只展开当前菜单
> 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁

```html
<template>
  <c-menu style="width: 256px" :uniqueOpened="true">
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
```




