<script setup>
import demo1 from './doc/demo1.vue';
import demo2 from './doc/demo2.vue';
import demo3 from './doc/demo3.vue';

import demoblock from '@example/views/demoblock.vue';
</script>



# Message 消息
### 消息通知

## 演示
### 最基本的提示，默认在 `3` 秒后消失。
 `message` 会被挂载在 `vue` 全局属性中, 当然也可以引入 `chl-ui` 直接使用

 
<br/>
<div class="source">
  <demo1/>
</div>
<demoblock compname="message" demoname="demo1" />



## 提示类型
### 调用 `message` 下的 `info` `error` `success` `warning`来选择合适的场景。
 
 
<br/>
<div class="source">
  <demo2/>
</div>
<demoblock compname="message" demoname="demo2" />




## 等待中

 关闭时间为 `0` 的时候需要手动关闭


<br/>
<div class="source">
  <demo3/>
</div>
<demoblock compname="message" demoname="demo3" />



