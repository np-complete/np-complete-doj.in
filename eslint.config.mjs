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
  ...compat.extends('plugin:react/recommended', 'airbnb'),
  {
    plugins: {
      react,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-shadow': 'off',
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],
      'react/jsx-filename-extension': [1, {
        extensions: ['.js'],
      }],
      'react/prop-types': 'off',
    },
  }];
