import{_ as p,g as m,r as a,o as h,c as E,a as u,w as d,F as v,f as s,b as e,t as C,e as B,p as b}from"./index.02a748c8.js";import{d as F}from"./demoblock.08f81d35.js";const $=s("\u5DE6\u8FB9-left"),V=s("\u4E0A\u8FB9-top"),y=s("\u53F3\u8FB9-right"),k=s("\u4E0B\u8FB9-bottom"),g=e("div",null,"\u6211\u6765\u5566\u3002\u3002\u3002",-1),x={__name:"demo1",setup(D){const o=m(!1),n=m("left"),_=()=>{o.value=!0,n.value="left"},t=()=>{o.value=!0,n.value="top"},r=()=>{o.value=!0,n.value="right"},c=()=>{o.value=!0,n.value="bottom"};return(i,l)=>{const f=a("c-button"),w=a("c-drawer");return h(),E(v,null,[u(f,{onClick:_},{default:d(()=>[$]),_:1}),u(f,{onClick:t},{default:d(()=>[V]),_:1}),u(f,{onClick:r},{default:d(()=>[y]),_:1}),u(f,{onClick:c},{default:d(()=>[k]),_:1}),u(w,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=A=>o.value=A),title:"\u57FA\u672C\u4F7F\u7528",direction:n.value},{default:d(()=>[g]),_:1},8,["modelValue","direction"])],64)}}},U=p(x,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/drawer/doc/demo1.vue"]]),H=s("\u70B9\u51FB\u6253\u5F00"),S=e("div",null,"\u6211\u6765\u5566\u3002\u3002\u3002",-1),N={__name:"demo2",setup(D){const o=m(!1);return(n,_)=>{const t=a("c-button"),r=a("c-drawer");return h(),E(v,null,[u(t,{onClick:_[0]||(_[0]=c=>o.value=!0)},{default:d(()=>[H]),_:1}),u(r,{modelValue:o.value,"onUpdate:modelValue":_[1]||(_[1]=c=>o.value=c),title:"\u57FA\u672C\u4F7F\u7528","with-header":!1},{default:d(()=>[S]),_:1},8,["modelValue"])],64)}}},M=p(N,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/drawer/doc/demo2.vue"]]),R=s("\u81EA\u5B9A\u4E49\u5185\u5BB9"),T={class:"drawer-footer"},z=s("\u53D6\u6D88"),j=s("\u786E\u5B9A"),q={__name:"demo3",setup(D){const o=m(!1),n=m("");return(_,t)=>{const r=a("c-button"),c=a("m-input"),i=a("c-drawer");return h(),E(v,null,[u(r,{onClick:t[0]||(t[0]=l=>o.value=!0)},{default:d(()=>[R]),_:1}),u(i,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=l=>o.value=l),title:"\u57FA\u672C\u4F7F\u7528"},{footer:d(()=>[e("span",T,[u(r,{onClick:t[2]||(t[2]=l=>o.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[z]),_:1}),u(r,{type:"primary",onClick:t[3]||(t[3]=l=>o.value=!1)},{default:d(()=>[j]),_:1})])]),default:d(()=>[e("div",null,[u(c,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value=l),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"]),e("p",null,"\u8F93\u5165\u7684\u503C\u4E3A\uFF1A"+C(n.value),1)])]),_:1},8,["modelValue"])],64)}}},G=p(q,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/drawer/doc/demo3.vue"]]),I=s("\u70B9\u51FB\u6253\u5F00"),J=s("\u6253\u5F00\u91CC\u9762\u7684!"),K=e("p",null,"\u5FEB\u5230\u7897\u91CC\u6765\uFF01",-1),L={__name:"demo4",setup(D){const o=m(!1),n=m(!1);return(_,t)=>{const r=a("c-button"),c=a("c-drawer");return h(),E(v,null,[u(r,{onClick:t[0]||(t[0]=i=>o.value=!0)},{default:d(()=>[I]),_:1}),u(c,{title:"\u6211\u662F\u5916\u9762\u7684 Drawer",modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=i=>o.value=i),width:"50%"},{default:d(()=>[e("div",null,[u(r,{onClick:t[1]||(t[1]=i=>n.value=!0)},{default:d(()=>[J]),_:1}),u(c,{title:"\u6211\u662F\u91CC\u9762\u7684 Drawer","append-to-body":!0,modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=i=>n.value=i)},{default:d(()=>[K]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"])],64)}}},O=p(L,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/drawer/doc/demo4.vue"]]),P=s("\u70B9\u51FB\u6253\u5F00"),Q=e("i",{class:"iconfont icon-email",style:{"font-size":"17px"}},null,-1),W=s(" \u65B0\u7684\u90AE\u4EF6 "),X={class:"drawer-footer"},Y=s("\u53D6\u6D88"),Z=s("\u786E\u5B9A"),tt={__name:"demo5",setup(D){const o=m(!1),n=m("");return(_,t)=>{const r=a("c-button"),c=a("m-input"),i=a("c-drawer");return h(),E(v,null,[u(r,{onClick:t[0]||(t[0]=l=>o.value=!0)},{default:d(()=>[P]),_:1}),u(i,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=l=>o.value=l),"custom-class":"customClass",wrapperClosable:!1},{header:d(()=>[Q,W]),footer:d(()=>[e("span",X,[u(r,{onClick:t[2]||(t[2]=l=>o.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[Y]),_:1}),u(r,{type:"primary",onClick:t[3]||(t[3]=l=>o.value=!1)},{default:d(()=>[Z]),_:1})])]),default:d(()=>[e("div",null,[u(c,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value=l),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"]),e("p",null,"\u8F93\u5165\u7684\u503C\u4E3A\uFF1A"+C(n.value),1)])]),_:1},8,["modelValue"])],64)}}},ut=p(tt,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/drawer/doc/demo5.vue"]]),et={class:"markdown-body"},ot=e("h1",null,"Drawer \u62BD\u5C49",-1),dt=e("h4",null,"\u4ECE\u5C4F\u5E55\u56DB\u8FB9\u51FA\u73B0\u7684\u8499\u7248\u7EC4\u4EF6",-1),nt=e("br",null,null,-1),lt=e("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),rt=e("h4",null,"\u547C\u51FA\u4E00\u4E2A\u4E34\u65F6\u7684\u4FA7\u8FB9\u680F, \u53EF\u4EE5\u4ECE\u591A\u4E2A\u65B9\u5411\u547C\u51FA",-1),st={class:"source"},at=e("h2",null,"\u4E0D\u6DFB\u52A0 Title",-1),ct=e("h4",null,"\u5F53\u4F60\u4E0D\u9700\u8981\u6807\u9898\u5230\u65F6\u5019, \u4F60\u8FD8\u53EF\u4EE5\u53BB\u6389\u6807\u9898",-1),_t={class:"source"},it=e("h2",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),mt=e("h4",null,"\u50CF Dialog \u7EC4\u4EF6\u4E00\u6837\uFF0CDrawer \u4E5F\u53EF\u4EE5\u7528\u6765\u663E\u793A\u591A\u79CD\u4E0D\u540C\u7684\u4EA4\u4E92",-1),pt={class:"source"},ht=e("h2",null,"\u5D4C\u5957\u62BD\u5C49",-1),Et=e("h4",null,"Drawer \u7EC4\u4EF6\u4E5F\u62E5\u6709\u591A\u5C42\u5D4C\u5957\u7684\u65B9\u6CD5",-1),Dt={class:"source"},Ft=e("h2",null,"\u4F7F\u7528\u5177\u540D\u63D2\u69FD\u81EA\u5B9A\u4E49",-1),vt=e("h4",null,"\u4F7F\u7528\u5177\u540D\u63D2\u69FD #header \u3001#footer \u53EF\u5BF9\u62BD\u5C49\u6574\u4F53\u6839\u636E\u9700\u8981\u81EA\u5B9A\u4E49",-1),ft={class:"source"},Ct=b("<br><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u662F\u5426\u663E\u793A Drawer</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>title</td><td>Drawer \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot\u4F20\u5165</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>direction</td><td>Drawer \u6253\u5F00\u7684\u65B9\u5411</td><td>string</td><td>left / top / right / bottom</td><td>right</td></tr><tr><td>width</td><td>\u62BD\u5C49\u533A\u57DF\u5BBD\u5EA6\uFF0Cdirection \u4E3A left \u548C right \u65F6\u6709\u6548</td><td>string</td><td>\u2014</td><td>30%</td></tr><tr><td>height</td><td>\u62BD\u5C49\u533A\u57DF\u9AD8\u5EA6\uFF0Cdirection \u4E3A top \u548C bottom \u65F6\u6709\u6548</td><td>string</td><td>\u2014</td><td>40%</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>append-to-body</td><td>Drawer \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Drawer \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>wrapperClosable</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED Drawer</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>withHeader</td><td>\u63A7\u5236\u662F\u5426\u663E\u793A header \u680F, \u9ED8\u8BA4\u4E3A true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>custom-class</td><td>Drawer \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><br><h2>Slot</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Drawer \u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Drawer \u6807\u9898\u533A\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Drawer \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td></tr></tbody></table><br><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>Drawer \u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>Drawer \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>Drawer \u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>Drawer \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr></tbody></table>",9),bt={},$t="",wt=B({__name:"README",setup(D,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(n,_)=>(h(),E("div",et,[ot,dt,nt,lt,rt,e("div",st,[u(U)]),u(F,{compname:"drawer",demoname:"demo1"}),at,ct,e("div",_t,[u(M)]),u(F,{compname:"drawer",demoname:"demo2"}),it,mt,e("div",pt,[u(G)]),u(F,{compname:"drawer",demoname:"demo3"}),ht,Et,e("div",Dt,[u(O)]),u(F,{compname:"drawer",demoname:"demo4"}),Ft,vt,e("div",ft,[u(ut)]),u(F,{compname:"drawer",demoname:"demo5"}),Ct]))}}),Vt=p(wt,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/drawer/README.md"]]);export{Vt as default,$t as excerpt,bt as frontmatter};