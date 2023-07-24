import { actionOperation, findManyOperation, findOneByFieldOperation, findOneOperation } from "../src/index.js";

describe("operation builders", () => {
  describe("findOneOperation", () => {
    test("findOneOperation should build a find one query for a model", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query ($id: GadgetID!) { widget (id: $id) { __typename, id, state } gadgetMeta  { hydrations(modelName: "widget") } }",
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
          "query": "query ($id: GadgetID!) { widget (id: $id) { __typename, id, name } gadgetMeta  { hydrations(modelName: "widget") } }",
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
          "query": "query ($after: String, $first: Int, $before: String, $last: Int) { widgets (after: $after, first: $first, before: $before, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, state } } } gadgetMeta  { hydrations(modelName: "widget") } }",
          "variables": {
            "after": undefined,
            "before": undefined,
            "first": undefined,
            "last": undefined,
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query for a model with the select option", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { select: { id: true, name: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int) { widgets (after: $after, first: $first, before: $before, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, name } } } gadgetMeta  { hydrations(modelName: "widget") } }",
          "variables": {
            "after": undefined,
            "before": undefined,
            "first": undefined,
            "last": undefined,
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query with search if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { search: "Search Term" }))
        .toMatchInlineSnapshot(`
        {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $search: String) { widgets (after: $after, first: $first, before: $before, last: $last, search: $search) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, state } } } gadgetMeta  { hydrations(modelName: "widget") } }",
          "variables": {
            "after": undefined,
            "before": undefined,
            "first": undefined,
            "last": undefined,
            "search": "Search Term",
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query with sort if option provided", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { sort: [{ id: "Ascending" }] }))
        .toMatchInlineSnapshot(`
        {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $sort: [WidgetSort!]) { widgets (after: $after, first: $first, before: $before, last: $last, sort: $sort) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, state } } } gadgetMeta  { hydrations(modelName: "widget") } }",
          "variables": {
            "after": undefined,
            "before": undefined,
            "first": undefined,
            "last": undefined,
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
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) { widgets (after: $after, first: $first, before: $before, last: $last, filter: $filter) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, state } } } gadgetMeta  { hydrations(modelName: "widget") } }",
          "variables": {
            "after": undefined,
            "before": undefined,
            "filter": [
              {
                "id": {
                  "equals": "1",
                },
              },
            ],
            "first": undefined,
            "last": undefined,
          },
        }
      `);
    });
  });

  describe("findOneByFieldOperation", () => {
    test("findOneByFieldOperation should build a find by field query for a model", () => {
      expect(findOneByFieldOperation("widget", "foo", "bar", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) { widget (after: $after, first: $first, before: $before, last: $last, filter: $filter) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, state } } } gadgetMeta  { hydrations(modelName: "widget") } }",
          "variables": {
            "after": undefined,
            "before": undefined,
            "filter": {
              "foo": {
                "equals": "bar",
              },
            },
            "first": 2,
            "last": undefined,
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
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) { widget (after: $after, first: $first, before: $before, last: $last, filter: $filter) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, name } } } gadgetMeta  { hydrations(modelName: "widget") } }",
          "variables": {
            "after": undefined,
            "before": undefined,
            "filter": {
              "foo": {
                "equals": "bar",
              },
            },
            "first": 2,
            "last": undefined,
          },
        }
      `);
    });
  });

  describe("actionOperation", () => {
    test("actionOperation should build a mutation query for a model action", () => {
      expect(actionOperation("updateWidget", { __typename: true, id: true, state: true }, "widget", "widget", {})).toMatchInlineSnapshot(`
        {
          "query": "mutation  {
          updateWidget  {
            success, errors { message, code, ... on InvalidRecordError { validationErrors { message, apiIdentifier } } }, widget { __typename, id, state }
          }
          gadgetMeta  {
            hydrations(modelName: "widget")
          }
        }",
          "variables": {},
        }
      `);
    });

    test("actionOperation should build a mutation query for a model action given a select option", () => {
      expect(actionOperation("updateWidget", { __typename: true, id: true, state: true }, "widget", "widget", {}, { select: { id: true } }))
        .toMatchInlineSnapshot(`
        {
          "query": "mutation  {
          updateWidget  {
            success, errors { message, code, ... on InvalidRecordError { validationErrors { message, apiIdentifier } } }, widget { __typename, id }
          }
          gadgetMeta  {
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
          "query": "mutation  {
          deleteWidget  {
            success, errors { message, code, ... on InvalidRecordError { validationErrors { message, apiIdentifier } } }
          }
          gadgetMeta  {
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
          "query": "mutation  {
          currentSession  {
            logInViaEmail  { success, errors { message, code, ... on InvalidRecordError { validationErrors { message, apiIdentifier } } }, session { __typename, id, state } }
          }
          gadgetMeta  {
            hydrations(modelName: "session")
          }
        }",
          "variables": {},
        }
      `);
    });
  });
});
