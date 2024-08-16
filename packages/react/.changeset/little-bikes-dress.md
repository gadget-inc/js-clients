---
"@gadgetinc/react": minor
---

# Added support for `upsert` actions in AutoForm.

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
