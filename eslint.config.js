import css from '@eslint/css';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import * as jsoncParser from 'jsonc-eslint-parser';

export default defineConfig([
  globalIgnores(['dist/**', '.parcel-cache/**', 'node_modules/**']),
  {
    files: ['**/*.js'],
    plugins: { jsdoc }
  },
  {
    extends: ['css/recommended'],
    files: ['**/*.css'],
    language: 'css/css',
    languageOptions: {
      tolerant: true
    },
    plugins: { css },
    rules: {
      'css/no-empty-blocks': 'error'
    }
  },
  {
    files: ['**/*.json'],
    languageOptions: { parser: jsoncParser }
  },
  {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs}', '**/*.js'],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    rules: {
      'constructor-super': ['error'],
      'default-case': ['error'],
      'default-case-last': ['error'],
      'jsdoc/check-access': ['warn'],
      'jsdoc/check-alignment': ['warn'],
      'jsdoc/check-param-names': ['warn'], // Recommended
      'jsdoc/check-property-names': ['warn'], // Recommended
      'jsdoc/check-tag-names': ['warn'], // Recommended
      'jsdoc/check-types': ['warn'], // Recommended
      'jsdoc/check-values': ['error'],
      'jsdoc/empty-tags': ['warn'], // Recommended
      'jsdoc/implements-on-classes': ['warn'], // Recommended
      'jsdoc/multiline-blocks': ['warn'], // Recommended
      'jsdoc/no-multi-asterisks': ['warn'], // Recommended
      'jsdoc/no-undefined-types': ['warn'], // Recommended
      'jsdoc/require-asterisk-prefix': ['warn'],
      'jsdoc/require-description': ['warn'],
      'jsdoc/require-jsdoc': ['error'], // Recommended
      'jsdoc/require-param': ['error'], // Recommended
      'jsdoc/require-param-description': ['warn'], // Recommended
      'jsdoc/require-param-name': ['warn'], // Recommended
      'jsdoc/require-param-type': ['warn'], // Recommended
      'jsdoc/require-property': ['warn'], // Recommended
      'jsdoc/require-property-description': ['warn'], // Recommended
      'jsdoc/require-property-name': ['warn'], // Recommended
      'jsdoc/require-property-type': ['warn'], // Recommended
      'jsdoc/require-returns': ['warn'], // Recommended
      'jsdoc/require-returns-check': ['warn'], // Recommended
      'jsdoc/require-returns-description': ['warn'], // Recommended
      'jsdoc/require-returns-type': ['warn'], // Recommended
      'jsdoc/require-yields': ['warn'], // Recommended
      'jsdoc/require-yields-check': ['warn'], // Recommended
      'jsdoc/tag-lines': ['warn'], // Recommended
      'jsdoc/valid-types': ['warn'], // Recommend
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-ex-assign': 'error',
      'no-magic-numbers': 'error',
      'no-self-compare': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-unreachable': 'error',
      'no-useless-assignment': 'error',
      'no-var': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: 'error'
    }
  },

  // TODO This code is causing a serious bug
  perfectionist.configs['recommended-natural'],
  ...eslintPluginJsonc.configs['flat/base'],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
]);
