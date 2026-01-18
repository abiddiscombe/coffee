/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],

  /**
   * Enables automatic class sorting in CVA functions.
   * https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#sorting-classes-in-function-calls
   */
  tailwindFunctions: ["cva"],
};

export default config;
