import{_ as l,r as m,o as d,e as f,w as r,v as h,b as t,c as g,a as n,F as k,f as D,g as u,h as C}from"./index.d37a01e1.js";import{d as p}from"./demoblock.68423d9f.js";const E={setup(){const s=h(),{$message:e}=s.appContext.config.globalProperties;return{handerClick:()=>{e({content:"error",type:"error",onClose:()=>{console.log(6777)}})}}}},F=t("\u663E\u793A\u666E\u901A\u63D0\u793A");function y(s,e,a,o,i,_){const c=m("c-button");return d(),f(c,{type:"primary",onClick:o.handerClick},{default:r(()=>[F]),_:1},8,["onClick"])}const $=l(E,[["render",y],["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/message/doc/demo1.vue"]]),b={setup(){const s=h(),{$message:e}=s.appContext.config.globalProperties;return{open1:()=>{e({content:"info",type:"info",onClose:()=>{console.log(6777)}})},open2:()=>{e({content:"danger",type:"danger",onClose:()=>{console.log(6777)}})},open3:()=>{e({content:"success",type:"success",onClose:()=>{console.log(6777)}})},open4:()=>{e({content:"warning",type:"warning",onClose:()=>{console.log(6777)}})}}}},v=t("\u663E\u793A\u4FE1\u606F\u63D0\u793A"),A=t("\u663E\u793A\u9519\u8BEF\u63D0\u793A"),x=t("\u663E\u793A\u6210\u529F\u63D0\u793A"),B=t("\u663E\u793A\u8B66\u544A\u63D0\u793A");function w(s,e,a,o,i,_){const c=m("c-button");return d(),g(k,null,[n(c,{type:"info",plain:"",onClick:o.open1},{default:r(()=>[v]),_:1},8,["onClick"]),n(c,{type:"danger",plain:"",onClick:o.open2},{default:r(()=>[A]),_:1},8,["onClick"]),n(c,{type:"success",plain:"",onClick:o.open3},{default:r(()=>[x]),_:1},8,["onClick"]),n(c,{type:"warning",plain:"",onClick:o.open4},{default:r(()=>[B]),_:1},8,["onClick"])],64)}const H=l(b,[["render",w],["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/message/doc/demo2.vue"]]),M={setup(){const s=h(),{$message:e}=s.appContext.config.globalProperties;return{info:()=>{e({content:"error",type:"error",onClose:()=>{console.log(6777)},duration:0})}}}},N=t("3\u79D2\u540E\u81EA\u52A8\u5173\u95ED");function U(s,e,a,o,i,_){const c=m("c-button");return d(),f(c,{type:"primary",plain:"",onClick:o.info},{default:r(()=>[N]),_:1},8,["onClick"])}const V=l(M,[["render",U],["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/message/doc/demo3.vue"]]),P={class:"markdown-body"},R=C('<h1>Message \u6D88\u606F</h1><h3>\u6D88\u606F\u901A\u77E5</h3><h2>\u6F14\u793A</h2><h3>\u6700\u57FA\u672C\u7684\u63D0\u793A\uFF0C\u9ED8\u8BA4\u5728 <code class="">3</code> \u79D2\u540E\u6D88\u5931\u3002</h3><p><code class="">message</code> \u4F1A\u88AB\u6302\u8F7D\u5728 <code class="">vue</code> \u5168\u5C40\u5C5E\u6027\u4E2D, \u5F53\u7136\u4E5F\u53EF\u4EE5\u5F15\u5165 <code class="">chl-ui</code> \u76F4\u63A5\u4F7F\u7528</p><br>',6),I={class:"source"},S=C('<h2>\u63D0\u793A\u7C7B\u578B</h2><h3>\u8C03\u7528 <code class="">message</code> \u4E0B\u7684 <code class="">info</code> <code class="">error</code> <code class="">success</code> <code class="">warning</code>\u6765\u9009\u62E9\u5408\u9002\u7684\u573A\u666F\u3002</h3><br>',3),T={class:"source"},j=u("h2",null,"\u7B49\u5F85\u4E2D",-1),q=u("p",null,[t("\u5173\u95ED\u65F6\u95F4\u4E3A "),u("code",{class:""},"0"),t(" \u7684\u65F6\u5019\u9700\u8981\u624B\u52A8\u5173\u95ED")],-1),z=u("br",null,null,-1),G={class:"source"},O={},Q="",J=D({__name:"README",setup(s,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(a,o)=>(d(),g("div",P,[R,u("div",I,[n($)]),n(p,{compname:"message",demoname:"demo1"}),S,u("div",T,[n(H)]),n(p,{compname:"message",demoname:"demo2"}),j,q,z,u("div",G,[n(V)]),n(p,{compname:"message",demoname:"demo3"})]))}}),W=l(J,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/message/README.md"]]);export{W as default,Q as excerpt,O as frontmatter};
