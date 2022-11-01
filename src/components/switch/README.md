<script setup>
import demo1 from './doc/demo1.vue';
import demo2 from './doc/demo2.vue';
import demo3 from './doc/demo3.vue';
import demo4 from './doc/demo4.vue';
import demoblock from '@example/views/demoblock.vue';
</script>


# Switch 开关
### 开关选择器

## 演示
### 切换状态时，触发事件
 当状态改变时，会触发 `change` 事件

 
<br/>
<div class="source">
  <demo1/>
</div>
<demoblock compname="switch" demoname="demo1" />





## 文字和图标
### 自定义内容, 建议文字长度保持统一
 使用 `open` 和 `close` 插槽

<br/>
<div class="source">
  <demo2/>
</div>
<demoblock compname="switch" demoname="demo2" />


## 不同色系
### 提供了 `primary` `info` `danger` `success` `warning` 五种颜色， 默认`primary`


<br/>
<div class="source">
  <demo3/>
</div>
<demoblock compname="switch" demoname="demo3" />





## 不可点击
### 禁止点击状态



<br/>
<div class="source">
  <demo4/>
</div>
<demoblock compname="switch" demoname="demo4" />




## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   | 绑定值   | boolean  | true / false | — |
| disabled  | 是否禁用    | boolean   | true / false | false   |
| active-text  | switch 打开时的文字描述    | string   | — | — |
| inactive-text  | switch 关闭时的文字描述    | string   | — | — |
| active-color  | switch 打开时的背景色    | string   | — | #409EFF |
| inactive-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| size  | 	switch 的大小    | string   | large / default / small | — |

<br/>

## Events
| 事件名称      | 说明    | 回调参数      |
|----------     |-------- |----------    |
| change         | switch 状态发生变化时的回调函数    | 新状态的值 |

<br/>