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

This is a companion package to the JavaScript client package generated for your Gadget app, so you must install the JS client for your app, and then install this package.

To install the JS client for your app, you must set up the Gadget NPM registry, and then install the client:

```bash
npm config set @gadget-client:registry https://registry.gadget.dev/npm
yarn add @gadget-client/my-app-slug
# or
npm install @gadget-client/product-tagger-8000
```

Full installation instructions can be found in the Gadget docs at `https://docs.gadget.dev/api/<my-app-slug>/installing`.

Once you have your JS client installed, you can install the React hooks library and the Shopify library with yarn or npm:

```
yarn add @gadgetinc/react-shopify-app-bridge @gadgetinc/react @shopify/app-bridge-react react
# or
npm install --save @gadgetinc/react-shopify-app-bridge @gadgetinc/react @shopify/app-bridge-react react
```

While exploring Shopify embedded app development, you may have come across [documentation](https://shopify.dev/apps/tools/app-bridge/getting-started) on how to set up Shopify App Bridge. Steps involving OAuth and initializing app bridge can be skipped when using the `@gadgetinc/react-shopify-app-bridge` package. The OAuth steps as well as initializing the App Bridge will be taken care of by the `Provider`. The initialized instance of App Bridge is accessible via the `appBridge` key returned from `useGadgetContext`. See the following example:

## Example usage

NOTE: This example is very similar to that found in [@gadgetinc/react](https://github.com/gadget-inc/js-clients/tree/main/packages/react). This example should be followed if you're using the `@gadgetinc/react-shopify-app-bridge` package.

`src/api.ts`

```typescript
export const api = new Client({
  authenticationMode: {
    browserSession: {
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
```

`src/app.tsx`

```typescript
import { Client, BrowserSessionStorageType } from "@gadget-client/my-gadget-app";
import { Provider, AppType, useGadgetContext } from "@gadgetinc/react-shopify-app-bridge";
import { useFindMany, useAction } from "@gadgetinc/react";
import { TitleBar, Button, Redirect } from "@shopify/app-bridge/actions";
import React from "react";
import { api } from "./api.ts";

export function MyComponent() {
  return (
    // type can be omitted. Defaults to AppType.Embedded
    <GadgetProvider type={AppType.Embedded} shopifyApiKey={apiKey} api={api}>
        <ProductManager />
    </GadgetProvider>
  );
}

function ProductManager() {
  const { loading, appBridge } = useGadgetContext<Client>();

  const [, deleteProduct] = useAction(api.shopifyProduct.delete);

  // if id or _all weren't fields on a widget, this would be a type error
  const [result, refresh] = useFindMany(api.shopifyProduct, {
    select: {
      id: true,
      name: true,
    },
  });

  if (result.error) return <>Error: {result.error.toString()}</>;
  if (result.fetching && !result.data) return <>Fetching...</>;
  if (!result.data) return <>No widgets found</>;

  // Set up a title bar for my embedded app
  const breadcrumb = Button.create(appBridge, { label: 'My breadcrumb' });
    breadcrumb.subscribe(Button.Action.CLICK, () => {
    appBridge.dispatch(Redirect.toApp({ path: '/breadcrumb-link' }));
  });
  const titleBarOptions = {
    title: 'My page title',
    breadcrumbs: breadcrumb
  };
  TitleBar.create(appBridge, titleBarOptions);

  // If id/name weren't selected above, they wouldn't typecheck below
  return (
    <>
      {loading && <span>Loading...</span>}
      {!loading && result.data.map((widget) => (
        <button
          onClick={(event) => {
            event.preventDefault();
            void deleteProduct({ id: widget.id }).then(() => refresh());
          }}
        >
          Delete {widget.name}
        </button>
      ))}
    </>
  );
}
```
