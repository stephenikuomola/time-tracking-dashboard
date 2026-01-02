import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsdoc from 'eslint-plugin-jsdoc';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import * as jsoncParser from 'jsonc-eslint-parser';
import css from '@eslint/css';

export default defineConfig([
  globalIgnores(['dist/**', '.parcel-cache/**', 'node_modules/**']),
  {
    files: ['**/*.js'],
    plugins: { jsdoc }
  },
  {
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
    extends: ['css/recommended'],
    languageOptions: {
      tolerant: true
    },
    rules: {
      'css/no-empty-blocks': 'error'
    }
  },
  {
    files: ['**/*.json'],
    languageOptions: { parser: jsoncParser }
  },
  {
    files: ['**/*.{js,mjs,cjs}', '**/*.js'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
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
      semi: 'error',
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
      'jsdoc/valid-types': ['warn'] // Recommend
    }
  },

  // TODO This code is causing a serious bug
  perfectionist.configs['recommended-natural'],
  ...eslintPluginJsonc.configs['flat/base'],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
]);
