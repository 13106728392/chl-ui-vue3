<script setup>
import demo1 from './doc/demo1.vue';
import demo2 from './doc/demo2.vue';
import demo3 from './doc/demo3.vue';

import demoblock from '@example/views/demoblock.vue';
</script>

# Menu 导航菜单
### 为页面和功能提供导航的菜单列表


## 演示
### 水平的顶部导航菜单


<br/>
<div class="source">
  <demo1/>
</div>
<demoblock compname="menu" demoname="demo1" />




## 垂直菜单
### 垂直菜单，可内嵌子菜单，目前仅支持二级菜单


<br/>
<div class="source">
  <demo2/>
</div>
<demoblock compname="menu" demoname="demo2" />




## 只展开当前菜单
### 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁

<br/>
<div class="source">
  <demo3/>
</div>
<demoblock compname="menu" demoname="demo3" />






