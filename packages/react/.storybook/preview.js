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
    html: {
      headTags: [
        {
          tagName: "script",
          attributes: {
            src: "https://cdn.shopify.com/shopifycloud/polaris.js",
          },
        },
      ],
    },
  },
};

export default preview;
