<div align="center">
  <p>
    <img alt="Gadget logo" src="https://raw.githubusercontent.com/gadget-inc/js-clients/main/docs/assets/gadget-logo.png" />
  </p>
  <p>
    <a href="">
      <img alt="GitHub CI status" src="https://badgen.net/github/checks/gadget-inc/js-clients/main/test?label=CI" />
    </a>
    <a href="https://www.npmjs.com/package/@gadgetinc/preact">
      <img alt="npm version" src="https://badgen.net/npm/dw/@gadgetinc/preact?color=4148f2" />
    </a>
  </p>
  <p>
    <strong>
      Preact hooks for use with application APIs built using the <a href="https://gadget.dev">Gadget</a> platform.
    </strong>
  </p>
</div>

`@gadgetinc/preact` is a set of Preact hooks for connecting to a Gadget backend application from a Preact application. There's a few key features:

1. Rule-obeying hooks for reading and writing data from a backend that handle all request lifecycle and auth like `useFindOne` and `useAction`
2. A full featured, GraphQL-powered nested object selection system using the `select` option
3. Full type safety for inputs and outputs driven by each Gadget app's backend schema, including over dynamic selections
4. Data hydrations that return useful objects like `Date`s

This library wraps [urql](https://github.com/FormidableLabs/urql) to communicate with a Gadget-generated API, so it benefits from all of
the same [features](https://github.com/FormidableLabs/urql/blob/main/README.md#-features) as `urql` as well!

`@gadgetinc/preact` is built on top of [`@gadgetinc/client-hooks`](https://github.com/gadget-inc/js-clients/tree/main/packages/client-hooks), which provides framework-agnostic hook implementations, and [`@gadgetinc/core`](https://github.com/gadget-inc/js-clients/tree/main/packages/core), which defines the core types and interfaces for all Gadget clients.

## Important Note

**`@gadgetinc/preact` provides a subset of the hooks available in `@gadgetinc/react`.** This package focuses on core data fetching and mutation hooks. For advanced features like authentication components, form helpers (`useActionForm`), and other React-specific utilities, please use [`@gadgetinc/react`](https://www.npmjs.com/package/@gadgetinc/react).

The following hooks are available in `@gadgetinc/preact`:

- Data reading: `useFindOne`, `useMaybeFindOne`, `useFindMany`, `useFindFirst`, `useMaybeFindFirst`, `useFindBy`, `useGet`
- Mutations: `useAction`, `useGlobalAction`, `useBulkAction`
- Background actions: `useEnqueue`
- Low-level: `useQuery` (as `useGadgetQuery`), `useMutation` (as `useGadgetMutation`), `useFetch`
- Custom views: `useView`

## Installation

`@gadgetinc/preact` is a companion package to the JavaScript client package generated for your Gadget app, so you must install the JS client for your app, and then install this package.

To install the JS client for your app, you must set up the Gadget NPM registry, and then install the client:

```
npm config set @gadget-client:registry https://registry.gadget.dev/npm

# then

yarn add @gadget-client/example-app-slug
# or
npm install @gadget-client/example-app-slug
```

Full installation instructions can be found in the Gadget docs at `https://docs.gadget.dev/api/<my-app-slug>/external-api-calls/installing`.

Once you have your JS client installed, you can install the Preact hooks library with yarn or npm:

```
yarn add @gadgetinc/preact preact
# or
npm install --save @gadgetinc/preact preact
```

And finally, you must instantiate an instance of your API client, and then wrap your application in the `Provider` component exported from this library. In your root-most Preact component, you can add a `Provider` around the other components of your application:

```javascript
// import the API client for your specific application from your client package, be sure to replace this package name with your own
import { Client } from "@gadget-client/example-app-slug";
// import the required Provider object and some example hooks from this package
import { Provider } from "@gadgetinc/preact";

// instantiate the API client for our app
const api = new Client({ authenticationMode: { browserSession: true } });

export const MyApp = (props) => {
  // wrap the application in the <Provider> so the hooks can find the current client
  return <Provider api={api}>{props.children}</Provider>;
};
```

## Example usage

```tsx
// import the API client for your specific application from your client package, see your app's installing instructions
import { Client } from "@gadget-client/my-gadget-app";
// import the required Provider object and some example hooks from this package
import { Provider, useAction, useFindMany } from "@gadgetinc/preact";

// instantiate the API client for our app
const api = new Client({ authenticationMode: { browserSession: true } });

export function MyComponent() {
  // ensure any components which use the @gadgetinc/preact hooks are wrapped with the provider, and passed the current api client
  return (
    <Provider api={api}>
      <WidgetDeleter />
    </Provider>
  );
}

function WidgetDeleter() {
  // `useFindMany` executes a backend fetch to get a list of widgets from the backend. we select only the id and name fields of each widget to demonstrate type-safe sub selection
  const [result, refresh] = useFindMany(api.widget, {
    select: {
      id: true,
      name: true,
    },
  });

  // `useAction` sets up a mutation we can run to delete a specific widget when a user clicks a button
  const [_, deleteWidget] = useAction(api.widget.delete);

  // handle all the different states the data fetch can be in
  if (result.error) return <>Error: {result.error.toString()}</>;
  if (result.fetching && !result.data) return <>Fetching...</>;
  if (!result.data) return <>No widgets found</>;

  return (
    <>
      {result.data.map((widget) => (
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

Find more examples in the **https://github.com/gadget-inc/examples** repo.

## Request caching

Under the hood, your Gadget app's API client and `@gadgetinc/preact` use a powerful, production-grade GraphQL client called [urql](https://formidable.com/open-source/urql/docs/). urql has a great client-side data caching feature built-in called [Document Caching](https://formidable.com/open-source/urql/docs/basics/document-caching/) which allows Preact components issuing GraphQL requests for the same data to de-duplicate requests and share client-side state. `@gadgetinc/preact` enables this functionality by default.

`@gadgetinc/preact` runs urql's Document Caching with a default [`requestPolicy`](https://formidable.com/open-source/urql/docs/basics/document-caching/#request-policies) of `cache-and-network`, which means your Preact hooks will re-render data with any cached results from the in-memory store, and then make an underlying HTTP request to fetch the most up to date data.

If you want to change the default `requestPolicy` that your Gadget API client and Preact hooks use, you can pass the `requestPolicy` option to your API client constructor.

```javascript
// instantiate the API client for our app that will make network calls for every query, regardless of cache state
const api = new Client({
  requestPolicy: "network-only",
});
```

There are four different request policies that you can use:

- `cache-first` prefers cached results and falls back to sending an API request when no prior result is cached.
- `cache-and-network` (the default) returns cached results but also always sends an API request, which is perfect for displaying data quickly while keeping it up-to-date.
- `network-only` will always send an API request and will ignore cached results.
- `cache-only` will always return cached results or null.

For more information on `urql`'s built-in client-side caching, see [`urql`'s docs](https://formidable.com/open-source/urql/docs/basics/document-caching/).

## Package Architecture

`@gadgetinc/preact` is part of a layered package architecture:

- **`@gadgetinc/core`** - Core types and interfaces that all Gadget clients must conform to. Defines `AnyClient`, `GadgetRecord`, filter types, etc.
- **`@gadgetinc/client-hooks`** - Framework-agnostic hook implementations that work across React, Preact, and other frameworks via a runtime adapter pattern.
- **`@gadgetinc/preact`** - Preact-specific bindings that provide the `Provider` component and re-export hooks from `@gadgetinc/client-hooks` configured for Preact.

This architecture allows:

1. **Shared logic** - Query and mutation logic is implemented once in `@gadgetinc/client-hooks` and reused across frameworks
2. **Type safety** - All packages share the same type definitions from `@gadgetinc/core`
3. **Framework flexibility** - New frameworks can be supported by implementing a runtime adapter for `@gadgetinc/client-hooks`

When using `@gadgetinc/preact`, you only need to install this package - it automatically includes the necessary dependencies.

## API Documentation

`@gadgetinc/preact` contains a variety of Preact hooks for working with your Gadget application's API from a Preact application. Specific code examples for your application's API can be found within your application's docs at https://docs.gadget.dev/api/<your-application-slug>

### Setup

Your Preact application must be wrapped in the `Provider` component from this library for the hooks to function properly. No other wrappers (like `urql`'s) are necessary.

### Available Hooks

The following hooks are available in `@gadgetinc/preact`. For detailed documentation on each hook's usage, options, and return values, please refer to the [`@gadgetinc/react` documentation](https://www.npmjs.com/package/@gadgetinc/react), as the APIs are identical:

#### Data Reading Hooks

- `useFindOne(manager, id, options)` - Fetch one record by ID
- `useMaybeFindOne(manager, id, options)` - Fetch one record by ID, returns null if not found
- `useFindMany(manager, options)` - Fetch a page of records with filtering, sorting, and pagination
- `useFindFirst(manager, options)` - Fetch the first record matching conditions
- `useMaybeFindFirst(manager, options)` - Fetch the first record, returns null if not found
- `useFindBy(findFunction, fieldValue, options)` - Fetch one record by a unique field value
- `useGet(singletonModelManager, options)` - Fetch a singleton record (e.g., `api.currentSession`)

#### Mutation Hooks

- `useAction(actionFunction, options)` - Run a model action (create, update, delete, custom actions)
- `useGlobalAction(globalActionFunction, options)` - Run a global action
- `useBulkAction(bulkActionFunction, options)` - Run a bulk action on multiple records

#### Background Action Hooks

- `useEnqueue(actionFunction, options)` - Enqueue a background action for async execution

#### Custom View Hooks

- `useView(viewFunction, variables, options)` - Query custom Gelly views

#### Low-Level Hooks

- `useGadgetQuery(options)` - Run a custom GraphQL query (alias for urql's `useQuery`)
- `useGadgetMutation(options)` - Run a custom GraphQL mutation (alias for urql's `useMutation`)
- `useFetch(path, options)` - Make HTTP requests to your Gadget backend's custom routes

### Key Features

#### The `select` option

The `select` option allows you to choose which fields and subfields are returned by your Gadget app's GraphQL API. Your app's API supports returning only some fields of each model you request, as well as fields of related models through the Gadget relationship field types.

```javascript
export const OnlySomeWidgetFields = (props) => {
  // fetch only the widget id and name fields
  const [{ data, fetching, error }, _refetch] = useFindOne(api.widget, props.id, { select: { id: true, name: true } });

  return (
    <span className="widget-name">
      {data?.id}: {data?.name}
    </span>
  );
};
```

#### The `refetch` function

Most read hooks return a `refetch` function as the second element of the returned array. This function can be called to re-fetch the most up-to-date data from the backend.

```javascript
const [{ data, fetching, error }, refetch] = useFindMany(api.widget);

// Later, to refresh the data:
void refetch();
```

#### Error handling

All hooks return an `error` object that contains detailed information about any errors that occurred:

- `error.message: string` - A top level error message
- `error.networkError: Error | undefined` - Browser network errors
- `error.executionErrors: (GraphQLError | GadgetError)[] | undefined` - GraphQL API errors
- `error.validationErrors: { apiIdentifier: string, message: string }[] | undefined` - Validation errors from the backend

#### Suspense support

Data reading hooks support Preact's Suspense for declarative loading states. Pass `suspense: true` to any read hook:

```javascript
const Posts = () => {
  // Component will suspend while data is loading
  const [{ data, error }, refresh] = useFindMany(api.post, { suspense: true });

  // No need to check fetching state
  return (
    <>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

// Wrap with Suspense boundary
<Suspense fallback={<div>Loading...</div>}>
  <Posts />
</Suspense>;
```

Supported on: `useFindOne`, `useMaybeFindOne`, `useFindMany`, `useFindFirst`, `useMaybeFindFirst`, `useFindBy`, `useGet`, and `useView`.

## Differences from `@gadgetinc/react`

While `@gadgetinc/preact` and `@gadgetinc/react` share the same core data hooks, `@gadgetinc/preact` does **not** include:

- ❌ Authentication components (`<SignedIn>`, `<SignedOut>`, `<SignedInOrRedirect>`, `<SignedOutOrRedirect>`)
- ❌ Authentication hooks (`useAuth`, `useUser`, `useSession`, `useSignOut`)
- ❌ `useActionForm` hook for form state management

If you need these features, please use [`@gadgetinc/react`](https://www.npmjs.com/package/@gadgetinc/react) instead. The core data hooks work identically in both packages.

## Usage with Shopify

`@gadgetinc/preact` is particularly useful for Shopify applications where bundle size is critical. Preact's smaller footprint makes it ideal for embedded apps and Shopify extensions while maintaining full compatibility with the Gadget API.

## TypeScript Support

`@gadgetinc/preact` is fully typed and benefits from type generation in your Gadget app's API client. All hooks provide full type safety for query inputs, mutation variables, and returned data.

## License

MIT

## Contributing

Contributions are welcome! Please see the main repository at https://github.com/gadget-inc/js-clients for contribution guidelines.
