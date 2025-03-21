/// <reference types="vite/client" />

declare module '*.vue' {
  import { ComponentOptions, type DefineComponent } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
