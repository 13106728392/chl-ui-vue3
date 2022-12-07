<script setup>
import demo1 from './doc/demo1.vue'
import demo2 from './doc/demo2.vue'
import demo3 from './doc/demo3.vue'

import demoblock from '@example/views/demoblock.vue';
</script>




# Tooltip 文字提示
> 用于辅助的文字提示，可代替 HTML 元素默认的 title 属性

## 演示
> 基本使用
<div class="source">
  <demo1/>
</div>
<demoblock compName="tooltip" demoName="demo1"/>




## 位置
> left , top , right , bottom 是物理中的 4 个方向, 表示显示的位置
<div class="source">
  <demo2/>
</div>
<demoblock compName="tooltip" demoName="demo2"/>





## 设置宽度
> 可以设置`tooltip`的宽度 换行可以用 `br`
<div class="source">
  <demo3/>
</div>
<demoblock compName="tooltip" demoName="demo3"/>




