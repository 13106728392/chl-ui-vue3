
<template>
    <div class="tooltip-box">
      <c-row type="flex" justify="center">
        <c-col :span="5">
          <c-tooltip content="这是文字提示" placement="top-start">
            <c-button type="primary" plain> 上左 </c-button>
          </c-tooltip>
        </c-col>
        <c-col :span="5">
          <c-tooltip content="这是文字提示(常显)" placement="top" show-tooltip >
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