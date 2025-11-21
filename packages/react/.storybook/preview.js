/** @type { import('@storybook/react').Preview } */
import "@shopify/polaris/build/esm/styles.css";
import "../spec/shadcn-tailwind.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
