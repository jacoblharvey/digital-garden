import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

// https://eslint.org/docs/latest/use/configure/configuration-files
export default defineConfig([
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    extends: [eslintPluginPrettierRecommended],
    rules: { "prettier/prettier": "warn" },
  },
  { ignores: ["node_modules/", "dist/", ".astro/", ".github/"] },
]);
