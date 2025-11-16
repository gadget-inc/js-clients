---
"@gadgetinc/client-hooks": patch
"@gadgetinc/preact": patch
"@gadgetinc/react": patch
---

Fix lazy client hook registration bug

Version 0.23 of the @gadgetinc/react package had a bug where if one of the hooks was imported dynamically, after the main body of the package had been imported and setup, the lazy hooks would error with an error like:

```
You are attempting to use the useGlobalAction hook, but you are not calling it from a component that is wrapped in a Gadget <Provider/> component. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.
```

This error has been corrected, and now dynamically imported hooks properly register when the dynamic import is processed.
