import { internalFindFirstQuery, internalFindManyQuery } from "../src";

describe("InternalModelManager", () => {
  describe("internalFindManyQuery", () => {
    test("should build a find many query with no options", () => {
      expect(internalFindManyQuery("widget", undefined)).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindManyWidget ($after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "first": undefined,
            "last": undefined,
          },
        }
      `);
    });

    test("should build a find many query with sort", () => {
      expect(internalFindManyQuery("widget", { sort: [{ id: "Ascending" }] })).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindManyWidget ($sort: [WidgetSort!], $after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (sort: $sort, after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "first": undefined,
            "last": undefined,
            "sort": Array [
              Object {
                "id": "Ascending",
              },
            ],
          },
        }
      `);
    });

    test("should build a find many query with search", () => {
      expect(internalFindManyQuery("widget", { search: "term" })).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindManyWidget ($search: String, $after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (search: $search, after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "first": undefined,
            "last": undefined,
            "search": "term",
          },
        }
      `);
    });

    test("should build a find many query with filter", () => {
      expect(internalFindManyQuery("widget", { filter: [{ id: { equals: "1" } }] })).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindManyWidget ($filter: [WidgetFilter!], $after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (filter: $filter, after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
          "variables": Object {
            "after": undefined,
            "before": undefined,
            "filter": Array [
              Object {
                "id": Object {
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

  describe("internalFindFirstQuery", () => {
    test("should build a find first query with no options", () => {
      expect(internalFindFirstQuery("widget", undefined)).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindFirstWidget ($first: Int) { internal  { listWidget (first: $first) { edges { node } } } }",
          "variables": Object {
            "first": 1,
          },
        }
      `);
    });

    test("should build a find first query with sort", () => {
      expect(internalFindFirstQuery("widget", { sort: [{ id: "Ascending" }] })).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindFirstWidget ($sort: [WidgetSort!], $first: Int) { internal  { listWidget (sort: $sort, first: $first) { edges { node } } } }",
          "variables": Object {
            "first": 1,
            "sort": Array [
              Object {
                "id": "Ascending",
              },
            ],
          },
        }
      `);
    });

    test("should build a find first query with search", () => {
      expect(internalFindFirstQuery("widget", { search: "term" })).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindFirstWidget ($search: String, $first: Int) { internal  { listWidget (search: $search, first: $first) { edges { node } } } }",
          "variables": Object {
            "first": 1,
            "search": "term",
          },
        }
      `);
    });

    test("should build a find first query with filter", () => {
      expect(internalFindFirstQuery("widget", { filter: [{ id: { equals: "1" } }] })).toMatchInlineSnapshot(`
        Object {
          "query": "query InternalFindFirstWidget ($filter: [WidgetFilter!], $first: Int) { internal  { listWidget (filter: $filter, first: $first) { edges { node } } } }",
          "variables": Object {
            "filter": Array [
              Object {
                "id": Object {
                  "equals": "1",
                },
              },
            ],
            "first": 1,
          },
        }
      `);
    });
  });
});
