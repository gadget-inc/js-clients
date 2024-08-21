# @gadgetinc/react

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
