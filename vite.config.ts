import { defineConfig, loadEnv } from 'vite'
import  {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

// import myPlugin from './config/zip'  // 打包自动生成dist.zip压缩包

import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';

import loader from './config/loader'
// 引入md作为页面的配置
import markdown from 'vite-plugin-md';


export default ({ mode }) => {
  const env = loadEnv(mode,process.cwd()) // 开发或生产环境服务的公共基础路径：默认'/'
  return defineConfig({
    base: env.VITE_APP_URL,  // 路径前缀
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      markdown(),
    ],
    // 生产构建配置
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
        entry: resolve(__dirname, 'src/components/index.ts'),
        name: 'ChlUi',
        fileName: (format) => `chl.${format}.js`
      } :null
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        '@Components': resolve(__dirname, "./src/components"),
        '@example': resolve(__dirname, "./example"),
      },
      // 导入时想要省略的扩展名列表
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
  })
}