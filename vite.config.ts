import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintLoad from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), eslintLoad({})],
  base: './',
  publicDir: 'public',
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: './assets',
    commonjsOptions: {
      // esmExternals: true,
      transformMixedEsModules: true,
    },
  },
  css: {},
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 8080,
    open: false,
  },
})
