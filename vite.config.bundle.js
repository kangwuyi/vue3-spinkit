import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// 组件命名插件
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [dts(), vue(), vueJsx(), DefineOptions()],
  exports: {
    './*': './*',
  },
  build: {
    outDir: 'build',
    //压缩
    minify: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖，忽略打包vue文件
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/components/Spinner.vue',
      name: 'vue3-spinner',
      fileName: 'vue3-spinner',
      // formats: ['es', 'umd', 'cjs'],
    },
  },
  css: {
    extract: false,
  },
})
