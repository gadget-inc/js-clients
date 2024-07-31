import { renderHook } from "@testing-library/react";
import React, { isValidElement } from "react";
import { useTable } from "../../../src/useTable.js";
import { testApi as api } from "../../apis.js";
import { mockUrqlClient } from "../../testWrappers.js";
import { MockTable } from "../MockTable.js";
import { recordIdInputField } from "../support/shared.js";
import { widgetModelInputFields } from "../support/widgetModel.js";

describe("useTable hook", () => {
  const getUseTableResult = (options?: Parameters<typeof useTable>["1"]) => {
    const { result } = renderHook(
      () => {
        return useTable(api.widget, options);
      },
      {
        wrapper: MockTable(),
      }
    );
    return result;
  };

  it("should return the list of data and field information of a table", () => {
    const result = getUseTableResult();
    loadMockWidgetModelMetadata();
    loadWidgetData();

    expect(result.current[0].rows).toEqual([
      {
        id: "7",
        name: "foo",
        inventoryCount: 1,
        anything: null,
        description: "# foo bar",
        category: ["foo"],
        startsAt: "2024-07-01T01:00:00.000Z",
        isChecked: true,
        metafields: { hello: "world" },
        roles: ["unauthenticated"],
        birthday: "2024-07-01T00:00:00.000Z",
        color: null,
        secretKey: "secret",
        mustBeLongString: "hellllllllllllllllllllllllllllo",
      },
    ]);
    expect( result.current[0].columns ).toEqual([
      {
        field: "id",
        header: "Id",
        relatedField: undefined,
        sortable: false,
        type: "ID",
      },
      {
        field: "name",
        header: "Name",
        relatedField: undefined,
        sortable: true,
        type: "String",
      },
      {
        field: "inventoryCount",
        header: "Inventory count",
        relatedField: undefined,
        sortable: true,
        type: "Number",
      },
      {
        field: "anything",
        header: "Anything",
        relatedField: undefined,
        sortable: true,
        type: "JSON",
      },
      {
        field: "description",
        header: "Description",
        relatedField: undefined,
        sortable: true,
        type: "RichText",
      },
      {
        field: "category",
        header: "Category",
        relatedField: undefined,
        sortable: true,
        type: "Enum",
      },
      {
        field: "startsAt",
        header: "Starts at",
        relatedField: undefined,
        sortable: true,
        type: "DateTime",
      },
      {
        field: "isChecked",
        header: "Is checked",
        relatedField: undefined,
        sortable: true,
        type: "Boolean",
      },
      {
        field: "metafields",
        header: "Metafields",
        relatedField: undefined,
        sortable: true,
        type: "JSON",
      },
      {
        field: "roles",
        header: "Roles",
        relatedField: undefined,
        sortable: false,
        type: "RoleAssignments",
      },
      {
        field: "birthday",
        header: "Birthday",
        relatedField: undefined,
        sortable: true,
        type: "DateTime",
      },
      {
        field: "color",
        header: "Color",
        relatedField: undefined,
        sortable: true,
        type: "Color",
      },
      {
        field: "secretKey",
        header: "Secret key",
        relatedField: undefined,
        sortable: false,
        type: "EncryptedString",
      },
      {
        field: "mustBeLongString",
        header: "Must be long string",
        relatedField: undefined,
        sortable: true,
        type: "String",
      },
    ]);
  });

  describe("columns property", () => {
    it("should only return the specified columns", () => {
      const result = getUseTableResult({
        columns: ["name", "inventoryCount"],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      // The fields inside the `node` should only contain the fields that are specified in the columns property + the id field
      expect(mockUrqlClient.executeQuery.mock.calls[1][0].query.loc.source.body).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                name
                inventoryCount
                __typename
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "widget")
          }
        }"
      `);
      expect(result.current[0].columns?.map((column) => column.field)).toEqual(["name", "inventoryCount"]);
      expect(result.current[0].rows).toMatchInlineSnapshot(`
              [
                {
                  "id": "7",
                  "inventoryCount": 1,
                  "name": "foo",
                },
              ]
          `);
    });

    it("should use default display field if the column string is a relationship field", async () => {
      const result = getUseTableResult({
        columns: ["name", "hasMany", "hasOne", "belongsTo"],
      });
      loadMockWidgetModelMetadataForRelationship();
      loadMockWidgetDataForRelationship();

      expect(mockUrqlClient.executeQuery.mock.calls[1][0].query.loc.source.body).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                name
                hasMany {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
                hasOne {
                  id
                  name
                }
                belongsTo {
                  id
                  email
                }
                __typename
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "widget")
          }
        }"
      `);
      expect(result.current[0].columns?.map((column) => column.field)).toEqual(["name", "hasMany", "hasOne", "belongsTo"]);
      expect(result.current[0].rows).toMatchInlineSnapshot(`
        [
          {
            "belongsTo": {
              "str": "foo",
            },
            "hasMany": {
              "edges": [
                {
                  "node": {
                    "name": "gizmo 9",
                  },
                },
                {
                  "node": {
                    "name": "gizmo 10",
                  },
                },
                {
                  "node": {
                    "name": "gizmo 11",
                  },
                },
              ],
            },
            "hasOne": {
              "name": "gizmo 12",
            },
            "id": undefined,
            "name": "hello",
          },
        ]
      `);
    });

    it("should return the related model field if the column values are relationship fields", async () => {
      const result = getUseTableResult({
        columns: [
          "name",
          { field: "hasMany", relatedField: "name" },
          { field: "hasOne", relatedField: "name" },
          { field: "belongsTo", relatedField: "str" },
        ],
      });
      loadMockWidgetModelMetadataForRelationship();
      loadMockWidgetDataForRelationship();

      // The relationship fields should be expanded to include the related fields
      expect(mockUrqlClient.executeQuery.mock.calls[1][0].query.loc.source.body).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                name
                hasMany {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
                hasOne {
                  id
                  name
                }
                belongsTo {
                  id
                  str
                }
                __typename
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "widget")
          }
        }"
      `);
      expect(result.current[0].columns?.map((column) => column.field)).toEqual(["name", "hasMany", "hasOne", "belongsTo"]);
      expect(result.current[0].rows).toMatchInlineSnapshot(`
        [
          {
            "belongsTo": {
              "str": "foo",
            },
            "hasMany": {
              "edges": [
                {
                  "node": {
                    "name": "gizmo 9",
                  },
                },
                {
                  "node": {
                    "name": "gizmo 10",
                  },
                },
                {
                  "node": {
                    "name": "gizmo 11",
                  },
                },
              ],
            },
            "hasOne": {
              "name": "gizmo 12",
            },
            "id": undefined,
            "name": "hello",
          },
        ]
      `);
    });

    it.each(["password", "hasManyThrough"])("should throw an error if the selected field type is %s", async (fieldType) => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: [`${fieldType}Field`],
        });
        loadMockWidgetModelMetadataForInvalidFields();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe(`Field '${fieldType}Field' cannot be shown in the table`);
    });

    it("should throw an error if the relationship field's type is not a relationship", async () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: [{ field: "name", relatedField: "invalid" }],
        });
        loadMockWidgetModelMetadataForRelationship();
        loadMockWidgetDataForRelationship();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe("Related field 'invalid' does not exist in the related model");
    });

    it("should throw an error if the related field does not exist", async () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: [{ field: "hasOne", relatedField: "invalid" }],
        });
        loadMockWidgetModelMetadataForRelationship();
        loadMockWidgetDataForRelationship();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe("Related field 'invalid' does not exist in the related model");
    });

    it("should throw an error if the relationship field does not exist", async () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: [{ field: "notExist", relatedField: "name" }],
        });
        loadMockWidgetModelMetadataForRelationship();
        loadMockWidgetDataForRelationship();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe("Field 'notExist' does not exist in the model");
    });

    it("should include custom cell columns if specified", async () => {
      const result = getUseTableResult({
        columns: [
          "name",
          {
            name: "Custom column",
            render: (record) => <div>hello {record.name}</div>,
          },
        ],
      });
      loadMockWidgetModelMetadataForRelationship();
      loadMockWidgetDataForRelationship();

      expect(result.current[0].columns).toMatchInlineSnapshot(`
        [
          {
            "field": "name",
            "header": "Name",
            "relatedField": undefined,
            "sortable": true,
            "type": "String",
          },
          {
            "field": "Custom column",
            "header": "Custom column",
            "sortable": false,
            "type": "CustomRenderer",
          },
        ]
      `);
    });
  });

  describe("excludeColumns property", () => {
    it("should throw an error when 'excludeColumns' and 'columns' are both specified", () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: [{ field: "hasOne", relatedField: "invalid" }],
          excludeColumns: ["name"],
        });
        loadMockWidgetModelMetadataForRelationship();
        loadMockWidgetDataForRelationship();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe("Cannot use both 'columns' and 'excludeColumns' options at the same time");
    });

    it("should exclude the specified columns", () => {
      const result = getUseTableResult({
        excludeColumns: ["name", "inventoryCount"],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      // The fields inside the `node` should not contain the fields that are specified in the exclude property
      expect(mockUrqlClient.executeQuery.mock.calls[1][0].query.loc.source.body).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                anything
                description {
                  markdown
                  truncatedHTML
                }
                category
                startsAt
                isChecked
                metafields
                roles {
                  key
                  name
                }
                birthday
                color
                secretKey
                mustBeLongString
                __typename
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "widget")
          }
        }"
      `);

      // The list should not contain "name" and "inventoryCount" because they are excluded
      expect(result.current[0].columns?.map((column) => column.field)).toEqual([
        "id",
        "anything",
        "description",
        "category",
        "startsAt",
        "isChecked",
        "metafields",
        "roles",
        "birthday",
        "color",
        "secretKey",
        "mustBeLongString",
      ]);
      expect(result.current[0].rows).toMatchInlineSnapshot(`
        [
          {
            "anything": null,
            "birthday": "2024-07-01T00:00:00.000Z",
            "category": [
              "foo",
            ],
            "color": null,
            "description": "# foo bar",
            "id": "7",
            "isChecked": true,
            "metafields": {
              "hello": "world",
            },
            "mustBeLongString": "hellllllllllllllllllllllllllllo",
            "roles": [
              "unauthenticated",
            ],
            "secretKey": "secret",
            "startsAt": "2024-07-01T01:00:00.000Z",
          },
        ]
      `);
    });
  });

  describe("custom cell renderer", () => {
    it("should be able to access all fields of a table", () => {
      let recordFromRender: any;

      const result = getUseTableResult({
        columns: [
          "name",
          {
            name: "Custom column",
            render: (record) => {
              recordFromRender = record;
              return <div>some custom stuff</div>;
            },
          },
        ],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      // It should include all model fields in the query
      expect(mockUrqlClient.executeQuery.mock.calls[1][0].query.loc.source.body).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          widgets(after: $after, first: $first, before: $before, last: $last) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                name
                __typename
                anything
                birthday
                category
                color
                createdAt
                description {
                  markdown
                  truncatedHTML
                }
                embedding
                inStock
                inventoryCount
                isChecked
                metafields
                mustBeLongString
                roles {
                  key
                  name
                }
                secretKey
                startsAt
                updatedAt
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "widget")
          }
        }"
      `);

      expect(recordFromRender.name).toBe("foo");
      // "inventoryCount" should be included in the record even though it's not in the columns
      expect(recordFromRender.inventoryCount).toBe(1);
    });
  });
});

const loadMockWidgetModelMetadata = () => {
  mockUrqlClient.executeQuery.pushResponse("GetModelMetadata", {
    stale: false,
    hasNext: false,
    data: {
      gadgetMeta: {
        model: {
          apiIdentifier: "widget",
          namespace: [],
          name: "Widget",
          fields: [recordIdInputField, ...widgetModelInputFields.configuration.fields],
          __typename: "GadgetModel",
        },
        __typename: "GadgetApplicationMeta",
      },
    },
  });
};

const loadWidgetData = () => {
  mockUrqlClient.executeQuery.pushResponse("widgets", {
    stale: false,
    hasNext: false,
    data: {
      widgets: {
        edges: [
          {
            cursor: "eyJpZCI6IjcifQ==",
            node: {
              __typename: "Widget",
              id: "7",
              anything: null,
              birthday: "2024-07-01T00:00:00.000Z",
              category: ["foo"],
              color: null,
              createdAt: "2023-09-07T19:18:50.262Z",
              description: "# foo bar",
              embedding: null,
              inStock: true,
              inventoryCount: 1,
              isChecked: true,
              metafields: { hello: "world" },
              mustBeLongString: "hellllllllllllllllllllllllllllo",
              name: "foo",
              roles: ["unauthenticated"],
              secretKey: "secret",
              gizmos: {
                edges: [
                  {
                    node: {
                      name: "gizmo 9",
                    },
                  },
                  {
                    node: {
                      name: "gizmo 10",
                    },
                  },
                  {
                    node: {
                      name: "gizmo 11",
                    },
                  },
                ],
              },
              startsAt: "2024-07-01T01:00:00.000Z",
              updatedAt: "2023-09-21T17:19:11.197Z",
            },
          },
        ],
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: "eyJpZCI6IjcifQ==",
          endCursor: "eyJpZCI6IjU2In0=",
          __typename: "PageInfo",
        },
      },
    },
  });
};

const loadMockWidgetModelMetadataForRelationship = () => {
  mockUrqlClient.executeQuery.pushResponse("GetModelMetadata", {
    stale: false,
    hasNext: false,
    data: {
      gadgetMeta: {
        model: {
          apiIdentifier: "widget",
          namespace: [],
          name: "Wudget",
          fields: [
            recordIdInputField,
            {
              name: "Name",
              apiIdentifier: "name",
              fieldType: "String",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [
                  {
                    name: "Required",
                    specID: "gadget/validation/required",
                    __typename: "GadgetGenericFieldValidation",
                  },
                ],
              },
            },
            {
              name: "Field that never selected",
              apiIdentifier: "fieldThatNeverSelected",
              fieldType: "String",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [
                  {
                    name: "Required",
                    specID: "gadget/validation/required",
                    __typename: "GadgetGenericFieldValidation",
                  },
                ],
              },
            },
            {
              name: "Has one",
              apiIdentifier: "hasOne",
              fieldType: "HasOne",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasOneConfig",
                fieldType: "HasOne",
                validations: [],
                relatedModel: {
                  key: "DataModel-_autoTableTestRelatedModel",
                  apiIdentifier: "_autoTableTestRelatedModel",
                  namespace: [],
                  defaultDisplayField: {
                    apiIdentifier: "name",
                    fieldType: "String",
                    __typename: "GadgetModelField",
                  },
                  fields: [
                    {
                      name: "Id",
                      apiIdentifier: "id",
                      fieldType: "ID",
                      __typename: "GadgetModelField",
                    },
                    {
                      name: "Name",
                      apiIdentifier: "name",
                      fieldType: "String",
                      __typename: "GadgetModelField",
                    },
                  ],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "belongsToParent",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Has many",
              apiIdentifier: "hasMany",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                relatedModel: {
                  key: "DataModel-_autoTableTestRelatedModel",
                  apiIdentifier: "_autoTableTestRelatedModel",
                  namespace: [],
                  defaultDisplayField: {
                    apiIdentifier: "name",
                    fieldType: "String",
                    __typename: "GadgetModelField",
                  },
                  fields: [
                    {
                      name: "Id",
                      apiIdentifier: "id",
                      fieldType: "ID",
                      __typename: "GadgetModelField",
                    },
                    {
                      name: "Name",
                      apiIdentifier: "name",
                      fieldType: "String",
                      __typename: "GadgetModelField",
                    },
                  ],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "manyBelongsToParent",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Belongs to",
              apiIdentifier: "belongsTo",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "DataModel-widget",
                  apiIdentifier: "widget",
                  namespace: [],
                  defaultDisplayField: {
                    apiIdentifier: "email",
                    fieldType: "Email",
                    __typename: "GadgetModelField",
                  },
                  fields: [
                    {
                      name: "Id",
                      apiIdentifier: "id",
                      fieldType: "ID",
                      __typename: "GadgetModelField",
                    },
                    {
                      name: "Str",
                      apiIdentifier: "str",
                      fieldType: "String",
                      __typename: "GadgetModelField",
                    },
                  ],
                  __typename: "GadgetModel",
                },
              },
            },
          ],
          __typename: "GadgetModel",
        },
        __typename: "GadgetApplicationMeta",
      },
    },
  });
};

const loadMockWidgetDataForRelationship = () => {
  mockUrqlClient.executeQuery.pushResponse("widgets", {
    stale: false,
    hasNext: false,
    data: {
      widgets: {
        edges: [
          {
            cursor: "eyJpZCI6IjcifQ==",
            node: {
              name: "hello",
              fieldThatNeverSelected: "world",
              hasMany: {
                edges: [
                  {
                    node: {
                      name: "gizmo 9",
                    },
                  },
                  {
                    node: {
                      name: "gizmo 10",
                    },
                  },
                  {
                    node: {
                      name: "gizmo 11",
                    },
                  },
                ],
              },
              hasOne: {
                name: "gizmo 12",
              },
              belongsTo: {
                str: "foo",
              },
              startsAt: "2024-07-01T01:00:00.000Z",
              updatedAt: "2023-09-21T17:19:11.197Z",
            },
          },
        ],
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: "eyJpZCI6IjcifQ==",
          endCursor: "eyJpZCI6IjU2In0=",
          __typename: "PageInfo",
        },
      },
    },
  });
};

const loadMockWidgetModelMetadataForInvalidFields = () => {
  mockUrqlClient.executeQuery.pushResponse("GetModelMetadata", {
    stale: false,
    hasNext: false,
    data: {
      gadgetMeta: {
        model: {
          apiIdentifier: "widget",
          namespace: [],
          name: "Wudget",
          fields: [
            recordIdInputField,
            {
              name: "Password field",
              apiIdentifier: "passwordField",
              fieldType: "Password",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Password",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Strong password",
                    specID: "gadget/validation/password",
                  },
                ],
              },
            },
            {
              name: "Has many through field",
              apiIdentifier: "hasManyThroughField",
              fieldType: "HasManyThrough",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "HasManyThrough",
                validations: [],
              },
            },
          ],
          __typename: "GadgetModel",
        },
        __typename: "GadgetApplicationMeta",
      },
    },
  });
};
