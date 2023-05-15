import { internalFindFirstQuery, internalFindManyQuery } from "../src";

describe("InternalModelManager", () => {
  describe("internalFindManyQuery", () => {
    test("should build a find many query with no options", () => {
      expect(internalFindManyQuery("widget", undefined)).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindManyWidget ($after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
          "variables": {
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
        {
          "query": "query InternalFindManyWidget ($sort: [WidgetSort!], $after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (sort: $sort, after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
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

    test("should build a find many query with search", () => {
      expect(internalFindManyQuery("widget", { search: "term" })).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindManyWidget ($search: String, $after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (search: $search, after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
          "variables": {
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
        {
          "query": "query InternalFindManyWidget ($filter: [WidgetFilter!], $after: String, $before: String, $first: Int, $last: Int) { internal  { listWidget (filter: $filter, after: $after, before: $before, first: $first, last: $last) { pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor }, edges { cursor, node } } } }",
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

  describe("internalFindFirstQuery", () => {
    test("should build a find first query with no options", () => {
      expect(internalFindFirstQuery("widget", undefined)).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget ($first: Int) { internal  { listWidget (first: $first) { edges { node } } } }",
          "variables": {
            "first": 1,
          },
        }
      `);
    });

    test("should build a find first query with sort", () => {
      expect(internalFindFirstQuery("widget", { sort: [{ id: "Ascending" }] })).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget ($sort: [WidgetSort!], $first: Int) { internal  { listWidget (sort: $sort, first: $first) { edges { node } } } }",
          "variables": {
            "first": 1,
            "sort": [
              {
                "id": "Ascending",
              },
            ],
          },
        }
      `);
    });

    test("should build a find first query with search", () => {
      expect(internalFindFirstQuery("widget", { search: "term" })).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget ($search: String, $first: Int) { internal  { listWidget (search: $search, first: $first) { edges { node } } } }",
          "variables": {
            "first": 1,
            "search": "term",
          },
        }
      `);
    });

    test("should build a find first query with filter", () => {
      expect(internalFindFirstQuery("widget", { filter: [{ id: { equals: "1" } }] })).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget ($filter: [WidgetFilter!], $first: Int) { internal  { listWidget (filter: $filter, first: $first) { edges { node } } } }",
          "variables": {
            "filter": [
              {
                "id": {
                  "equals": "1",
                },
              },
            ],
            "first": 1,
          },
        }
      `);
    });

    describe("properly handles apiIdentifiers styled with Snake Case", () => {
      // snake case example: "api_identifier"
      test("should build a find first query with no options", () => {
        expect(internalFindFirstQuery("widget_model", undefined)).toMatchInlineSnapshot(`
          {
            "query": "query InternalFindFirstWidgetModel ($first: Int) { internal  { listWidgetModel (first: $first) { edges { node } } } }",
            "variables": {
              "first": 1,
            },
          }
        `);
      });

      test("should build a find first query with sort", () => {
        expect(internalFindFirstQuery("widget_model", { sort: [{ id: "Ascending" }] })).toMatchInlineSnapshot(`
          {
            "query": "query InternalFindFirstWidgetModel ($sort: [WidgetModelSort!], $first: Int) { internal  { listWidgetModel (sort: $sort, first: $first) { edges { node } } } }",
            "variables": {
              "first": 1,
              "sort": [
                {
                  "id": "Ascending",
                },
              ],
            },
          }
        `);
      });

      test("should build a find first query with search", () => {
        expect(internalFindFirstQuery("widget_model", { search: "term" })).toMatchInlineSnapshot(`
          {
            "query": "query InternalFindFirstWidgetModel ($search: String, $first: Int) { internal  { listWidgetModel (search: $search, first: $first) { edges { node } } } }",
            "variables": {
              "first": 1,
              "search": "term",
            },
          }
        `);
      });

      test("should build a find first query with filter", () => {
        expect(internalFindFirstQuery("widget_model", { filter: [{ id: { equals: "1" } }] })).toMatchInlineSnapshot(`
          {
            "query": "query InternalFindFirstWidgetModel ($filter: [WidgetModelFilter!], $first: Int) { internal  { listWidgetModel (filter: $filter, first: $first) { edges { node } } } }",
            "variables": {
              "filter": [
                {
                  "id": {
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
});
