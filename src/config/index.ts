export interface SpinType {
  [index: string]: { className?: string; node: number }
}
// Spinkit
export const SPINKIT_: SpinType = {
  circle: { className: 'sk-circle', node: 12 },
  'cube-grid': { className: 'sk-cube-grid', node: 9 },
  wave: { className: 'sk-wave', node: 5 },
  'folding-cube': { className: 'sk-folding-cube', node: 4 },
  'three-bounce': { className: 'sk-three-bounce', node: 3 },
  'double-bounce': { className: 'sk-double-bounce', node: 2 },
  'wandering-cubes': { className: 'sk-wandering-cubes', node: 2 },
  'chasing-dots': { className: 'sk-chasing-dots', node: 2 },
  'rotating-plane': { className: 'sk-rotating-plane', node: 1 },
  pulse: { className: 'sk-pulse', node: 1 },
  wordpress: { className: 'sk-wordpress', node: 1 },
  'fading-circle': { className: 'sk-fading-circle', node: 12 },
}
// Loaders.css
export const LOADERS_CSS: SpinType = {
  'square-spin': { node: 1 },
  'ball-grid-beat': { node: 9 },
  'ball-grid-pulse': { node: 9 },
  'line-spin-fade-loader': { node: 8 },
  'ball-spin-fade-loader': { node: 8 },
  'ball-pulse-rise': { node: 5 },
  'line-scale': { node: 5 },
  'line-scale-pulse-out': { node: 5 },
  'line-scale-pulse-out-rapid': { node: 5 },
  pacman: { node: 5 },
  'line-scale-party': { node: 4 },
  'ball-triangle-path': { node: 3 },
  'ball-scale-multiple': { node: 3 },
  'ball-scale-ripple-multiple': { node: 3 },
  'ball-pulse-sync': { node: 3 },
  'ball-pulse': { node: 3 },
  'ball-beat': { node: 3 },
  'ball-zig-zag': { node: 2 },
  'ball-zig-zag-deflect': { node: 2 },
  'ball-clip-rotate-pulse': { node: 2 },
  'ball-clip-rotate-multiple': { node: 2 },
  'ball-clip-rotate': { node: 1 },
  'ball-scale-ripple': { node: 1 },
  'triangle-skew-spin': { node: 1 },
}
// Loading.io
export const LOADING_IO: SpinType = {
  'circle-solid-spin': { className: 'sk-circle-solid-spin', node: 1 },
  'dual-ring': { className: 'sk-dual-ring', node: 0 },
  facebook: { className: 'sk-facebook', node: 3 },
  heart: { className: 'sk-heart', node: 1 },
  ring: { className: 'sk-ring', node: 4 },
  roller: { className: 'sk-roller', node: 8 },
  ellipsis: { className: 'sk-ellipsis', node: 4 },
  grid: { className: 'sk-grid', node: 9 },
  hourglass: { className: 'sk-hourglass', node: 0 },
  ripple: { className: 'sk-ripple', node: 2 },
}
// Awesome Spinners
export const AWESOMESpinTypeNERS: SpinType = {
  loadbar: { className: 'sk-loadbar', node: 0 },
  hydrogen: { className: 'sk-hydrogen', node: 0 },
  clock: { className: 'sk-clock', node: 0 },
  'circle-fade': { className: 'sk-circle-fade', node: 0 },
  moon: { className: 'sk-moon', node: 1 },
}
