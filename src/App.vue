<template>
  <h1>Example Vue 3 Spinkit</h1>

  <div class="container">
    <div :key="_" v-for="(_, i) in keyList" class="column">
      <div class="code-box">
        <code>{{ htmlTagText(_, i) }}</code>
      </div>
      <div class="spin-box">
        <Spinner :name="_" :color="colorList[i]" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import * as DEFAULT_CONFIG from './config'
import Spinner from './components/Spinner.vue'
import randomColor from 'randomcolor'

export default defineComponent({
  name: 'App',
  components: {
    Spinner,
  },
  setup() {
    const spinMap = reactive(
      Object.values(DEFAULT_CONFIG).reduce((_, v) => {
        return Object.assign(_, v)
      }, {}),
    )
    const keyList = reactive(Object.keys(spinMap))
    const colorList = reactive(
      randomColor({
        count: keyList.length,
      }),
    )
    const htmlTagText = (n, i) => {
      const tmp = i === void 0 ? '' : `color="${colorList[i]}" `
      return `<Spinner name="${n}" ${tmp}/>`
    }
    return { spinMap, keyList, colorList, htmlTagText }
  },
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.column {
  width: 50%;
}
.spin-box,
.code-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spin-box {
  height: 100px;
}
</style>
