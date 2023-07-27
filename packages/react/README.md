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

`@gadgetinc/react` is a set of React hooks for connecting to a Gadget backend application from a React application. There's a few key features:

1. Rule-obeying hooks for reading and writing data from a backend that handle all request lifecycle and auth like `useFindOne` and `useAction`
2. A full featured, GraphQL-powered nested object selection system using the `select` option
3. Full type safety for inputs and outputs driven by each Gadget app's backend schema, including over dynamic selections
4. Data hydrations that return useful objects like `Date`s

This library wraps [urql](https://github.com/FormidableLabs/urql) to communicate with a Gadget-generated API, so it benefits from all of
the same [features](https://github.com/FormidableLabs/urql/blob/main/README.md#-features) as `urql` as well!

## Installation

`@gadgetinc/react` is a companion package to the JavaScript client package generated for your Gadget app, so you must install the JS client for your app, and then install this package.

To install the JS client for your app, you must set up the Gadget NPM registry, and then install the client:

```
npm config set @gadget-client:registry https://registry.gadget.dev/npm

# then

yarn add @gadget-client/example-app-slug
# or
npm install @gadget-client/example-app-slug
```

Full installation instructions can be found in the Gadget docs at `https://docs.gadget.dev/api/example-app-slug/installing`.

Once you have your JS client installed, you can install the React hooks library with yarn or npm:

```
yarn add @gadgetinc/react react
# or
npm install --save @gadgetinc/react react
```

And finally, you must instantiate an instance of your API client, and then wrap your application in the `Provider` component exported from this library. In your root-most React component, you can add a `Provider` around the other components of your application:

```javascript
// import the API client for your specific application from your client package, be sure to replace this package name with your own
import { Client } from "@gadget-client/example-app-slug";
// import the required Provider object and some example hooks from this package
import { Provider } from "@gadgetinc/react";

// instantiate the API client for our app
const api = new Client({ authenticationMode: { browserSession: true } });

export const MyApp = (props) => {
  // wrapp the application in the <Provider> so the hooks can find the current client
  return <Provider api={api}>{props.children}</Provider>;
};
```

## Example usage

```tsx
// import the API client for your specific application from your client package, see your app's installing instructions
import { Client } from "@gadget-client/my-gadget-app";
// import the required Provider object and some example hooks from this package
import { Provider, useAction, useFindMany } from "@gadgetinc/react";

// instantiate the API client for our app
const api = new Client({ authenticationMode: { browserSession: true } });

export function MyComponent() {
  // ensure any components which use the @gadgetinc/react hooks are wrapped with the provider, and passed the current api client
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

Under the hood, your Gadget app's API client and `@gadgetinc/react` use a powerful, production-grade GraphQL client called [urql](https://formidable.com/open-source/urql/docs/). urql has a great client-side data caching feature built-in called [Document Caching](https://formidable.com/open-source/urql/docs/basics/document-caching/) which allows React components issuing GraphQL requests for the same data to de-duplicate requests and share client-side state. `@gadgetinc/react` enables this functionality by default.

`@gadgetinc/react` runs urql's Document Caching with a default [`requestPolicy`](https://formidable.com/open-source/urql/docs/basics/document-caching/#request-policies) of `cache-and-network`, which means your React hooks will re-render data with any cached results from the in-memory store, and then make an underlying HTTP request to fetch the most up to date data.

If you want to change the default `requestPolicy` that your Gadget API client and React hooks use, you can pass the `requestPolicy` option to your API client constructor.

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

### API Documentation

`@gadgetinc/react` contains a variety of React hooks for working with your Gadget application's API from a React application. Specific code examples for your application's API can be found within your application's docs at https://docs.gadget.dev/api/<your-application-slug>

### Setup

Your React application must be wrapped in the `Provider` component from this library for the hooks to function properly. No other wrappers (like `urql`'s) are necessary.

### `useFindOne(manager: ModelFinder, id: string, options: SingleFinderOptions = {}): [{data, fetching, error}, refetch]`

`useFindOne` fetches one record from your Gadget database with a given `id`. `useFindOne` expects a record with the given id to be found in the backend database, and will return an error in the `error` property if no record with this id is found. `useFindOne(api.widget, 42)` is the React equivalent of `await api.widget.findOne(42)`. Options:

- `manager`: The model manager you for the model you want to find a record of. The value always comes from an instance of your application's API client instantiated elsewhere. Required. Example: `api.widget`, or `api.shopifyProduct`
- `id`: The backend id of the record you want to find. Required.
- `options`: Options for making the call to the backend. Not required, and all keys are optional.
  - `select`: A list of fields and subfields to select. See the [Select option](#the-select-option) docs.
  - `requestPolicy`: The `urql` request policy to make the request with. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `pause`: Should the hook make a request right now or not. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `suspense`: Should this hook suspend when fetching data. See [Suspense](#suspense) for more info

`useFindOne` returns two values: a result object with the `data`, `fetching`, and `error` keys for inspecting in your React component's output, and a [`refetch` function](#the-refetch-function) to trigger a refresh of the hook's data.

- `data: GadgetRecord | null`: The record fetched from the backend. Is `null` while the data is being loaded, or if the record wasn't found.
- `fetching: boolean`: A boolean describing if the hook is currently making a request to the backend.
- `error: Error | null`: An error from the client or server side, if encountered during the request. Will contain an error if the record isn't found by `id`. See the [Errors](#errors-from-the-returned-error-object) section.

Without any options, `useFindOne` will fetch the record and cause your component to rerender as the fetch happens and when the data or error arrives:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const ShowWidgetName = (props: { id: string }) => {
  const [{ data, fetching, error }, _refetch] = useFindOne(api.widget, props.id);

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;
  return <span className="widget-name">{data.name}</span>;
};
```

`useFindOne` can take options which allow the customization of which fields are returned:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const OnlySomeWidgetFields = (props: { id: string }) => {
  // fetch only the widget id and name fields
  const [{ data, fetching, error }, _refetch] = useFindOne(api.widget, props.id, { select: { id: true, name: true } });

  return (
    <span className="widget-name">
      {data?.id}: {data?.name}
    </span>
  );
};
```

See [the `refetch` function](#the-refetch-function) docs for more information on refreshing the returned server side value.

### `useMaybeFindOne(manager: ModelFinder, id: string, options: SingleFinderOptions = {}): [{data, fetching, error}, refetch]`

`useMaybeFindOne` fetches one record from your Gadget database with a given `id`. `useMaybeFindOne` will return `data: null` and `error: null` if no record with the given `id` is found in the backend database. `useMaybeFindOne` otherwise behaves identically to `useFindOne`, and accepts the same options.

`useMaybeFindOne(api.widget, 42)` is the React equivalent of `await api.widget.maybeFindOne(42)`.

### `useFindMany(manager: ModelFinder, options: ManyFinderOptions = {}): [{data, fetching, error}, refetch]`

`useFindMany` fetches a page of records from your Gadget database, optionally sorted, filtered, or searched. `useFindMany(api.widget, { ... })` is the React equivalent of `await api.widget.findMany({ ... })`. Options:

- `manager`: The model manager you for the model you want to find a page of records for. The value always comes from an instance of your application's API client instantiated elsewhere. Required. Example: `api.widget`, or `api.shopifyProduct`
- `options`: Options for making the call to the backend. Not required and all keys are optional.
  - `select`: A list of fields and subfields to select. See the [Select option](#the-select-option) docs.
  - `filter`: A list of filters to limit the set of returned records. Optional. See the Model Filtering section in your application's API documentation to see the available filters for your models.
  - `search`: A search string to match backend records against. Optional. See the Model Searching section in your application's API documentation to see the available search syntax.
  - `sort`: A sort order to return backend records by. Optional. See the Sorting section in your application's API documentation for more info.
  - `first` & `after`: Pagination arguments to pass to fetch a subsequent page of records from the backend. `first` should hold a record count and `after` should hold a string cursor retrieved from the `pageInfo` of the previous page of results. See the Model Pagination section in your application's API documentation for more info.
  - `last` & `before`: Pagination arguments to pass to fetch a subsequent page of records from the backend. `last` should hold a record count and `before` should hold a string cursor retrieved from the `pageInfo` of the previous page of results. See the Model Pagination section in your application's API documentation for more info.
  - `requestPolicy`: The `urql` request policy to make the request with. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `pause`: Should the hook make a request right now or not. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `suspense`: Should this hook suspend when fetching data. See [Suspense](#suspense) for more info

`useFindMany` returns two values: a result object with the `data`, `fetching`, and `error` keys for use in your React component's output, and a [`refetch` function](#the-refetch-function) to trigger a refresh of the hook's data.

- `data: GadgetRecordList | null`: The resulting page of records fetched from the backend for your model, once they've arrived
- `fetching: boolean`: A boolean describing if the hook is currently making a request to the backend.
- `error: Error | null`: An error from the client or server side, if encountered during the request. See the [Errors](#errors-from-the-returned-error-object) section.

Without any options, `useFindMany` will fetch the first page of backend records sorted by id. As the fetch happens, the hook will cause your component to rerender when the data or error arrives:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const ShowWidgetNames = () => {
  const [{ data, fetching, error }, _refetch] = useFindMany(api.widget);

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;
  return (
    <ul>
      {data.map((widget) => (
        <li key={widget.id}>{widget.name}</li>
      ))}
    </ul>
  );
};
```

`useFindMany` accepts the `select` option to allow customization of which fields are returned:

```javascript
export const OnlySomeWidgetFields = (props: { id: string }) => {
  // fetch only the widget id and name fields
  const [{ data, fetching, error }, _refetch] = useFindMany(api.widget, { select: { id: true, name: true } });

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;
  return (
    <ul>
      {data.map((widget) => (
        <li key={widget.id}>{widget.name}</li>
      ))}
    </ul>
  );
};
```

`useFindMany` accepts a `filter` option to limit which records are returned from the backend. For example, we can filter to return only widgets created since the start of 2022:

```javascript
// fetch only the widgets created recently
const [{ data, fetching, error }, _refetch] = useFindMany(api.widget, {
  filter: {
    createdAt: { greaterThan: new Date(2022, 01, 01) },
  },
});
```

See your application's API documentation for more information on which filters are available on what models.

`useFindMany` accepts a `sort` option to change the order of the records that are returned. For example, we can sort returned widgets by the `createdAt` field:

```javascript
// return the most recently created widgets first
const [{ data, fetching, error }, _refetch] = useFindMany(api.widget, {
  sort: {
    createdAt: "Descending",
  },
});
```

`useFindMany` accepts a `search` option to limit the fetched records to only those matching a given search query. For example, we can search all the backend widgets for those matching the string "penny" in any searchable field:

```javascript
// return the most recently created widgets first
const [{ data, fetching, error }, _refetch] = useFindMany(api.widget, {
  search: "penny",
});
```

See your application's API documentation for more information on the search query syntax and which fields are searchable.

`useFindMany` accepts pagination arguments for getting the second, third, etc page of results from the backend beyond just the first page. Gadget applications use [Relay Cursor style GraphQL pagination](https://graphql.org/learn/pagination/#pagination-and-edges), where a second page is fetched by asking for the next x many results after a cursor returned with the first page.

```javascript
// return the first 10 results after some cursor from somewhere else
const [{ data, fetching, error }, _refetch] = useFindMany(api.widget, {
  first: 10,
  after: "some-cursor-value",
});

// data is a GadgetRecordList object, which has extra properties for inquiring about the pagination state
// the current page's start and end cursor are available for use to then make later requests for different pages
data.endCursor; // => string, used for forward pagination, pass to the `after:` variable
data.startCursor; // => string, used for backwards pagination, pass to the `before:` variable
// data also reports if there are more pages for fetching
data.hasNextPage; // => boolean, true if there is another page to fetch after the `endCursor`
data.hasPreviousPage; // => boolean, true if there is another page to fetch before the `startCursor`
```

An easy way to do pagination is using React state, or for a better user experience, using the URL with whatever router system works for your application. We use React state to demonstrate pagination in this example:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const WidgetPaginator = () => {
  // store the current cursor in the backend data
  const [cursor, setCursor] = useState(null);

  // pass the current cursor to the `after:` variable, telling the backend to return data after this cursor
  const [{ data, fetching, error }, _refetch] = useFindMany(api.widget, { first: 20, after: cursor });

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;

  return (
    <>
      <ul>
        {data.map((widget) => (
          <li key={widget.id}>{widget.name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          // update the cursor, which will trigger a refetch of the next page and rerender with a new `data` object
          setCursor(data.endCursor);
        }}
        disabled={!data.hasNextPage}
      >
        Next page
      </button>
    </>
  );
};
```

### `useFindFirst(manager: ModelFinder, options: FindManyOptions = {}): [{data, fetching, error}, refetch]`

`useFindFirst` fetches the first record from your backend Gadget database that matches the given `filter`, `sort`, and `search` parameters. `useFindFirst(api.widget, { ... })` is the React equivalent of `await api.widget.findFirst({ ... })`. `useFindFirst` expects a record to be found in the backend, so if no record is found matching the conditions, then the returned result object will `data: null` and a `MissingDataError` for the `error` object. `useFindFirst` accepts the following arguments:

- `manager`: The model manager you for the model you want to find a page of records for. The value always comes from an instance of your application's API client instantiated elsewhere. Required. Example: `api.widget`, or `api.shopifyProduct`
- `options`: Options for making the call to the backend. Not required and all keys are optional.
  - `select`: A list of fields and subfields to select. See the [Select option](#the-select-option) docs. Optional.
  - `filter`: A list of filters to find a record matching. Optional. See the Model Filtering section in your application's API documentation to see the available filters for your models.
  - `search`: A search string to find a record matching. Optional. See the Model Searching section in your application's API documentation to see the available search syntax.
  - `sort`: A sort order to order the backend records by. `useFindFirst` will only return the first record matching the given `search` and `filter`, so `sort` can be used to break ties and select a specific record. Optional. See the Sorting section in your application's API documentation for more info.
  - `requestPolicy`: The `urql` request policy to make the request with. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `pause`: Should the hook make a request right now or not. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `suspense`: Should this hook suspend when fetching data. See [Suspense](#suspense) for more info

`useFindFirst` returns two values: a result object with the `data`, `fetching`, and `error` keys for inspecting in your React component's output, and a [`refetch` function](#the-refetch-function) to trigger a refresh of the hook's data.

- `data: GadgetRecord | null`: The record fetched from the backend. Is `null` while the data is being loaded, or if a matching record wasn't found.
- `fetching: boolean`: A boolean describing if the hook is currently making a request to the backend.
- `error: Error | null`: An error from the client or server side, if encountered during the request. Will contain an error if the first record isn't found. See the [Errors](#errors-from-the-returned-error-object) section.

Without any options, `useFindFirst` will fetch the first matching record and cause your component to rerender as the fetch happens and when the data or error arrives:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const MostRecentPublishedPost = (props: { id: string }) => {
  // request the first record from the backend where publishedAt is set and with the most recent publishedAt value
  const [{ data, fetching, error }, _refetch] = useFindFirst(api.blogPost, {
    filter: { publishedAt: { isSet: true } },
    sort: { publishedAt: "Descending" },
  });

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;
  return <span className="banner">Check out our most recent blog post titled {data.title}</span>;
};
```

`useFindFirst` can take options which allow the customization of which fields are returned:

```javascript
const [_result, _refetch] = useFindOne(api.widget, props.id, {
  // fetch only the widget id and name fields
  select: {
    id: true,
    name: true,
  },
});
```

### `useFindBy(findFunction: ModelFindFunction, fieldValue: any, options: FindByOptions = {}): [{data, fetching, error}, refetch]`

`useFindBy` fetches one record from your backend looked up by a specific field and value. `useFindBy` uses the existing specific-field-finder functions generated within your application's API client, like `api.user.findByEmail` or similar. These functions are generated for Gadget fields that have [Unique Validations](https://docs.gadget.dev/guides/building-models#uniqueness-validations) added to them.

`useFindBy` expects to be passed a field-specific finder function as the first argument, and then the value of the field to find by as the second argument, and then optionally accepts a third options object. If no record is found matching the conditions, then the returned object will have `null` for the `data`. `useFindBy(api.widget.findByEmail, "hi@gadget.dev")` is the React equivalent of `api.widget.findByEmail("hi@gadget.dev")`. Options:

- `findFunction`: The model finder function from your application's API client for finding records by a specific field. Gadget generates these finder functions for the fields where they are available. Changes to your Gadget backend schema may be required to get these to exist. Required. Example: `api.widget.findBySlug`, or `api.user.findByEmail`.
- `fieldValue`: The value of the field to search for a record using. This is which slug or email you'd pass to `api.widget.findBySlug` or `api.user.findByEmail`.
- `options`: Options for making the call to the backend. Not required and all keys are optional.
  - `select`: A list of fields and subfields to select. See the [Select option](#the-select-option) docs.
  - `requestPolicy`: The `urql` request policy to make the request with. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `pause`: Should the hook make a request right now or not. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `suspense`: Should this hook suspend when fetching data. See [Suspense](#suspense) for more info

`useFindBy` returns two values: a result object with the `data`, `fetching`, and `error` keys for inspecting in your React component's output, and a [`refetch` function](#the-refetch-function) to trigger a refresh of the hook's data.

- `data: GadgetRecord | null`: The record fetched from the backend. Is `null` while the data is being loaded, or if a matching record wasn't found for the given `fieldValue`.
- `fetching: boolean`: A boolean describing if the hook is currently making a request to the backend.
- `error: Error | null`: An error from the client or server side, if encountered during the request. Will contain an error if a matching record isn't found. See the [Errors](#errors-from-the-returned-error-object) section.

Without any options, `useFindBy` will fetch the record with the given field value, and cause your component to rerender as the fetch happens and when the data or error arrives:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

// get a slug from the URL or similar, and look up a post record by this slug
export const PostBySlug = (props: { slug: string }) => {
  const [{ data, fetching, error }, _refetch] = useFindBy(api.blogPost.findBySlug, props.slug);

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
};
```

`useFindBy` can take options which allow the customization of which fields are returned:

```javascript
// fetch only a post id and title fields
const [{ data, fetching, error }, _refetch] = useFindBy(api.blogPost.findBySlug, "some-slug", { select: { id: true, title: true } });
```

The `refetch` function returned as the second element can be executed in order to trigger a refetch of the most up to date data from the backend. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/basics/react-preact/#reexecuting-queries) on re-executing queries for more information.

### `useMaybeFindFirst(manager: ModelFinder, options: FindManyOptions = {}): [{data, fetching, error}, refetch]`

`useMaybeFindFirst` fetches the first record from your backend Gadget database that matches the given `filter`, `sort`, and `search` parameters. `useMaybeFindFirst(api.widget, { ... })` is the React equivalent of `await api.widget.maybeFindFirst({ ... })`. `useMaybeFindFirst` returns `data: null` if no record is found in the backend database, and otherwise works identically to `useFindFirst`. See `useFindFirst` for more details on the options `useMaybeFindFirst` accepts.

### `useAction(actionFunction: ModelActionFunction, options: UseActionOptions = {}): [{data, fetching, error}, refetch]`

`useAction` is a hook for running a backend action on one record of a Gadget model. `useAction(api.widget.create)` is the React equivalent of `await api.widget.create({...})`. `useAction` doesn't immediately dispatch a request to run an action server side, but instead returns a result object and a function which runs the action, similar to [`urql`'s `useMutation` hook](https://formidable.com/open-source/urql/docs/api/urql/#usemutation). `useAction` must be passed an action function from an instance of your application's generated API client. Options:

- `actionFunction`: The model action function from your application's API client for acting on records. Gadget generates these action functions for each action defined on backend Gadget models. Required. Example: `api.widget.create`, or `api.user.update` or `api.blogPost.publish`.
- `options`: Options for making the call to the backend. Not required and all keys are optional.
  - `select`: A list of fields and subfields to select. See the [Select option](#the-select-option) docs.
  - `requestPolicy`: The `urql` request policy to make the request with. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `pause`: Should the hook make a request right now or not. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `suspense`: Should this hook suspend when fetching data. See [Suspense](#suspense) for more info

`useAction` returns two values: a result object with the `data`, `fetching`, and `error` keys for inspecting in your React component's output, and a `act` function to actually run the backend action. `useAction` is a rule-following React hook that wraps action execution, which means it doesn't just run the action as soon as the hook is invoked. Instead, `useAction` returns a configured function that will actually run the action, which you need to call in response to some user event. The `act` function accepts the action inputs as arguments -- not `useAction` itself. `useAction`'s result will return the `data`, `fetching`, and `error` details for the most recent execution of the action.

- `data: GadgetRecord | null`: The record fetched from the backend after a mutation. Is `null` while before the mutation is run and while it is currently ongoing.
- `fetching: boolean`: A boolean describing if the hook is currently making a request to the backend.
- `error: Error | null`: An error from the client or server side, if encountered during the mutation. Will contain an error if the client passed invalid data, if server failed to complete the mutation, or if a network error was encountered. See the [Errors](#errors-from-the-returned-error-object) section.

For example, we can create a button which creates a post when clicked:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const CreatePost = () => {
  // invoke the `useAction` hook, getting back a result object and an action runner function every render
  const [{ data, fetching, error }, createBlogPost] = useAction(api.blogPost.create);

  // deal with all the states of the result object
  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;

  if (!data) {
    return (
      <button
        onClick={() => {
          // run the action when the button is clicked
          // the action runner function accepts action inputs in the same format as api.blogPost.create, and the GraphQL API
          createBlogPost({
            title: "New post created from React",
          });
        }}
      >
        Create a post
      </button>
    );
  } else {
    return (
      <>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </>
    );
  }
};
```

We can also run actions on existing models by passing the `id: ` in with the action parameters:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const UpdatePost = (props: { id: string }) => {
  // invoke the `useAction` hook, getting back a result object and an action runner function every render
  const [{ data, fetching, error }, updateBlogPost] = useAction(api.blogPost.update);
  const [title, setTitle] = useState("");

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;

  return (
    <form
      onSubmit={() => {
        // run the action with the action runner function when the form is submitted
        // pass the id of the blog post we're updating as one parameter, and the new post attributes as another
        updateBlogPost({
          id: props.id,
          title,
        });
      }}
    >
      <label>Title</label>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <input type="submit">Submit</input>
    </form>
  );
};
```

`useAction` returns an `error` object that is an [`ErrorWrapper`](#errors-from-the-returned-error-object). The `error` object can have a `.networkError`, a list of `.executionErrors`, or a list of `.validationErrors` which is useful for building client side forms driven by server side validations.

`useAction` can take options which allow the customization of which fields are returned:

```javascript
// fetch only a post id and title fields
const [{ data, fetching, error }, _refetch] = useFindBy(api.blogPost.findBySlug, "some-slug", { select: { id: true, title: true } });
```

### `useGlobalAction(actionFunction: GlobalActionFunction, options: UseGlobalActionOptions = {}): [{data, fetching, error}, refetch]`

`useGlobalAction` is a hook for running a backend Global Action. `useGlobalAction(api.someGlobalAction)` is the React equivalent of `await api.someGlobalAction({...})`. `useGlobalAction` doesn't immediately dispatch a request to run an action server side, but instead returns a result object and a function which runs the action, similar to [`urql`'s `useMutation` hook](https://formidable.com/open-source/urql/docs/api/urql/#usemutation). `useGlobalAction` must be passed one of the global action functions from an instance of your application's generated API client. Options:

- `globalActionFunction`: The action function from your application's API client. Gadget generates these global action functions for each global action defined in your Gadget backend. Required. Example: `api.runSync`, or `api.purgeData` (corresponding to Global Actions named `Run Sync` or `Purge Data`).
- `options`: Options for making the call to the backend. Not required and all keys are optional.
  - `requestPolicy`: The `urql` request policy to make the request with. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `pause`: Should the hook make a request right now or not. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)

`useGlobalAction` returns two values: a result object with the `data`, `fetching`, and `error` keys for inspecting in your React component's output, and a `act` function to actually run the backend global action. `useGlobalAction` is a rule-following React hook that wraps action execution, which means it doesn't just run the action as soon as the hook is invoked. Instead, `useGlobalAction` returns a configured function which you need to call in response to some event. This `act` function accepts the action inputs as arguments. `useGlobalAction`'s result will return the `data`, `fetching`, and `error` details for the most recent execution of the action.

- `data: Record<string, any> | null`: The data returned by the global action from the backend. Is `null` while before the mutation is run and while it is currently ongoing.
- `fetching: boolean`: A boolean describing if the hook is currently making a request to the backend.
- `error: Error | null`: An error from the client or server side, if encountered during the mutation. Will contain an error if the client passed invalid data, if server failed to complete the mutation, or if a network error was encountered. See the [Errors](#errors-from-the-returned-error-object) section.

For example, we can create a button which runs a global action called `purgeData` when clicked

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const PurgeData = () => {
  // invoke the `useGlobalAction` hook, getting back a result object and an action runner function every render
  const [{ data, fetching, error }, runPurge] = useGlobalAction(api.purgeData);

  // deal with all the states of the result object
  if (fetching) return "Loading...";
  if (error) return `Error running global action: ${error}`;

  if (!data) {
    return (
      <button
        onClick={() => {
          // run the global action when the button is clicked
          // the action runner function accepts action inputs in the same format as api.purgeData, and the GraphQL API
          purgeData({ foo: "bar" });
        }}
      >
        Purge data
      </button>
    );
  } else {
    return "Purge completed";
  }
};
```

### `useGet(singletonModelManager: SingletonModelManager, options: GetOptions = {}): [{data, fetching, error}, refetch]`

`useGet` fetches a singleton record for an `api.currentSomething` style model manager. `useGet` fetches one global record, which is most often the current session. `useGet` doesn't require knowing the record's ID in order to fetch it. `useGet(api.currentSession)` is the React equivalent of `await api.currentSession.get()`. `useGet` accepts the following options:

- `singletonModelManager`: The singleton model manager available on the generated API client for your application. The passed model manager _must_ be one of the `currentSomething` model managers. `useGet` can't be used with other model managers that don't have a `.get` function. Example: `api.currentSession`.
- `options`: Options for making the call to the backend. Not required and all keys are optional.
  - `select`: A list of fields and subfields to select. See the [Select option](#the-select-option) docs.
  - `requestPolicy`: The `urql` request policy to make the request with. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `pause`: Should the hook make a request right now or not. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/api/urql/)
  - `suspense`: Should this hook suspend when fetching data. See [Suspense](#suspense) for more info

`useGet` returns two values: a result object with the `data`, `fetching`, and `error` keys for inspecting in your React component's output, and a [`refetch` function](#the-refetch-function) to trigger a refresh of the hook's data.

- `data: GadgetRecord | null`: The record fetched from the backend. Is `null` while the data is being loaded, or if the record wasn't found.
- `fetching: boolean`: A boolean describing if the hook is currently making a request to the backend.
- `error: Error | null`: An error from the client or server side, if encountered during the request. Will contain an error if the singleton record isn't found. See the [Errors](#errors-from-the-returned-error-object) section.

`useGet(api.currentSession)` retrieves the current global session for the current browser

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const CurrentSessionId = () => {
  const [{ data, fetching, error }, _refetch] = useGet(api.currentSession);

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;
  return (
    <span>
      Current session: {data.id} is {data.state}
    </span>
  );
};
```

`useGet` can take options which allow the customization of which fields are returned on the selected record:

```javascript
// fetch only the session id and state fields
const [{ data, fetching, error }, _refetch] = useGet(api.currentSession, { select: { id: true, state: true } });
```

The `refetch` function returned as the second element can be executed in order to trigger a refetch of the most up-to-date data from the backend. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/basics/react-preact/#reexecuting-queries) on re-executing queries for more information.

### `useFetch(path: string, options: RequestInit = {})`

`useFetch` is a low-level hook for making an HTTP request to your Gadget backend's HTTP routes. `useFetch` preserves client-side authentication information by using `api.fetch` under the hood, which means fetches will use the same request identity as other GraphQL API calls using the other hooks.

`useFetch` accepts the following arguments:

- `path`: the server-side URL to fetch from. Corresponds to an HTTP route defined on in your backend Gadget app's `routes` folder
- `options`: options configuring the `fetch` call, corresponding exactly to those you might send with a normal `fetch`.
  - `method`: the request method, like `"GET"`, `"POST"`, etc. Defaults to `"GET"`
  - `headers`: the request headers, like `{ "content-type": "application/json" }`
  - `body`: the request body to send to the server, like `"hello"` or `JSON.stringify({foo: "bar"})`
  - `json`: If true, expects the response to be returned as JSON, and parses it for convenience
  - `stream`: If true, responds with a `ReadableStream` allowing you to work with the response as it arrives. If "string" or any [valid encoding label](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API/Encodings) it will update the response `data` as a string as it arrives. This last option is ideal when working with response streams from LLMs.
  - `sendImmediately`: If true, sends the first fetch on component mount. If false, waits for the `send` function to be called to send a request. Defaults to `true` for GET requests and `false` for any other HTTP verbs.
  - See all the `fetch` options on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

`useFetch` returns a tuple with the current state of the request and a function to send or re-send the request. The state is an object with the following fields:

- `data`: the response data, if the request was successful
- `fetching`: a boolean describing if the fetch request is currently in progress
- `error`: an error object if the request failed in any way

The second return value is a function for sending or resending the fetch request.

Here's an example user component which uses `useFetch` to make a request to the `routes/users/GET-me.js` backend Gadget route:

```javascript
export function UserByEmail(props) {
  const [{data, fetching, error}, refresh] = useFetch("/users/me", {
    method: "GET",
    body: JSON.stringify({ email: props.email }})
    headers: {
      "content-type": "application/json",
    }
    json: true,
  });

  if (result.error) return <>Error: {result.error.toString()}</>;
  if (result.fetching && !result.data) return <>Fetching...</>;
  if (!result.data) return <>No user found with id={props.id}</>;

  return <div>{result.data.name}</div>;
}
```

#### Request method

By default, `GET` requests are sent as soon as the hook executes. `GET` requests can also be refreshed by calling the second return value to re-send the fetch request and fetch fresh data.

```javascript
// GET request will be sent immediately, can be refreshed by calling `send()` again
const [{ data, fetching, error }, send] = useFetch("/some/route", { method: "GET" });
// ... sometime later
data; // => will be populated
```

Other request methods like `POST`, `DELETE`, etc will not be sent automatically. The request will only be sent when the `send` functions is called explicitly, often in a click handler or similar.

```javascript
// POST requests will not be sent until `send` is called explicitly
const [{ data, fetching, error }, send] = useFetch("/some/route", { method: "POST" });
// ... sometime later
data; // => will still be undefined
await send();
data; // => will be populated
```

#### Parsing the response

Unlike the `useFind*` hooks, `useFetch` doesn't automatically parse and return rich data from your HTTP route. By default, `useFetch` returns a string of the response for the `data`. But, there's a couple convenience options for quickly parsing the response into the shape you need.

Pass the `{ json: true }` option to expect a JSON response from the server, and to automatically parse the response as JSON.

Pass the `{ stream: true }` to get a `ReadableStream` object as a response from the server, allowing you to work with the response as it arrives. Otherwise, the response will be returned as a `string` object.

#### When to use `useFetch` vs `useFindMany` etc

When possible, the hooks which make requests to your structured GraphQL API should be preferred. Your app's GraphQL API is autogenerated, which means you don't need to wire up custom routes on your backend to serve data. These hooks are also type safe and benefit from automatic client side caching, and `useFetch` does not.

#### Calling third-party APIs with `useFetch`

`@gadgetinc/react`'s `useFetch` hook calls `fetch` under the hood both client side and server side, which means you can use it to make HTTP requests to services other than your Gadget backend. You don't have to use `useFetch` to make calls elsewhere, but it is handy for avoiding adding other dependencies to your frontend code.

For example, we can call a third-party JSON API at `dummyjson.com`:

```javascript
export function DummyProducts(props) {
  const [{ data, fetching, error }, resend] = useFetch("https://dummyjson.com/products", {
    method: "GET",
    json: true,
  });

  if (result.error) return <>Error: {result.error.toString()}</>;
  if (result.fetching && !result.data) return <>Fetching...</>;

  return <div>{JSON.stringify(result.data.products)}</div>;
}
```

`useFetch` will **not** send your Gadget API client's authentication headers to third party APIs. It will behave like a normal browser `fetch` call, just with the added React wrapper and `json: true` option for easy JSON parsing.

#### When the request gets sent

By default, `useFetch` will immediately issue HTTP requests for `GET`s when run. This makes it easy to use `useFetch` to retrieve data for use rendering your component right away.

```javascript
export function GetRequest(props) {
  // will automatically send the request when the component renders the first time, as it is a GET
  const [{ data, fetching, error }, resend] = useFetch("/products");
  // fetching will be `true`
}
```

`useFetch` will _not_ immediately issue HTTP requests for HTTP verbs other than `GET`, like `POST`, `PUT`, etc. The HTTP request will only be sent when you call the returned `send` function.

```javascript
export function PostRequest(props) {
  // will not automatically send the request when the component renders, call `send` to issue the request
  const [{ data, fetching, error }, send] = useFetch("/products", { method: "POST" });
  // fetching will be `false`
}
```

This behavior can be overridden with the `sendImmediately` option. You can avoid sending GET requests on render by passing `sendImmediately: false`:

```javascript
export function DelayedGetRequest(props) {
  // will not automatically send the request when the component renders, call `send` to issue the request
  const [{ data, fetching, error }, send] = useFetch("/products", { sendImmediately: false });
  // fetching will be `false`
}
```

You can also have `POST` or `PUT` requests immediately issued by passing `sendImmediately: true`:

```javascript
export function ImmediatePutRequest(props) {
  // will automatically send the request when the component renders the first time
  const [{ data, fetching, error }, send] = useFetch("/products", { method: "POST", sendImmediately: true });
  // fetching will be `true`
}
```

### The `select` option

The `select` option allows you to choose which fields and subfields are returned by your Gadget app's GraphQL API. Your app's API supports returning only some fields of each model you request, as well as fields of related models through the Gadget relationship field types. The `select` option is an object with keys representing the `apiIdentifier` of fields in your Gadget models, and values holding a boolean describing if that field should be selected or not, or a subselection for object-typed fields.

For example, you can limit the fields selected by a finder to only return some fields, lowering the amount of bandwidth used and making your requests faster:

```javascript
export const OnlySomeWidgetFields = (props: { id: string }) => {
  // fetch only the widget id and name fields
  const [{ data, fetching, error }, _refetch] = useFindOne(api.widget, props.id, { select: { id: true, name: true } });

  return (
    <span className="widget-name">
      {data?.id}: {data?.name}
    </span>
  );
};
```

You can also use the `select` option for selecting fields of related models. For example, if we have a backend **Blog Post** model which has a `HasMany` field to a **Comment** model, we can fetch a blog post and it's related comments:

```javascript
export const BlogWithComments = (props: { id: string }) => {
  // fetch only the widget id and name fields
  const [{ data, fetching, error }, _refetch] = useFindOne(api.blogPost, props.id, {
    select: {
      id: true,
      title: true,
      body: true,
      // fetch the post's `comments` HasMany relationship field on the post
      comments: {
        edges: {
          node: {
            id: true,
            body: true,
            // fetch the author's BelongsTo User relationship field also
            author: {
              email: true,
            },
          },
        },
      },
    },
  });

  if (!data) return null;
  return (
    <>
      <h2>{data.title}</h2>
      <ul>
        {data.comments.edges.map((edge) => (
          <li>
            {edge.node.author.email} says {edge.node.body}
          </li>
        ))}
      </ul>
    </>
  );
};
```

**Note**: The shape of the options you pass in the `select` option matches exactly the shape of the GraphQL API for your application. Gadget applications use Relay-style GraphQL pagination, which means lists of records are accessed using the `relatedField: { edges: { node: true } }` style. BelongsTo and HasOne field types are accessed without any intermediate fields.

For TypeScript users, the `select` option is fully typesafe, allowing you to typecheck which fields you're fetching from the backend as well as ensure that the fields you render in your components are actually selected.

### Errors from the returned `error` object

Running queries or mutations can produce a few different kinds of errors your client side should handle:

- network errors where the browser is unable to connect to the server at all
- validation errors where the client sent information to the server successfully, but the server deemed it invalid and rejected it
- server side errors where the client sent information to the server but the server failed to process it due to a bug or transient issue.

Each of these error cases is broken out on the `error` object returned by `useAction` (and any of the other hooks). The `error` object is an `ErrorWrapper` object, which has a number of properties for figuring out exactly what went wrong:

- `error.message: string` - A top level error message which is always present
- `error.networkError: Error | undefined` - An error thrown by the browser when trying to communicate with the server
- `error.executionErrors: (GraphQLError | GadgetError)[] | undefined` - Any errors thrown by the GraphQL API, like missing parameters or invalid selections, and any errors thrown by the server concerning invalid data or backend processing errors.
- `error.validationErrors: { apiIdentifier: string, message: string }[] | undefined` - Any validation errors returned by the server. A shortcut to accessing the `.validationErrors` property of the first `InvalidRecordError` in the `.executionErrors` of the outer `ErrorWrapper` object. Useful for building form validations.

### Default selections

Gadget makes a default selection when you don't pass the `select` option to a finder, which will include all the model's scalar fields and a small representation of its related records. This default is also type safe, so you can rely on the returned objects from default finder methods returning type safe results conforming to the default shape. To figure out exactly what your client will select by default for a model, see the documentation for that model in your generated API documentation.

### The `refetch` function

The `refetch` function returned as the second return value for some hooks can be executed in order to trigger a refetch of the most up to date data from the backend. This is useful for powering refresh buttons in user-facing UI, or for periodically updating the client side data. See [`urql`'s docs](https://formidable.com/open-source/urql/docs/basics/react-preact/#reexecuting-queries) on re-executing queries for more information.

As an example, we could use the `refetch` function to power a refresh button in a table:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug

export const ShowWidgetNames = () => {
  // get the second return value of `useFindMany`, which is the refetch function
  const [{ data, fetching, error }, refetch] = useFindMany(api.widget);

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      {data.map((widget) => (
        <tr key={widget.id}>
          <td>{widget.id}</td>
          <td>{widget.name}</td>
        </tr>
      ))}
      <tr colspan="2">
        <button onClick={() => void refetch()}>Refresh</button>
      </tr>
    </table>
  );
};
```

### Suspense

`@gadgetinc/react` supports two modes for managing loading states: the `fetching` return value, which will be true when making requests under the hood, as well as using `<Suspense/>`, React's next generation tool for managing asynchrony. Read more about `<Suspense/>` in the [React docs](https://react.dev/reference/react/Suspense).

To suspend rendering when fetching data, pass the `suspense: true` option to the `useFind*` hooks.

```javascript
const Posts = () => {
  // pass suspense: true, and the component will only render once data has been returned
  const [{ data, error }, refresh] = useFindMany(api.post, { suspense: true });

  // note: no need to inspect the fetching prop
  return (
    <>
      {data
        .map
        //...
        ()}
    </>
  );
};
```

All the read hooks support suspense: `useFindOne`, `useMaybeFindOne`, `useFindMany`, `useFindFirst`, `useMaybeFindFirst`, and `useGet`.

`suspense: true` is most useful when a parent component wraps a suspending-child with the `<Suspense/>` component for rendering a fallback UI while the child component is suspended:

```javascript
<Suspense fallback={"loading..."}>
  <Posts />
</Suspense>
```

With this wrapper in place, the fallback prop will be rendered while the data is being fetched, and once it's available, the `<Posts/>` component will render with data.

Read more about `<Suspense/>` in the [React docs](https://react.dev/reference/react/Suspense). `suspense: true` uses `urql`'s suspense support under the hood.

### `urql` exports

Since this library uses `urql` behind the scenes, it provides a few useful exports directly from `urql` so that it does not need to be installed as a peer dependency should you need to write custom queries or mutations.

The following are exported from `urql`:

- `Provider`
- `Consumer`
- `Context`
- `useQuery`
- `useMutation`

Example usage:

```javascript
import React from "react";
import { api } from "../api"; // some file that instantiates @gadget-client/your-app-slug
import { Provider, useQuery } from "@gadgetinc/react";

export const ShowWidgetNames = () => {
  // find all widgets and the most recently created gizmo related to the widget
  const [{ data, fetching, error }, refetch] = useQuery({
    query: `
query GetWidgets {
  widgets {
    edges {
      node {
        id
        name
        gizmos(first: 1, sort:{ createdAt: Descending }) {
          edges {
            node {
              createdAt
            }
          }
        }
      }
    }
  }
}
    `,
  });

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Last Gizmo Created</th>
      </tr>
      {data.widgets.edges.map(({ node: widget }) => (
        <tr key={widget.id}>
          <td>{widget.id}</td>
          <td>{widget.name}</td>
          <td>{widget.gizmos.edges.length > 0 ? widget.gizmos.edges[0].node.createdAt : "Does not have Gizmos"}</td>
        </tr>
      ))}
      <tr colspan="2">
        <button onClick={() => void refetch()}>Refresh</button>
      </tr>
    </table>
  );
};

export const App = () => (
  <Provider api={api}>
    <ShowWidgetNames />
  </Provider>
);
```

## Authentication

When working with Gadget auth, there are several hooks and components that can help you manage the authentication state of your application.

The `Provider` component exported from this library accepts an `auth` prop which can be used to configure the relative paths to your app's sign in and sign out endpoints. If you do not provide these paths, the default values of `/auth/signin` and `/auth/signout` will be used.

The hooks use the Gadget client's `suspense: true` option, making it easier to manage the async nature of the hooks without having to deal with loading state.

```tsx
import { Client } from "@gadget-client/my-gadget-app";
import { Provider } from "@gadgetinc/react";
import { Suspense } from "react";
import App from "./App";

// instantiate the API client for our app
const api = new Client({ authenticationMode: { browserSession: true } });

export function main() {
  // ensure any components which use the @gadgetinc/react hooks are wrapped with the Provider and a Suspense component
  return (
    <Provider api={api} auth={{ signInPath: "/auth/signin", signOutActionApiIdentifier: "signOut" }}>
      <Suspense fallback={<>Loading...</>}>
        <App />
      </Suspense>
    </Provider>
  );
}
```

### Hooks

React hooks are available to help you manage the authentication state of your application.

### `useSession()`

Returns the current session, equivalent to `await api.currentSession.get()` or `useGet(api.currentSession)`, but uses Promises for an easier interface. Throws a Suspense promise while the session is being loaded.

### `useUser()`

Returns the current user of the session, if present. For unauthenticated sessions, returns `null`. Throws a Suspense promise while the session/user are loading.

### `useAuth()`

Returns an object representing the current authentication state of the session. Throws a Suspense promise while the session is being loaded.

`user` - the current `User`, if signed in. Similar to `useUser`.

`session` - the current `Session`. Similar to `useSession`.

`isSignedIn` - set to `true` if the session has a user associated with it (signed in), `false` otherwise.

```tsx
export default function App() {
  const user = useUser();
  const { isSignedIn } = useAuth();
  const gadgetContext = useGadgetContext();

  return (
    <>
      { isSignedIn ? <p>Hello, {user.firstName} {user.lastName}}</p> : <a href={gadgetContext.auth.signInPath}>Please sign in</a> }
    </>
  );
}
```

### `useSignOut()`

Returns a callback that you can call to sign out your current Gadget `User` from the current `Session`. This calls the configured `signOutActionApiIdentifier` action, which is the `User` `signOut` action by default.

```tsx
const signOut = useSignOut();

<button onClick={signOut}>Sign Out</button>
```

It has two options:

- `redirectOnSuccess` - configured `true` by default, will redirect the current via `window.location.assign` to the `signInPath`.
- `redirectToPath` - When `redirectOnSuccess` is `true`, will redirect to this path instead of the `signInPath`.

### Components

If you are trying to control the layout of your application based on authentication state, it may be helpful to use the Gadget auth React components instead of, or in addition to, the hooks.

### `<SignedIn />`

Conditionally renders its children if the current session has a user associated with it, similar to the `isSignedIn` property of the `useAuth()` hook.

```tsx
<h1>
  Hello<SignedIn>, human</SignedIn>!
</h1>
```

### `<SignedOut />`

Conditionally renders its children if the current session has a user associated with it.

```tsx
<SignedOut>
  <a href="/auth/signin">Sign In!</a>
</SignedOut>
```

### `<SignedInOrRedirect />`

Conditionally renders its children if the current session has a user associated with it, or redirects the browser via `window.location.assign` if the user is not currently signed in. This component is helpful for protecting front-end routes.

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="my-profile"
        element={
          <SignedInOrRedirect>
            <MyProfile />
          </SignedInOrRedirect>
        }
      />
    </Route>
  </Routes>
</BrowserRouter>
```

### `<SignedOutOrRedirect />`

Conditionally renders its children if the current session has no user associated with it, or redirects the browser via `window.location.assign` if the user is not currently signed out. This component is helpful for redirecting front-end routes.

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={
        <SignedOutOrRedirect>
          <Home />
        </SignedOutOrRedirect>
      }>
      <Route path="my-profile" element={<MyProfile />}
      />
    </Route>
  </Routes>
</BrowserRouter>
```
