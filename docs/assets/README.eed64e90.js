import{d as n,c as e,o,a as u}from"./index.bc64ced0.js";const c={class:"markdown-container chl-doc"},s=u(`<h1>Message \u6D88\u606F</h1><blockquote><p>\u6D88\u606F\u901A\u77E5</p></blockquote><h2>\u6F14\u793A</h2><blockquote><p>\u6700\u57FA\u672C\u7684\u63D0\u793A\uFF0C\u9ED8\u8BA4\u5728 <code class="">3</code> \u79D2\u540E\u6D88\u5931\u3002 <code class="">message</code> \u4F1A\u88AB\u6302\u8F7D\u5728 <code class="">vue</code> \u5168\u5C40\u5C5E\u6027\u4E2D, \u5F53\u7136\u4E5F\u53EF\u4EE5\u5F15\u5165 <code class="">chl-ui</code> \u76F4\u63A5\u4F7F\u7528</p></blockquote><pre><code class="language-html">&lt;template&gt;
   &lt;c-button type=&#39;primary&#39; @click=&quot;handerClick&quot;&gt;\u663E\u793A\u666E\u901A\u63D0\u793A&lt;/c-button&gt;
&lt;/template&gt;

&lt;script&gt;
  import {getCurrentInstance} from &#39;vue&#39;
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      
      const handerClick = () =&gt; {
        $message({
          content: &quot;error&quot;,
          type: &quot;error&quot;,
          onClose: () =&gt; {
            console.log(6777);
          },
        });

      }
      return {
        handerClick
      }
    }
  }
&lt;/script&gt;
</code></pre><h2>\u63D0\u793A\u7C7B\u578B</h2><blockquote><p>\u8C03\u7528 <code class="">message</code> \u4E0B\u7684 <code class="">info</code> <code class="">error</code> <code class="">success</code> <code class="">warning</code>\u6765\u9009\u62E9\u5408\u9002\u7684\u573A\u666F\u3002</p></blockquote><pre><code class="language-html">&lt;template&gt;
   &lt;c-button type=&quot;info&quot; plain @click=&quot;open1&quot;&gt;\u663E\u793A\u4FE1\u606F\u63D0\u793A&lt;/c-button&gt;
   &lt;c-button type=&quot;danger&quot; plain @click=&quot;open2&quot;&gt;\u663E\u793A\u9519\u8BEF\u63D0\u793A&lt;/c-button&gt;
   &lt;c-button type=&quot;success&quot; plain @click=&quot;open3&quot;&gt;\u663E\u793A\u6210\u529F\u63D0\u793A&lt;/c-button&gt;
   &lt;c-button type=&quot;warning&quot; plain @click=&quot;open4&quot;&gt;\u663E\u793A\u8B66\u544A\u63D0\u793A&lt;/c-button&gt;
&lt;/template&gt;

&lt;script&gt;
  import {getCurrentInstance} from &#39;vue&#39;
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const open1 = () =&gt; {
         $message({
            content: &quot;info&quot;,
            type: &quot;info&quot;,
            onClose: () =&gt; {
              console.log(6777);
            },
          });

      }
      const open2 = () =&gt; {
            $message({
            content: &quot;danger&quot;,
            type: &quot;danger&quot;,
            onClose: () =&gt; {
              console.log(6777);
            },
          });

      }
      const open3 = () =&gt; {
          
             $message({
            content: &quot;success&quot;,
            type: &quot;success&quot;,
            onClose: () =&gt; {
              console.log(6777);
            },
          });

      }
      const open4 = () =&gt; {
           $message({
            content: &quot;warning&quot;,
            type: &quot;warning&quot;,
            onClose: () =&gt; {
              console.log(6777);
            },
          });

      }
      return {
        open1,
        open2,
        open3,
        open4
      }
    }
  }
&lt;/script&gt;
</code></pre><h2>\u7B49\u5F85\u4E2D</h2><p>\u5173\u95ED\u65F6\u95F4\u4E3A <code class="">0</code> \u7684\u65F6\u5019\u9700\u8981\u624B\u52A8\u5173\u95ED</p><pre><code class="language-html">&lt;template&gt;
  &lt;c-button type=&quot;primary&quot; plain @click=&quot;info&quot;&gt;3\u79D2\u540E\u81EA\u52A8\u5173\u95ED&lt;/c-button&gt;
&lt;/template&gt;
&lt;script&gt;
import {getCurrentInstance} from &#39;vue&#39;
export default {
  setup(){
    const instance = getCurrentInstance()
    const {$message} = instance.appContext.config.globalProperties

    const info = () =&gt; {
       $message({
          content: &quot;error&quot;,
          type: &quot;error&quot;,
          onClose: () =&gt; {
            console.log(6777);
          },
          duration: 0,
        });

            }
    return {
      info
    }
  }
}
&lt;/script&gt;
</code></pre>`,11),l=[s],i={title:"Message \u6D88\u606F",tag:"Feedback"},q="",d=n({__name:"README",setup(a,{expose:t}){return t({frontmatter:{title:"Message \u6D88\u606F",tag:"Feedback"},excerpt:void 0}),(r,p)=>(o(),e("div",c,l))}});export{d as default,q as excerpt,i as frontmatter};
