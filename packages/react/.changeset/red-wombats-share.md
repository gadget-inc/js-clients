---
"@gadgetinc/react": patch
---

Fixed a bug in `<AutoForm/>` where the `defaultValues` prop values was not included in the submission request if the defaulted field was excluded with the `include` or `exclude` properties.
