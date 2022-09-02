import{_ as e,d as o,c as u,o as c,a as l}from"./index.0d3f9942.js";const a={class:"markdown-container chl-doc"},s=l(`<h1>Carousel \u8F6E\u64AD</h1><blockquote><p>\u4EE5\u8F6E\u64AD\u7684\u65B9\u5F0F\u663E\u793A\u4E00\u7EC4\u5143\u7D20\uFF0C\u975E\u5E38\u7ECF\u5178</p></blockquote><h2>\u6F14\u793A</h2><blockquote><p>\u9ED8\u8BA4</p></blockquote><pre><code class="language-html">&lt;template&gt;
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
</code></pre>`,8),n=[s],d={title:"Carousel \u8F6E\u64AD",tag:"Data Display"},q="",r=o({__name:"README",setup(p,{expose:t}){return t({frontmatter:{title:"Carousel \u8F6E\u64AD",tag:"Data Display"},excerpt:void 0}),(i,m)=>(c(),u("div",a,n))}});var h=e(r,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/carousel/README.md"]]);export{h as default,q as excerpt,d as frontmatter};
