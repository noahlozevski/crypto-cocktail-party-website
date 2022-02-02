module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    '@next/next/no-img-element': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off'
    // 'multiline-ternary': ['error', 'always-multiline'],
  },
}
