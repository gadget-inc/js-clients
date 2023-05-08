import {
  internalBulkCreateMutation,
  internalCreateMutation,
  internalDeleteManyMutation,
  internalDeleteMutation,
  internalFindFirstQuery,
  internalFindManyQuery,
  internalUpdateMutation,
} from "../src";

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

    test("should build a create record mutation", () => {
      const result = internalCreateMutation("widget");

      expect(result).toMatch(
        /mutation InternalCreateWidget\(\$record: InternalWidgetInput\) {\s*gadgetMeta {\s*hydrations\(modelName: "widget"\)\s*}\s*internal {\s*createWidget\(widget: \$record\) {\s*success\s*errors {\s*... InternalErrorsDetails\s*}\s*widget\s*}\s*}\s*}/
      );
    });

    test("should build a bulk create records mutation", () => {
      const result = internalBulkCreateMutation("widget", "widgets");

      expect(result).toMatch(
        /mutation InternalBulkCreateWidgets\(\$records: \[InternalWidgetInput\]\!\) {\s*gadgetMeta {\s*hydrations\(modelName: "widget"\)\s*}\s*internal {\s*bulkCreateWidgets\(widgets: \$records\) {\s*success\s*errors {\s*... InternalErrorsDetails\s*}\s*widgets\s*}\s*}\s*}/
      );
    });

    test("should build an update record mutation", () => {
      const result = internalUpdateMutation("widget");

      expect(result).toMatch(
        /mutation InternalUpdateWidget\(\$id: GadgetID!, \$record: InternalWidgetInput\) {\s*gadgetMeta {\s*hydrations\(modelName: "widget"\)\s*}\s*internal {\s*updateWidget\(id: \$id, widget: \$record\) {\s*success\s*errors {\s*... InternalErrorsDetails\s*}\s*widget\s*}\s*}\s*}/
      );
    });

    test("should build a delete record mutation", () => {
      const result = internalDeleteMutation("widget");

      expect(result).toMatch(
        /mutation InternalDeleteWidget\(\$id: GadgetID!\) {\s*gadgetMeta {\s*hydrations\(modelName: "widget"\)\s*}\s*internal {\s*deleteWidget\(id: \$id\) {\s*success\s*errors {\s*... InternalErrorsDetails\s*}\s*}\s*}\s*}/
      );
    });

    test("should build a delete many records mutation", () => {
      const result = internalDeleteManyMutation("widget");

      expect(result).toMatch(
        /mutation InternalDeleteManyWidget\(\s*\$search: String\s*\$filter: \[WidgetFilter!\]\s*\) {\s*gadgetMeta {\s*hydrations\(modelName: "widget"\)\s*}\s*internal {\s*deleteManyWidget\(search: \$search, filter: \$filter\) {\s*success\s*errors {\s*... InternalErrorsDetails\s*}\s*}\s*}\s*}/
      );
    });
  });
});
