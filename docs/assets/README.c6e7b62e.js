import{_ as m,g as c,r as a,o as l,d as _,c as v,a as t,F as f,e as k,b as u,p as D}from"./index.02a748c8.js";import{d as r}from"./demoblock.08f81d35.js";const b={__name:"demo1",setup(F){const e=c("03:12:30"),n=d=>{console.log(d)};return(d,s)=>{const o=a("c-time-picker");return l(),_(o,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=i=>e.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",onOnChange:n},null,8,["modelValue"])}}},h=m(b,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/time-picker/doc/demo1.vue"]]),y={__name:"demo2",setup(F){const e=c("03:12:30");return(n,d)=>{const s=a("c-time-picker");return l(),_(s,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=o=>e.value=o),format:"HH\u65F6mm\u5206ss\u79D2",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])}}},p=m(y,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/time-picker/doc/demo2.vue"]]),g={__name:"demo3",setup(F){const e=c("03:12:30");return(n,d)=>{const s=a("c-time-picker");return l(),_(s,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=o=>e.value=o),disabled:"",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])}}},C=m(g,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/time-picker/doc/demo3.vue"]]),V={__name:"demo4",setup(F){const e=c(["03:12:30","05:24:35"]);return(n,d)=>{const s=a("c-time-picker");return l(),_(s,{type:"timerange",modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=o=>e.value=o),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},null,8,["modelValue"])}}},B=m(V,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/time-picker/doc/demo4.vue"]]);const H={__name:"demo5",setup(F){const e=c("03:12:30"),n=c(["03:12:30","05:24:35"]),d=s=>{console.log(s)};return(s,o)=>{const i=a("c-time-picker");return l(),v(f,null,[t(i,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=E=>e.value=E),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",confirm:"",onOnConfirm:d},null,8,["modelValue"]),t(i,{class:"time",type:"timerange",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=E=>n.value=E),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4\u8303\u56F4",confirm:""},null,8,["modelValue"])],64)}}},A=m(H,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/time-picker/doc/demo5.vue"]]),U={class:"markdown-body"},x=u("h1",null,"TimePicker \u65F6\u95F4\u9009\u62E9\u5668",-1),P=u("h4",null,"\u7528\u4E8E\u9009\u62E9\u65F6\u95F4",-1),T=u("br",null,null,-1),$=u("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),M={class:"source"},N=u("h2",null,"\u65F6\u95F4\u683C\u5F0F",-1),R=u("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 format \u53EF\u4EE5\u6539\u53D8\u65F6\u95F4\u7684\u663E\u793A\u683C\u5F0F",-1),O=u("h4",null,"\u6CE8\u610F\uFF0Cformat \u53EA\u662F\u6539\u53D8\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u5E76\u975E\u6539\u53D8 value \u503C",-1),w={class:"source"},S=u("h2",null,"\u7981\u7528\u72B6\u6001",-1),j=u("h4",null,"\u53EF\u4EE5\u8BBE\u7F6E disabled \u5C5E\u6027\u6765\u5B9E\u73B0\u7981\u7528\u72B6\u6001",-1),q={class:"source"},z=u("h2",null,"\u65F6\u95F4\u8303\u56F4",-1),G=u("h4",null,"\u8BBE\u7F6Etype \u4E3A timerange \u53EF\u5F00\u542F\u65F6\u95F4\u8303\u56F4\u9009\u62E9",-1),I={class:"source"},J=u("h2",null,"\u5E26\u6709\u786E\u8BA4\u64CD\u4F5C",-1),K=u("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 confirm\uFF0C\u9009\u62E9\u5668\u4F1A\u6709\u6E05\u7A7A\u548C\u786E\u5B9A\u6309\u94AE\u3002\u786E\u8BA4\u6309\u94AE\u5E76\u6CA1\u6709\u5F71\u54CD\u65F6\u95F4\u7684\u6B63\u5E38\u9009\u62E9",-1),L={class:"source"},Q=D('<br><h2>TimePicker Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u652F\u6301\u9009\u62E9\u5355\u4E2A\u65F6\u95F4\u6216\u8005\u9009\u62E9\u65F6\u95F4\u8303\u56F4</td><td>string</td><td>time / timerange</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB\uFF0C\u5F00\u542F\u540E\u4E0D\u4F1A\u5F39\u51FA\u9009\u62E9\u5668</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>format</td><td>\u65F6\u95F4\u683C\u5F0F\u5316</td><td>string</td><td>\u5C0F\u65F6\uFF1A<code class="">HH</code>\uFF0C\u5206\uFF1A<code class="">mm</code>\uFF0C\u79D2\uFF1A<code class="">ss</code></td><td>\u2018HH:mm:ss\u2019</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u2018-\u2019</td></tr></tbody></table><br><h2>TimePicker Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>on-change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4</td></tr><tr><td>on-confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4</td></tr><tr><td>on-clear</td><td>\u5728\u6E05\u7A7A\u65F6\u95F4\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>import demo1 from \u2018./doc/demo1.vue\u2019</td><td></td><td></td></tr><tr><td>import demo2 from \u2018./doc/demo2.vue\u2019</td><td></td><td></td></tr><tr><td>import demo3 from \u2018./doc/demo3.vue\u2019</td><td></td><td></td></tr><tr><td>import demo4 from \u2018./doc/demo4.vue\u2019</td><td></td><td></td></tr><tr><td>import demo5 from \u2018./doc/demo5.vue\u2019</td><td></td><td></td></tr><tr><td>import demoblock from \u2018@/components/demoblock.vue\u2019</td><td></td><td></td></tr><tr><td></td></tr><td></td><td></td></tbody></table><h1>TimePicker \u65F6\u95F4\u9009\u62E9\u5668</h1><h4>\u7528\u4E8E\u9009\u62E9\u65F6\u95F4</h4><br><h2>\u57FA\u7840\u7528\u6CD5</h2>',10),W={class:"source"},X=u("h2",null,"\u65F6\u95F4\u683C\u5F0F",-1),Y=u("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 format \u53EF\u4EE5\u6539\u53D8\u65F6\u95F4\u7684\u663E\u793A\u683C\u5F0F",-1),Z=u("h4",null,"\u6CE8\u610F\uFF0Cformat \u53EA\u662F\u6539\u53D8\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u5E76\u975E\u6539\u53D8 value \u503C",-1),uu={class:"source"},tu=u("h2",null,"\u7981\u7528\u72B6\u6001",-1),eu=u("h4",null,"\u53EF\u4EE5\u8BBE\u7F6E disabled \u5C5E\u6027\u6765\u5B9E\u73B0\u7981\u7528\u72B6\u6001",-1),du={class:"source"},ou=u("h2",null,"\u65F6\u95F4\u8303\u56F4",-1),su=u("h4",null,"\u8BBE\u7F6Etype \u4E3A timerange \u53EF\u5F00\u542F\u65F6\u95F4\u8303\u56F4\u9009\u62E9",-1),ru={class:"source"},nu=u("h2",null,"\u5E26\u6709\u786E\u8BA4\u64CD\u4F5C",-1),cu=u("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 confirm\uFF0C\u9009\u62E9\u5668\u4F1A\u6709\u6E05\u7A7A\u548C\u786E\u5B9A\u6309\u94AE\u3002\u786E\u8BA4\u6309\u94AE\u5E76\u6CA1\u6709\u5F71\u54CD\u65F6\u95F4\u7684\u6B63\u5E38\u9009\u62E9",-1),mu={class:"source"},lu=D('<br><h2>TimePicker Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u652F\u6301\u9009\u62E9\u5355\u4E2A\u65F6\u95F4\u6216\u8005\u9009\u62E9\u65F6\u95F4\u8303\u56F4</td><td>string</td><td>time / timerange</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB\uFF0C\u5F00\u542F\u540E\u4E0D\u4F1A\u5F39\u51FA\u9009\u62E9\u5668</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>format</td><td>\u65F6\u95F4\u683C\u5F0F\u5316</td><td>string</td><td>\u5C0F\u65F6\uFF1A<code class="">HH</code>\uFF0C\u5206\uFF1A<code class="">mm</code>\uFF0C\u79D2\uFF1A<code class="">ss</code></td><td>\u2018HH:mm:ss\u2019</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u2018-\u2019</td></tr></tbody></table><br><h2>TimePicker Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>on-change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4</td></tr><tr><td>on-confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4</td></tr><tr><td>on-clear</td><td>\u5728\u6E05\u7A7A\u65F6\u95F4\u65F6\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',6),_u={},Eu="",Fu=k({__name:"README",setup(F,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(n,d)=>(l(),v("div",U,[x,P,T,$,u("div",M,[t(h)]),t(r,{compname:"time-picker",demoname:"demo1"}),N,R,O,u("div",w,[t(p)]),t(r,{compname:"time-picker",demoname:"demo2"}),S,j,u("div",q,[t(C)]),t(r,{compname:"time-picker",demoname:"demo3"}),z,G,u("div",I,[t(B)]),t(r,{compname:"time-picker",demoname:"demo4"}),J,K,u("div",L,[t(A)]),t(r,{compname:"time-picker",demoname:"demo5"}),Q,u("div",W,[t(h)]),t(r,{compname:"time-picker",demoname:"demo1"}),X,Y,Z,u("div",uu,[t(p)]),t(r,{compname:"time-picker",demoname:"demo2"}),tu,eu,u("div",du,[t(C)]),t(r,{compname:"time-picker",demoname:"demo3"}),ou,su,u("div",ru,[t(B)]),t(r,{compname:"time-picker",demoname:"demo4"}),nu,cu,u("div",mu,[t(A)]),t(r,{compname:"time-picker",demoname:"demo5"}),lu]))}}),hu=m(Fu,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/time-picker/README.md"]]);export{hu as default,Eu as excerpt,_u as frontmatter};