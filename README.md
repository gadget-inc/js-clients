# Core

This package contains core types and interfaces that all Gadget client implementations must conform to. `@gadgetinc/core` defines the contracts for API clients, connections, model managers, records, and operations that are shared across all generated Gadget clients.

Note that developers shouldn't need to use this package directly and should instead use their generated client plus framework-specific binding packages like `@gadgetinc/react`.

## Overview

`@gadgetinc/core` provides the **type system foundation** for the Gadget framework. It exports TypeScript types and interfaces that:

- Define what a Gadget API client looks like (`AnyClient`)
- Specify how connections to Gadget backends work (`AnyConnection`)
- Describe model managers and their operations (`AnyModelManager`, `AnyInternalModelManager`)
- Define record shapes and behavior (`GadgetRecord`, `GadgetRecordList`)
- Provide filter, sort, and selection types for querying data
- Declare action and function metadata structures

## Key Exports

### Client & Connection Types

- **`AnyClient`** - Interface for any Gadget app's API client instance. Defines methods like `query()`, `mutate()`, `transaction()`, and properties like `connection` and `internal`.
- **`AnyConnection`** - Interface for managing the connection to a Gadget backend, including authentication, GraphQL client access, and transaction support.
- **`AnyCoreImplementation`** - Interface for core utility functions like `GadgetRecord` construction, variable disambiguation, and error handling.

### Model & Record Types

- **`AnyModelManager`** - Generic interface representing one model's API (e.g., `api.widget`). Provides methods like `findOne()`, `findMany()`, `findFirst()`.
- **`AnyInternalModelManager`** - Interface for internal API model managers used within Gadget backend code.
- **`GadgetRecord`** - Represents one record returned from a Gadget API call. Includes helper methods for change tracking, field access, and serialization.
- **`GadgetRecordList`** - An array of `GadgetRecord` instances with built-in pagination support (`hasNextPage`, `nextPage()`, etc.).

### Action & Function Types

- **`ActionFunction`** - Metadata and types for model actions (create, update, delete, custom actions).
- **`BulkActionFunction`** - Metadata for bulk operations on multiple records.
- **`GlobalActionFunction`** - Metadata for global actions not tied to a specific model.
- **`ViewFunction`** - Metadata for backend view queries.

### Query & Filter Types

The package exports comprehensive type definitions for querying Gadget data:

- **Filter types**: `IDFilter`, `StringFilter`, `IntFilter`, `FloatFilter`, `DateTimeFilter`, `JSONFilter`, `BooleanFilter`, `StateFilter`, etc.
- **`AnyFilter`** - Union type for all filter types, supporting `AND`, `OR`, and `NOT` combinators.
- **`AnySort`** - Type for sort orders, including field-based sorting and vector similarity sorting.
- **`FieldSelection`** - Type for selecting specific fields from GraphQL responses.
- **Options types**: `FindManyOptions`, `BaseFindOptions`, `InternalFindOptions`, etc.

### Utility Types

- **`Select<Schema, Selection>`** - Type utility for extracting a subset of a schema based on a selection.
- **`DefaultSelection<Available, Options, Defaults>`** - Type utility for defaulting selections when none are provided.
- **`AvailableSelection<Schema>`** - Converts a schema type into valid selection options.
- **Scalar types**: `GadgetID`, `DateTime`, `EmailAddress`, `URLString`, `JSONBlob`, `CurrencyAmount`, etc.

## Architecture

The `@gadgetinc/core` package uses TypeScript's structural typing to define contracts without imposing implementation details. Generated Gadget clients implement these interfaces, ensuring consistent APIs across all apps.

### Symbols for Internal State

The package exports symbols used to attach internal state to client objects:

```typescript
export const $modelRelationships = Symbol.for("gadget/modelRelationships");
export const $coreImplementation = Symbol.for("gadget/coreImplementation");
```

These symbols allow generated clients to store metadata and implementation details without polluting the public API surface.

### Change Tracking

`GadgetRecord` includes built-in change tracking to detect modifications:

```typescript
record.changed(); // Returns true if any field has changed
record.changes(); // Returns { field: { current, previous } } for changed fields
record.flushChanges(); // Marks current state as "saved"
record.revertChanges(); // Reverts to last saved state
```

This enables optimistic UI updates and efficient data synchronization.

### Pagination

`GadgetRecordList` extends `Array<GadgetRecord>` with pagination helpers:

```typescript
list.hasNextPage; // boolean
list.endCursor; // string cursor for next page
await list.nextPage(); // Fetches next page of results
```

This implements Relay-style cursor pagination across all Gadget APIs.

## For Gadget Developers

This package is the **single source of truth** for type definitions across the Gadget ecosystem. When adding new features:

1. Define types here first in `@gadgetinc/core`
2. Have generated clients implement the new types
3. Update framework packages (`@gadgetinc/react`, etc.) to leverage the new types
4. Ensure backward compatibility or coordinate breaking changes

The `testing/` subdirectory exports test utilities like `mockUrqlClient` for use in other packages' test suites.

### Publishing

After releasing a new version of `@gadgetinc/core`, ensure that:

1. Generated clients are regenerated to use the new version
2. Framework packages like `@gadgetinc/react` and `@gadgetinc/client-hooks` are updated
3. The `PlatformDependencyVersions` variable in Gadget mainline is updated
