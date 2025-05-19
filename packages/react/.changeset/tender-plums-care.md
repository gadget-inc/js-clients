---
"@gadgetinc/react": patch
---

Fix useView hook passing typed variables

The `useView` hook for use with computed views was incorrectly passing type names to the GraphQL backend when executed with named views taking variables. It now passes the typenames correctly.
