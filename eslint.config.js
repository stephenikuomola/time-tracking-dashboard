import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsdoc from 'eslint-plugin-jsdoc';
import perfectionist from 'eslint-plugin-perfectionist';
import packageJson from "eslint-plugin-package-json";
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import * as jsoncParser from "jsonc-eslint-parser";

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser }
  },
  jsdoc.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  packageJson.configs.recommended,
  ...eslintPluginJsonc.configs['flat/base'],
  {
    files: ['**/*.js', '**/*.json', '**/*.json5'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsdoc
    },
    rules: {
      'jsonc/quote':'error',
      'jsonc/quote-props':'error',
      'jsonc/valid-json-number':'error',
      'jsonc/no-sparse-arrays': 'error',
      'jsonc/no-dupe-keys':'error',
      'jsonc/no-comments':'error',
      'jsdoc/require-description': 'error',
      'jsonc/no-template-literals':'error',
      'jsonc/no-undefined-values': 'error',
      'jsdoc/check-access': 1,
      'jsdoc/check-alignment': 1,
      'jsdoc/check-indentation': 1,
      'jsdoc/check-line-alignment': 1,
      'jsdoc/check-param-names': 1, // Recommended
      'jsdoc/check-property-names': 1, // Recommended
      'jsdoc/check-syntax': 1,
      'jsdoc/check-tag-names': 1, // Recommended
      'jsdoc/check-template-names': 1,
      'jsdoc/check-types': 1, // Recommended
      'jsdoc/check-values': 1, // Recommended
      'jsdoc/convert-to-jsdoc-comments': 1,
      'jsdoc/empty-tags': 1, // Recommended
      'jsdoc/escape-inline-tags': 1, // Recommended for TS configs
      'jsdoc/implements-on-classes': 1, // Recommended
      'jsdoc/imports-as-dependencies': 1,
      'jsdoc/informative-docs': 1,
      'jsdoc/lines-before-block': 1,
      'jsdoc/match-description': 1,
      'jsdoc/match-name': 1,
      'jsdoc/multiline-blocks': 1, // Recommended
      'jsdoc/no-bad-blocks': 1,
      'jsdoc/no-blank-block-descriptions': 1,
      'jsdoc/no-defaults': 1, // Recommended
      'jsdoc/no-missing-syntax': 1,
      'jsdoc/no-multi-asterisks': 1, // Recommended
      'jsdoc/no-restricted-syntax': 1,
      'jsdoc/no-undefined-types': 1, // Recommended for non-TS configs
      'jsdoc/reject-any-type': 1, // Recommended
      'jsdoc/reject-function-type': 1, // Recommended
      'jsdoc/require-asterisk-prefix': 1,
      'jsdoc/require-description-complete-sentence': 1,
      'jsdoc/require-example': 1,
      'jsdoc/require-file-overview': 1,
      'jsdoc/require-hyphen-before-param-description': 1,
      'jsdoc/require-jsdoc': 1, // Recommended
      'jsdoc/require-next-description': 1,
      'jsdoc/require-next-type': 1, // Recommended
      'jsdoc/require-param-description': 1, // Recommended
      'jsdoc/require-param-name': 1, // Recommended
      'jsdoc/require-param-type': 1, // Recommended in non-TS configs
      'jsdoc/require-param': 1, // Recommended
      'jsdoc/require-property-description': 1, // Recommended
      'jsdoc/require-property-name': 1, // Recommended
      'jsdoc/require-property-type': 1, // Recommended in non-TS configs
      'jsdoc/require-property': 1, // Recommended
      'jsdoc/require-rejects': 1, // Recommended
      'jsdoc/require-returns-check': 1, // Recommended
      'jsdoc/require-returns-description': 1, // Recommended
      'jsdoc/require-returns-type': 1, // Recommended in non-TS configs
      'jsdoc/require-returns': 1, // Recommended
      'jsdoc/require-template': 1,
      'jsdoc/require-template-description': 1,
      'jsdoc/require-throws': 1,
      'jsdoc/require-throws-description': 1,
      'jsdoc/require-throws-type': 1, // Recommended
      'jsdoc/require-yields-check': 1, // Recommended
      'jsdoc/require-yields-description': 1,
      'jsdoc/require-yields-type': 1, // Recommended
      'jsdoc/require-yields': 1, // Recommended
      'jsdoc/sort-tags': 1,
      'jsdoc/tag-lines': 1, // Recommended
      'jsdoc/text-escaping': 1,
      'jsdoc/type-formatting': 1,
      'jsdoc/valid-types': 1, // Recommended
      'no-const-assign': 'error',
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
  }
]);
