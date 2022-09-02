import{_ as t,d as e,c as o,o as l,a as c}from"./index.0d3f9942.js";const a={class:"markdown-container chl-doc"},n=c(`<h1>Input \u8F93\u5165\u6846</h1><blockquote><p>\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u6700\u57FA\u7840\u7684\u8868\u5355\u57DF\u7684\u5305\u88C5</p></blockquote><h2>\u6F14\u793A</h2><blockquote><p>\u4F7F\u7528 <code class="">v-model</code> \u5B9E\u73B0\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-input placeholder=&quot;\u8BF7\u8F93\u5165&quot; type=&quot;text&quot; v-model=&quot;value&quot; /&gt;
  &lt;c-input placeholder=&quot;\u8BF7\u8F93\u5165&quot; type=&quot;password&quot; v-model=&quot;value&quot; style=&quot;margin-left:5px&quot; /&gt;
  &lt;div style=&quot;margin-top: 10px&quot;&gt;
    \u8F93\u5165\u6846\u503C\uFF1A{{value}}
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {ref} from &#39;vue&#39;
export default {
  setup(){
    const value = ref(&#39;&#39;)

    return {
      value
    }
  }
}
&lt;/script&gt;
</code></pre><h2>\u7981\u7528</h2><blockquote><p>\u901A\u8FC7 <code class="">disabled</code> \u5C5E\u6027\u6307\u5B9A\u662F\u5426\u7981\u7528 input \u7EC4\u4EF6</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-input placeholder=&quot;\u8BF7\u8F93\u5165&quot; type=&quot;text&quot; disabled /&gt;
&lt;/template&gt;
</code></pre><h2>\u524D\u7F00\u548C\u540E\u7F00\u56FE\u6807</h2><blockquote><p>\u901A\u8FC7\u8BBE\u7F6E <code class="">icon-before</code> \u548C <code class="">icon-after</code> \u8BBE\u7F6E\u524D\u7F00\u53CA\u540E\u7F00\u56FE\u6807</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-input placeholder=&quot;\u8BF7\u8F93\u5165&quot; icon-before=&quot;c-icon-search&quot; /&gt;
  &lt;c-input placeholder=&quot;\u8BF7\u8F93\u5165&quot; icon-after=&quot;c-icon-calendar&quot; style=&quot;margin-left:5px&quot; /&gt;
&lt;/template&gt;
</code></pre><h2>\u53EF\u6E05\u7A7A</h2><blockquote><p>\u901A\u8FC7\u8BBE\u7F6E <code class="">clearable</code> \u53EF\u4EE5\u5F00\u542F\u8F93\u5165\u6846\u7684\u6E05\u7A7A</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-input placeholder=&quot;\u8BF7\u8F93\u5165&quot; clearable /&gt;
&lt;/template&gt;
</code></pre><h2>\u6587\u672C\u57DF</h2><blockquote><p>\u8BBE\u7F6E <code class="">type</code> \u5C5E\u6027\u4E3A <code class="">textarea</code><code class="">maxlength</code> \u53EF\u4EE5\u9650\u5236 <code class="">textarea</code> \u7684\u8F93\u5165\u957F\u5EA6</p></blockquote><pre><code class="language-html">&lt;template&gt;
  &lt;c-input placeholder=&quot;\u8BF7\u8F93\u5165&quot; style=&quot;width: 350px&quot; type=&quot;textarea&quot; rows=&quot;7&quot; cols=&quot;20&quot; :maxlength=&quot;40&quot; /&gt;
&lt;/template&gt;

</code></pre>`,17),p=[n],i={title:"Input \u8F93\u5165\u6846",tag:"Data Entry"},E="",s=e({__name:"README",setup(r,{expose:u}){return u({frontmatter:{title:"Input \u8F93\u5165\u6846",tag:"Data Entry"},excerpt:void 0}),(d,q)=>(l(),o("div",a,p))}});var g=t(s,[["__file","/Users/hlc/Desktop/Home/Demo.nosync/chl-ui-vue3/src/components/input/README.md"]]);export{g as default,E as excerpt,i as frontmatter};
