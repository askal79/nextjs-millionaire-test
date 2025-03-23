/* eslint-disable */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import airbnbBase from 'eslint-config-airbnb/base';
import airbnbHooks from 'eslint-config-airbnb/hooks';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  // { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  // { ignores: ['.prettierrc.mjs', '.lintstagedrc.mjs', '.github/', 'next.config.ts'] },
  // { languageOptions: { globals: globals.browser } },
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  // ...compat.config({
  //   extends: ['prettier', 'plugin:react/recommended', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'airbnb/base', 'next/core-web-vitals', 'next/typescript'],
  //   rules: {
  //     ...airbnbBase.rules,
  //     ...pluginReact.configs.recommended.rules,
  //     ...airbnbHooks.rules,
  //     'react/react-in-jsx-scope': 'off', // For Next.js, React is in scope automatically
  //     'import/prefer-default-export': 'off', // Allow single named exports
  //     '@typescript-eslint/no-explicit-any': 'off',
  //     'no-console': ['error', { allow: ['info', 'error', 'trace', 'dir'] }],
  //     "import/extensions": [
  //       "error",
  //       "ignorePackages",
  //       {
  //         "js": "never",
  //         "jsx": "never",
  //         "ts": "never",
  //         "tsx": "never"
  //       }
  //     ]
  //   },
  //   settings: {
  //     react: {
  //       version: '19.0',
  //     },
  //     next: {
  //       rootDir: '.', // Specify your Next.js root directory if needed
  //     },
  //     "import/resolver": {
  //       // Use Node resolver for JavaScript files
  //       node: {
  //         extensions: [".js", ".jsx", ".ts", ".tsx"]
  //         },
  //     }
  //   },
  //   parser: '@typescript-eslint/parser', // Add TypeScript parser for TypeScript support
  //   parserOptions: {
  //     ecmaVersion: 2021,
  //     sourceType: 'module',
  //   },
  // }),
];
