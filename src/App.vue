<template>
  <Linking repo="vue3-spinkit" />
  <h1 @click.native="console.log('hi~')">
    Vue 3 Spinkit
    <small v-if="spinName" class="small-font">
      , the spin name is <span>{{ spinName }}</span>
    </small>
  </h1>

  <div class="container">
    <div
      :key="_"
      v-for="(_, i) in keyList"
      class="column"
      :data-spin="_"
      @click.native="handleClick(_)"
    >
      <div class="spin-box">
        <Spinner :name="_" :color="colorList[i]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import * as DEFAULT_CONFIG from './config/index.ts'
import Spinner from './components/Spinner.vue'
import randomColor from 'randomcolor'

export default defineComponent({
  name: 'App',
  components: {
    Spinner,
  },
  setup() {
    const { text, copy } = useClipboard({ source: '' })
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
    //
    const spinName = ref('')
    const handleClick = (v: string) => {
      spinName.value = v
      copy(v)
    }
    //
    watch(
      () => text.value,
      (_new, _old) => {
        if (_new)
          toast(`🌈 Copy name '${_new}' to clipboard.`, {
            autoClose: 3000,
          })
      },
      { immediate: true },
    )

    return { handleClick, spinName, keyList, colorList }
  },
})
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}
.column {
  margin-bottom: 10px;
  transition: box-shadow 0.2s;
}
.column:hover {
  box-shadow:
    0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12),
    0 5px 12px 4px rgba(0, 0, 0, 0.09);
}
.spin-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  cursor: pointer;
}
.small-font {
  font-size: 14px;
  color: #999999;
}
.small-font span {
  position: sticky;
  color: red;
}
</style>
