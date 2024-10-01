---
"@gadgetinc/react": patch
---

- Added a new error thrown in AutoForm when passing in `include/exclude` options alongside child components
- Fixed a bug where AutoForm components with custom children were blocked from sending requests when omitting required fields on from the Gadget model action
