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
    setupNodeEvents(on, config) {
      on("before:browser:launch", (_browser, launchOptions) => {
        if (process.env["CI"]) {
          // try to fix https://github.com/cypress-io/cypress/issues/29860
          launchOptions.args.push("--disable-gpu");
        }
        return launchOptions;
      });
    },
  },
  retries: process.env["CI"] ? 2 : 0,
});
