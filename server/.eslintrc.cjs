module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  env: {
    node: true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'warn'
  }
}
