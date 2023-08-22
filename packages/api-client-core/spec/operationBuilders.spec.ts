import { actionOperation, findManyOperation, findOneByFieldOperation, findOneOperation } from "../src/index.js";

describe("operation builders", () => {
  describe("findOneOperation", () => {
    test("findOneOperation should build a find one query for a model", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query widget($id: GadgetID!) {
          widget(id: $id) {
            __typename
            id
            state
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "id": "123",
          },
        }
      `);
    });

    test("findOneOperation should build a find one query for a model with the select option", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget", { select: { id: true, name: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widget($id: GadgetID!) {
          widget(id: $id) {
            id
            name
            __typename
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "id": "123",
          },
        }
      `);
    });
  });

  describe("findManyOperation", () => {
    test("findManyOperation should build a findMany query for a model", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int) {
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
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("findManyOperation should build a findMany query for a model with the select option", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { select: { id: true, name: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int) {
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
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("findManyOperation should build a findMany query with search if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { search: "Search Term" }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int, $search: String) {
          widgets(after: $after, first: $first, before: $before, last: $last, search: $search) {
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
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "search": "Search Term",
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query with sort if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { sort: [{ id: "Ascending" }] }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int, $sort: [WidgetSort!]) {
          widgets(after: $after, first: $first, before: $before, last: $last, sort: $sort) {
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
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "sort": [
              {
                "id": "Ascending",
              },
            ],
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query with filter if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { filter: [{ id: { equals: "1" } }] }))
        .toMatchInlineSnapshot(`
        {
          "query": "query widgets($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) {
          widgets(after: $after, first: $first, before: $before, last: $last, filter: $filter) {
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
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "filter": [
              {
                "id": {
                  "equals": "1",
                },
              },
            ],
          },
        }
      `);
    });
  });

  describe("findOneByFieldOperation", () => {
    test("findOneByFieldOperation should build a find by field query for a model", () => {
      expect(findOneByFieldOperation("widget", "foo", "bar", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query widget($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) {
          widget(after: $after, first: $first, before: $before, last: $last, filter: $filter) {
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
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "filter": {
              "foo": {
                "equals": "bar",
              },
            },
            "first": 2,
          },
        }
      `);
    });

    test("findOneByFieldOperation should build a findMany query for a model with the select option", () => {
      expect(
        findOneByFieldOperation("widget", "foo", "bar", { __typename: true, id: true, state: true }, "widget", {
          select: { id: true, name: true },
        })
      ).toMatchInlineSnapshot(`
        {
          "query": "query widget($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) {
          widget(after: $after, first: $first, before: $before, last: $last, filter: $filter) {
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
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {
            "filter": {
              "foo": {
                "equals": "bar",
              },
            },
            "first": 2,
          },
        }
      `);
    });
  });

  describe("actionOperation", () => {
    test("actionOperation should build a mutation query for a model action", () => {
      expect(actionOperation("createWidget", { __typename: true, id: true, state: true }, "widget", "widget", {})).toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          createWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            widget {
              __typename
              id
              state
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a model action given a select option", () => {
      expect(actionOperation("createWidget", { __typename: true, id: true, state: true }, "widget", "widget", {}, { select: { id: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          createWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            widget {
              id
              __typename
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a delete model action", () => {
      expect(actionOperation("deleteWidget", null, "widget", "widget", {})).toMatchInlineSnapshot(`
        {
          "query": "mutation deleteWidget {
          deleteWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for an action on the current session", () => {
      expect(
        actionOperation("logInViaEmail", { __typename: true, id: true, state: true }, "session", "session", {}, undefined, "currentSession")
      ).toMatchInlineSnapshot(`
        {
          "query": "mutation logInViaEmail {
          currentSession {
            logInViaEmail {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              session {
                __typename
                id
                state
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "session")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for an action that has a return type", () => {
      expect(
        actionOperation(
          "createWidget",
          { __typename: true, id: true, state: true },
          "widget",
          "widget",
          {},
          { select: { id: true } },
          undefined,
          false,
          true
        )
      ).toMatchInlineSnapshot(`
        {
          "query": "mutation createWidget {
          createWidget {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            result
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a bulk mutation query for an action that has a return type", () => {
      expect(
        actionOperation(
          "bulkCreateWidgets",
          { __typename: true, id: true, state: true },
          "widget",
          "widget",
          {},
          { select: { id: true } },
          undefined,
          true,
          true
        )
      ).toMatchInlineSnapshot(`
        {
          "query": "mutation bulkCreateWidgets {
          bulkCreateWidgets {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            results
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });
  });
});
