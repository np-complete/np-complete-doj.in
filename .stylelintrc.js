module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'order/properties-alphabetical-order': true,
    'prettier/prettier': true,
    'selector-max-id': 1,
  },
};
