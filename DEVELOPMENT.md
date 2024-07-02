# Developing a Gadget client

When developing a Gadget client, or the core, it is helpful to be able to have another project reference your local version. Because we need the in-development version to run in CI, we use `gitpkg` for vendoring in-development versions of these packages within Gadget proper.

## gitpkg

[`gitpkg`](https://github.com/ramasilveyra/gitpkg) is a way to publish an NPM-compatible tarball to a git repository. First, run

```
# if able to write to `gadget-inc/js-clients` repo
pnpm --filter=@gadgetinc/api-client-core prerelease

# to an arbitrary repo
pnpm --filter=@gadgetinc/api-client-core gitpkg publish --registry git@mygit.server:org/private-registry.git
```

Once you've released a package, you can use it in a project by updating the dependency in the project's `package.json`:

```json
{
  "dependencies": {
    "@gadgetinc/react": "https://codeload.github.com/gadget-inc/js-clients/tar.gz/@gadgetinc/react-v0.1.2-gitpkg-0123456"
  }
}
```
