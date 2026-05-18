import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  formatters: true,
  rules: {
    'no-shadow': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
  },
})
