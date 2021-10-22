# Developing a Gadget client

When developing a Gadget client, or the core, it is helpful to be able to have another project reference your local version. There are two
options one can do so:

## Option 1: yarn link

You can use [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link) so that yarn installs symbolic links in your `node_modules` to the
local directory. This means changes should be immediately available. You only need two steps:

1. `yarn link` in the appropriate package's directory, so that yarn understands which directory is associated with a given package.
2. `yarn link <package>` in the other project using the client you're working on, to set up the symbolic link.

After that, everything should be working!

## Option 2: gitpkg

[`gitpkg`](https://github.com/ramasilveyra/gitpkg) is a way to publish an NPM-compatible tarball to a git repository. First, run

```
# if able to write to `gadget-inc/js-clients` repo
yarn prerelease

# to an arbitrary repo
yarn run gitpkg publish --registry git@mygit.server:org/private-registry.git
```

Once you've released a package, you can add a resolution in your other project's `package.json`:

```json
{
  "dependencies": {
    "@gadgetinc/react": "0.1.2"
  },
  "resolutions": {
    "@gadgetinc/react": "https://codeload.github.com/gadget-inc/js-clients/tar.gz/@gadgetinc/react-v0.1.2-gitpkg-0123456"
  }
}
```
