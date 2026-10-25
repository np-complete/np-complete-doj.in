module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-max-id': 1,
  },
}
