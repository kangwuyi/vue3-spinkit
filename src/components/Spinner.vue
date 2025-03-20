<template>
  <div
    v-if="loading.className !== ''"
    :class="[
      {
        'sk-fade-in': fadeIn === 'full' && !noFadeIn,
        'sk-fade-in-half-second': fadeIn === 'half' && !noFadeIn,
        'sk-fade-in-quarter-second': fadeIn === 'quarter' && !noFadeIn,
        [className]: !!className,
      },
      'sk-spinner',
      loading.className,
    ]"
    :style="style"
  >
    <div :key="index" v-for="(_, index) in loading.node"></div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue'
import * as DEFAULT_CONFIG from '../config'

export default defineComponent({
  name: 'imp-spinner',
  props: {
    name: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: '',
    },
    noFadeIn: {
      type: Boolean,
      default: false,
    },
    fadeIn: {
      type: String,
      default: 'full',
    },
    className: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const spinMap = reactive(
      Object.values(DEFAULT_CONFIG).reduce((_, v) => {
        return Object.assign(_, v)
      }, {}),
    )
    const loading = computed(() => {
      const spin = spinMap[props.name]

      const node = spin && spin.node ? spin.node : 0
      const className = spin && spin.className ? spin.className : props.name
      return { node, className }
    })

    const style = computed(() => {
      let color = props.color !== '' ? 'color: ' + props.color + ';' : ''
      let width = props.width !== '' ? 'width: ' + props.width + 'px;' : ''
      let height = props.height !== '' ? 'height: ' + props.height + 'px;' : ''
      return 'text-align: center;' + color + width + height
    })
    return { loading, style }
  },
})
</script>

<style scoped>
/* @import 'loaders.css'; */
@import './css/base.css';
@import './css/fade-in.css';

@import './css/rotating-plane.css';
@import './css/double-bounce.css';
@import './css/wave.css';
@import './css/wandering-cubes.css';
@import './css/pulse.css';
@import './css/chasing-dots.css';
@import './css/three-bounce.css';
@import './css/circle.css';
@import './css/cube-grid.css';
@import './css/fading-circle.css';
@import './css/folding-cube.css';
@import './css/wordpress.css';

@import './css/loaders.css';
@import './css/loaders-css.css';

@import './css/circle-solid-spin.css';
@import './css/dual-ring.css';
@import './css/ellipsis.css';
@import './css/facebook.css';
@import './css/grid.css';
@import './css/heart.css';
@import './css/hourglass.css';
@import './css/ring.css';
@import './css/ripple.css';
@import './css/roller.css';

@import './css/clock.css';
@import './css/hydrogen.css';
@import './css/loadbar.css';
@import './css/circle-fade.css';
@import './css/moon.css';
</style>
