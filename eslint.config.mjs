import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: false,
  react: true,
  formatters: true,
  rules: {
    'no-shadow': 'off',
    'antfu/top-level-function': 'off',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
})
