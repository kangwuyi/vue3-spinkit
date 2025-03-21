# vue3-spinkit

[![npm version](https://img.shields.io/npm/v/vue3-spinkit)]
(https://badge.fury.io/js/vue3-spinkit)

[![npm downloads](https://img.shields.io/npm/dm/vue3-spinkit)]
(https://npm-stat.com/charts.html?package=vue3-spinkit)

[![npm license](https://img.shields.io/npm/l/vue3-spinkit)]
(https://github.com/kangwuyi/vue3-spinkit/LICENSE)

<!-- [![Build Status](https://travis-ci.org/kangwuyi/vue3-spinkit.svg?branch=master)]
(https://travis-ci.org/kangwuyi/vue3-spinkit) -->

<!-- [![codecov](https://codecov.io/gh/kangwuyi/vue3-spinkit/branch/master/graph/badge.svg)]
(https://codecov.io/gh/kangwuyi/vue3-spinkit) -->

<!-- [![Stylelint](https://img.shields.io/badge/stylelint-enabled-brightgreen.svg)]
(https://stylelint.io/) -->

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