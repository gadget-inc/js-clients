import { actionOperation, findManyOperation, findOneByFieldOperation, findOneOperation } from "../src";

describe("operation builders", () => {
  describe("findOneOperation", () => {
    test("findOneOperation should build a find one query for a model", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        Object {
          "query": "query ($id: GadgetID!) { widget (id: $id) { __typename, id, state } gadgetMeta  { hydrations(modelName: \\"widget\\") } }",
          "variables": Object {
            "id": "123",
          },
        }
      `);
    });

    test("findOneOperation should build a find one query for a model with the select option", () => {
      expect(findOneOperation("widget", "123", { __typename: true, id: true, state: true }, "widget", { select: { id: true, name: true } }))
        .toMatchInlineSnapshot(`
        Object {
          "query": "query ($id: GadgetID!) { widget (id: $id) { __typename, id, name } gadgetMeta  { hydrations(modelName: \\"widget\\") } }",
          "variables": Object {
            "id": "123",
          },
        }
      `);
    });
  });

  describe("findManyOperation", () => {
    test("findManyOperation should build a findMany query for a model", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        Object {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $sort: [WidgetSort!], $filter: [WidgetFilter!], $search: String) { widgets (after: $after, first: $first, before: $before, last: $last, sort: $sort, filter: $filter, search: $search) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, state } } } gadgetMeta  { hydrations(modelName: \\"widget\\") } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "filter": undefined,
            "first": undefined,
            "last": undefined,
            "search": undefined,
            "sort": undefined,
          },
        }
      `);
    });

    test("findManyOperation should build a findMany query for a model with the select option", () => {
      expect(findManyOperation("widgets", { __typename: true, id: true, state: true }, "widget", { select: { id: true, name: true } }))
        .toMatchInlineSnapshot(`
        Object {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $sort: [WidgetSort!], $filter: [WidgetFilter!], $search: String) { widgets (after: $after, first: $first, before: $before, last: $last, sort: $sort, filter: $filter, search: $search) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, name } } } gadgetMeta  { hydrations(modelName: \\"widget\\") } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "filter": undefined,
            "first": undefined,
            "last": undefined,
            "search": undefined,
            "sort": undefined,
          },
        }
      `);
    });
  });

  describe("findOneByFieldOperation", () => {
    test("findOneByFieldOperation should build a find by field query for a model", () => {
      expect(findOneByFieldOperation("widget", "foo", "bar", { __typename: true, id: true, state: true }, "widget")).toMatchInlineSnapshot(`
        Object {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $sort: [WidgetSort!], $filter: [WidgetFilter!], $search: String) { widget (after: $after, first: $first, before: $before, last: $last, sort: $sort, filter: $filter, search: $search) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, state } } } gadgetMeta  { hydrations(modelName: \\"widget\\") } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "filter": Object {
              "foo": Object {
                "equals": "bar",
              },
            },
            "first": 2,
            "last": undefined,
            "search": undefined,
            "sort": undefined,
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
        Object {
          "query": "query ($after: String, $first: Int, $before: String, $last: Int, $sort: [WidgetSort!], $filter: [WidgetFilter!], $search: String) { widget (after: $after, first: $first, before: $before, last: $last, sort: $sort, filter: $filter, search: $search) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node { __typename, id, name } } } gadgetMeta  { hydrations(modelName: \\"widget\\") } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "filter": Object {
              "foo": Object {
                "equals": "bar",
              },
            },
            "first": 2,
            "last": undefined,
            "search": undefined,
            "sort": undefined,
          },
        }
      `);
    });
  });

  describe("actionOperation", () => {
    test("actionOperation should build a mutation query for a model action", () => {
      expect(actionOperation("update", { __typename: true, id: true, state: true }, "widget", "widget", {})).toMatchInlineSnapshot(`
              Object {
                "query": "mutation  {
                update  {
                  success, errors { message, code, ... on InvalidRecordError { validationErrors { message, apiIdentifier } } }, widget { __typename, id, state }
                }
                gadgetMeta  {
                  hydrations(modelName: \\"widget\\")
                }
              }",
                "variables": Object {},
              }
          `);
    });

    test("actionOperation should build a mutation query for a model action given a select option", () => {
      expect(actionOperation("update", { __typename: true, id: true, state: true }, "widget", "widget", { select: { id: true } }))
        .toMatchInlineSnapshot(`
        Object {
          "query": "mutation ($select: String) {
          update (select: $select) {
            success, errors { message, code, ... on InvalidRecordError { validationErrors { message, apiIdentifier } } }, widget { __typename, id, state }
          }
          gadgetMeta  {
            hydrations(modelName: \\"widget\\")
          }
        }",
          "variables": Object {
            "select": undefined,
          },
        }
      `);
    });

    test("actionOperation should build a mutation query for an action on the current session", () => {
      expect(
        actionOperation("logInViaEmail", { __typename: true, id: true, state: true }, "session", "session", {}, undefined, "currentSession")
      ).toMatchInlineSnapshot(`
              Object {
                "query": "mutation  {
                currentSession  {
                  logInViaEmail  { success, errors { message, code, ... on InvalidRecordError { validationErrors { message, apiIdentifier } } }, session { __typename, id, state } }
                }
                gadgetMeta  {
                  hydrations(modelName: \\"session\\")
                }
              }",
                "variables": Object {},
              }
          `);
    });
  });
});
