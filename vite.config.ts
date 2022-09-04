import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import fs from 'fs-extra'
import vue from '@vitejs/plugin-vue'

// import myPlugin from './config/zip'  // 打包自动生成dist.zip压缩包

import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';

// 引入md作为页面的配置
import markdown from 'vite-plugin-md';
import Inspect from 'vite-plugin-inspect';
import Pages from 'vite-plugin-pages'
const markdownRenderer = require('markdown-it')();
// import markdownPrism from 'markdown-it-prism'
// 引入markdwon代码块处理
const mdConfig = require('./config/mdconfig.ts');
// markdown文件高亮样式
import hljs from 'highlight.js';

console.log(path,'222333')

export default ({ mode }) => {
  const env = loadEnv(mode,process.cwd()) // 开发或生产环境服务的公共基础路径：默认'/'
  return defineConfig({
    base: env.VITE_APP_URL,  // 路径前缀
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      // myPlugin()
      markdown({
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
          xhtmlOut: true,
          // 高亮配置
          highlight: (str: any, lang: any) => {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
              } catch (__) {
              }
            }
            return '<pre class="hljs"><code>' + markdownRenderer.utils.escapeHtml(str) + '</code></pre>';
          }
        },
        async  markdownItSetup(md) {
          const code = await fs.readFile(path, 'utf-8')
          console.log(code,'4444')
          mdConfig(md,code);
          //  解决path报错问题
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

    build: {
      outDir: env.VITE_APP_OUTDIR,// 构建得包名  默认：dist

      // sourcemap: false, // 输出.map文件
      // rollupOptions:  {
      // 确保外部化处理那些你不想打包进库的依赖
      //   plugins: [
      //     commonjs(),
      //     externalGlobals({
      //       vue: 'Vue',
      //       'vue-router': 'VueRouter',
      //     }),
      //   ],
      //   output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //     format: 'es',
      //     globals: {
      //       vue: 'Vue',
      //       'vue-router': 'VueRouter',
      //     },
      //   },
      //   external: ['vue']
      // } ,

      // 构建库模式打包
      lib:env.VITE_APP_TYPE == 'lib' ? {
        // 构建入口
        entry: path.resolve(__dirname, 'src/components/index.ts'),
        name: 'ChlUi',
        fileName: (format) => `chl.${format}.js`
      } :null
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        '@Components': path.resolve(__dirname, "./src/components"),
      },
      // 导入时想要省略的扩展名列表
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
  })
}