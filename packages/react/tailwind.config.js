/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./cypress/support/component-index.html",
    "./spec/auto/shadcn-defaults/**/*.{ts,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
