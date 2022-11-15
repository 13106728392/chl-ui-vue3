<script setup>
import demo1 from './doc/demo1.vue';
import demo2 from './doc/demo2.vue';
import demo3 from './doc/demo3.vue';
import demo4 from './doc/demo4.vue';
import demo5 from './doc/demo5.vue';
import demo6 from './doc/demo6.vue';
import demo7 from './doc/demo7.vue';
import demo8 from './doc/demo8.vue';



import demoblock from '@example/views/demoblock.vue';
</script>

# Grid 栅格

> 24 栅格系统

<br/>
<div class="source">
  <demo1/>
</div>
<demoblock compname="row" demoname="demo1" />

## 演示

> `col` 必须放在 `row` 里面

<br/>
<div class="source">
  <demo2/>
</div>
<demoblock compname="row" demoname="demo2" />

## 区块间隔

> 通过给 `row` 添加 `gutter` 属性，可以给下属的 `col` 添加间距
<br/>
<div class="source">
  <demo3/>
</div>
<demoblock compname="row" demoname="demo3" />

## flex布局

> 通过给 `row` 设置参数 `justify` 为不同的值，来定义子元素的排布方式。在 `flex` 模式下有效。
<br/>
<div class="source">
  <demo4/>
</div>
<demoblock compname="row" demoname="demo4" />

## flex对齐

> 通过给 `row` 设置参数 `align` 为不同的值，来定义子元素在垂直方向上的排布方式。在 `flex` 模式下有效。
<br/>
<div class="source">
  <demo5/>
</div>
<demoblock compname="row" demoname="demo5" />

## 栅格顺序

> 通过 `flex` 布局的 `order` 来改变栅格的顺序
<br/>
<div class="source">
  <demo6/>
</div>
<demoblock compname="row" demoname="demo6" />

## 左右偏移

> 通过设置 `offset` 属性，将列进行左右偏移

<br/>
<div class="source">
  <demo7/>
</div>
<demoblock compname="row" demoname="demo7" />

## 响应式布局

> 参照 `Bootstrap` 的 响应式设计，预设四个响应尺寸：`xs` `sm` `md` `lg` <br>
调整浏览器尺寸来查看效果

<br/>
<div class="source">
  <demo8/>
</div>
<demoblock compname="row" demoname="demo8" />
