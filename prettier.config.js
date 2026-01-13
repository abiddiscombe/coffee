/** @type {import('prettier').Config} */
export default {
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-organize-imports"
  ],

  /**
   * Enables automatic class sorting in CVA functions.
   * https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#sorting-classes-in-function-calls
   */
  tailwindFunctions: ["cva"]
}