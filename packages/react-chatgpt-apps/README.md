<div align="center">
  <p>
    <img alt="Gadget logo" src="https://raw.githubusercontent.com/gadget-inc/js-clients/main/docs/assets/gadget-logo.png" />
  </p>
  <p>
    <a href="">
      <img alt="GitHub CI status" src="https://badgen.net/github/checks/gadget-inc/js-clients/main/test?label=CI" />
    </a>
    <a href="https://www.npmjs.com/package/@gadgetinc/react-chatgpt-apps">
      <img alt="npm version" src="https://badgen.net/npm/v/@gadgetinc/react-chatgpt-apps?color=4148f2" />
    </a>
  </p>
  <p>
    <strong>
      React components for building ChatGPT Apps powered by <a href="https://gadget.dev">Gadget</a> backends.
    </strong>
  </p>
</div>

`@gadgetinc/react-chatgpt-apps` is a React library for connecting ChatGPT Apps to Gadget backend applications. It provides:

1. A `<Provider>` component that automatically authenticates your ChatGPT App with your Gadget backend
2. Easy integration with `@gadgetinc/react` hooks for reading and writing data
3. Automatic token management using OpenAI's and Gadget's authentication system

When building a ChatGPT App that needs to interact with a Gadget backend, this library handles all the authentication complexity for you, allowing your React components to focus on building great user experiences.

## Installation

`@gadgetinc/react-chatgpt-apps` is a companion package to your Gadget app's JavaScript client and `@gadgetinc/react`, so you need to install all three packages.

First, set up the Gadget NPM registry and install your app's client:

```bash
npm config set @gadget-client:registry https://registry.gadget.dev/npm

# then install your app's client
npm install @gadget-client/your-chatgpt-app-slug
```

Full installation instructions for your app's client can be found in the Gadget docs at `https://docs.gadget.dev/api/<your-app-slug>/external-api-calls/installing`.

Then, install the React libraries:

```bash
npm install @gadgetinc/react @gadgetinc/react-chatgpt-apps react
# or
yarn add @gadgetinc/react @gadgetinc/react-chatgpt-apps react
```

## Setup

To use this library, wrap your ChatGPT App's React components in the `Provider` component from this package. The `Provider` automatically handles authentication with your Gadget backend using OpenAI's authentication system.

```tsx
// in web/chatgpt-widgets/root.tsx
import { Provider } from "@gadgetinc/react-chatgpt-apps";
import { api } from "../api";

function App() {
  return (
    <Provider api={api}>
      <YourChatGPTAppComponents />
    </Provider>
  );
}

export default App;
```

That's it! The `Provider` component will:

1. Automatically fetch an authentication token from OpenAI when your app loads
2. Configure your Gadget API client to use this token for all requests
3. Ensure all API calls wait for authentication to be ready before proceeding

## Example usage

Once you've wrapped your app in the `Provider`, you can use all the hooks from `@gadgetinc/react` to interact with your Gadget backend:

```tsx
import { useAction, useFindMany } from "@gadgetinc/react";
import { api } from "../../api";

function TaskList() {
  // Fetch tasks from your Gadget backend - authentication is handled automatically
  const [{ data: tasks, fetching, error }] = useFindMany(api.task, {
    select: {
      id: true,
      title: true,
      completed: true,
    },
  });

  // Set up an action to mark tasks as complete
  const [_, completeTask] = useAction(api.task.complete);

  if (fetching) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => completeTask({ id: task.id })} />
          {task.title}
        </li>
      ))}
    </ul>
  );
}
```

### Authentication

When a user installs your ChatGPT App, they will authenticate themselves with your Gadget backend, and establish some kind of user identity in your `session` model, `user` model, or similar. When you use this provider, API calls made from your Widgets will act with that same identity by re-using the same JWT token that your Gadget backend provisioned at install time.

### Using without authentication

