---
"@gadgetinc/api-client-core": patch
"@gadgetinc/react": patch
---

Ensure live queries correctly re-execute when input variables change

Previously, mounted live queries in React would erroneously not re-connect to the server when their input variables changed, like the filter, sort, or selection. The websocket would confusingly stay open, but the client side code listening for changes would stop listening and not restart. This has now been fixed and live queries will correctly re-establish a new websocket connection with new variables when the variables change.
