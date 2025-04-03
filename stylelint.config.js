/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-astro",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "@stylistic/string-quotes": ["double"],
  },
  defaultSeverity: "warning",
};
