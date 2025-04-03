---
"@gadgetinc/react": patch
---

- Added optional `placeholder` prop to override the now blank default. Previously, the placeholder was always "Search"
  - Affected components
    - `AutoBelongsToInput`
    - `AutoHasOneInput`
    - `AutoHasManyInput`
    - `AutoHasManyThroughInput`
    - `AutoEnumInput`
    - `AutoRolesInput`
- Fixed issue with Polaris `AutoEmailInput`, `AutoStringInput`, and `AutoUrlInput` prop types where the props of the underlying components were not re-exported
