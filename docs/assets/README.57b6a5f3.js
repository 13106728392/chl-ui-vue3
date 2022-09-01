import{d as u,c as o,o as n,a as e}from"./index.bc64ced0.js";const c={class:"markdown-container chl-doc"},l=e(`<h1>Button \u6309\u94AE</h1><blockquote><p>Button</p></blockquote><h2>\u6F14\u793A</h2><blockquote><p>\u6309\u94AE\u53EF\u4EE5\u6839\u636E <code class="">type</code> \u6765\u8BBE\u7F6E\u4E0D\u540C\u7684\u989C\u8272\uFF0C\u63D0\u4F9B\u4E86 6 \u79CD\u7C7B\u578B\u7684\u6309\u94AE <code class="">primary</code> <code class="">success</code> <code class="">info</code> <code class="">danger</code> <code class="">warning</code></p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;default&quot;&gt; default &lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot;&gt; warning &lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot;&gt; primary &lt;/c-button&gt;
  &lt;c-button type=&quot;success&quot;&gt; success &lt;/c-button&gt;
  &lt;c-button type=&quot;info&quot;&gt; info &lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot;&gt; danger &lt;/c-button&gt;
&lt;/template&gt;
</code></pre><h2>\u9542\u7A7A\u6309\u94AE</h2><blockquote><p>\u8BBE\u7F6E <code class="">plain</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u9542\u7A7A\u6309\u94AE</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;default&quot; plain&gt; default &lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot; plain&gt; warning &lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot; plain&gt; primary &lt;/c-button&gt;
  &lt;c-button type=&quot;success&quot; plain&gt; success &lt;/c-button&gt;
  &lt;c-button type=&quot;info&quot; plain&gt; info &lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot; plain&gt; danger &lt;/c-button&gt;
&lt;/template&gt;
</code></pre><h2>\u5706\u89D2\u6309\u94AE</h2><blockquote><p>\u8BBE\u7F6E <code class="">round</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5706\u89D2\u6309\u94AE</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;default&quot; round plain&gt; default &lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot; round&gt; warning &lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot; round plain&gt; primary &lt;/c-button&gt;
  &lt;c-button type=&quot;success&quot; round&gt; success &lt;/c-button&gt;
  &lt;c-button type=&quot;info&quot; round plain&gt; info &lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot; round&gt; danger &lt;/c-button&gt;
&lt;/template&gt;
</code></pre><h2>\u52A0\u8F7D\u4E2D\u72B6\u6001</h2><blockquote><p>\u6DFB\u52A0 <code class="">loading</code> \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;warning&quot; size=&quot;sm&quot; round :loading=&quot;true&quot;&gt;loading&lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot; round :loading=&quot;true&quot;&gt;loading&lt;/c-button&gt;
  &lt;c-button type=&quot;info&quot; round plain :loading=&quot;true&quot;&gt;loading&lt;/c-button&gt;
  &lt;c-button
    type=&quot;success&quot;
    plain
    :loading=&quot;loading1&quot;
    @click=&quot;handerClick1&quot;
    icon=&quot;c-icon-heart-on&quot;
    &gt;loading&lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot; :loading=&quot;loading2&quot; @click=&quot;handerClick2&quot;&gt;Click loading&lt;/c-button&gt;
&lt;/template&gt;
&lt;script&gt;
  import { ref } from &#39;vue&#39;;
  export default {
    setup() {
      const loading1 = ref(false);
      const loading2 = ref(false);

      const handerClick1 = () =&gt; {
        loading1.value = true;

        setTimeout(() =&gt; {
          loading1.value = false;
        }, 3000);
      };

      const handerClick2 = () =&gt; {
        loading2.value = true;

        setTimeout(() =&gt; {
          loading2.value = false;
        }, 3000);
      };

      return {
        loading1,
        loading2,
        handerClick1,
        handerClick2,
      };
    },
  };
&lt;/script&gt;
</code></pre><h2>\u6258\u7BA1\u52A0\u8F7D\u72B6\u6001</h2><blockquote><p>\u4F60\u53EA\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A <code class="">promise</code>\uFF0C\u7EC4\u4EF6\u4F1A\u6258\u7BA1 <code class="">loading</code>\uFF0C\u8FD9\u5728\u53D1\u9001\u8BF7\u6C42\u7684\u65F6\u5019\u6709\u5947\u6548</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;warning&quot; @click=&quot;handlePromise&quot;&gt;loading&lt;/c-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    setup() {
      const handlePromise = () =&gt;
        new Promise((resolve, reject) =&gt; {
          setTimeout(() =&gt; {
            resolve();
          }, 2000);
        });

      return {
        handlePromise,
      };
    },
  };
&lt;/script&gt;
</code></pre><h2>\u4E0D\u53EF\u70B9\u51FB</h2><blockquote><p>\u8BBE\u7F6E <code class="">disabled</code> \u5C5E\u6027\u8FBE\u5230\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u72B6\u6001</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button plain round disabled&gt;default&lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot; plain round disabled&gt;primary&lt;/c-button&gt;
  &lt;c-button type=&quot;success&quot; plain round disabled&gt;success&lt;/c-button&gt;
  &lt;c-button type=&quot;info&quot; plain round disabled&gt;info&lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot; round disabled&gt;danger&lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot; disabled&gt;warning&lt;/c-button&gt;
&lt;/template&gt;
</code></pre><h2>\u6309\u94AE\u5C3A\u5BF8</h2><blockquote><p>\u6309\u94AE\u6839\u636E<code class="">size</code>\u6765\u53D8\u6362\u5C3A\u5BF8\uFF0C\u63D0\u4F9B\u4E86 <code class="">sm</code> <code class="">md</code> <code class="">lg</code>\u4E09\u79CD\uFF0C\u9ED8\u8BA4\u662F<code class="">md</code></p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;primary&quot; size=&quot;sm&quot;&gt;small&lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot; size=&quot;md&quot;&gt;default&lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot; size=&quot;lg&quot;&gt;large&lt;/c-button&gt;
&lt;/template&gt;
</code></pre><h2>\u56FE\u6807\u6309\u94AE</h2><blockquote><p>\u5706\u5F62\u7684\u56FE\u6807\u6309\u94AE</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button icon=&quot;c-icon-heart-on&quot; circle&gt;&lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot; icon=&quot;c-icon-x&quot; circle&gt;&lt;/c-button&gt;
  &lt;c-button type=&quot;info&quot; icon=&quot;c-icon-mic&quot; circle&gt;&lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot; icon=&quot;c-icon-music&quot; circle&gt;&lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot; icon=&quot;c-icon-thumbs-down&quot; circle&gt;&lt;/c-button&gt;
  &lt;c-button type=&quot;success&quot; icon=&quot;c-icon-thumbs-up&quot; circle&gt;&lt;/c-button&gt;
&lt;/template&gt;
</code></pre><h2>\u56FE\u6807\u6309\u94AE</h2><blockquote><p>\u6709\u6587\u5B57\u4FE1\u606F\u7684\u56FE\u6807\u6309\u94AE</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button icon=&quot;c-icon-home&quot;&gt;default&lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot; icon=&quot;c-icon-star-on&quot;&gt;primary&lt;/c-button&gt;
  &lt;c-button type=&quot;success&quot; icon=&quot;c-icon-search&quot;&gt;success&lt;/c-button&gt;
  &lt;c-button type=&quot;info&quot; icon=&quot;c-icon-user&quot;&gt;info&lt;/c-button&gt;
  &lt;c-button type=&quot;danger&quot; icon=&quot;c-icon-zap&quot;&gt;danger&lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot; icon=&quot;c-icon-triangle&quot;&gt;warning&lt;/c-button&gt;
&lt;/template&gt;
</code></pre><h2>\u5757\u7EA7\u6309\u94AE</h2><blockquote><p>\u8BBE\u7F6E <code class="">block</code> \u5C5E\u6027\u53D8\u6210\u5757\u7EA7\u6309\u94AE</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;success&quot; icon=&quot;c-icon-heart-on&quot; round block&gt;success&lt;/c-button&gt;
  &lt;c-button type=&quot;warning&quot; icon=&quot;c-icon-star-on&quot; block&gt;warning&lt;/c-button&gt;
  &lt;c-button type=&quot;primary&quot; plain block&gt;primary&lt;/c-button&gt;
&lt;/template&gt;
</code></pre>`,32),a=[l],q={title:"Button \u6309\u94AE",tag:"General"},p="",d=u({__name:"README",setup(g,{expose:t}){return t({frontmatter:{title:"Button \u6309\u94AE",tag:"General"},excerpt:void 0}),(i,r)=>(n(),o("div",c,a))}});export{d as default,p as excerpt,q as frontmatter};
