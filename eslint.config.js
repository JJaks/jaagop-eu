import eslintPluginAstro from "eslint-plugin-astro";
export default [
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  {
    rules: {
      "astro/no-set-html-directive": "error",
    },
  },
];
