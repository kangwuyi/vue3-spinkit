# vue3-spinkit

<p align="center">
  <!-- <a href="https://circleci.com/gh/vuejs/vue/tree/dev">
    <img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg?sanitize=true" alt="Build Status">
  </a> -->
  <!-- <a href="https://codecov.io/github/vuejs/vue?branch=dev">
    <img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true" alt="Coverage Status">
  </a> -->
  <a href="https://npmcharts.com/compare/vue3-spinkit?minimal=true">
    <img src="https://img.shields.io/npm/dm/vue3-spinkit.svg?sanitize=true" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vue3-spinkit">
    <img src="https://img.shields.io/npm/v/vue3-spinkit.svg?sanitize=true" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/vue3-spinkit">
    <img src="https://img.shields.io/npm/l/vue3-spinkit.svg?sanitize=true" alt="License">
  </a>
   <a href="https://orcid.org/0009-0009-0993-7629">
    <img src="https://img.shields.io/badge/iD-0009--0009--0993--7629-blue" alt="License">
  </a>
</p>


# pre
fork from https://github.com/TonPC64/vue-spinkit（vue 2）

file Unpacked Size from 410 kB to ~80kb

## Installation

```bash
# use yarn
yarn add vue3-spinkit
# use npm
npm install --save vue3-spinkit
```

## How to use
```js
import { createApp } from 'vue'
import Spinner from 'vue3-spinkit'
import 'vue3-spinkit/build/vue3-spinner.css'
import App from './App.vue'

const app = createApp(App)
app.component('Spinner', Spinner)
app.mount('#app')
```

## In file vue
```html
<Spinner name="circle" color="red"/>
```

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | string | 'three-bounce' | specify spinner to use (defaults to line-scale-pulse-out-rapid). |
| color | string |  | programmatically set the color of the spinners; this can either be a hex value or a color word. |
| noFadeIn | boolean | false | set use fade in |
| fadeIn | string | 'full' | set the time before the spinner fades in. Have 'full', 'half' and 'quarter' |
| className | string | | add a custom classname to the outer div |
| width | string | | set width of spinner |
| height | string | | set heght of spinner |


# 发包过程
```
npm run tsc
api-extractor run
npm run bundle
npm publish
```

构建过程需要注意 `[pageage.json].typings` 与构建输出结果中的文件保持一致