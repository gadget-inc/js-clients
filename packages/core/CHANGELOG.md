# @gadgetinc/core

## 0.15.1

### Patch Changes

- Allow priority to be specified in any case

  Previously, background action priority had to be specified in SCREAMING_CASE, like `priority: "HIGH"`. Now, background action priority can be specified in lowercase as well, like `priority: "high"`, remaining consistent with other aspects of the Gadget framework.

- Remove accidental dependency on tslib

  `@gadgetinc/core` previously had an unlisted runtime dependency on `tslib`, the TypeScript external helpers library. This dependency has been removed.
