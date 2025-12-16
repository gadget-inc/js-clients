---
"@gadgetinc/core": patch
---

Remove accidental dependency on tslib

`@gadgetinc/core` previously had an unlisted runtime dependency on `tslib`, the TypeScript external helpers library. This dependency has been removed.
