<template>
  <c-checkbox-group v-model="checkList1" @change="checkChange">
    <c-checkbox label="复选框 A"></c-checkbox>
    <c-checkbox label="复选框 B"></c-checkbox>
    <c-checkbox label="复选框 C"></c-checkbox>
    <c-checkbox label="复选框 D" disabled></c-checkbox>
    <c-checkbox label="复选框 E" disabled></c-checkbox>
  </c-checkbox-group>
  <c-checkbox-group v-model="checkList2" style="margin-top:10px">
    <c-checkbox 
      v-for="(item,index) in checkOptions" 
      :key="index" 
      :label="item.label"
      :disabled="item.disabled">
    </c-checkbox>
  </c-checkbox-group>
</template>

<script setup>
import { reactive, ref } from 'vue'

const checkList1 = ref(['复选框 A', '复选框 E'])
const checkList2 = ref([])

const state = reactive({
  checkOptions:[
    {label:'复选框 A'},
    {label:'复选框 B'},
    {label:'复选框 C'},
    {label:'复选框 D',disabled:true},
    {label:'复选框 E',disabled:true}
  ]
})

const checkChange = (e) => {
  console.log(e);
}

const { checkOptions } = state;
</script>