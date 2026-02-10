# @gadgetinc/react

## 0.23.4

### Patch Changes

- Fix lazy client hook registration bug

  Version 0.23 of the @gadgetinc/react package had a bug where if one of the hooks was imported dynamically, after the main body of the package had been imported and setup, the lazy hooks would error with an error like:

  ```
  You are attempting to use the useGlobalAction hook, but you are not calling it from a component that is wrapped in a Gadget <Provider/> component. Please ensure you are wrapping this hook with the <Provider/> component from either @gadgetinc/react or @gadgetinc/preact.
  ```

  This error has been corrected, and now dynamically imported hooks properly register when the dynamic import is processed.

- Updated dependencies
  - @gadgetinc/client-hooks@0.1.4

## 0.22.2

### Patch Changes

- fixed a bug with `useSignOut` where the redirect after signing out would occasionally break

## 0.21.4

### Patch Changes

- Updated dependencies
  - @gadgetinc/api-client-core@0.15.45

## 0.21.3

### Patch Changes

- Updated dependencies
  - @gadgetinc/api-client-core@0.15.44

## 0.21.2

### Patch Changes

- Ensure live queries correctly re-execute when input variables change

  Previously, mounted live queries in React would erroneously not re-connect to the server when their input variables changed, like the filter, sort, or selection. The websocket would confusingly stay open, but the client side code listening for changes would stop listening and not restart. This has now been fixed and live queries will correctly re-establish a new websocket connection with new variables when the variables change.

- Fix useView hook passing typed variables

  The `useView` hook for use with computed views was incorrectly passing type names to the GraphQL backend when executed with named views taking variables. It now passes the typenames correctly.

- Updated dependencies
  - @gadgetinc/api-client-core@0.15.43

## 0.21.1

### Patch Changes

- Fix useView hook passing typed variables

  The `useView` hook for use with computed views was incorrectly passing type names to the GraphQL backend when executed with named views taking variables. It now passes the typenames correctly.

## 0.21.0

### Minor Changes

- Add `useView` hook for executing computed views

  This adds a new React hook for invoking computed views defined using backend `.gelly` files.

### Patch Changes

- - Export `AutoHasManyThroughInputProps` to ensure portable TypeScript types.

  This fixes a bug introduced in 0.20.2 where the `AutoHasManyThroughInputProps` type was used but not exported, causing errors like:

  ```
  The inferred type of 'AutoHasManyThroughForm' cannot be named without a reference to '../../node_modules/@gadgetinc/react/dist/esm/auto/interfaces/AutoRelationshipInputProps'. This is likely not portable. A type annotation is necessary
  ```

  from TypeScript. This release fixes that by exporting it.

- - Fixed a bug with AutoHasManyThroughForm where input validations were not working, causing type errors to occur on tha API for non-string fields
- - Added `allowMultipleSelections` prop to `AutoHasManyThroughForm` to control if sibling records can be linked multiple times through different join model records
- Updated dependencies
  - @gadgetinc/api-client-core@0.15.42

## 0.20.2

### Patch Changes

- - Fixed a bug with AutoHasManyThroughForm where input validations were not working, causing type errors to occur on tha API for non-string fields
- - Added `allowMultipleSelections` prop to `AutoHasManyThroughForm` to control if sibling records can be linked multiple times through different join model records

## 0.20.1

- Added `loadingSkeleton` prop to AutoForm to override the default skeleton component.
- Added `loadingSkeleton` prop to AutoTable to override the default loading skeleton component
- Added optional `placeholder` prop to override the now blank default. Previously, the placeholder was always "Search"
  - Affected components
    - `AutoBelongsToInput`
    - `AutoHasOneInput`
    - `AutoHasManyInput`
    - `AutoHasManyThroughInput`
    - `AutoEnumInput`
    - `AutoRolesInput`
- Fixed issue with Polaris `AutoEmailInput`, `AutoStringInput`, and `AutoUrlInput` prop types where the props of the underlying components were not re-exported

## 0.20.0

- NEW - `shadcn` design system is now available for AutoComponents
  - Available in new web apps created in Gadget https://docs.gadget.dev/guides/frontend/autocomponents/shadcn#shadcn-autocomponents
  - Base components https://ui.shadcn.com/
