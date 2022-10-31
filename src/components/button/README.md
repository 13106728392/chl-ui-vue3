<script setup>
import demo1 from './doc/demo1.vue';
import demo2 from './doc/demo2.vue';
import demo3 from './doc/demo3.vue';
import demo4 from './doc/demo4.vue';
import demo5 from './doc/demo5.vue';
import demo6 from './doc/demo6.vue';
import demoblock from '@example/views/demoblock.vue';
</script>

# Button 按钮

#### 常用 button 按钮

<br/>

## 基本使用

#### button 按钮的基本使用

<br/>
<div class="source">
  <demo1/>
</div>
<demoblock compname="button" demoname="demo1" />


<br/>

## 镂空按钮

> 设置 `plain` 属性可以设置镂空按钮

<div class="source">
  <demo2/>
</div>
<demoblock compname="button" demoname="demo2" />


<br/>



## 圆角按钮

> 设置 `round` 属性可以设置圆角按钮


<div class="source">
  <demo3/>
</div>
<demoblock compname="button" demoname="demo3" />


<br/>


## 加载中状态

> 添加 `loading` 属性即可让按钮处于加载状态

<div class="source">
  <demo4/>
</div>
<demoblock compname="button" demoname="demo4" />


<br/>

## 托管加载状态

> 你只需要返回一个 `promise`，组件会托管 `loading`，这在发送请求的时候有奇效


<div class="source">
  <demo5/>
</div>
<demoblock compname="button" demoname="demo5" />


<br/>


## 不可点击

> 设置 `disabled` 属性达到按钮不可点击状态


<div class="source">
  <demo6/>
</div>
<demoblock compname="button" demoname="demo6" />


<br/>







## Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| leftIcon  | 图标按钮，并且icon展示在左侧 | string   | 参考图标库 |  —  |
| rightIcon  | 图标按钮，并且icon展示在右侧 | string   |  参考图标库  |  —  |

<br/>
