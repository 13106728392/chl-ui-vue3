import{d as u,c as e,o as n,a as m}from"./index.5f1b703d.js";const l={class:"markdown-container chl-doc"},o=m(`<h1>Menu \u5BFC\u822A\u83DC\u5355</h1><blockquote><p>\u4E3A\u9875\u9762\u548C\u529F\u80FD\u63D0\u4F9B\u5BFC\u822A\u7684\u83DC\u5355\u5217\u8868</p></blockquote><h2>\u6F14\u793A</h2><blockquote><p>\u6C34\u5E73\u7684\u9876\u90E8\u5BFC\u822A\u83DC\u5355</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-menu mode=&quot;horizontal&quot;&gt;
    &lt;c-menu-item name=&quot;1&quot;&gt;\u5BFC\u822A\u4E00&lt;/c-menu-item&gt;
    &lt;c-sub-menu name=&quot;2&quot;&gt;
      &lt;template #title&gt;\u5BFC\u822A\u4E8C&lt;/template&gt;
      &lt;c-menu-item-group title=&quot;\u5C0F\u6807\u9898&quot;&gt;
        &lt;c-menu-item name=&quot;2-1&quot;&gt;\u5B50\u83DC\u5355\u4E00&lt;/c-menu-item&gt;
        &lt;c-menu-item name=&quot;2-2&quot;&gt;\u5B50\u83DC\u5355\u4E8C&lt;/c-menu-item&gt;
      &lt;/c-menu-item-group&gt;
    &lt;/c-sub-menu&gt;
    &lt;c-sub-menu name=&quot;3&quot;&gt;
      &lt;template #title&gt;\u5BFC\u822A\u4E09&lt;/template&gt;
      &lt;c-menu-item-group&gt;
        &lt;c-menu-item name=&quot;3-1&quot;&gt;\u5B50\u83DC\u5355\u4E00&lt;/c-menu-item&gt;
        &lt;c-menu-item name=&quot;3-2&quot;&gt;\u5B50\u83DC\u5355\u4E8C&lt;/c-menu-item&gt;
      &lt;/c-menu-item-group&gt;
    &lt;/c-sub-menu&gt;
    &lt;c-menu-item name=&quot;4&quot;&gt;\u5BFC\u822A\u56DB&lt;/c-menu-item&gt;
  &lt;/c-menu&gt;
&lt;/template&gt;
</code></pre><h2>\u5782\u76F4\u83DC\u5355</h2><blockquote><p>\u5782\u76F4\u83DC\u5355\uFF0C\u53EF\u5185\u5D4C\u5B50\u83DC\u5355\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u4E8C\u7EA7\u83DC\u5355</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-menu style=&quot;width: 256px&quot; &gt;
    &lt;c-menu-item name=&quot;1&quot;&gt;\u5BFC\u822A\u4E00&lt;/c-menu-item&gt;
    &lt;c-sub-menu name=&quot;2&quot;&gt;
      &lt;template #title&gt;\u5BFC\u822A\u4E8C&lt;/template&gt;
      &lt;c-menu-item-group title=&quot;\u5C0F\u6807\u9898&quot;&gt;
        &lt;c-menu-item name=&quot;2-1&quot;&gt;\u5B50\u83DC\u5355\u4E00&lt;/c-menu-item&gt;
        &lt;c-menu-item name=&quot;2-2&quot;&gt;\u5B50\u83DC\u5355\u4E8C&lt;/c-menu-item&gt;
      &lt;/c-menu-item-group&gt;
    &lt;/c-sub-menu&gt;
    &lt;c-sub-menu name=&quot;3&quot;&gt;
      &lt;template #title&gt;\u5BFC\u822A\u4E09&lt;/template&gt;
      &lt;c-menu-item-group&gt;
        &lt;c-menu-item name=&quot;3-1&quot;&gt;\u5B50\u83DC\u5355\u4E00&lt;/c-menu-item&gt;
        &lt;c-menu-item name=&quot;3-2&quot;&gt;\u5B50\u83DC\u5355\u4E8C&lt;/c-menu-item&gt;
      &lt;/c-menu-item-group&gt;
    &lt;/c-sub-menu&gt;
    &lt;c-menu-item name=&quot;4&quot;&gt;\u5BFC\u822A\u56DB&lt;/c-menu-item&gt;
  &lt;/c-menu&gt;
&lt;/template&gt;
</code></pre><h2>\u53EA\u5C55\u5F00\u5F53\u524D\u83DC\u5355</h2><blockquote><p>\u70B9\u51FB\u83DC\u5355\uFF0C\u6536\u8D77\u5176\u4ED6\u5C55\u5F00\u7684\u6240\u6709\u83DC\u5355\uFF0C\u4FDD\u6301\u83DC\u5355\u805A\u7126\u7B80\u6D01</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-menu style=&quot;width: 256px&quot; :uniqueOpened=&quot;true&quot;&gt;
    &lt;c-menu-item name=&quot;1&quot;&gt;\u5BFC\u822A\u4E00&lt;/c-menu-item&gt;
    &lt;c-sub-menu name=&quot;2&quot;&gt;
      &lt;template #title&gt;\u5BFC\u822A\u4E8C&lt;/template&gt;
      &lt;c-menu-item-group title=&quot;\u5C0F\u6807\u9898&quot;&gt;
        &lt;c-menu-item name=&quot;2-1&quot;&gt;\u5B50\u83DC\u5355\u4E00&lt;/c-menu-item&gt;
        &lt;c-menu-item name=&quot;2-2&quot;&gt;\u5B50\u83DC\u5355\u4E8C&lt;/c-menu-item&gt;
      &lt;/c-menu-item-group&gt;
    &lt;/c-sub-menu&gt;
    &lt;c-sub-menu name=&quot;3&quot;&gt;
      &lt;template #title&gt;\u5BFC\u822A\u4E09&lt;/template&gt;
      &lt;c-menu-item-group&gt;
        &lt;c-menu-item name=&quot;3-1&quot;&gt;\u5B50\u83DC\u5355\u4E00&lt;/c-menu-item&gt;
        &lt;c-menu-item name=&quot;3-2&quot;&gt;\u5B50\u83DC\u5355\u4E8C&lt;/c-menu-item&gt;
      &lt;/c-menu-item-group&gt;
    &lt;/c-sub-menu&gt;
    &lt;c-menu-item name=&quot;4&quot;&gt;\u5BFC\u822A\u56DB&lt;/c-menu-item&gt;
  &lt;/c-menu&gt;
&lt;/template&gt;
</code></pre>`,11),g=[o],C={title:"Menu \u5BFC\u822A\u83DC\u5355",tag:"Navigation"},p="",F=u({__name:"README",setup(c,{expose:t}){return t({frontmatter:{title:"Menu \u5BFC\u822A\u83DC\u5355",tag:"Navigation"},excerpt:void 0}),(i,a)=>(n(),e("div",l,g))}});export{F as default,p as excerpt,C as frontmatter};