If you don't need authentication for your ChatGPT widgets such that they are safe to be world readable, you can disable authentication in the provider by setting the `authenticate` prop to false:

```typescript
// in web/chatgpt-widgets/root.tsx
import { Provider } from "@gadgetinc/react-chatgpt-apps";
import { api } from "../api";

function App() {
  return (
    <Provider api={api} authenticate={false}>
      <YourChatGPTAppComponents />
    </Provider>
  );
}

export default App;
```

## How it works

ChatGPT Apps use a special authentication mechanism provided by OpenAI. When your app loads in ChatGPT, it can request an authentication token from OpenAI that identifies the current user and conversation. This library:

1. Calls OpenAI's `callTool` function with the special `__getGadgetAuthTokenV1` tool to retrieve an authentication token
2. Configures your Gadget API client to include this token in all HTTP requests as a `Bearer` token
3. Ensures that any API calls made before the token is fetched will wait for authentication to be ready

This all happens automatically when you wrap your app in the `Provider` component. Your Gadget backend will receive the authenticated requests and can use the token to identify the user and enforce permissions.

## API Documentation

### `<Provider api={api}>`

The `Provider` component must wrap your ChatGPT App to enable authenticated communication with your Gadget backend.

**Props:**

- `api` (required): An instance of your Gadget application's API client. Example: `new Client()` where `Client` is imported from `@gadget-client/your-app-slug`.
- `children` (required): Your React components that will use the Gadget API.

**Example:**

```tsx
import { Client } from "@gadget-client/my-chatgpt-app";
import { Provider } from "@gadgetinc/react-chatgpt-apps";

const api = new Client();

export function App() {
  return (
    <Provider api={api}>
      <YourComponents />
    </Provider>
  );
}
```

The `Provider` component:

- Automatically fetches an authentication token from OpenAI when mounted
- Configures your API client to use this token for all requests
- Handles token management transparently - you don't need to manually pass tokens around
- Ensures all API calls wait for authentication to be ready

### Using with `@gadgetinc/react` hooks

Once your app is wrapped in the `Provider`, you can use all the hooks from `@gadgetinc/react` to interact with your Gadget backend. All requests will automatically include the authentication token.

