<div align="center">
  <p>
    <img alt="Gadget logo" src="https://raw.githubusercontent.com/gadget-inc/js-clients/main/docs/assets/gadget-logo.png" />
  </p>
  <p>
    <a href="">
      <img alt="GitHub CI status" src="https://badgen.net/github/checks/gadget-inc/js-clients/main/test?label=CI" />
    </a>
    <a href="https://www.npmjs.com/package/@gadgetinc/react-shopify-app-bridge">
      <img alt="npm version" src="https://badgen.net/npm/dw/@gadgetinc/shopify-extensions?color=4148f2" />
    </a>
  </p>
  <p>
    <strong>
      Utilities for Shopify extension development on the <a href="https://gadget.dev">Gadget</a> platform.
    </strong>
  </p>
</div>

## Introduction

This library is a collection of helpers for using your Gadget app in Shopify extensions. It works in both plain javascript extension contexts as well as with React and Preact.

## Installation

This is a companion package to the JavaScript client package generated for your Gadget app. You must first install the JS client for your app, and then install this package.

To install the JS client for your app, you must set up the Gadget NPM registry, and then install the client:

```bash
npm config set @gadget-client:registry https://registry.gadget.dev/npm

yarn add @gadget-client/my-app-slug
# or
npm install @gadget-client/my-app-slug
```

Full installation instructions can be found in the Gadget docs at `https://docs.gadget.dev/api/<my-app-slug>/external-api-calls/installing`.

Once you have your JS client installed, you can install this library with `yarn` or `npm`:

```
yarn add @gadgetinc/shopify-extensions
# or
npm install --save @gadgetinc/shopify-extensions
```

## Example usage

Within an extension function you can set up your Gadget client to authenticate with a session token:

```javascript
import { extension, Button } from "@shopify/ui-extensions/customer-account";
import { Client } from "@gadget-client/my-app-slug";
import { registerShopifySessionTokenAuthentication } from "@gadgetinc/shopify-extensions";

const gadgetApi = new Client();

export default extension("example.extension.point", (root, api) => {
  const { i18n, sessionToken } = api;

  registerShopifySessionTokenAuthentication(gadgetApi, sessionToken);

  root.appendChild(root.createComponent(Button, { to: "extension:/" }, i18n.translate("menuItemButton")));
});
```

Within a Shopify React extension, you can use `useGadget` to access your api client setup for shopify session token authentication:

```tsx
import { Client } from "@gadget-client/my-app-slug";
import { Provider, useGadget } from "@gadgetinc/shopify-extensions/react";
import { reactExtension, useApi } from "@shopify/ui-extensions-react/customer-account";

const api = new Client();

export default reactExtension("example.extension.point", () => <GadgetUIExtension />);

function GadgetUIExtension() {
  const { sessionToken } = useApi();

  return (
    <Provider api={api} sessionToken={sessionToken}>
      <UIExtension />
    </Provider>
  );
}

function UIExtension() {
  const { ready, api } = useGadget();

  // ready will be true as soon as the api client is ready to authenticate with shopify session token auth
  // use api as you normally would with @gadgetinc/react
}
```

Within a Shopify Preact extension, you can use `useGadget` to access your api client setup for shopify session token authentication:

```tsx
import { Client } from "@gadget-client/my-app-slug";
import { Provider, useGadget } from "@gadgetinc/shopify-extensions/preact";
import { extension } from "@shopify/ui-extensions/checkout";

const api = new Client();

export default extension("purchase.checkout.block.render", (root, { sessionToken }) => {
  return (
    <Provider api={api} sessionToken={sessionToken}>
      <UIExtension />
    </Provider>
  );
});

function UIExtension() {
  const { ready, api } = useGadget();

  // ready will be true as soon as the api client is ready to authenticate with shopify session token auth
  // use api as you normally would with @gadgetinc/preact
}
```
