import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: {
        define: {
          process: { env: { ...process.env } },
        },
      },
    },
  },
});
