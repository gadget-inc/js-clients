# js-clients

This monorepo contains the code that powers the generated JavaScript & TypeScript client for [Gadget](https://gadget.dev) applications. The inner packages:

- [`@gadgetinc/core`](https://github.com/gadget-inc/js-clients/tree/main/packages/core) contains core types and interfaces that all Gadget client implementations must conform to
- [`@gadgetinc/client-hooks`](https://github.com/gadget-inc/js-clients/tree/main/packages/client-hooks) shared implementations of core hooks used in React/Preact libraries
- [`@gadgetinc/react`](https://github.com/gadget-inc/js-clients/tree/main/packages/react) contains bindings for React applications that want to use their Gadget backend in React components
- [`@gadgetinc/react-shopify-app-bridge`](https://github.com/gadget-inc/js-clients/tree/main/packages/react-shopify-app-bridge) contains React components for building Shopify Applications using Shopify's App Bridge and Gadget's Shopify Connection. Read more in the [Gadget docs](https://docs.gadget.dev/guides/connections/shopify).
- [`@gadgetinc/shopify-extensions`](https://github.com/gadget-inc/js-clients/tree/main/packages/shopify-extensions) contains utilities for working with [Shopify UI extensions](https://github.com/Shopify/ui-extensions) in both React and JavaScript.
- [`@gadgetinc/react-chatgpt-apps`](https://github.com/gadget-inc/js-clients/tree/main/packages/react-chatgpt-apps) contains utilities for building [ChatGPT Apps SDK](https://developers.openai.com/apps-sdk/) widgets in React.
- [`@gadgetinc/api-client-core`](https://github.com/gadget-inc/js-clients/tree/main/packages/api-client-core) [Deprecated] previously contained helper functions and types used to implement each client; superseded by `@gadgetinc/core`.
