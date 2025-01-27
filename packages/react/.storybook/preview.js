/** @type { import('@storybook/react').Preview } */
import "@shopify/polaris/build/esm/styles.css";
import "../globals.css"; // adjust path to your Tailwind CSS file

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
