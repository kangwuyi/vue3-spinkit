import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// 组件命名插件
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    dts({
      // 将所有声明合并到一个文件
      rollupTypes: true,
      // 指定 tsconfigPath
      tsconfigPath: './tsconfig.bundle.json',
      // 基于 package.json 的 `types` 字段生成，或者 `${outDir}/index.d.ts`
      insertTypesEntry: false,
      // 将源码里的 .d.ts 文件复制到 `outDir`
      copyDtsFiles: false,
      // 强制删除所有 Vite（Rollup）的原始产物
      declarationOnly: false,
      outDir: 'build',
    }),
  ],
  build: {
    outDir: 'build',
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
    //压缩
    minify: 'esbuild',
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     // 生产环境时移除console.log调试代码
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
    // 库模式打包
    lib: {
      entry: resolve(__dirname, '/src/components/index.ts'),
      name: 'vue3-spinner',
      fileName: 'vue3-spinner',
      formats: ['es', 'umd'],
    },
  },
})
