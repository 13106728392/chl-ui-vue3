<script setup>
import demo1 from './doc/demo1.vue';
import demo2 from './doc/demo2.vue';
import demo3 from './doc/demo3.vue';
import demo4 from './doc/demo4.vue';
import demo5 from './doc/demo5.vue';
import demoblock from '@example/views/demoblock.vue';
</script>



---

title: Input 输入框
tag: Data Entry
---

# Input 输入框

### 通过鼠标或键盘输入内容，是最基础的表单域的包装

## 演示

### 使用 `v-model` 实现数据的双向绑定

<br/>
<div class="source">
  <demo1/>
</div>
<demoblock compname="input" demoname="demo1" />





## 禁用

### 通过 `disabled` 属性指定是否禁用 input 组件

<br/>
<div class="source">
  <demo2/>
</div>
<demoblock compname="input" demoname="demo2" />





## 前缀和后缀图标

### 通过设置 `icon-before` 和 `icon-after` 设置前缀及后缀图标


<br/>
<div class="source">
  <demo3/>
</div>
<demoblock compname="input" demoname="demo3" />





## 可清空

### 通过设置 `clearable` 可以开启输入框的清空

<br/>
<div class="source">
  <demo4/>
</div>
<demoblock compname="input" demoname="demo4" />




## 文本域

### 设置 `type` 属性为 `textarea`
 `maxlength` 可以限制 `textarea` 的输入长度


<br/>
<div class="source">
  <demo5/>
</div>
<demoblock compname="input" demoname="demo5" />



## Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text | text |
| value / v-model | 绑定值           | string / number  | — | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| showPassword  | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用             | boolean         | — | false   |
| size          | 尺寸大小          | string          | medium / small / mini  | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |


## Events
| 事件名 | 说明 | 回调参数 |  示例  |
|----------|--------|---------|--------|
| blur   | 在 Input 失去焦点时触发 | (event: Event) | blur=(e)=>{console.log(e)} |
| focus  | 在 Input 获得焦点时触发 | (event: Event) | focus=(e)=>{console.log(e)} |
| change | 在 Input 失去焦点或用户按下回车时触发 | (event: Event) | change=(e)=>{console.log(e)} |
| input  | 在 Input 值改变时触发 | (value: string \| number) | input=(e)=>{console.log(e)} |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |  — | 

<br/>