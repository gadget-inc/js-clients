# AGENTS.md

## Project Overview

This is a pnpm monorepo containing the Gadget JavaScript/TypeScript client libraries. It includes core types, React/Preact hooks, and framework-specific integrations (Shopify, BigCommerce, ChatGPT).

## Package Manager

pnpm (enforced via preinstall hook). Always use `pnpm` — not npm or yarn.

## Key Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run all tests
pnpm test

# Run tests for a specific package
pnpm test -F=@gadgetinc/client-hooks

# Run a specific test file
pnpm test packages/client-hooks/spec/useFindMany.spec.ts

# Typecheck all packages
pnpm typecheck

# Lint (prettier + eslint)
pnpm lint

```

## Project Structure

| Package | Description |
|---|---|
| `packages/core` | Core types and interfaces all Gadget clients conform to |
| `packages/client-hooks` | Shared hook implementations for React/Preact (useFindMany, useAction, etc.) |
| `packages/react` | React bindings, auto UI components (Polaris, Shadcn) |
| `packages/preact` | Preact bindings |
| `packages/react-shopify-app-bridge` | Shopify app integration |
| `packages/react-bigcommerce` | BigCommerce integration |
| `packages/react-chatgpt-apps` | ChatGPT Apps SDK integration |
| `packages/shopify-extensions` | Shopify UI extensions utilities |
| `packages/tiny-graphql-query-compiler` | Custom GraphQL query compiler |
| `packages/api-client-core` | Deprecated, superseded by `packages/core` |

## Testing

- **Framework**: Jest with `@swc/jest` transformer
- **ESM**: Tests use `--experimental-vm-modules` for ESM support
- **Test files**: Located in `packages/*/spec/` as `*.spec.ts`
- **Type-level tests**: Many specs include compile-time type assertions using `conditional-type-checks` (functions prefixed with `_Test` that are typechecked but never executed)
- **Cypress**: React package has Cypress component tests (`pnpm -F=react run cypress:open`)
- **Timezone**: Tests run with `TZ=UTC`

## TypeScript

- Strict mode enabled globally via root `tsconfig.json`
- Each package has its own `tsconfig.json` extending the root
- Dual ESM/CJS output via separate `tsconfig.esm.json` and `tsconfig.cjs.json` per package
- Target: ES2020 (root), ES2019 (package builds)

## Releasing

- Uses changesets for versioning: `pnpm changeset add`
- Update versions: `pnpm changeset version`
- Pushing version changes to `main` triggers automatic npm publish via GitHub Actions
- Dependency versions must be bumped transitively (e.g., bumping `client-hooks` requires bumping `react`, `preact`, and their dependents)
- Pre-releases for testing: `pnpm --filter=<package> prerelease` (uses gitpkg)

## CI

GitHub Actions runs on every push:
- `test` — Jest tests
- `test-cypress` — Cypress component tests
- `lint` — Prettier + ESLint
- `typecheck` — TypeScript across all packages
- `versions` — Dependency version consistency
- `bundle-sizes` — RelativeCI bundle tracking
