import{d as u,c as e,o,a as c}from"./index.5f1b703d.js";const a={class:"markdown-container chl-doc"},l=c(`<h1>Carousel \u8F6E\u64AD</h1><blockquote><p>\u4EE5\u8F6E\u64AD\u7684\u65B9\u5F0F\u663E\u793A\u4E00\u7EC4\u5143\u7D20\uFF0C\u975E\u5E38\u7ECF\u5178</p></blockquote><h2>\u6F14\u793A</h2><blockquote><p>\u9ED8\u8BA4</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-carousel width=&quot;500px&quot; height=&quot;250px&quot;&gt;
    &lt;c-carousel-item class=&quot;demo-carousel&quot; v-for=&quot;item in 4&quot;&gt;
      {{item}}
    &lt;/c-carousel-item&gt;
  &lt;/c-carousel&gt;
&lt;/template&gt;
</code></pre><h2>\u81EA\u52A8\u64AD\u653E</h2><blockquote><p>\u8BBE\u7F6E <code class="">autoplay</code> \u5F00\u542F\u81EA\u52A8\u64AD\u653E</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-carousel width=&quot;500px&quot; height=&quot;250px&quot; autoplay&gt;
    &lt;c-carousel-item class=&quot;demo-carousel&quot; v-for=&quot;item in 4&quot;&gt;
      {{item}}
    &lt;/c-carousel-item&gt;
  &lt;/c-carousel&gt;
&lt;/template&gt;
</code></pre>`,8),s=[l],m={title:"Carousel \u8F6E\u64AD",tag:"Data Display"},q="",E=u({__name:"README",setup(n,{expose:t}){return t({frontmatter:{title:"Carousel \u8F6E\u64AD",tag:"Data Display"},excerpt:void 0}),(r,p)=>(o(),e("div",a,s))}});export{E as default,q as excerpt,m as frontmatter};
