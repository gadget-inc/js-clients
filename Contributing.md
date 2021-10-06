# Building TypeScript

 - You can run `yarn build` to build all the projects in the repo
 - You can run `yarn watch` to start the TypeScript watcher process for all the projects in the repo which will recompile files as you change them

# Prereleasing

It can be annoying to work with these packages via `yarn link` sometimes, so we also support building and releasing the package to a git SHA which can then be installed conventionally in another repo. To push a prerelease, run `yarn workspace @gadgetinc/api-client-core prerelease`. This will:
 - build the typescript
 - create a local git commit that has just the built artifacts for just the package in question
 - push that to the remote git repo
 - and log out a version you can then refer to from other repos


# Releasing

Right now we release through yarn. Run

```
yarn workspace @gadgetinc/api-client-core publish --access=public
```

or

```
yarn workspace @gadgetinc/react publish --access=public
```

to push a new version to NPM.