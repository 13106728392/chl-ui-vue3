import{d as e,c as u,o as n,a as c}from"./index.bc64ced0.js";const o={class:"markdown-container chl-doc"},s=c(`<h1>Switch \u5F00\u5173</h1><blockquote><p>\u5F00\u5173\u9009\u62E9\u5668</p></blockquote><h2>\u6F14\u793A</h2><blockquote><p>\u5207\u6362\u72B6\u6001\u65F6\uFF0C\u89E6\u53D1\u4E8B\u4EF6 \u5F53\u72B6\u6001\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code class="">change</code> \u4E8B\u4EF6</p></blockquote><pre><code class="language-html">&lt;template&gt;
   &lt;c-switch v-model=&quot;state1&quot;&gt;&lt;/c-switch&gt;
   &lt;c-switch v-model=&quot;state2&quot; @change=&quot;change&quot;&gt;&lt;/c-switch&gt; 
&lt;/template&gt;

&lt;script&gt;
import {ref, getCurrentInstance} from &#39;vue&#39;
export default {
  setup(){
    const instance = getCurrentInstance()
    const {$message} = instance.appContext.config.globalProperties

    const state1 = ref(true)
    const state2 = ref(false)

    const change = (status) =&gt; {
      $message.success(&#39;switch2\u72B6\u6001\uFF1A&#39; + status)
    }

    return {
      state1,
      state2,
      change
    }
  }
}
&lt;/script&gt;
</code></pre><h2>\u6587\u5B57\u548C\u56FE\u6807</h2><blockquote><p>\u81EA\u5B9A\u4E49\u5185\u5BB9, \u5EFA\u8BAE\u6587\u5B57\u957F\u5EA6\u4FDD\u6301\u7EDF\u4E00 \u4F7F\u7528 <code class="">open</code> \u548C <code class="">close</code> \u63D2\u69FD</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-switch v-model=&quot;state1&quot;&gt;
    &lt;template #open&gt;\u5F00&lt;/template&gt;
    &lt;template #close&gt;\u5173&lt;/template&gt;
  &lt;/c-switch&gt;

  &lt;c-switch v-model=&quot;state2&quot;&gt;
    &lt;template #open&gt;\u6253\u5F00&lt;/template&gt;
    &lt;template #close&gt;\u5173\u95ED&lt;/template&gt;
  &lt;/c-switch&gt;

  &lt;c-switch v-model=&quot;state3&quot;&gt;
    &lt;template #open&gt;
      &lt;c-icon type=&quot;c-icon-check&quot;/&gt;
    &lt;/template&gt;
    &lt;template #close&gt;
      &lt;c-icon type=&quot;c-icon-x&quot; /&gt;
    &lt;/template&gt;
  &lt;/c-switch&gt;
&lt;/template&gt;

&lt;script&gt;
import {ref} from &#39;vue&#39;
export default {
  setup(){
    const state1 = ref(false)
    const state2 = ref(true)
    const state3 = ref(true)

    return {
      state1,
      state2,
      state3
    }
  }
}
&lt;/script&gt;
</code></pre><h2>\u4E0D\u540C\u8272\u7CFB</h2><blockquote><p>\u63D0\u4F9B\u4E86 <code class="">primary</code> <code class="">info</code> <code class="">danger</code> <code class="">success</code> <code class="">warning</code> \u4E94\u79CD\u989C\u8272\uFF0C \u9ED8\u8BA4<code class="">primary</code></p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-switch v-model=&quot;state1&quot; type=&quot;primary&quot;&gt;&lt;/c-switch&gt;
  &lt;c-switch v-model=&quot;state2&quot; type=&quot;info&quot;&gt;&lt;/c-switch&gt;
  &lt;c-switch v-model=&quot;state3&quot; type=&quot;danger&quot;&gt;&lt;/c-switch&gt;
  &lt;c-switch v-model=&quot;state4&quot; type=&quot;success&quot;&gt;&lt;/c-switch&gt;
  &lt;c-switch v-model=&quot;state5&quot; type=&quot;warning&quot;&gt;&lt;/c-switch&gt;
&lt;/template&gt;

&lt;script&gt;
import {ref} from &#39;vue&#39;
export default {
  setup(){
    const state1 = ref(true)
    const state2 = ref(true)
    const state3 = ref(true)
    const state4 = ref(true)
    const state5 = ref(true)

    return {
      state1,
      state2,
      state3,
      state4,
      state5,
    }
  }
}
&lt;/script&gt;
</code></pre><h2>\u4E0D\u53EF\u70B9\u51FB</h2><blockquote><p>\u7981\u6B62\u70B9\u51FB\u72B6\u6001</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-switch v-model=&quot;state&quot; :disabled=&quot;disabled&quot;&gt;&lt;/c-switch&gt;
  &lt;c-button @click=&quot;disabled = !disabled&quot;&gt;{{ disabled ? &#39;\u6FC0\u6D3B&#39; : &#39;\u7981\u6B62&#39; }}&lt;/x-button&gt;
&lt;/template&gt;

&lt;script&gt;
import {ref} from &#39;vue&#39;
export default {
  setup(){
    const state = ref(true)
    const disabled = ref(true)

    return {
      state,
      disabled
    }
  }
}
&lt;/script&gt;
</code></pre>`,14),l=[s],i={title:"Switch \u5F00\u5173",tag:"Data Entry"},d="",m=e({__name:"README",setup(a,{expose:t}){return t({frontmatter:{title:"Switch \u5F00\u5173",tag:"Data Entry"},excerpt:void 0}),(r,p)=>(n(),u("div",o,l))}});export{m as default,d as excerpt,i as frontmatter};
