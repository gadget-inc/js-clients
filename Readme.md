# js-clients

This monorepo contains the code that powers the generated JavaScript & TypeScript client for [Gadget](https://gadget.dev) applications. The inner packages:

- [`@gadgetinc/api-client-core`](https://github.com/gadget-inc/js-clients/tree/main/packages/api-client-core) contains helper functions and types used to implement each client for each Gadget app
- [`@gadgetinc/react`](https://github.com/gadget-inc/js-clients/tree/main/packages/react) contains bindings for React applications which want to use their gadget backend in React components
- [`@gadgetinc/react-shopify-app-bridge`](https://github.com/gadget-inc/js-clients/tree/main/packages/react-shopify-app-bridge) contains React components for building Shopify Applications using Shopify's App Bridge and Gadget's Shopify Connection. Read more in the [Gadget docs](https://docs.gadget.dev/guides/connections/shopify).
