import { renderHook } from "@testing-library/react";
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
    expect(
      result.current[0].columns?.map((column) => {
        const { getValue: _getValue, ...rest } = column;
        return rest;
      })
    ).toEqual([
      {
        apiIdentifier: "name",
        fieldType: "String",
        name: "Name",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "inventoryCount",
        fieldType: "Number",
        name: "Inventory count",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "anything",
        fieldType: "JSON",
        name: "Anything",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "description",
        fieldType: "RichText",
        name: "Description",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "category",
        fieldType: "Enum",
        name: "Category",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "startsAt",
        fieldType: "DateTime",
        name: "Starts at",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "isChecked",
        fieldType: "Boolean",
        name: "Is checked",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "metafields",
        fieldType: "JSON",
        name: "Metafields",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "roles",
        fieldType: "RoleAssignments",
        name: "Roles",
        relatedField: undefined,
        sortable: false,
      },
      {
        apiIdentifier: "birthday",
        fieldType: "DateTime",
        name: "Birthday",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "color",
        fieldType: "Color",
        name: "Color",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "secretKey",
        fieldType: "EncryptedString",
        name: "Secret key",
        relatedField: undefined,
        sortable: false,
      },
      {
        apiIdentifier: "mustBeLongString",
        fieldType: "String",
        name: "Must be long string",
        relatedField: undefined,
        sortable: true,
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
                      name
                      inventoryCount
                      id
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
      expect(result.current[0].columns?.map((column) => column.apiIdentifier)).toEqual(["name", "inventoryCount"]);
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
                name
                hasMany {
                  edges {
                    node {
                      name
                    }
                  }
                }
                hasOne {
                  name
                }
                belongsTo {
                  str
                }
                id
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
      expect(result.current[0].columns?.map((column) => column.apiIdentifier)).toEqual(["name", "hasMany", "hasOne", "belongsTo"]);
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

      expect(error!.message).toBe("Field 'name' is not a relationship field");
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

      expect(error!.message).toBe("Related field 'invalid' not found in metadata");
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

      expect(error!.message).toBe("Field 'notExist' not found in metadata");
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
