import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    files: [
      '**/*.{ts,tsx}',
      '**/*.vue',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.cts',
      '**/*.mts',
    ],
    ignores: ['.gitignore', 'dist', 'node_modules'],
    rules: {
      'vue/no-unused-components': 'off', // 当存在定义而未使用的组件时，关闭报错
      'no-unused-vars': 'off', // 当存在定义而未使用的变量时，关闭报错
      'vue/require-default-prop': 'off',
      'vue/no-v-for-template-key-on-child': 'off',
      'vue/attributes-order': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/no-deprecated-slot-scope-attribute': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/return-in-computed-property': 'off',
      'vue/this-in-template': 'off',
      'vue/v-on-style': 'off',
      'vue/order-in-components': 'off',
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
]
