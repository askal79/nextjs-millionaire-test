import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import airbnbBase from "eslint-config-airbnb/base";
import airbnbHooks from "eslint-config-airbnb/hooks";
import {FlatCompat} from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"]
  }),
  pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  {
    plugins: {
      react: pluginReact,
      hooks: airbnbHooks,
      // next: nextConfig.configs.recommended.plugins,
    },
    rules: {
      ...airbnbBase.rules,
      ...pluginReact.configs.recommended.rules,
      ...airbnbHooks.rules,
      "react/react-in-jsx-scope": "off", // For Next.js, React is in scope automatically
      "import/prefer-default-export": "off", // Allow single named exports
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": [
        "error",
        { "allow": ["info", "error", "trace", "dir"] }
      ]
    },
    languageOptions: {
      parser: tseslint.parser, // Add TypeScript parser for TypeScript support
      parserOptions: {
        ecmaVersion: 2021,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },
    settings: {
      next: {
        rootDir: ".", // Specify your Next.js root directory if needed
      },
    },
  },
];