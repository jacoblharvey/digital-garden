// .stylellintrc.mjs

/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-astro",
    "stylelint-prettier/recommended",
  ],
  defaultSeverity: "warning",
};
