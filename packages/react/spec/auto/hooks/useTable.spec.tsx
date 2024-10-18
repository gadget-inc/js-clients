import { render, renderHook } from "@testing-library/react";
import React from "react";
import { useAction } from "../../../src/useAction.js";
import { useTable } from "../../../src/useTable.js";
import { testApi as api } from "../../apis.js";
import { mockUrqlClient } from "../../testWrappers.js";
import { MockTable } from "../MockTable.js";
import { PolarisMockedProviders } from "../inputs/PolarisMockedProviders.js";
import { recordIdInputField } from "../support/shared.js";
import { widgetModelInputFields } from "../support/widgetModel.js";

describe("useTable hook", () => {
  let timesUsedCryptoRandomUUID = 0;
  const uuids: string[] = [];

  const shimCryptoRandomUUID = () => {
    Object.defineProperty(globalThis, "crypto", {
      value: {
        randomUUID: () => {
          timesUsedCryptoRandomUUID++;
          const mostRecentCryptoRandomUUID = `000-000-000-000-${timesUsedCryptoRandomUUID}`;
          uuids.push(mostRecentCryptoRandomUUID);
          return mostRecentCryptoRandomUUID;
        },
      },
    });
  };

  beforeEach(() => {
    shimCryptoRandomUUID();
  });

  const getUseTableResult = (options?: Parameters<typeof useTable>["1"], customDefaultSelection?: Record<string, any>) => {
    const { result } = renderHook(
      () => {
        return useTable(
          customDefaultSelection
            ? ({
                ...api.widget,
                findMany: {
                  ...api.widget.findMany,
                  defaultSelection: customDefaultSelection,
                },
              } as any)
            : api.widget,
          options
        );
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
    expect(result.current[0].columns).toMatchInlineSnapshot(`
      [
        {
          "field": "id",
          "header": "Id",
          "identifier": "id",
          "sortable": false,
          "style": undefined,
          "type": "ID",
        },
        {
          "field": "name",
          "header": "Name",
          "identifier": "name",
          "sortable": true,
          "style": undefined,
          "type": "String",
        },
        {
          "field": "inventoryCount",
          "header": "Inventory count",
          "identifier": "inventoryCount",
          "sortable": true,
          "style": undefined,
          "type": "Number",
        },
        {
          "field": "anything",
          "header": "Anything",
          "identifier": "anything",
          "sortable": true,
          "style": undefined,
          "type": "JSON",
        },
        {
          "field": "description",
          "header": "Description",
          "identifier": "description",
          "sortable": true,
          "style": undefined,
          "type": "RichText",
        },
        {
          "field": "category",
          "header": "Category",
          "identifier": "category",
          "sortable": true,
          "style": undefined,
          "type": "Enum",
        },
        {
          "field": "startsAt",
          "header": "Starts at",
          "identifier": "startsAt",
          "includeTime": undefined,
          "sortable": true,
          "style": undefined,
          "type": "DateTime",
        },
        {
          "field": "isChecked",
          "header": "Is checked",
          "identifier": "isChecked",
          "sortable": true,
          "style": undefined,
          "type": "Boolean",
        },
        {
          "field": "metafields",
          "header": "Metafields",
          "identifier": "metafields",
          "sortable": true,
          "style": undefined,
          "type": "JSON",
        },
        {
          "field": "roles",
          "header": "Roles",
          "identifier": "roles",
          "sortable": false,
          "style": undefined,
          "type": "RoleAssignments",
        },
        {
          "field": "birthday",
          "header": "Birthday",
          "identifier": "birthday",
          "includeTime": undefined,
          "sortable": true,
          "style": undefined,
          "type": "DateTime",
        },
        {
          "field": "color",
          "header": "Color",
          "identifier": "color",
          "sortable": true,
          "style": undefined,
          "type": "Color",
        },
        {
          "field": "secretKey",
          "header": "Secret key",
          "identifier": "secretKey",
          "sortable": false,
          "style": undefined,
          "type": "EncryptedString",
        },
        {
          "field": "mustBeLongString",
          "header": "Must be long string",
          "identifier": "mustBeLongString",
          "sortable": true,
          "style": undefined,
          "type": "String",
        },
      ]
    `);
  });

  describe("no columns property", () => {
    it("should use the list from the default selection", () => {
      getUseTableResult(
        {},
        {
          name: true,
          inventoryCount: true,
        } // Assume that the default selection is only name and inventoryCount to simulate the case where some of the fields are not publicly accessible or are not selected by default
      );
      loadMockWidgetModelMetadata();
      loadWidgetData();

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
    });
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
        columns: ["name", "hasMany", "hasOne", "belongsTo", "baseModelHmtField"],
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
                baseModelHmtField {
                  edges {
                    node {
                      id
                      siblingName
                    }
                  }
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
      expect(result.current[0].columns?.map((column) => column.field)).toEqual([
        "name",
        "hasMany",
        "hasOne",
        "belongsTo",
        "baseModelHmtField",
      ]);
      expect(result.current[0].rows).toMatchInlineSnapshot(`
        [
          {
            "baseModelHmtField": [
              "sibling 1",
              "sibling 2",
            ],
            "belongsTo": "foo",
            "hasMany": [
              "gizmo 9",
              "gizmo 10",
              "gizmo 11",
            ],
            "hasOne": "gizmo 12",
            "id": undefined,
            "name": "hello",
          },
        ]
      `);
    });

    it("should return the related model field if the column values are relationship fields", async () => {
      const result = getUseTableResult({
        columns: ["name", "hasMany.edges.node.name", "hasOne.name", "belongsTo.str", "baseModelHmtField.edges.node.id"],
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
                baseModelHmtField {
                  edges {
                    node {
                      id
                    }
                  }
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
      expect(result.current[0].columns?.map((column) => column.field)).toEqual([
        "name",
        "hasMany.edges.node.name",
        "hasOne.name",
        "belongsTo.str",
        "baseModelHmtField.edges.node.id",
      ]);
      expect(result.current[0].rows).toMatchInlineSnapshot(`
        [
          {
            "baseModelHmtField.edges.node.id": [
              "1",
              "2",
            ],
            "belongsTo.str": "foo",
            "hasMany.edges.node.name": [
              "gizmo 9",
              "gizmo 10",
              "gizmo 11",
            ],
            "hasOne.name": "gizmo 12",
            "id": undefined,
            "name": "hello",
          },
        ]
      `);
    });

    it.each(["password"])("should throw an error if the selected field type is %s", async (fieldType) => {
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
          columns: ["name.invalid"],
        });
        loadMockWidgetModelMetadataForRelationship();
        loadMockWidgetDataForRelationship();
      } catch (err) {
        error = err as Error;
      }

      expect(error!.message).toBe("Field 'name.invalid' does not exist in the model");
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

      expect(error!.message).toBe("Field 'invalid' does not exist in the related model");
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
            render: ({ record }) => <div>hello {record.name}</div>,
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
            "identifier": "name",
            "sortable": true,
            "style": undefined,
            "type": "String",
          },
          {
            "field": "Custom column",
            "header": "Custom column",
            "identifier": "000-000-000-000-1",
            "render": [Function],
            "sortable": false,
            "style": undefined,
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
    // This test makes sure that the custom cell renderer is a valid React component by trying to render it.
    // If it is not a valid React component, it will throw an error.
    it("should be able to pass a JSX element with a hook inside", () => {
      let error;

      try {
        const Cell = () => {
          useAction(api.widget.update);
          return <div>some custom stuff</div>;
        };

        const result = getUseTableResult({
          columns: [
            "name",
            {
              header: "Custom column",
              render: Cell,
            },
          ],
        });
        loadMockWidgetModelMetadata();
        loadWidgetData();

        render(<>{result.current[0].rows?.[0]?.["Custom column"]}</>, {
          wrapper: PolarisMockedProviders,
        });
      } catch (err) {
        error = err;
      }

      expect(error).toBeUndefined();
    });

    it("should be able to access all fields of a table", () => {
      let recordFromRender: any;

      const result = getUseTableResult({
        columns: [
          "name",
          {
            header: "Custom column",
            render: ({ record }) => {
              recordFromRender = record;
              return <div>some custom stuff</div>;
            },
          },
        ],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      // Trigger a render to get the record
      const customCellRenderColumnResultKey = Object.keys(result.current[0].rows?.[0] ?? {}).find((key) => uuids.includes(key))!;
      expect(customCellRenderColumnResultKey).toBeDefined();
      render(<>{result.current[0].rows?.[0]?.[customCellRenderColumnResultKey]}</>);

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

    it("should be able to access all fields of a table with duplicate custom cell headers", () => {
      let recordFromRender: any;

      const result = getUseTableResult({
        columns: [
          "name",
          {
            header: "Custom column",
            render: ({ record }) => {
              recordFromRender = record;
              return <div>some custom stuff</div>;
            },
          },
          {
            header: "Custom column",
            render: ({ record }) => {
              recordFromRender = record;
              return <div>some different stuff</div>;
            },
          },
        ],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      const columns = result.current[0].rows?.[0] ?? {};
      const columnKeys = Object.keys(columns);
      expect(columnKeys).toMatchInlineSnapshot(`
        [
          "id",
          "000-000-000-000-8",
          "000-000-000-000-9",
          "name",
        ]
      `);

      const customColumn1Result = render(<>{result.current[0].rows?.[0]?.[columnKeys[1]]}</>);
      expect(customColumn1Result.container.textContent).toBe("some custom stuff");

      const customColumn2Result = render(<>{result.current[0].rows?.[0]?.[columnKeys[2]]}</>);
      expect(customColumn2Result.container.textContent).toBe("some different stuff");
    });
  });

  describe("select property", () => {
    it("should completely override the default selection on relationship fields", () => {
      const result = getUseTableResult({
        select: {
          gizmos: {
            edges: {
              node: {
                name: true,
              },
            },
          },
        },
        columns: ["name", "inventoryCount"],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      // The "gizmos" field should be included in the query even though it's not in the columns
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
                gizmos {
                  edges {
                    node {
                      name
                    }
                  }
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
    });

    it("should completely override the default selection on simple fields", () => {
      const result = getUseTableResult({
        select: {
          gizmos: {
            id: true,
          },
        },
        columns: ["name", "inventoryCount"],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      // The "gizmos" field should be included in the query even though it's not in the columns
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
                gizmos {
                  id
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
    });

    it("should completely override the default selection to select nothing", () => {
      const result = getUseTableResult({
        select: {},
        columns: ["name", "inventoryCount"],
      });
      loadMockWidgetModelMetadata();
      loadWidgetData();

      // The "gizmos" field should be included in the query even though it's not in the columns
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
    });
  });
});

const loadMockWidgetModelMetadata = () => {
  mockUrqlClient.executeQuery.pushResponse("GetModelMetadata", {
    stale: false,
    hasNext: false,
    data: {
      gadgetMeta: {
        modelAndRelatedModels: [
          {
            name: "Widget",
            apiIdentifier: "widget",
            fields: [recordIdInputField, ...widgetModelInputFields.configuration.fields],
            __typename: "GadgetModel",
          },
        ],
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
        modelAndRelatedModels: [
          {
            key: "DataModel-wudget",
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
                    apiIdentifier: "widgetOther",
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
                      {
                        name: "Email",
                        apiIdentifier: "email",
                        fieldType: "Email",
                        __typename: "GadgetModelField",
                      },
                    ],
                    __typename: "GadgetModel",
                  },
                },
              },
              {
                name: "Base model hmt field",
                apiIdentifier: "baseModelHmtField",
                fieldType: "HasManyThrough",
                requiredArgumentForInput: false,
                sortable: false,
                filterable: false,
                __typename: "GadgetModelField",
                configuration: {
                  __typename: "GadgetHasManyThroughConfig",
                  fieldType: "HasManyThrough",
                  validations: [],
                  relatedModel: {
                    key: "Oss4sCDW-DJU",
                    apiIdentifier: "siblingModel",
                    namespace: ["hasManyThrough"],
                    defaultDisplayField: {
                      name: "Sibling name",
                      apiIdentifier: "siblingName",
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
                        name: "Sibling name",
                        apiIdentifier: "siblingName",
                        fieldType: "String",
                        __typename: "GadgetModelField",
                      },
                      {
                        name: "Sibling model hmt field",
                        apiIdentifier: "siblingModelHmtField",
                        fieldType: "HasManyThrough",
                        __typename: "GadgetModelField",
                      },
                      {
                        name: "Created at",
                        apiIdentifier: "createdAt",
                        fieldType: "DateTime",
                        __typename: "GadgetModelField",
                      },
                      {
                        name: "Updated at",
                        apiIdentifier: "updatedAt",
                        fieldType: "DateTime",
                        __typename: "GadgetModelField",
                      },
                    ],
                    __typename: "GadgetModel",
                  },
                  inverseField: {
                    apiIdentifier: "siblingModelHmtField",
                    __typename: "GadgetModelField",
                  },
                  joinModel: {
                    key: "tJDsf_FvYqsi",
                    apiIdentifier: "joinerModel",
                    namespace: ["hasManyThrough"],
                    defaultDisplayField: {
                      name: "Id",
                      apiIdentifier: "id",
                      fieldType: "ID",
                      __typename: "GadgetModelField",
                    },
                    __typename: "GadgetModel",
                  },
                  inverseJoinModelField: {
                    apiIdentifier: "joinerBelongsToBase",
                    __typename: "GadgetModelField",
                  },
                  inverseRelatedModelField: {
                    apiIdentifier: "joinerBelongsToSibling",
                    __typename: "GadgetModelField",
                  },
                },
              },
            ],
            __typename: "GadgetModel",
          },
          {
            key: "DataModel-_autoTableTestRelatedModel",
            apiIdentifier: "_autoTableTestRelatedModel",
            namespace: [],
            defaultDisplayField: {
              apiIdentifier: "name",
              fieldType: "String",
              __typename: "GadgetModelField",
            },
            fields: [
              recordIdInputField,
              {
                name: "Name",
                apiIdentifier: "name",
                fieldType: "String",
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
                __typename: "GadgetModelField",
              },
            ],
            __typename: "GadgetModel",
          },
          {
            key: "DataModel-widget",
            apiIdentifier: "widgetOther",
            namespace: [],
            defaultDisplayField: {
              apiIdentifier: "email",
              fieldType: "String",
              __typename: "GadgetModelField",
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
            fields: [
              recordIdInputField,
              {
                name: "Str",
                apiIdentifier: "str",
                fieldType: "String",
                __typename: "GadgetModelField",
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
                name: "Email",
                apiIdentifier: "email",
                fieldType: "String",
                __typename: "GadgetModelField",
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
            ],
            __typename: "GadgetModel",
          },
          {
            key: "Oss4sCDW-DJU",
            apiIdentifier: "siblingModel",
            namespace: ["hasManyThrough"],
            defaultDisplayField: {
              name: "Sibling name",
              apiIdentifier: "siblingName",
              fieldType: "String",
              __typename: "GadgetModelField",
            },
            fields: [
              recordIdInputField,
              {
                name: "Sibling name",
                apiIdentifier: "siblingName",
                fieldType: "String",
                __typename: "GadgetModelField",
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
            ],
            __typename: "GadgetModel",
          },
        ],
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
                    {
                      name: "Email",
                      apiIdentifier: "email",
                      fieldType: "Email",
                      __typename: "GadgetModelField",
                    },
                  ],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Base model hmt field",
              apiIdentifier: "baseModelHmtField",
              fieldType: "HasManyThrough",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyThroughConfig",
                fieldType: "HasManyThrough",
                validations: [],
                relatedModel: {
                  key: "Oss4sCDW-DJU",
                  apiIdentifier: "siblingModel",
                  namespace: ["hasManyThrough"],
                  defaultDisplayField: {
                    name: "Sibling name",
                    apiIdentifier: "siblingName",
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
                      name: "Sibling name",
                      apiIdentifier: "siblingName",
                      fieldType: "String",
                      __typename: "GadgetModelField",
                    },
                    {
                      name: "Sibling model hmt field",
                      apiIdentifier: "siblingModelHmtField",
                      fieldType: "HasManyThrough",
                      __typename: "GadgetModelField",
                    },
                    {
                      name: "Created at",
                      apiIdentifier: "createdAt",
                      fieldType: "DateTime",
                      __typename: "GadgetModelField",
                    },
                    {
                      name: "Updated at",
                      apiIdentifier: "updatedAt",
                      fieldType: "DateTime",
                      __typename: "GadgetModelField",
                    },
                  ],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "siblingModelHmtField",
                  __typename: "GadgetModelField",
                },
                joinModel: {
                  key: "tJDsf_FvYqsi",
                  apiIdentifier: "joinerModel",
                  namespace: ["hasManyThrough"],
                  defaultDisplayField: {
                    name: "Id",
                    apiIdentifier: "id",
                    fieldType: "ID",
                    __typename: "GadgetModelField",
                  },
                  __typename: "GadgetModel",
                },
                inverseJoinModelField: {
                  apiIdentifier: "joinerBelongsToBase",
                  __typename: "GadgetModelField",
                },
                inverseRelatedModelField: {
                  apiIdentifier: "joinerBelongsToSibling",
                  __typename: "GadgetModelField",
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
              baseModelHmtField: {
                edges: [
                  {
                    node: {
                      id: "1",
                      siblingName: "sibling 1",
                      __typename: "HasManyThroughSiblingModel",
                    },
                    __typename: "HasManyThroughSiblingModelEdge",
                  },
                  {
                    node: {
                      id: "2",
                      siblingName: "sibling 2",
                      __typename: "HasManyThroughSiblingModel",
                    },
                    __typename: "HasManyThroughSiblingModelEdge",
                  },
                ],
                __typename: "HasManyThroughSiblingModelConnection",
              },
              hasOne: {
                name: "gizmo 12",
              },
              belongsTo: {
                str: "foo",
                email: "foo",
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
        modelAndRelatedModels: [
          {
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
        ],
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
