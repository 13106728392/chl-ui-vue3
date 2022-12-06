

# Tooltip 文字提示
> 用于辅助的文字提示，可代替 HTML 元素默认的 title 属性

## 演示
> 基本使用


<template>
  <c-tooltip content="这是文字提示">
    <span>文字提示</span>
  </c-tooltip>
</template>



## 位置
> left , top , right , bottom 是物理中的 4 个方向, 表示显示的位置


<template>
  <div class="tooltip-box">
    <c-row type="flex" justify="center">
      <c-col :span="5">
        <c-tooltip content="这是文字提示" placement="top-start">
          <c-button type="primary" plain> 上左 </c-button>
        </c-tooltip>
      </c-col>
      <c-col :span="5">
        <c-tooltip content="这是文字提示" placement="top">
          <c-button type="primary" plain> 上中 </c-button>
        </c-tooltip>
      </c-col>
      <c-col :span="5">
        <c-tooltip content="这是文字提示" placement="top-end">
          <c-button type="primary" plain> 上右 </c-button>
        </c-tooltip>
      </c-col>
    </c-row>

    <c-row type="flex" justify="space-between">
      <c-col :span="4">
        <c-tooltip content="这是文字提示" placement="left-start">
          <c-button type="primary" plain> 左上 </c-button>
        </c-tooltip>
      </c-col>
      <c-col :span="4">
        <c-tooltip content="这是文字提示" placement="right-start">
          <c-button type="primary" plain> 右上 </c-button>
        </c-tooltip>
      </c-col>
    </c-row>

    <c-row type="flex" justify="space-between">
      <c-col :span="4">
        <c-tooltip content="这是文字提示" placement="left">
          <c-button type="primary" plain> 左中 </c-button>
        </c-tooltip>
      </c-col>
      <c-col :span="4">
        <c-tooltip content="这是文字提示" placement="right">
          <c-button type="primary" plain> 右中 </c-button>
        </c-tooltip>
      </c-col>
    </c-row>

    <c-row type="flex" justify="space-between">
      <c-col :span="4">
        <c-tooltip content="这是文字提示" placement="left-end">
          <c-button type="primary" plain> 左下 </c-button>
        </c-tooltip>
      </c-col>
      <c-col :span="4">
        <c-tooltip content="这是文字提示" placement="right-end">
          <c-button type="primary" plain> 右下 </c-button>
        </c-tooltip>
      </c-col>
    </c-row>

    <c-row type="flex" justify="center">
      <c-col :span="5">
        <c-tooltip content="这是文字提示" placement="bottom-start">
          <c-button type="primary" plain> 下左 </c-button>
        </c-tooltip>
      </c-col>
      <c-col :span="5">
        <c-tooltip content="这是文字提示" placement="bottom">
          <c-button type="primary" plain> 下中 </c-button>
        </c-tooltip>
      </c-col>
      <c-col :span="5">
        <c-tooltip content="这是文字提示" placement="bottom-end">
          <c-button type="primary" plain> 下右 </c-button>
        </c-tooltip>
      </c-col>
    </c-row>
  </div>
</template>

## 设置宽度
> 可以设置`tooltip`的宽度 换行可以用 `br`


<template>
  <c-tooltip content="这是一段非常长的文字提示，主要是用于演示" width="180px">
    <span>文字提示</span>
  </c-tooltip>
</template>

