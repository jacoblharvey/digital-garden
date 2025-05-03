import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import astro from "eslint-plugin-astro";
import globals from "globals";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const espree = require("espree");
const astroParser = (await import("astro-eslint-parser")).default;

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.astro"],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: espree,
        sourceType: "module",
        ecmaVersion: "latest",
      },
      globals: {
        Astro: "readonly",
      },
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      parser: espree,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    ignores: ["node_modules/", "dist/", ".astro/", ".github/"],
  },
];
