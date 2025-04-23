---
"@gadgetinc/react-shopify-app-bridge": patch
---

Fix `<Provider/>` crash when booting in mock preview with out of date OAuth scopes

Previously, the react `<Provider/>` would error on first render when rendering in a Shopify admin that met the following conditions:

- using the Gadget Embed Preview feature to view the application within the Gadget editor
- using Shopify Managed Installation mode where Shopify implements the OAuth scope granting process
- on a shop that had previously installed the Gadget application, but with out of date scopes.

Now, the provider correctly boots up, and the error from the missing scopes will be propagated using the normal mechanisms.
