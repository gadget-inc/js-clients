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
    expect(
      result.current[0].columns?.map((column) => {
        const { getValue: _getValue, ...rest } = column;
        return rest;
      })
    ).toEqual([
      {
        apiIdentifier: "id",
        fieldType: "ID",
        isCustomCell: false,
        name: "Id",
        relatedField: undefined,
        sortable: false,
      },
      {
        apiIdentifier: "name",
        fieldType: "String",
        isCustomCell: false,
        name: "Name",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "inventoryCount",
        fieldType: "Number",
        isCustomCell: false,
        name: "Inventory count",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "anything",
        fieldType: "JSON",
        isCustomCell: false,
        name: "Anything",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "description",
        fieldType: "RichText",
        isCustomCell: false,
        name: "Description",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "category",
        fieldType: "Enum",
        isCustomCell: false,
        name: "Category",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "startsAt",
        fieldType: "DateTime",
        isCustomCell: false,
        name: "Starts at",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "isChecked",
        fieldType: "Boolean",
        isCustomCell: false,
        name: "Is checked",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "metafields",
        fieldType: "JSON",
        isCustomCell: false,
        name: "Metafields",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "roles",
        fieldType: "RoleAssignments",
        isCustomCell: false,
        name: "Roles",
        relatedField: undefined,
        sortable: false,
      },
      {
        apiIdentifier: "birthday",
        fieldType: "DateTime",
        isCustomCell: false,
        name: "Birthday",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "color",
        fieldType: "Color",
        isCustomCell: false,
        name: "Color",
        relatedField: undefined,
        sortable: true,
      },
      {
        apiIdentifier: "secretKey",
        fieldType: "EncryptedString",
        isCustomCell: false,
        name: "Secret key",
        relatedField: undefined,
        sortable: false,
      },
      {
        apiIdentifier: "mustBeLongString",
        fieldType: "String",
        isCustomCell: false,
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

    it("should return the related model field if the column values are relationship fields", async () => {
      const result = getUseTableResult({
        columns: [
          "name",
          "hasMany.edges.node.name",
          "hasOne.name",
          {
            field: "belongsTo.str",
          },
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

    it("should throw an error if the relationship field dot notation is a has many style but the field type is has one", async () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: [
            "name",
            "hasOne.edges.node.name",
            {
              field: "belongsTo.str",
            },
          ],
        });
        loadMockWidgetModelMetadataForRelationship();
        loadMockWidgetDataForRelationship();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe(
        "Field 'hasOne.edges.node.name' is a has one or belongs to relationship, but the column path expects the field to be a has many relationship"
      );
    });

    it("should throw an error if the relationship field dot notation is a has one style but the field type is has many", async () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: [
            "name",
            "hasMany.name",
            {
              field: "belongsTo.str",
            },
          ],
        });
        loadMockWidgetModelMetadataForRelationship();
        loadMockWidgetDataForRelationship();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe(
        "Field 'hasMany.name' is a has many relationship, but the column path expects the field to be a has one or belongs to relationship"
      );
    });

    it("should throw an error if the relationship field's type is not a relationship", async () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: ["name.invalid"],
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
          columns: ["hasOne.invalid"],
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
          columns: ["notExist.name"],
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
            header: "Custom column",
            render: (props) => <div>hello {props.record.name}</div>,
          },
        ],
      });
      loadMockWidgetModelMetadataForRelationship();
      loadMockWidgetDataForRelationship();

      expect(
        result.current[0].columns?.map((column) => {
          const { getValue: _getValue, ...rest } = column;
          return rest;
        })
      ).toMatchInlineSnapshot(`
        [
          {
            "apiIdentifier": "name",
            "fieldType": "String",
            "isCustomCell": false,
            "name": "Name",
            "relatedField": undefined,
            "sortable": true,
          },
          {
            "apiIdentifier": "Custom column",
            "isCustomCell": true,
            "name": "Custom column",
            "sortable": false,
          },
        ]
      `);

      const customColumnGetValueResult = result.current[0].columns![1].getValue({ name: "foo" });
      // Expect the getValue result to be a valid React element
      expect(isValidElement(customColumnGetValueResult)).toBe(true);
    });
  });

  describe("excludeColumns property", () => {
    it("should throw an error when 'excludeColumns' and 'columns' are both specified", () => {
      let error: Error | undefined;
      try {
        getUseTableResult({
          columns: ["hasOne.invalid"],
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
      expect(result.current[0].columns?.map((column) => column.apiIdentifier)).toEqual([
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
            header: "Custom column",
            render: (props) => {
              recordFromRender = props.record;
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
