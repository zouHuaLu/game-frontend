/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': ['warn', require('./.prettierrc.cjs')]
  }
}
