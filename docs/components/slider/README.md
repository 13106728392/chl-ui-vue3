<script setup>
import demo1 from './doc/demo1.vue'
import demo2 from './doc/demo2.vue'
import demo3 from './doc/demo3.vue'
import demo4 from './doc/demo4.vue'
import demo5 from './doc/demo5.vue'
import demoblock from '@example/views/demoblock.vue';
</script>

# Slider 滑动块
> 滑动范围输入控件

## 演示
> 拖动滑块时，显示数值
<div class="source">
  <demo1/>
</div>
<demoblock compName="slider" demoName="demo1"/>





## 范围选择
> `min` 和 `max` 可以限制最小值和最大值

<div class="source">
  <demo2/>
</div>
<demoblock compName="slider" demoName="demo2"/>





## 双滑块
> 当`v-model`的值为`array`类型时，开启双滑块


<div class="source">
  <demo3/>
</div>
<demoblock compName="slider" demoName="demo3"/>




## 显示间隔
> 设置`step`显示间隔
<div class="source">
  <demo4/>
</div>
<demoblock compName="slider" demoName="demo4"/>







## 显示ToolTip
> 当 `show-tooltip` 为 `true` 时，将始终显示`ToolTip`；反之则始终不显示，即使在拖动、移入时也是如此。


<div class="source">
  <demo5/>
</div>
<demoblock compName="slider" demoName="demo5"/>


