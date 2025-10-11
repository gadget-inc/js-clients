import { jest } from "@jest/globals";
import {
  BrowserSessionStorageType,
  GadgetConnection,
  InternalModelManager,
  internalBulkCreateMutation,
  internalCreateMutation,
  internalDeleteManyMutation,
  internalDeleteMutation,
  internalFindFirstQuery,
  internalFindManyQuery,
  internalFindOneQuery,
  internalUpdateMutation,
  internalUpsertMutation,
} from "../src/index.js";
import { expectValidGraphQLQuery } from "./helpers.js";
import type { MockUrqlClient } from "./mockUrqlClient.js";
import { createMockUrqlClient } from "./mockUrqlClient.js";

describe("InternalModelManager", () => {
  describe("getRecordFromData", () => {
    let connection: GadgetConnection;
    let internalModelManager: InternalModelManager;

    beforeEach(() => {
      connection = new GadgetConnection({
        endpoint: "https://someapp.gadget.app",
        authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } },
      });

      internalModelManager = new InternalModelManager("someModel", connection, {
        hasAmbiguousIdentifiers: false,
        pluralApiIdentifier: "someModels",
      });
    });

    // type tests
    const _TestCanFilterByScalars = async () => {
      await internalModelManager.findMany({ filter: [{ id: { equals: "foo" } }] });
      await internalModelManager.findMany({ filter: [{ id: { equals: BigInt(1) } }] });
      await internalModelManager.findMany({ filter: [{ createdAt: { equals: new Date() } }] });
    };

    test("can unwrap params nested under api identifier", () => {
      const result = (internalModelManager as any).getRecordFromData({
        someModel: {
          name: "foo",
          bar: 12,
          _atomics: {
            _baz: {
              increment: 1,
            },
          },
        },
      });

      expect(result).toEqual({
        name: "foo",
        bar: 12,
        _atomics: {
          _baz: {
            increment: 1,
          },
        },
      });
    });

    test("returns params if model api identifier does not exist in params", () => {
      const result = (internalModelManager as any).getRecordFromData({
        name: "foo",
        bar: 12,
        _atomics: {
          _baz: {
            decrement: 1,
          },
        },
      });

      expect(result).toEqual({
        name: "foo",
        bar: 12,
        _atomics: {
          _baz: {
            decrement: 1,
          },
        },
      });
    });

    test("throws if model has ambiguous api identifier and record data does not have model api identifier key", () => {
      if (internalModelManager.options) {
        internalModelManager.options.hasAmbiguousIdentifiers = true;
      }

      expect(internalModelManager.options?.hasAmbiguousIdentifiers).toBeTruthy();

      expect(() =>
        (internalModelManager as any).getRecordFromData(
          {
            name: "foo",
            bar: 12,
            _atomics: {
              _baz: {
                decrement: 1,
              },
            },
          },
          "create"
        )
      ).toThrow("Invalid arguments found in variables. Did you mean to use create({ someModel: { ... } })?");
    });

    test("does not throw if model has ambiguous api identifier and record data has model api identifier key", () => {
      if (internalModelManager.options) {
        internalModelManager.options.hasAmbiguousIdentifiers = true;
      }

      expect(internalModelManager.options?.hasAmbiguousIdentifiers).toBeTruthy();

      const result = (internalModelManager as any).getRecordFromData({
        someModel: {
          name: "foo",
          bar: 12,
          _atomics: {
            _baz: {
              increment: 1,
            },
          },
        },
      });

      expect(result).toEqual({
        name: "foo",
        bar: 12,
        _atomics: {
          _baz: {
            increment: 1,
          },
        },
      });
    });
  });

  describe("internalFindOneQuery", () => {
    test("should build a find one query with an id", () => {
      const plan = internalFindOneQuery("widget", "123", []);
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindWidget($id: GadgetID!, $select: [String!]) {
          internal {
            widget(id: $id, select: $select)
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ id: "123" });
    });

    test("should build a find one query with a select", () => {
      const plan = internalFindOneQuery("widget", "123", [], { id: true, foo: true, bar: true, baz: false });
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find one query with a select using the shorthand", () => {
      const plan = internalFindOneQuery("widget", "123", [], ["id", "foo", "bar"]);
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find one query for a namespaced model", () => {
      const plan = internalFindOneQuery("widget", "123", ["namespace"], ["id", "foo", "bar"]);
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindWidget($id: GadgetID!, $select: [String!]) {
          internal {
            namespace {
              widget(id: $id, select: $select)
            }
          }
          gadgetMeta {
            hydrations(modelName: "namespace.widget")
          }
        }"
      `);
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find one query for a deeply namespaced model", () => {
      const plan = internalFindOneQuery("widget", "123", ["very", "deep", "namespace"], ["id", "foo", "bar"]);
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindWidget($id: GadgetID!, $select: [String!]) {
          internal {
            very {
              deep {
                namespace {
                  widget(id: $id, select: $select)
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "very.deep.namespace.widget")
          }
        }"
      `);
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });
  });

  describe("internalFindManyQuery", () => {
    test("should build a find many query with no options", () => {
      const plan = internalFindManyQuery("widget", [], undefined);
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindManyWidget {
          internal {
            listWidget {
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
              edges {
                cursor
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query with sort", () => {
      const plan = internalFindManyQuery("widget", [], { sort: [{ id: "Ascending" }] });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindManyWidget($sort: [WidgetSort!]) {
          internal {
            listWidget(sort: $sort) {
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
              edges {
                cursor
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ sort: [{ id: "Ascending" }] });
    });

    test("should build a find many query with search", () => {
      const plan = internalFindManyQuery("widget", [], { search: "term" });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindManyWidget($search: String) {
          internal {
            listWidget(search: $search) {
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
              edges {
                cursor
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ search: "term" });
    });

    test("should build a find many query with searchFields", () => {
      const plan = internalFindManyQuery("widget", [], { search: "term", searchFields: { name: true, state: false, id: { weight: 10 } } });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindManyWidget($search: String, $searchFields: WidgetSearchFields) {
          internal {
            listWidget(search: $search, searchFields: $searchFields) {
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
              edges {
                cursor
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ search: "term", searchFields: { name: {}, id: { weight: 10 } } });
    });

    test("should build a find many query with filter", () => {
      const plan = internalFindManyQuery("widget", [], { filter: [{ id: { equals: "1" } }] });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindManyWidget($filter: [WidgetFilter!]) {
          internal {
            listWidget(filter: $filter) {
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
              edges {
                cursor
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ filter: [{ id: { equals: "1" } }] });
    });

    test("should build a find many query with a select", () => {
      const plan = internalFindManyQuery("widget", [], { select: { id: true, foo: true, bar: true, baz: false } });
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query with a select using the shorthand", () => {
      const plan = internalFindManyQuery("widget", [], { select: ["id", "foo", "bar"] });
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query for a namespaced model", () => {
      const plan = internalFindManyQuery("widget", ["deep", "namespace"], undefined);
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindManyWidget {
          internal {
            deep {
              namespace {
                listWidget {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                  }
                  edges {
                    cursor
                    node
                  }
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "deep.namespace.widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query for a namespaced model with a sort and filter", () => {
      const plan = internalFindManyQuery("widget", ["deep", "namespace"], {
        sort: [{ id: "Ascending" }],
        filter: [{ id: { equals: "123" } }],
      });

      expect(plan.query).toMatch(/DeepNamespaceWidgetSort/);
      expect(plan.query).toMatch(/DeepNamespaceWidgetFilter/);

      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindManyWidget($sort: [DeepNamespaceWidgetSort!], $filter: [DeepNamespaceWidgetFilter!]) {
          internal {
            deep {
              namespace {
                listWidget(sort: $sort, filter: $filter) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                  }
                  edges {
                    cursor
                    node
                  }
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "deep.namespace.widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
    });
  });

  describe("internalFindFirstQuery", () => {
    test("should build a find first query with no options", () => {
      const plan = internalFindFirstQuery("widget", [], undefined);
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindFirstWidget($first: Int) {
          internal {
            listWidget(first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ first: 1 });
    });

    test("should build a find first query with sort", () => {
      const plan = internalFindFirstQuery("widget", [], { sort: [{ id: "Ascending" }] });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindFirstWidget($sort: [WidgetSort!], $first: Int) {
          internal {
            listWidget(sort: $sort, first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ first: 1, sort: [{ id: "Ascending" }] });
    });

    test("should build a find first query with search", () => {
      const plan = internalFindFirstQuery("widget", [], { search: "term" });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindFirstWidget($search: String, $first: Int) {
          internal {
            listWidget(search: $search, first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ first: 1, search: "term" });
    });

    test("should build a find first query with searchFields", () => {
      const plan = internalFindFirstQuery("widget", [], { search: "term", searchFields: { name: true, state: false, id: { weight: 10 } } });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindFirstWidget($search: String, $searchFields: WidgetSearchFields, $first: Int) {
          internal {
            listWidget(search: $search, searchFields: $searchFields, first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ first: 1, search: "term", searchFields: { name: {}, id: { weight: 10 } } });
    });

    test("should build a find first query with filter", () => {
      const plan = internalFindFirstQuery("widget", [], { filter: [{ id: { equals: "1" } }] });

      expectValidGraphQLQuery(plan.query);
      expect(plan.variables).toEqual({ first: 1, filter: [{ id: { equals: "1" } }] });
    });

    test("should build a find first query with select", () => {
      const plan = internalFindFirstQuery("widget", [], { select: { foo: true, bar: true } });
      expect(plan.variables).toEqual({ first: 1, select: ["foo", "bar"] });
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find first query for a namespaced model", () => {
      const plan = internalFindFirstQuery("widget", ["deep", "namespace"], { select: { foo: true, bar: true } });
      expect(plan.query).toMatchInlineSnapshot(`
        "query InternalFindFirstWidget($select: [String!], $first: Int) {
          internal {
            deep {
              namespace {
                listWidget(select: $select, first: $first) {
                  edges {
                    node
                  }
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "deep.namespace.widget")
          }
        }"
      `);
      expect(plan.variables).toEqual({ first: 1, select: ["foo", "bar"] });
      expectValidGraphQLQuery(plan.query);
    });
  });

  describe("properly handles apiIdentifiers styled with Snake Case", () => {
    // snake case example: "api_identifier"
    test("should build a find first query with no options", () => {
      const plan = internalFindFirstQuery("widget_model", [], undefined);
      expect(plan).toMatchInlineSnapshot(`
          {
            "query": "query InternalFindFirstWidgetModel($first: Int) {
            internal {
              listWidgetModel(first: $first) {
                edges {
                  node
                }
              }
            }
            gadgetMeta {
              hydrations(modelName: "widget_model")
            }
          }",
            "variables": {
              "first": 1,
            },
          }
        `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find first query with sort", () => {
      const plan = internalFindFirstQuery("widget_model", [], { sort: [{ id: "Ascending" }] });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidgetModel($sort: [WidgetModelSort!], $first: Int) {
          internal {
            listWidgetModel(sort: $sort, first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget_model")
          }
        }",
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
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find first query with search", () => {
      const plan = internalFindFirstQuery("widget_model", [], { search: "term" });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidgetModel($search: String, $first: Int) {
          internal {
            listWidgetModel(search: $search, first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget_model")
          }
        }",
          "variables": {
            "first": 1,
            "search": "term",
          },
        }
      `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find first query with searchFilter", () => {
      const plan = internalFindFirstQuery("widget_model", [], {
        search: "term",
        searchFields: { name: true, state: false, id: { weight: 10 } },
      });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidgetModel($search: String, $searchFields: WidgetModelSearchFields, $first: Int) {
          internal {
            listWidgetModel(search: $search, searchFields: $searchFields, first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget_model")
          }
        }",
          "variables": {
            "first": 1,
            "search": "term",
            "searchFields": {
              "id": {
                "weight": 10,
              },
              "name": {},
            },
          },
        }
      `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find first query with filter", () => {
      const plan = internalFindFirstQuery("widget_model", [], { filter: [{ id: { equals: "1" } }] });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidgetModel($filter: [WidgetModelFilter!], $first: Int) {
          internal {
            listWidgetModel(filter: $filter, first: $first) {
              edges {
                node
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget_model")
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
            "first": 1,
          },
        }
      `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a create record mutation", () => {
      const result = internalCreateMutation("widget_model", [], { title: "foo" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalCreateWidgetModel($widget_model: InternalWidgetModelInput) {
          internal {
            createWidgetModel(widget_model: $widget_model) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget_model
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget_model")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables.widget_model).toEqual({ title: "foo" });
    });

    test("should build a bulk create records mutation", () => {
      const result = internalBulkCreateMutation("widget_model", "widget_models", [], [{ foo: "bar" }, { foo: "baz" }]);

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalBulkCreateWidgetModels($widget_models: [InternalWidgetModelInput]!) {
          internal {
            bulkCreateWidgetModels(widget_models: $widget_models) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget_models
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget_model")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({ widget_models: [{ foo: "bar" }, { foo: "baz" }] });
    });

    test("should build an update record mutation", () => {
      const result = internalUpdateMutation("widget_model", [], "123", { title: "foobar" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalUpdateWidgetModel($id: GadgetID!, $widget_model: InternalWidgetModelInput) {
          internal {
            updateWidgetModel(id: $id, widget_model: $widget_model) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget_model
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget_model")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({ id: "123", widget_model: { title: "foobar" } });
    });

    test("should build a delete record mutation", () => {
      const result = internalDeleteMutation("widget_model", [], "123");

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalDeleteWidgetModel($id: GadgetID!) {
          internal {
            deleteWidgetModel(id: $id) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
            }
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({ id: "123" });
    });

    test("should build a delete many records mutation", () => {
      const result = internalDeleteManyMutation("widget_model", []);

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalDeleteManyWidgetModel {
          internal {
            deleteManyWidgetModel {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
            }
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({});
    });

    test("should build a delete many records mutation with a search and a filter", () => {
      const result = internalDeleteManyMutation("widget_model", [], { search: "foobar", filter: [{ title: { equals: "foo" } }] });

      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({
        search: "foobar",
        filter: [{ title: { equals: "foo" } }],
      });
    });
  });

  describe("internal actions", () => {
    test("should build a create record mutation", () => {
      const result = internalCreateMutation("widget", [], { title: "foo" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalCreateWidget($widget: InternalWidgetInput) {
          internal {
            createWidget(widget: $widget) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables.widget).toEqual({ title: "foo" });
    });

    test("should build a namespaced create record mutation", () => {
      const result = internalCreateMutation("widget", ["deep", "namespace"], { title: "foo" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalCreateWidget($widget: InternalDeepNamespaceWidgetInput) {
          internal {
            deep {
              namespace {
                createWidget(widget: $widget) {
                  success
                  errors {
                    message
                    code
                    ... on InvalidRecordError {
                      model {
                        apiIdentifier
                      }
                      validationErrors {
                        message
                        apiIdentifier
                      }
                    }
                  }
                  widget
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "deep.namespace.widget")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.query).toMatch(/InternalDeepNamespaceWidgetInput/);
      expect(result.variables.widget).toEqual({ title: "foo" });
    });

    test("should build a bulk create records mutation", () => {
      const result = internalBulkCreateMutation("widget", "widgets", [], [{ foo: "bar" }, { foo: "baz" }]);

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalBulkCreateWidgets($widgets: [InternalWidgetInput]!) {
          internal {
            bulkCreateWidgets(widgets: $widgets) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widgets
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({ widgets: [{ foo: "bar" }, { foo: "baz" }] });
    });

    test("should build a namespaced bulk create records mutation", () => {
      const result = internalBulkCreateMutation("widget", "widgets", ["deep", "namespace"], [{ foo: "bar" }, { foo: "baz" }]);

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalBulkCreateWidgets($widgets: [InternalDeepNamespaceWidgetInput]!) {
          internal {
            deep {
              namespace {
                bulkCreateWidgets(widgets: $widgets) {
                  success
                  errors {
                    message
                    code
                    ... on InvalidRecordError {
                      model {
                        apiIdentifier
                      }
                      validationErrors {
                        message
                        apiIdentifier
                      }
                    }
                  }
                  widgets
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "deep.namespace.widget")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.query).toMatch(/InternalDeepNamespaceWidgetInput/);
      expect(result.variables).toEqual({ widgets: [{ foo: "bar" }, { foo: "baz" }] });
    });

    test("should build an update record mutation", () => {
      const result = internalUpdateMutation("widget", [], "123", { foo: "bar" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalUpdateWidget($id: GadgetID!, $widget: InternalWidgetInput) {
          internal {
            updateWidget(id: $id, widget: $widget) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({ id: "123", widget: { foo: "bar" } });
    });

    test("should build a upsert record mutation", () => {
      let result = internalUpsertMutation("widget", [], undefined, { foo: "bar" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalUpsertWidget($on: [String!], $widget: InternalWidgetInput) {
          internal {
            upsertWidget(on: $on, widget: $widget) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);

      expect(result.variables).toMatchInlineSnapshot(`
        {
          "widget": {
            "foo": "bar",
          },
        }
      `);

      result = internalUpsertMutation("widget", [], ["foo"], { foo: "bar" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalUpsertWidget($on: [String!], $widget: InternalWidgetInput) {
          internal {
            upsertWidget(on: $on, widget: $widget) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
              widget
            }
          }
          gadgetMeta {
            hydrations(modelName: "widget")
          }
        }"
      `);

      expect(result.variables).toMatchInlineSnapshot(`
        {
          "on": [
            "foo",
          ],
          "widget": {
            "foo": "bar",
          },
        }
      `);
    });

    test("should build a namespaced update record mutation", () => {
      const result = internalUpdateMutation("widget", ["deep", "namespace"], "123", { foo: "bar" });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalUpdateWidget($id: GadgetID!, $widget: InternalDeepNamespaceWidgetInput) {
          internal {
            deep {
              namespace {
                updateWidget(id: $id, widget: $widget) {
                  success
                  errors {
                    message
                    code
                    ... on InvalidRecordError {
                      model {
                        apiIdentifier
                      }
                      validationErrors {
                        message
                        apiIdentifier
                      }
                    }
                  }
                  widget
                }
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: "deep.namespace.widget")
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.query).toMatch(/InternalDeepNamespaceWidgetInput/);
      expect(result.variables).toEqual({ id: "123", widget: { foo: "bar" } });
    });

    test("should build a delete record mutation", () => {
      const result = internalDeleteMutation("widget", [], "123");

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalDeleteWidget($id: GadgetID!) {
          internal {
            deleteWidget(id: $id) {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
            }
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({ id: "123" });
    });

    test("should build a namespaced delete record mutation", () => {
      const result = internalDeleteMutation("widget", ["deep", "namespace"], "123");

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalDeleteWidget($id: GadgetID!) {
          internal {
            deep {
              namespace {
                deleteWidget(id: $id) {
                  success
                  errors {
                    message
                    code
                    ... on InvalidRecordError {
                      model {
                        apiIdentifier
                      }
                      validationErrors {
                        message
                        apiIdentifier
                      }
                    }
                  }
                }
              }
            }
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({ id: "123" });
    });

    test("should build a delete many records mutation", () => {
      const result = internalDeleteManyMutation("widget", [], {});

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalDeleteManyWidget {
          internal {
            deleteManyWidget {
              success
              errors {
                message
                code
                ... on InvalidRecordError {
                  model {
                    apiIdentifier
                  }
                  validationErrors {
                    message
                    apiIdentifier
                  }
                }
              }
            }
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.variables).toEqual({});
    });

    test("should build a namespaced delete many records mutation", () => {
      const result = internalDeleteManyMutation("widget", ["deep", "namespace"], { filter: {} });

      expect(result.query).toMatchInlineSnapshot(`
        "mutation InternalDeleteManyWidget($filter: [DeepNamespaceWidgetFilter!]) {
          internal {
            deep {
              namespace {
                deleteManyWidget(filter: $filter) {
                  success
                  errors {
                    message
                    code
                    ... on InvalidRecordError {
                      model {
                        apiIdentifier
                      }
                      validationErrors {
                        message
                        apiIdentifier
                      }
                    }
                  }
                }
              }
            }
          }
        }"
      `);
      expectValidGraphQLQuery(result.query);
      expect(result.query).toMatch(/DeepNamespaceWidgetFilter/);
      expect(result.variables).toEqual({ filter: {} });
    });

    test("should build a find many query for a namespaced model with a sort and filter", () => {
      const result = internalDeleteManyMutation("widget", ["deep", "namespace"], {
        search: "foobar",
        filter: [{ title: { equals: "foo" } }],
      });

      expectValidGraphQLQuery(result.query);
      expect(result.query).toMatch(/DeepNamespaceWidgetFilter/);
      expect(result.variables).toEqual({
        search: "foobar",
        filter: [{ title: { equals: "foo" } }],
      });
    });
  });

  test("queries for the same model in different namespaces should be different", () => {
    expect(internalFindOneQuery("widget", "123", ["name", "one"]).query).not.toEqual(
      internalFindOneQuery("widget", "123", ["name", "two"]).query
    );
  });

  describe("executing against level models", () => {
    let manager: InternalModelManager;
    let mockUrqlClient: MockUrqlClient;
    beforeEach(() => {
      const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
      mockUrqlClient = createMockUrqlClient({});
      jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);

      manager = new InternalModelManager("widget", connection, { pluralApiIdentifier: "widgets" });
    });

    test("can execute a findOne operation against a model", async () => {
      const promise = manager.findOne("123");

      mockUrqlClient.executeQuery.pushResponse("InternalFindWidget", {
        data: {
          internal: {
            widget: {
              id: "123",
              name: "foo",
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute a findMany operation against a model", async () => {
      const promise = manager.findMany();

      mockUrqlClient.executeQuery.pushResponse("InternalFindManyWidget", {
        data: {
          internal: {
            listWidget: {
              edges: [
                {
                  node: {
                    id: "123",
                    name: "foo",
                  },
                },
              ],
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result[0].id).toBeTruthy();
      expect(result[0].name).toBeTruthy();
    });

    test("can execute a findFirst operation against a model", async () => {
      const promise = manager.findFirst({ search: "foobar" });

      mockUrqlClient.executeQuery.pushResponse("InternalFindFirstWidget", {
        data: {
          internal: {
            listWidget: {
              edges: [
                {
                  node: {
                    id: "123",
                    name: "foo",
                  },
                },
              ],
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result?.id).toBeTruthy();
      expect(result?.name).toBeTruthy();
    });

    test("can execute a create operation against a model", async () => {
      const promise = manager.create({ name: "foo" });

      mockUrqlClient.executeMutation.pushResponse("InternalCreateWidget", {
        data: {
          internal: {
            createWidget: {
              success: true,
              errors: null,
              widget: {
                id: "123",
                name: "foo",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute a bulkCreate operation against a model", async () => {
      const promise = manager.bulkCreate([{ name: "foo" }, { name: "bar" }]);

      mockUrqlClient.executeMutation.pushResponse("InternalBulkCreateWidgets", {
        data: {
          internal: {
            bulkCreateWidgets: {
              success: true,
              errors: null,
              widgets: [
                {
                  id: "123",
                  name: "foo",
                },
                {
                  id: "456",
                  name: "bar",
                },
              ],
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const results = await promise;
      expect(results.length).toBe(2);
      expect(results[0].id).toBeTruthy();
      expect(results[0].name).toBeTruthy();
    });

    test("can execute an update operation against a model", async () => {
      const promise = manager.update("123", { name: "foo" });

      mockUrqlClient.executeMutation.pushResponse("InternalUpdateWidget", {
        data: {
          internal: {
            updateWidget: {
              success: true,
              errors: null,
              widget: {
                id: "123",
                name: "foo",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute an upsert against a model", async () => {
      const promise = manager.upsert({ id: "123", name: "foo" });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "widget": {
            "id": "123",
            "name": "foo",
          },
        }
      `);

      mockUrqlClient.executeMutation.pushResponse("InternalUpsertWidget", {
        data: {
          internal: {
            upsertWidget: {
              success: true,
              errors: null,
              widget: {
                id: "123",
                name: "foo",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute an upsert against a model with an on at the root level", async () => {
      const promise = manager.upsert({ id: "123", name: "foo", on: ["name"] });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "on": [
            "name",
          ],
          "widget": {
            "id": "123",
            "name": "foo",
          },
        }
      `);

      mockUrqlClient.executeMutation.pushResponse("InternalUpsertWidget", {
        data: {
          internal: {
            upsertWidget: {
              success: true,
              errors: null,
              widget: {
                id: "123",
                name: "foo",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute an upsert against a model with an on at the fully qualified level", async () => {
      const promise = manager.upsert({ widget: { id: "123", name: "bar" }, on: ["name"] });

      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
        {
          "on": [
            "name",
          ],
          "widget": {
            "id": "123",
            "name": "bar",
          },
        }
      `);

      mockUrqlClient.executeMutation.pushResponse("InternalUpsertWidget", {
        data: {
          internal: {
            upsertWidget: {
              success: true,
              errors: null,
              widget: {
                id: "123",
                name: "bar",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("throws an error if attempting to run an upsert with an empty on", async () => {
      await expect(manager.upsert({ widget: { id: "123", name: "bar" }, on: [] })).rejects.toThrowErrorMatchingInlineSnapshot(
        `"assertion error: Must specify at least one field to upsert on"`
      );
    });

    test("can execute a delete operation against a model", async () => {
      const promise = manager.delete("123");

      mockUrqlClient.executeMutation.pushResponse("InternalDeleteWidget", {
        data: {
          internal: {
            deleteWidget: {
              success: true,
              errors: null,
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result).toBeUndefined();
    });

    test("can execute a deleteMany operation against a model", async () => {
      const promise = manager.deleteMany({ filter: { title: { equals: "foo" } } });

      mockUrqlClient.executeMutation.pushResponse("InternalDeleteManyWidget", {
        data: {
          internal: {
            deleteManyWidget: {
              success: true,
              errors: null,
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result).toBeUndefined();
    });
  });

  describe("executing against namespaced models", () => {
    let manager: InternalModelManager;
    let mockUrqlClient: MockUrqlClient;
    beforeEach(() => {
      const connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
      mockUrqlClient = createMockUrqlClient({});
      jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);

      manager = new InternalModelManager("widget", connection, { pluralApiIdentifier: "widgets", namespace: ["inner", "outer"] });
    });

    test("can execute a findOne operation against a model", async () => {
      const promise = manager.findOne("123");

      mockUrqlClient.executeQuery.pushResponse("InternalFindWidget", {
        data: {
          internal: {
            inner: {
              outer: {
                widget: {
                  id: "123",
                  name: "foo",
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute a findMany operation against a model", async () => {
      const promise = manager.findMany();

      mockUrqlClient.executeQuery.pushResponse("InternalFindManyWidget", {
        data: {
          internal: {
            inner: {
              outer: {
                listWidget: {
                  edges: [
                    {
                      node: {
                        id: "123",
                        name: "foo",
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result[0].id).toBeTruthy();
      expect(result[0].name).toBeTruthy();
    });

    test("can execute a findFirst operation against a model", async () => {
      const promise = manager.findFirst({ search: "foobar" });

      mockUrqlClient.executeQuery.pushResponse("InternalFindFirstWidget", {
        data: {
          internal: {
            inner: {
              outer: {
                listWidget: {
                  edges: [
                    {
                      node: {
                        id: "123",
                        name: "foo",
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result?.id).toBeTruthy();
      expect(result?.name).toBeTruthy();
    });

    test("can execute a create operation against a model", async () => {
      const promise = manager.create({ name: "foo" });

      mockUrqlClient.executeMutation.pushResponse("InternalCreateWidget", {
        data: {
          internal: {
            inner: {
              outer: {
                createWidget: {
                  success: true,
                  errors: null,
                  widget: {
                    id: "123",
                    name: "foo",
                  },
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute a bulkCreate operation against a model", async () => {
      const promise = manager.bulkCreate([{ name: "foo" }, { name: "bar" }]);

      mockUrqlClient.executeMutation.pushResponse("InternalBulkCreateWidgets", {
        data: {
          internal: {
            inner: {
              outer: {
                bulkCreateWidgets: {
                  success: true,
                  errors: null,
                  widgets: [
                    {
                      id: "123",
                      name: "foo",
                    },
                    {
                      id: "456",
                      name: "bar",
                    },
                  ],
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const results = await promise;
      expect(results.length).toBe(2);
      expect(results[0].id).toBeTruthy();
      expect(results[0].name).toBeTruthy();
    });

    test("can execute an update operation against a model", async () => {
      const promise = manager.update("123", { name: "foo" });

      mockUrqlClient.executeMutation.pushResponse("InternalUpdateWidget", {
        data: {
          internal: {
            inner: {
              outer: {
                updateWidget: {
                  success: true,
                  errors: null,
                  widget: {
                    id: "123",
                    name: "foo",
                  },
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute a delete operation against a model", async () => {
      const promise = manager.delete("123");

      mockUrqlClient.executeMutation.pushResponse("InternalDeleteWidget", {
        data: {
          internal: {
            inner: {
              outer: {
                deleteWidget: {
                  success: true,
                  errors: null,
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result).toBeUndefined();
    });

    test("can execute a deleteMany operation against a model", async () => {
      const promise = manager.deleteMany({ filter: { title: { equals: "foo" } } });

      mockUrqlClient.executeMutation.pushResponse("InternalDeleteManyWidget", {
        data: {
          internal: {
            inner: {
              outer: {
                deleteManyWidget: {
                  success: true,
                  errors: null,
                },
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result).toBeUndefined();
    });
  });
});