See the [`@gadgetinc/react` documentation](https://github.com/gadget-inc/js-clients/blob/main/packages/react/README.md) for the full list of available hooks including:

- `useFindOne` - Fetch a single record by ID
- `useFindMany` - Fetch a list of records with filtering, sorting, and pagination
- `useAction` - Run actions on your Gadget models
- `useGlobalAction` - Run global actions
- `useFetch` - Make custom HTTP requests to your Gadget backend

All of these hooks will work seamlessly with the ChatGPT Apps authentication provided by this package.

## ChatGPT-Specific Hooks

This package also provides hooks for interacting with the ChatGPT environment and OpenAI APIs. These hooks enable your app to respond to the ChatGPT context and provide a native experience.

### `useDisplayMode()`

Access the current display mode of your ChatGPT app.

```tsx
import { useDisplayMode } from "@gadgetinc/react-chatgpt-apps";

function MyWidget() {
  const displayMode = useDisplayMode();

  return <div>{displayMode === "fullscreen" ? <FullScreenView /> : <CompactView />}</div>;
}
```

Returns one of:

- `"pip"` - Picture-in-picture mode (small floating window)
- `"inline"` - Inline mode (embedded in the chat)
- `"fullscreen"` - Fullscreen mode (takes up the entire screen)
- `null` - If not available

### `useMaxHeight()`

Get the maximum height available for your app in pixels.

```tsx
import { useMaxHeight } from "@gadgetinc/react-chatgpt-apps";

function MyWidget() {
  const maxHeight = useMaxHeight();

  return <div style={{ maxHeight }}>Content that respects viewport limits</div>;
}
```

This value updates dynamically as the display mode or window size changes.

### `useRequestDisplayMode()`

Request a change to the app's display mode.

```tsx
import { useRequestDisplayMode } from "@gadgetinc/react-chatgpt-apps";

function MyWidget() {
  const requestDisplayMode = useRequestDisplayMode();

  const goFullscreen = async () => {
    const result = await requestDisplayMode("fullscreen");
    console.log("Granted mode:", result.mode);
  };

  return <button onClick={goFullscreen}>Go Fullscreen</button>;
}
```

Note: The host may reject or modify the request (e.g., on mobile, PiP is always coerced to fullscreen).

### `useWidgetState(defaultState)`

Manage persistent widget state that syncs with ChatGPT's storage system.

```tsx
import { useWidgetState } from "@gadgetinc/react-chatgpt-apps";

function Counter() {
  const [state, setState] = useWidgetState({ count: 0 });

  return <button onClick={() => setState({ count: (state?.count ?? 0) + 1 })}>Count: {state?.count ?? 0}</button>;
}
```

Similar to React's `useState`, but state persists across re-renders and display mode changes.

### `useWidgetProps(defaultProps)`

Access the tool output props passed to your ChatGPT app.

```tsx
import { useWidgetProps } from "@gadgetinc/react-chatgpt-apps";

function MyWidget() {
  const props = useWidgetProps({ userId: "unknown", theme: "light" });

  return <div>User ID: {props.userId}</div>;
}
```

When ChatGPT invokes your app, it may provide initial data through the `toolOutput` property. This hook retrieves that data with optional defaults.

### `useSendMessage()`

Send follow-up messages to the ChatGPT conversation programmatically.

```tsx
import { useSendMessage } from "@gadgetinc/react-chatgpt-apps";

function QuickActions() {
  const sendMessage = useSendMessage();

  return <button onClick={() => sendMessage("Tell me more about this")}>Ask for more details</button>;
}
```

Useful for creating interactive experiences that guide the conversation.

### `useOpenExternal()`

Open external URLs in a way that respects the ChatGPT environment.

```tsx
import { useOpenExternal } from "@gadgetinc/react-chatgpt-apps";

function LinkButton() {
  const openExternal = useOpenExternal();

  return <button onClick={() => openExternal("https://example.com")}>Visit Example</button>;
}
```

Attempts to use ChatGPT's native link handler, falling back to `window.open` if unavailable.

### `useCallTool()`

Call external tools/APIs that have been configured in your ChatGPT app.

```tsx
import { useCallTool } from "@gadgetinc/react-chatgpt-apps";

function WeatherWidget() {
  const callTool = useCallTool();

  const fetchWeather = async () => {
    const response = await callTool("weatherApi", { city: "San Francisco" });
    console.log(response?.result);
  };

  return <button onClick={fetchWeather}>Get Weather</button>;
}
```

### `useOpenAiGlobal(key)`

Low-level hook for accessing OpenAI global values by key.

```tsx
import { useOpenAiGlobal } from "@gadgetinc/react-chatgpt-apps";

function ThemeAwareComponent() {
  const theme = useOpenAiGlobal("theme");
  const locale = useOpenAiGlobal("locale");

  return <div className={theme}>Content in {locale}</div>;
}
```

Most apps should use the more specific hooks like `useDisplayMode`, `useMaxHeight`, etc. instead of using this hook directly.

## Authentication Flow

When your ChatGPT App loads, the following happens automatically:

1. The `Provider` component calls OpenAI's `callTool` function with the `__getGadgetAuthTokenV1` tool name
2. OpenAI returns an authentication token specific to the current user and conversation
3. The `Provider` configures your Gadget API client to include this token as a `Bearer` token in the `Authorization` header of all HTTP requests
4. Your Gadget backend receives the token and can use it to identify the user and enforce permissions

If the token fetch fails (for example, if the app is not running in a ChatGPT environment), an error will be thrown. This ensures your app doesn't make unauthenticated requests by mistake.
