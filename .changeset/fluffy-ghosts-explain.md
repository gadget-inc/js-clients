---
"@gadgetinc/client-hooks": patch
---

Respect `select` option in `useMaybeFindOne` hook

Previously, the `select` option was accidentally ignored in the `useMaybeFindOne` hook. It is now respected and will be passed down to the server.
