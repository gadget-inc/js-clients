# Client Hooks

This package contains shared implementations of core hooks used in React/Preact libraries for Gadget applications. `@gadgetinc/client-hooks` provides framework-agnostic hook implementations that are consumed by framework-specific packages like `@gadgetinc/react` and `@gadgetinc/preact`.

Note that developers shouldn't need to use this package directly and should instead use their generated client plus framework-specific binding packages like `@gadgetinc/react`.

## Overview

`@gadgetinc/client-hooks` is designed with a **runtime adapter pattern** that allows the same hook logic to work across different UI frameworks (React, Preact, etc.). The package exports:

- Core hook implementations for querying and mutating Gadget APIs
- A `RuntimeAdapter` interface that framework-specific packages implement
- A registration system via `registerClientHooks` to bind hooks to a specific framework

## Architecture

The library uses an adapter pattern to remain framework-agnostic:

```typescript
interface RuntimeAdapter {
  GadgetApiContext: Context<GadgetApiContext>;
  framework: FrameworkBindings; // useState, useEffect, useMemo, etc.
  urql: UrqlBindings; // useQuery, useMutation
}
```

Framework-specific packages (like `@gadgetinc/react`) provide an adapter implementation that maps to their framework's primitives, then call `registerClientHooks` to initialize the hooks with that adapter.

## Available Hooks

### Query Hooks

- `useFindOne` - Fetch a single record by ID
- `useMaybeFindOne` - Fetch a single record by ID, returning null if not found
- `useFindMany` - Fetch a page of records with filtering, sorting, and pagination
- `useFindFirst` - Fetch the first record matching criteria
- `useMaybeFindFirst` - Fetch the first record matching criteria, returning null if not found
- `useFindBy` - Fetch a record by a unique field value
- `useGet` - Fetch a singleton record (e.g., current session)
- `useView` - Fetch records from a backend view

### Mutation Hooks

- `useAction` - Run an action on a model record (create, update, delete, etc.)
- `useBulkAction` - Run an action on multiple records at once
- `useGlobalAction` - Run a global action

### Utility Hooks

- `useFetch` - Make HTTP requests to backend routes
- `useEnqueue` - Enqueue background actions
- `useQuery` - Low-level GraphQL query hook
- `useMutation` - Low-level GraphQL mutation hook
- `useApi` - Access the Gadget API client instance
- `useConnection` - Access the Gadget connection instance
- `useCoreImplementation` - Access the core implementation details

## How Framework Packages Use This

Framework-specific packages like `@gadgetinc/react` follow this pattern:

1. Import hooks and utilities from `@gadgetinc/client-hooks`
2. Create a `RuntimeAdapter` implementation for their framework
3. Create a `Provider` component that calls `registerClientHooks`
4. Re-export the hooks for end users

Example:

```typescript
import { registerClientHooks, useAction, useFindMany } from "@gadgetinc/client-hooks";
import { useContext, useMemo /* ... */ } from "react";
import { useQuery, useMutation } from "urql";

// Create adapter for React
const adapter: RuntimeAdapter = {
  framework: { useContext, useMemo /* ... */ },
  urql: { useQuery, useMutation, Provider },
  GadgetApiContext: createContext(/* ... */),
};

// Provider component initializes the hooks
export const Provider = ({ api, children }) => {
  const { gadgetClient, urqlClient } = registerClientHooks(api, adapter);
  // ... render provider with context
};

// Re-export hooks for users
export { useAction, useFindMany /* ... */ };
```

## For Gadget Developers

This package is designed to reduce code duplication between React and Preact (and potentially other frameworks). When adding new functionality:

1. Implement the hook logic once in `@gadgetinc/client-hooks`
2. Use the `RuntimeAdapter` for any framework-specific calls
3. Export the hook from the package
4. Re-export from framework packages like `@gadgetinc/react`

The hook registration system uses a stub pattern where hooks throw helpful errors if called outside a proper `Provider` context, then get replaced with real implementations once `registerClientHooks` is called.
