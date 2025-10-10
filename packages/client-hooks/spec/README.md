# Client Hooks Test Suite

This directory contains tests for the `@gadgetinc/client-hooks` package. These tests are designed to be framework-agnostic and test the core logic of each hook without depending on specific framework implementations or concrete API clients.

## Test Architecture

### Mock Adapter (`mockAdapter.ts`)

The tests use a **mock adapter** that implements the `RuntimeAdapter` interface. This adapter simulates the behavior of framework-specific adapters (like React or Preact) without actually depending on those frameworks.

Key components:

- **Framework bindings**: Mock implementations of `useState`, `useEffect`, `useMemo`, etc.
- **URQL bindings**: Mock implementations of `useQuery` and `useMutation`
- **Context**: Mock Gadget API context for providing the client and connection

### Test Approach

Each hook test file follows a similar pattern:

1. **Setup**: Create a mock adapter, API client, and connection
2. **Initialize hooks**: Call `createHooks(adapter)` to initialize the hook system
3. **Test hook behavior**: Call the hook and verify it:
   - Returns the expected state shape
   - Calls the appropriate connection methods with correct parameters
   - Uses adapter hooks correctly (useMemo, useCallback, etc.)
   - Handles options and edge cases properly

### What These Tests DO Cover

- ✅ Hook initialization and state shape
- ✅ Correct parameters passed to connection operations
- ✅ Proper use of adapter framework hooks
- ✅ Options handling (pause, suspense, select, etc.)
- ✅ Namespace support
- ✅ Edge cases (stubbed actions, null data, etc.)

### What These Tests DON'T Cover

- ❌ Actual network requests and responses
- ❌ Framework-specific behavior (React rendering, Preact lifecycle, etc.)
- ❌ Real URQL client behavior
- ❌ Integration with concrete Gadget API clients

These integration tests will live in the framework-specific packages:

- `@gadgetinc/react` - Full integration tests with React, real URQL, and mocked network responses
- `@gadgetinc/preact` - Full integration tests with Preact

## Running Tests

```bash
# From the package root
pnpm test

# Watch mode
pnpm test --watch

# With coverage
pnpm test --coverage
```
