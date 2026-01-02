# @gadgetinc/client-hooks

## 0.1.6

### Patch Changes

- c499b3c: Respect `select` option in `useMaybeFindOne` hook

  Previously, the `select` option was accidentally ignored in the `useMaybeFindOne` hook. It is now respected and will be passed down to the server.

## 0.1.4

### Patch Changes

- Fix lazy client hook registration bug

  Version 0.23 of the @gadgetinc/react package had a bug where if one of the hooks was imported dynamically, after the main body of the package had been imported and setup, the lazy hooks would error with an error like:

  ```
  You are attempting to use the useGlobalAction hook, but you are not calling it from a component that is wrapped in a Gadget <Provider/> component. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.
  ```

  This error has been corrected, and now dynamically imported hooks properly register when the dynamic import is processed.
