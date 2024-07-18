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
        gizmos: undefined,
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
        section: undefined,
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
        sortable: true,
      },
      {
        apiIdentifier: "inventoryCount",
        fieldType: "Number",
        name: "Inventory count",
        sortable: true,
      },
      {
        apiIdentifier: "gizmos",
        fieldType: "HasMany",
        name: "Gizmos",
        sortable: false,
      },
      {
        apiIdentifier: "anything",
        fieldType: "JSON",
        name: "Anything",
        sortable: true,
      },
      {
        apiIdentifier: "description",
        fieldType: "RichText",
        name: "Description",
        sortable: true,
      },
      {
        apiIdentifier: "category",
        fieldType: "Enum",
        name: "Category",
        sortable: true,
      },
      {
        apiIdentifier: "startsAt",
        fieldType: "DateTime",
        name: "Starts at",
        sortable: true,
      },
      {
        apiIdentifier: "isChecked",
        fieldType: "Boolean",
        name: "Is checked",
        sortable: true,
      },
      {
        apiIdentifier: "metafields",
        fieldType: "JSON",
        name: "Metafields",
        sortable: true,
      },
      {
        apiIdentifier: "roles",
        fieldType: "RoleAssignments",
        name: "Roles",
        sortable: false,
      },
      {
        apiIdentifier: "birthday",
        fieldType: "DateTime",
        name: "Birthday",
        sortable: true,
      },
      {
        apiIdentifier: "color",
        fieldType: "Color",
        name: "Color",
        sortable: true,
      },
      {
        apiIdentifier: "secretKey",
        fieldType: "EncryptedString",
        name: "Secret key",
        sortable: false,
      },
      {
        apiIdentifier: "section",
        fieldType: "BelongsTo",
        name: "Section",
        sortable: false,
      },
      {
        apiIdentifier: "mustBeLongString",
        fieldType: "String",
        name: "Must be long string",
        sortable: true,
      },
    ]);
  });

  it("should return the columns that are specified in the columns property", async () => {
    const result = getUseTableResult({
      columns: ["name", "inventoryCount"],
    });
    loadMockWidgetModelMetadata();
    loadWidgetData();

    // The fields inside the `node` should only contain the fields that are specified in the columns property + the id field
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].query.loc.source.body).toMatchInlineSnapshot(`
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
              startsAt: "2024-07-01T01:00:00.000Z",
              updatedAt: "2023-09-21T17:19:11.197Z",
            },
            __typename: "WidgetEdge",
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
