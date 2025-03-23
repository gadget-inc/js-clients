---
"@gadgetinc/react": patch
---

(Breaking change) - Removed `onChange` and `value` props from field type specific AutoInput components to avoid bugs where inputs are disconnected from the overall AutoForm state.
Added new optional `afterChange` prop to many field type specific `AutoInput` components to run a callback after the input value is changed
