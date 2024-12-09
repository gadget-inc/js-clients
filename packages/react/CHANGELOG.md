# @gadgetinc/react

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
