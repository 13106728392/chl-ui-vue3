import{_ as t,d as n,c,o as l,e}from"./index.0d3f9942.js";const s={class:"markdown-container chl-doc"},u=e("h1",null,"Modal \u5BF9\u8BDD\u6846",-1),a=e("blockquote",null,[e("p",null,"\u6A21\u6001\u5BF9\u8BDD\u6846")],-1),r=e("h2",null,"\u6F14\u793A",-1),p=e("blockquote",null,[e("p",null,"\u4F7F\u7528 \u2018click\u2019 \u63A7\u5236\u6253\u5F00\u5173\u95ED")],-1),d=e("pre",null,[e("code",{class:"language-html"},`<template>
   <c-button type="primary" @click="openModal">openModal</c-button>
</template>

<script>
  import {ref, getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
     const {$modal } = instance?.appContext.config.globalProperties;

      const openModal = () => {
        $modal({
          content: "error",
          type: "warning",
          onClose: () => {
            console.log("onClose");
          },
          confirm: () => {
            console.log("confirm");
          },
        });
      }
      return {
        openModal
      }
    }
  }
<\/script>
`)],-1),i=[u,a,r,p,d],g={title:"Modal \u5BF9\u8BDD\u6846",tag:"Feedback"},B="",_=n({__name:"README",setup(m,{expose:o}){return o({frontmatter:{title:"Modal \u5BF9\u8BDD\u6846",tag:"Feedback"},excerpt:void 0}),(f,h)=>(l(),c("div",s,i))}});var k=t(_,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/modal/README.md"]]);export{k as default,B as excerpt,g as frontmatter};
