# vue3-spinkit

<p align="center">
  <a href="https://npmcharts.com/compare/vue3-spinkit?minimal=true"><img src="https://img.shields.io/npm/dm/vue3-spinkit.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue3-spinkit"><img src="https://img.shields.io/npm/v/vue3-spinkit.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue3-spinkit"><img src="https://img.shields.io/npm/l/vue3-spinkit.svg?sanitize=true" alt="License"></a>
</p>

<p align="center">
  <a href="https://orcid.org/0009-0009-0993-7629"><img src="https://img.shields.io/badge/iD-0009--0009--0993--7629-blue" alt="License"></a>
  <a href="https://ko-fi.com/kwy"><img src="https://badgen.net/badge/icon/kofi?icon=kofi&label=kwy" alt="Kwy"></a>
</p>

<p align="center">

![Depfu](https://img.shields.io/depfu/kangwuyi/vue3-spinkit) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kangwuyi/vue3-spinkit) [![Code Coverage](https://img.shields.io/codecov/c/github/kangwuyi/vue3-spinkit)](https://codecov.io/github/kangwuyi/vue3-spinkit)





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