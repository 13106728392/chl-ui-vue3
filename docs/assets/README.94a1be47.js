import{d as o,c as n,o as c,e as t}from"./index.bc64ced0.js";const l={class:"markdown-container chl-doc"},u=t("h1",null,"Modal \u5BF9\u8BDD\u6846",-1),s=t("blockquote",null,[t("p",null,"\u6A21\u6001\u5BF9\u8BDD\u6846")],-1),a=t("h2",null,"\u6F14\u793A",-1),r=t("blockquote",null,[t("p",null,"\u4F7F\u7528 \u2018click\u2019 \u63A7\u5236\u6253\u5F00\u5173\u95ED")],-1),p=t("pre",null,[t("code",{class:"language-html"},`<template>
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
`)],-1),d=[u,s,a,r,p],h={title:"Modal \u5BF9\u8BDD\u6846",tag:"Feedback"},g="",B=o({__name:"README",setup(i,{expose:e}){return e({frontmatter:{title:"Modal \u5BF9\u8BDD\u6846",tag:"Feedback"},excerpt:void 0}),(_,m)=>(c(),n("div",l,d))}});export{B as default,g as excerpt,h as frontmatter};
