<script setup>
import demo1 from './doc/demo1.vue';
import demo2 from './doc/demo2.vue';
import demo3 from './doc/demo3.vue';
import demo4 from './doc/demo4.vue';
import demoblock from '@example/views/demoblock.vue';
</script>

# Scroll 滚动

### 比原生浏览器更漂亮的滚动条

## 演示

### 可以设置 `height` 控制滚动区域的高度

<br/>
<div class="source">
  <demo1/>
</div>
<demoblock compname="scroll" demoname="demo1" />

## 触发事件

### `onScroll` 事件可以知道当前滚动的比值，从而实现业务逻辑

<br/>
<div class="source">
  <demo2/>
</div>
<demoblock compname="scroll" demoname="demo2" />

## 滚动到指定坐标

### `v-model:to` 是一个双向绑定的值，用于控制滚动到指定的坐标  `alwaysVisible` 是否隐藏滚动条,默认 `true`

<br/>
<div class="source">
  <demo3/>
</div>
<demoblock compname="scroll" demoname="demo3" />

## 无限滚动

### 在滚动条 `80%` 的位置开始追加内容

<br/>
<div class="source">
  <demo4/>
</div>
<demoblock compname="scroll" demoname="demo4" />
