# Contributing

## Development environment

We require `node` and `pnpm` to exist. If you're a nix user, we have a `flake.nix` present that installs the same version of the development tools we use for everyone.

## Building TypeScript

- You can run `pnpm build` to build all the projects in the repo
- You can run `pnpm watch` to start the TypeScript watcher process for all the projects in the repo which will recompile files as you change them

## Running Cypress tests

For running the Cypress tests, you need an API key for communicating with a Gadget app this repo uses for testing. You can ask a Gadget staff member for an existing key, or fork the test app and use your own API key for [this app](https://app.gadget.dev/auth/fork?domain=js-clients-test--development.gadget.app).

To open Cypress and execute tests interactively, run:

```react
pnpm -F=react exec cypress open
```

To run Cypress on the command line, run:

```react
pnpm -F=react exec cypress run
```

## Regenerating GraphQL queries

Most of the GraphQL queries this library makes are assembled dynamically at runtime based on the user's application and the metadata that comes from their API client. For queries we issue against our static part of the GraphQL schema that each application shares though (under `gadgetMeta { ... }`), we have an automatic type-safe GraphQL query generator in place using `graphql-codegen`.

You can author queries using the `graphql` helper, and then generate types for their return values with

```
pnpm -F=react gql-gen
```

See the [`graphql-codegen`](https://the-guild.dev/graphql/codegen/docs/guides/react-vue#writing-graphql-queries) docs for more info.

## Prereleasing

It can be annoying to work with these packages via `pnpm link` sometimes, so we also support building and releasing the package to a git SHA which can then be installed conventionally in another repo. To push a prerelease, run `pnpm --filter=@gadgetinc/api-client-core prerelease`. This will:

- build the typescript
- create a local git commit that has just the built artifacts for just the package in question
- push that to the remote git repo
- and log out a version you can then refer to from other repos

## Checking test bundle sizes

We have a small project setup for evaluating what the bundled size of these dependencies might be together. Run:

```shell
pnpm -F=test-bundles test-build
```

to build the test bundles.

## Releasing

Releasing is done automatically via [our release workflow](.github/workflows/release.yml). Any commits to the main branch that changes one of our `packages/**/package.json` versions will automatically be published.

If you need to release manually for some reason you can do the following

```
pnpm --filter=@gadgetinc/api-client-core publish --access=public --no-git-tag-version
```

or

```
pnpm --filter=@gadgetinc/react publish --access=public --no-git-tag-version
```

to push a new version to NPM.
