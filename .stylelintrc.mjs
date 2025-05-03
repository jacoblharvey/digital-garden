// .stylellintrc.mjs

/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-idiomatic-order",
    "stylelint-config-standard-scss",
    "stylelint-config-html",
  ],
  defaultSeverity: "warning",
};
