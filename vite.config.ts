import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// 引入md作为页面的配置
import markdown from 'vite-plugin-md';
import Inspect from 'vite-plugin-inspect';
import Pages from 'vite-plugin-pages'
const markdownRenderer = require('markdown-it')();
// import markdownPrism from 'markdown-it-prism'
// 引入markdwon代码块处理
const mdConfig = require('./md.config');
// markdown文件高亮样式
// import hljs from 'highlight.js';


export default defineConfig({
  base:'/chl-ui-vue3/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], 
    }),
    markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        xhtmlOut: true,
        // 高亮配置
        // highlight: (str: any, lang: any) => {
        //   if (lang && hljs.getLanguage(lang)) {
        //     try {
        //       return '<pre class="hljs"><code>' +
        //         hljs.highlight(lang, str, true).value +
        //         '</code></pre>';
        //     } catch (__) {
        //     }
        //   }
        //   return '<pre class="hljs"><code>' + markdownRenderer.utils.escapeHtml(str) + '</code></pre>';
        // }
      },
      markdownItSetup(md) {
        mdConfig(md);
        // md.use(require('markdown-it-anchor'))
        // md.use(require('markdown-it-prism'))
      },
      // 添加md文件默认样式
      wrapperClasses: 'markdown-container chl-doc',
    }),
    Pages({
      pagesDir: 'pages',
      extensions: ['vue', 'md'],
    }),
    Inspect(),
  ],
  // base:  'chl-ui-vue3/',
  build: {
    rollupOptions: {
      input: {
      main: resolve(__dirname, 'index.html'),
      // nested: resolve(__dirname, 'nested/index.html')
      },
      // 告诉打包工具这是是外部依赖项 
      // external: ['vue'],
      // output: {
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    },
    // 构建库模式打包
    // lib: {
    //   // 构建入口
    //   entry: resolve(__dirname, 'src/components/index.ts'),
    //   name: 'ChlUi',
    //   fileName: (format) => `chl.${format}.js`
    // },
  },
  resolve: {
    alias: {
      "chl-ui-vue3": resolve(__dirname, 'chl-ui-vue3'),
      "@": resolve(__dirname, "src"),
    },
    // 导入时想要省略的扩展名列表
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
})