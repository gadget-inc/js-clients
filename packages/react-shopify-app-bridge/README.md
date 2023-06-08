<div align="center">
  <p>
    <img alt="Gadget logo" src="https://raw.githubusercontent.com/gadget-inc/js-clients/main/docs/assets/gadget-logo.png" />
  </p>
  <p>
    <a href="">
      <img alt="GitHub CI status" src="https://badgen.net/github/checks/gadget-inc/js-clients/main/Test?label=CI" />
    </a>
    <a href="https://www.npmjs.com/package/@gadgetinc/react-shopify-app-bridge">
      <img alt="npm version" src="https://badgen.net/npm/dw/@gadgetinc/react-shopify-app-bridge?color=4148f2" />
    </a>
  </p>
  <p>
    <strong>
      React hooks and components for use with Shopify embedded app development on the <a href="https://gadget.dev">Gadget</a> platform.
    </strong>
  </p>
</div>

## Features

This library implements the following features:

- automatically starts the OAuth process with new users of the application using Gadget, escaping Shopify's iframe if necessary
- establishes an iframe-safe secure session with the Gadget backend using Gadget OAuth PKCE
- sets up the correct React context for making backend calls to Gadget using `@gadgetinc/react`

## Installation

This is a companion package to the JavaScript client package generated for your Gadget app. You must first install the JS client for your app, and then install this package.

To install the JS client for your app, you must set up the Gadget NPM registry, and then install the client:

```bash
npm config set @gadget-client:registry https://registry.gadget.dev/npm

yarn add @gadget-client/my-app-slug
# or
npm install @gadget-client/my-app-slug
```

Full installation instructions can be found in the Gadget docs at `https://docs.gadget.dev/api/<my-app-slug>/installing`.

Once you have your JS client installed, you can install the React hooks library and the Shopify App bridge library with `yarn` or `npm`:

```
yarn add @gadgetinc/react-shopify-app-bridge @gadgetinc/react @shopify/app-bridge-react react
# or
npm install --save @gadgetinc/react-shopify-app-bridge @gadgetinc/react @shopify/app-bridge-react react
```

# Purpose

While exploring Shopify embedded app development, you may have come across [documentation](https://shopify.dev/apps/tools/app-bridge/getting-started) on how to set up Shopify App Bridge. This package will take care of all steps involving OAuth and initializing the Shopify app bridge. The OAuth steps as well as initializing the Shopify app bridge is handled by the `Provider`. The initialized instance of App Bridge is accessible via the `appBridge` key returned from `useGadget`.

## Example usage

NOTE: This example is very similar to that found in [@gadgetinc/react](https://github.com/gadget-inc/js-clients/tree/main/packages/react), however, this example should be followed if you're using the `@gadgetinc/react-shopify-app-bridge` package.

`src/api.ts`

```typescript
// replace `my-app-slug` with your app slug from your Gadget app's domain
import { Client, BrowserSessionStorageType } from "@gadget-client/my-app-slug";

export const api = new Client({
  authenticationMode: {
    browserSession: {
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
```

`src/app.tsx`

```tsx
// import Gadget's react hooks for accessing data from your Gadget app
import { useAction, useFindMany } from "@gadgetinc/react";
// import the Gadget<->Shopify bindings that manage the auth process with Shopify
import { AppType, Provider as GadgetProvider, useGadget } from "@gadgetinc/react-shopify-app-bridge";
// import and use Shopify's react components like you might in other Shopify app
import { Button, Redirect, TitleBar } from "@shopify/app-bridge/actions";
import React from "react";
// import the instance of the Gadget API client for this app constructed in the other file
import { api } from "./api";

export default function App() {
  return (
    // Wrap our main application's react components in the `<GadgetProvider/>` component to interface with Shopify
    // This wrapper sets up the Shopify App Bridge, and will automatically redirect to perform the OAuth authentication if the shopify shop doesn't yet have the store installed.
    <GadgetProvider type={AppType.Embedded} shopifyApiKey="REPLACE ME with api key from Shopify partners dashboard" api={api}>
      <ProductManager />
    </GadgetProvider>
  );
}

// An example component that uses the Gadget React hooks to work with data in the Shopify backend
function ProductManager() {
  const { loading, appBridge, isRootFrameRequest, isAuthenticated } = useGadget();
  const [, deleteProduct] = useAction(api.shopifyProduct.delete);
  const [{ data, fetching, error }, refresh] = useFindMany(api.shopifyProduct);

  if (error) return <>Error: {error.toString()}</>;
  if (fetching) return <>Fetching...</>;
  if (!data) return <>No products found</>;

  // Set up a title bar for my embedded app
  const breadcrumb = Button.create(appBridge, { label: "My breadcrumb" });
  breadcrumb.subscribe(Button.Action.CLICK, () => {
    appBridge.dispatch(Redirect.toApp({ path: "/breadcrumb-link" }));
  });

  const titleBarOptions = {
    title: "My page title",
    breadcrumbs: breadcrumb,
  };
  TitleBar.create(appBridge, titleBarOptions);

  return (
    <>
      {loading && <span>Loading...</span>}
      {/* A user is viewing this page from a direct link so show them the home page! */}
      {!loading && isRootFrameRequest && <div>Welcome to my cool app's webpage!</div>}
      {!loading &&
        isAuthenticated &&
        data.map((product) => (
          <button
            onClick={(event) => {
              event.preventDefault();
              void deleteProduct({ id: product.id }).then(() => refresh());
            }}
          >
            Delete {product.name}
          </button>
        ))}
    </>
  );
}
```

## Custom router

`@shopify/app-bridge-react` allows you to specify a custom router configuration to manage client-side routing. Similarly, the Gadget provider will allow you to specify a custom router which will be forwarded to the App Bridge.

```tsx
// import Gadget's react hooks for accessing data from your Gadget app
import { useAction, useFindMany } from "@gadgetinc/react";
// import the Gadget<->Shopify bindings that manage the auth process with Shopify
import { AppType, Provider as GadgetProvider, useGadget } from "@gadgetinc/react-shopify-app-bridge";
// import and use Shopify's react components like you might in other Shopify app
import { Button, Redirect, TitleBar } from "@shopify/app-bridge/actions";
import React, { useMemo } from "react";
// import the instance of the Gadget API client for this app constructed in the other file
import { api } from "./api";
import { useLocation, useNavigate, BrowserRouter } from "react-router-dom";
// import your app's custom routes
import Routes from "./Routes";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const history = useMemo(() => ({ replace: (path) => navigate(path, { replace: true }) }), [navigate]);

  const router = useMemo(
    () => ({
      location,
      history,
    }),
    [location, history]
  );

  return (
    // Wrap our main application's react components in the `<GadgetProvider/>` component to interface with Shopify
    // This wrapper sets up the Shopify App Bridge, and will automatically redirect to perform the OAuth authentication if the shopify shop doesn't yet have the store installed.
    <GadgetProvider
      type={AppType.Embedded}
      shopifyApiKey="REPLACE ME with api key from Shopify partners dashboard"
      api={api}
      router={router}
    >
      <Routes />
    </GadgetProvider>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
```
