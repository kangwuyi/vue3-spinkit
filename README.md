# vue3-spinkit

# pre
fork from https://github.com/TonPC64/vue-spinkit（vue 2）

file Unpacked Size from 410 kB to ~80kb

## Installation

```bash
# use yarn
yarn add vue-spinkit
# use npm
npm install --save vue-spinkit
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
