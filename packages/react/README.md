<div align="center">
  <p>
    <img alt="Gadget logo" src="https://raw.githubusercontent.com/gadget-inc/js-clients/main/docs/assets/gadget-logo.png" />
  </p>
  <p>
    <a href="">
      <img alt="GitHub CI status" src="https://badgen.net/github/checks/gadget-inc/js-clients/main/Test?label=CI" />
    </a>
    <a href="https://www.npmjs.com/package/@gadgetinc/react">
      <img alt="npm version" src="https://badgen.net/npm/dw/@gadgetinc/react?color=4148f2" />
    </a>
  </p>
  <p>
    <strong>
      React hooks for use with application APIs built using the <a href="https://gadget.dev">Gadget</a> platform.
    </strong>
  </p>
</div>

## Features

1. An **auto-suggested** `select` option for all hooks, showing all of the available fields on various models
2. A **typed** and **hydrated** result based on any given `select` option

This library wraps [urql](https://github.com/FormidableLabs/urql) to communicate with a Gadget-generated API, so it benefits from all of
the same [features](https://github.com/FormidableLabs/urql/blob/main/README.md#-features) as urql.

## Installation

This is a companion package to the JavaScript client package generated for your Gadget app, so you must install the JS client for your app, and then install this package.

To install the JS client for your app, you must set up the Gadget NPM registry, and then install the client:

```
npm config set @gadget-client:registry https://registry.gadget.dev/npm
yarn add @gadget-client/my-app-slug
# or
npm install @gadget-client/product-tagger-8000
```

Full installation instructions can be found in the Gadget docs at `https://docs.gadget.dev/api/<my-app-slug>/installing`.

Once you have your JS client installed, you can install the React hooks library with yarn or npm:

```
yarn add @gadgetinc/react react
# or
npm install --save @gadgetinc/react react
```

## Example usage

```typescript
import { useAction, useFindMany } from "@gadgetinc/react";
import React from "react";
import { Client } from "@gadget-client/my-gadget-app";

export function MyComponent() => {
  const [_, deleteWidget] = useAction(Client.widget.delete);

  // if id or _all weren't fields on a widget, this would be a type error
  const [result, refresh] = useFindMany(Client.widget, {
    select: {
      id: true,
      name: true,
    },
  });

  if (result.error) return <>Error: {result.error.toString()}</>;
  if (result.fetching && !result.data) return <>Fetching...</>;
  if (!result.data) return <>No widgets found</>;

  // If id/name weren't selected above, they wouldn't typecheck below
  return (
    <>
      {result.map((widget) => (
        <button
          onClick={(event) => {
            event.preventDefault();
            void deleteWidget({ id: widget.id }).then(() => refresh());
          }}
        >
          Delete {widget.name}
        </button>
      ))}
    </>
  );
}
```