- (Breaking change) - Removed `onChange` and `value` props from field type specific AutoInput components to avoid bugs where inputs are disconnected from the overall AutoForm state.
- Added new optional `afterChange` prop to many field type specific `AutoInput` components to run a callback after the input value is changed
- Added descriptions for AutoComponents

## 0.19.0

### Patch Changes

- Added new relationship form components to allow users to create, update, and delete related records through the relationship fields of an action's model.
  - New components:
    - `AutoHasOneForm`
    - `AutoBelongsToForm`
    - `AutoHasManyForm`
    - `AutoHasManyThroughForm`
  - See more - https://docs.gadget.dev/reference/react/auto
- Added new `recordFilter` prop to `AutoHasManyInput` and `AutoBelongsToInput` to allow the related model options in the dropdown to be filtered
- Added `findResult` to the return value of `useActionForm` for direct access to the existing record found when using the `findBy` prop
- Added `select` prop to `useAutoForm` and `AutoForm` to allow for conditional selection of fields on the existing record found when using the `findBy` prop
- **BREAKING CHANGE** - Added error for using dot.path.fields in the `field` prop of AutoInputs to traverse record relationships. This functionality was inconsistent and is now better handled by the new relationship form components
- **BREAKING CHANGE** - In AutoForm relationship input components, the callback signature of `optionLabel` has been changed
  - Previously
    - `(record: Record<string, any> ) => ReactNode`
  - Now
    - `(props: { record: Record<string, any> }) => ReactNode`
  - Affected components:
    - `AutoBelongsToInput`
    - `AutoHasManyInput`
  - How to migrate:
    - Update your reference in the `optionLabel` callback argument to be `{ record }` instead of `record`
- **BREAKING CHANGE** - Added validations to field type specific auto inputs to ensure that the given `field` prop corresponds to the correct Gadget field type.
  - Affected components
    - `AutoRolesInput`
    - `AutoFileInput`
    - `AutoDateTimePicker`
    - `AutoJSONInput`
    - `AutoRichTextInput`
    - `AutoPasswordInput`
    - `AutoBooleanInput`
    - `AutoEnumInput`
    - Relationships
      - `AutoBelongsToInput`
      - `AutoHasManyInput`
  - Effect
    - If the given field API id corresponds to a field that is not of the expected type, the auto input will throw an error
  - FIX
    - Ensure that the correct field type specific auto input is used for the given field.

## 0.18.7

### Patch Changes

- Bump `@gadgetinc/api-client-core` to v0.15.38

## 0.18.6

### Patch Changes

- Fixed bug with `useActionForm` hook where it failed to properly update or delete records in `hasMany` fields if the IDs have more than 2 digits

## 0.18.5

### Patch Changes

- Fixed bug with AutoForm where the action api identifiers could not be properly determined in Gadget framework version 1.0.0
- Updated AutoBooleanInput to default to a `false` value when the field has a `required` validation
- Added `searchValue` property to `AutoTable` component to control the table's search value
- Added an error in AutoTable for adding `sortable:true` to field columns that are not sortable
- Updated `AutoEnumInput` props type to no longer include `allowMultiple` as it could not override the configuration of the corresponding Gadget field
- fixed bug with double delete entries useActionForm graphql calls with doubly nested children

## 0.18.1

### Patch Changes

- Fixed bug with loading selected related model records in AutoForm HasMany inputs in framework version 1.3

## 0.18.0

### Patch Changes

