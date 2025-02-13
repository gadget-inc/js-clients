---
"@gadgetinc/react": patch
---

- BREAKING CHANGE - In AutoForm relationship input components, the callback signature of `optionLabel` has been changed
  - Previously
    - `(record: Record<string, any> ) => ReactNode`
  - Now
    - `(props: { record: Record<string, any> }) => ReactNode`
  - Affected components:
    - `AutoBelongsToInput`
    - `AutoHasManyInput`
  - How to migrate:
    - Update your reference in the `optionLabel` callback argument to be `{ record }` instead of `record`
