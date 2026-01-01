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
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
    extends: ['css/recommended'],
    languageOptions: {
      tolerant: true
    },
    rules: {
      'css/no-duplicate-selectors': 'warn',
      'css/no-invalid-position-at-rule': 'error',
      'css/no-unknown-at-rules': 'error',
      'css/no-unknown-properties': 'error',
      'css/no-unknown-pseudo-classes': 'error',
      'css/no-unknown-pseudo-elements': 'error',
      'css/selector-pseudo-class-no-unknown': 'error',
      'css/selector-pseudo-element-no-unknown': 'error'
    }
  },
  {
    files: ['**/*.json'],
    languageOptions: { parser: jsoncParser }
  },
  {
    files: ['**/*.{js,mjs,cjs}', '**/*.js'],
    plugins: { js, jsdoc },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'jsdoc/require-description': 'warn',
      'jsdoc/check-access': 'warn', // Recommended
      'jsdoc/check-alignment': 'warn', // Recommended
      // "jsdoc/check-examples": 1, // Deprecated and not for ESLint >= 8
      'jsdoc/check-indentation': 'warn',
      'jsdoc/check-line-alignment': 'warn',
      'jsdoc/check-param-names': 'warn', // Recommended
      'jsdoc/check-property-names': 'warn', // Recommended
      'jsdoc/check-syntax': 'warn',
      'jsdoc/check-tag-names': 'warn', // Recommended
      'jsdoc/check-template-names': 'warn',
      'jsdoc/check-types': 'warn', // Recommended
      'jsdoc/check-values': 'warn', // Recommended
      'jsdoc/convert-to-jsdoc-comments': 'warn',
      'jsdoc/empty-tags': 'warn', // Recommended
      'jsdoc/implements-on-classes': 'warn', // Recommended
      'jsdoc/imports-as-dependencies': 'warn',
      'jsdoc/informative-docs': 'warn',
      'jsdoc/lines-before-block': 'warn',
      'jsdoc/match-description': 'warn',
      'jsdoc/match-name': 'warn',
      'jsdoc/multiline-blocks': 'warn', // Recommended
      'jsdoc/no-bad-blocks': 'warn',
      'jsdoc/no-blank-block-descriptions': 'warn',
      'jsdoc/no-defaults': 'warn', // Recommended
      'jsdoc/no-missing-syntax': 'warn',
      'jsdoc/no-multi-asterisks': 'warn', // Recommended
      'jsdoc/no-restricted-syntax': 'warn',
      'jsdoc/no-types': 'warn', // Recommended for TS configs
      'jsdoc/no-undefined-types': 'warn', // Recommended for non-TS configs
      'jsdoc/reject-any-type': 'warn', // Recommended
      'jsdoc/reject-function-type': 'warn', // Recommended
      'jsdoc/require-asterisk-prefix': 'warn',
      'jsdoc/require-description-complete-sentence': 'warn',
      'jsdoc/require-example': 'warn',
      'jsdoc/require-file-overview': 'warn',
      'jsdoc/require-hyphen-before-param-description': 'warn',
      'jsdoc/require-jsdoc': 'warn', // Recommended
      'jsdoc/require-next-description': 'warn',
      'jsdoc/require-next-type': 'warn', // Recommended
      'jsdoc/require-param-description': 'warn', // Recommended
      'jsdoc/require-param-name': 'warn', // Recommended
      'jsdoc/require-param-type': 'warn', // Recommended in non-TS configs
      'jsdoc/require-param': 'warn', // Recommended
      'jsdoc/require-property-description': 'warn', // Recommended
      'jsdoc/require-property-name': 'warn', // Recommended
      'jsdoc/require-property-type': 'warn', // Recommended in non-TS configs
      'jsdoc/require-property': 'warn', // Recommended
      'jsdoc/require-rejects': 'warn', // Recommended
      'jsdoc/require-returns-check': 'warn', // Recommended
      'jsdoc/require-returns-description': 'warn', // Recommended
      'jsdoc/require-returns-type': 'warn', // Recommended in non-TS configs
      'jsdoc/require-returns': 'warn', // Recommended
      'jsdoc/require-template': 'warn',
      'jsdoc/require-template-description': 'warn',
      'jsdoc/require-throws': 'warn',
      'jsdoc/require-throws-description': 'warn',
      'jsdoc/require-throws-type': 'warn', // Recommended
      'jsdoc/require-yields-check': 'warn', // Recommended
      'jsdoc/require-yields-description': 'warn',
      'jsdoc/require-yields-type': 'warn', // Recommended
      'jsdoc/require-yields': 'warn', // Recommended
      'jsdoc/sort-tags': 'warn',
      'jsdoc/tag-lines': 'warn', // Recommended
      'jsdoc/text-escaping': 'warn',
      'jsdoc/type-formatting': 'warn',
      'jsdoc/valid-types': 'warn',
      // Recommend      'no-const-assign': ['error'],
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
  jsdoc.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
]);
