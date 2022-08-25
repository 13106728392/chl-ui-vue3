import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue()],
  // base:  'chl-ui-vue3/',
  build: {
    rollupOptions: {
      // input: {
        // main: resolve(__dirname, 'index.html'),
        // nested: resolve(__dirname, 'nested/index.html')
      // },
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    // 构建库模式打包
    lib: {
      // 构建入口
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'ChlUi',
      fileName: (format) => `chl.${format}.js`
    },
  },
  resolve: {
    alias: {
      "chl-ui-vue3":resolve(__dirname, 'chl-ui-vue3'),
      "@": resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
})