- Removed `AutoTextInput` from the package export because this component is made redundant by the Gadget field specific inputs (Breaking change)
- Removed `allowMultiple` from `AutoFileInput` input props since multiple file fields are not supported (Breaking change)
- Updated `AutoForm` HasManyThrough fields so that no inputs are shown. They would previously show a hasMany field for the join model, which corresponds to the API, but was confusing in an `AutoForm` context
- Updated `AutoForm` enum inputs such that their search value does not get pre-populated
- Fixed the `findBy` object parameter for the `AutoForm` component such that related records are correctly shown and forms can be properly submitted
- Fixed bug with `AutoForm` belongsTo field inputs occasionally not showing their related record upon component re-render
- Made `AutoRichTextInput` available in `@gadgetinc/react/auto/polaris` to be used in `AutoForm` components
- Added required indicator and required error message to date/time, belongsTo, and JSON fields in <AutoForm/> contexts
- Added a new error thrown in `AutoForm` when passing in `include/exclude` options alongside child components
- Fixed a bug where `AutoForm` components with custom children were blocked from sending requests when omitting required fields on from the Gadget model action
- Updated `AutoButton` such that the loading state is dependant only on fetching the action result instead of also being dependant on fetching action metadata
- Added `HasManyThrough` field support to AutoTable column selection
- Updated `AutoTable` bulk actions with custom callbacks to de-select all records to match the behavior of Gadget bulk actions
- Added proper Gadget record type to `AutoTable` onClick prop callback arguments
- Added custom style support to custom column controls in `AutoTable`

  ```jsx
  const MyAutoTable = () => {
    const columns = [
      {
        header: "Custom header",
        field: "fieldApiIdentifier",
        style: { backgroundColor: "red" },
      },
      {
        header: "Custom cell renderer",
        render: ({ record }) => <div>{record.name}</div>,
        style: { backgroundColor: "blue" },
      },
    ];

    return <AutoTable model={api.myModel} columns={columns} />;
  };
  ```

## 0.17.2

### Patch Changes

- Removed deprecated Polaris `Frame` usage from AutoTable
- Fixed bug in `AutoForm` where dynamically changing findBy object props did not cause the form to re-render

## 0.17.1

### Patch Changes

- Updated `AutoTable` to automatically deselect records and close after running Gadget bulk actions
- Updated `AutoInput` to accept an optional `label?: string` input
- Fixed bug with AutoForm include/exclude system which prevented submission due to validations getting applied to hidden fields
- fix(useActionForm): fixes issue where relationship fields with readonly children were sometimes updated

## 0.17.0

### Patch Changes

- Updated the `select` property in useTable and AutoTable to completely override the default selection instead of being combined with the default selection (Breaking change)
- Updated AutoForm to throw an error when given an invalid action
- Updated AutoSubmit to have a loading state that is controlled by the useAutoFormMetadata hook
- Updated the `AutoTable` `onClick` callback prop to accept the full `GadgetRecord` corresponding to the row as well as the `TableRow` itself
- Bug: Fixed an issue with AutoTable where custom cell renderers with duplicate headers would have duplicate columns content
- Bug: Fixed bug in Polaris AutoTable where the `createNewView` button would erroneously appear on certain parent element widths
- Bug: Fixed a bug in `<AutoForm/>` where the `defaultValues` prop values was not included in the submission request if the defaulted field was excluded with the `include` or `exclude` properties.

## 0.16.4

### Patch Changes

- Bug: Displaying HasMany relationship in AutoTable when some values are null throws an error
- Removed dependency on date-fns to reduce bundle size

## 0.16.3

### Patch Changes

- Updated PolarisAutoSubmit to expose Polaris button props

  Example - Using props from `https://polaris.shopify.com/components/actions/button#props`

  ```jsx
  import { AutoForm, AutoSubmit } from "@gadgetinc/react/auto/polaris";

  const Component = () => {
    return (
      <AutoForm>
        <AutoSubmit size="micro" textAlign="left" tone="critical" variant="plain" />
      </AutoForm>
    );
  };
  ```

- # Added support for `upsert` actions in AutoForm.
  - Models that have `create` and `update` actions get the `upsert` meta-action
    - Upsert actions update records with given ID, and create a new record if the record does not exist
    - The ID field is optional and omitting it will run the create action
  - Upsert actions can be used in `AutoForm` components in the same way that other actions are used
  - Usage
    - With a given `findBy` value, the `upsert` action will run on the given specified ID value
      - ```jsx
        <AutoForm action={api.someModel.upsert} findBy="1" />
        ```
    - Without a given `findBy` value, an ID input field will appear in the form
      - ```jsx
        <AutoForm action={api.someModel.upsert} />
        ```
    - Just like other actions, the content of the form can be customized
      - ```jsx
        <AutoForm action={api.someModel.upsert}>
          <AutoInput field="id" />
          <AutoInput field="name" />
          <AutoSubmit />
        </AutoForm>
        ```

- Updated AutoForm such that required fields can be excluded
- Updated `AutoTable` such that records are only selectable when there is at least 1 available bulk action.
- Added `useTableContext` hook which provides access to all table context data within a custom table cell
- Added error when trying to use AutoTable with action that does not have an api trigger
