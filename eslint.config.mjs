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
    // 未使用変数の自動削除を無効化（JSX内の参照が正しく認識されない問題の暫定対処）
    'unused-imports/no-unused-imports': 'off',
    'no-unused-vars': 'off',
  },
})
