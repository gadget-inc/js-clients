/** @type { import('@storybook/react-vite').StorybookConfig } */
import { resolve } from "path";
import { fileURLToPath } from "url";

const config = {
  stories: ["../spec/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // @shopify/polaris-types is a types-only package that doesn't have proper ESM exports
    // Alias it to an empty module since it's only needed for TypeScript type checking
    const __dirname = fileURLToPath(new URL(".", import.meta.url));

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@shopify/polaris-types": resolve(__dirname, "empty-module.js"),
    };

    // Also exclude it from optimization
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [...(config.optimizeDeps.exclude || []), "@shopify/polaris-types"];

    return config;
  },
};
export default config;
