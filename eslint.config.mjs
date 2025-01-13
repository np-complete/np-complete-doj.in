/* eslint-disable import/no-extraneous-dependencies */

import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules/', '**/dist/', '!**/.*'],
  },
  ...compat.extends('airbnb'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-shadow': 'off',
    },
  },
  {
    ...react.configs.flat.recommended,
    rules: {
      ...react.configs.flat.recommended.rules,
      'react/display-name': 'off',
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],
      'react/jsx-filename-extension': ['error', {
        extensions: ['.js'],
      }],
      'react/prop-types': 'off',
    },
  },
];
