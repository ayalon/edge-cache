import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  linterOptions: {
    reportUnusedDisableDirectives: false,
  },
})
  .override('nuxt/vue/rules', {
    rules: {
      'vue/no-multiple-template-root': 0,
      'vue/no-v-html': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-empty-component-block': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/no-v-for-template-key': 'error',
      'vue/no-deprecated-slot-attribute': 0,
      'vue/html-self-closing': 'off',
    },
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  })
