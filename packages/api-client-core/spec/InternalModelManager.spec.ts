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
  internalUpdateMutation,
} from "../src/index.js";
import { expectValidGraphQLQuery } from "./helpers.js";

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

  describe("internalFindManyQuery", () => {
    test("should build a find many query with no options", () => {
      const plan = internalFindManyQuery("widget", undefined);
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindManyWidget {
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
        }",
          "variables": {},
        }
      `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query with sort", () => {
      const plan = internalFindManyQuery("widget", { sort: [{ id: "Ascending" }] });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindManyWidget($sort: [WidgetSort!]) {
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
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query with search", () => {
      const plan = internalFindManyQuery("widget", { search: "term" });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindManyWidget($search: String) {
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
        }",
          "variables": {
            "search": "term",
          },
        }
      `);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query with filter", () => {
      const plan = internalFindManyQuery("widget", { filter: [{ id: { equals: "1" } }] });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindManyWidget($filter: [WidgetFilter!]) {
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
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query with a select", () => {
      const plan = internalFindManyQuery("widget", { select: { id: true, foo: true, bar: true, baz: false } });
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });

    test("should build a find many query with a select using the shorthand", () => {
      const plan = internalFindManyQuery("widget", { select: ["id", "foo", "bar"] });
      expect(plan.variables.select).toEqual(["id", "foo", "bar"]);
      expectValidGraphQLQuery(plan.query);
    });
  });

  describe("internalFindFirstQuery", () => {
    test("should build a find first query with no options", () => {
      const plan = internalFindFirstQuery("widget", undefined);
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget($first: Int) {
          internal {
            listWidget(first: $first) { 
              edges {
                node
              } 
            }
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
      const plan = internalFindFirstQuery("widget", { sort: [{ id: "Ascending" }] });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget($sort: [WidgetSort!], $first: Int) {
          internal {
            listWidget(sort: $sort, first: $first) { 
              edges {
                node
              } 
            }
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
      const plan = internalFindFirstQuery("widget", { search: "term" });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget($search: String, $first: Int) {
          internal {
            listWidget(search: $search, first: $first) { 
              edges {
                node
              } 
            }
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

    test("should build a find first query with filter", () => {
      const plan = internalFindFirstQuery("widget", { filter: [{ id: { equals: "1" } }] });
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget($filter: [WidgetFilter!], $first: Int) {
          internal {
            listWidget(filter: $filter, first: $first) { 
              edges {
                node
              } 
            }
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

    test("should build a find first query with select", () => {
      const plan = internalFindFirstQuery("widget", { select: { foo: true, bar: true } });
      expect(plan.variables.select).toEqual(["foo", "bar"]);
      expect(plan).toMatchInlineSnapshot(`
        {
          "query": "query InternalFindFirstWidget($select: [String!], $first: Int) {
          internal {
            listWidget(select: $select, first: $first) { 
              edges {
                node
              } 
            }
          }
        }",
          "variables": {
            "first": 1,
            "select": [
              "foo",
              "bar",
            ],
          },
        }
      `);
      expectValidGraphQLQuery(plan.query);
    });

    describe("properly handles apiIdentifiers styled with Snake Case", () => {
      // snake case example: "api_identifier"
      test("should build a find first query with no options", () => {
        const plan = internalFindFirstQuery("widget_model", undefined);
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
          }",
            "variables": {
              "first": 1,
            },
          }
        `);
        expectValidGraphQLQuery(plan.query);
      });

      test("should build a find first query with sort", () => {
        const plan = internalFindFirstQuery("widget_model", { sort: [{ id: "Ascending" }] });
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
        const plan = internalFindFirstQuery("widget_model", { search: "term" });
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
          }",
            "variables": {
              "first": 1,
              "search": "term",
            },
          }
        `);
        expectValidGraphQLQuery(plan.query);
      });

      test("should build a find first query with filter", () => {
        const plan = internalFindFirstQuery("widget_model", { filter: [{ id: { equals: "1" } }] });
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
        const result = internalCreateMutation("widget_model");

        expect(result).toMatchInlineSnapshot(`
          "
              
          fragment InternalErrorsDetails on ExecutionError {
            code
            message
            ...on InvalidRecordError {
              validationErrors {
                apiIdentifier
                message
              }
              model {
                apiIdentifier
              }
              record
            }
          }


              mutation InternalCreateWidgetModel($record: InternalWidgetModelInput) {
                
            gadgetMeta {
              hydrations(modelName: "widget_model")
            }

                internal {
                  createWidgetModel(widget_model: $record) {
                    success
                    errors {
                      ... InternalErrorsDetails
                    }
                    widget_model
                  }
                }
              }
            "
        `);
        expectValidGraphQLQuery(result);
      });

      test("should build a bulk create records mutation", () => {
        const result = internalBulkCreateMutation("widget_model", "widget_models");

        expect(result).toMatchInlineSnapshot(`
          "
              
          fragment InternalErrorsDetails on ExecutionError {
            code
            message
            ...on InvalidRecordError {
              validationErrors {
                apiIdentifier
                message
              }
              model {
                apiIdentifier
              }
              record
            }
          }


              mutation InternalBulkCreateWidgetModels($records: [InternalWidgetModelInput]!) {
                
            gadgetMeta {
              hydrations(modelName: "widget_model")
            }

                internal {
                  bulkCreateWidgetModels(widget_models: $records) {
                    success
                    errors {
                      ... InternalErrorsDetails
                    }
                    widget_models
                  }
                }
              }
            "
        `);
        expectValidGraphQLQuery(result);
      });

      test("should build an update record mutation", () => {
        const result = internalUpdateMutation("widget_model");

        expect(result).toMatchInlineSnapshot(`
          "
              
          fragment InternalErrorsDetails on ExecutionError {
            code
            message
            ...on InvalidRecordError {
              validationErrors {
                apiIdentifier
                message
              }
              model {
                apiIdentifier
              }
              record
            }
          }


              mutation InternalUpdateWidgetModel($id: GadgetID!, $record: InternalWidgetModelInput) {
                
            gadgetMeta {
              hydrations(modelName: "widget_model")
            }

                internal {
                  updateWidgetModel(id: $id, widget_model: $record) {
                    success
                    errors {
                      ... InternalErrorsDetails
                    }
                    widget_model
                  }
                }
              }
            "
        `);
        expectValidGraphQLQuery(result);
      });

      test("should build a delete record mutation", () => {
        const result = internalDeleteMutation("widget_model");

        expect(result).toMatchInlineSnapshot(`
          "
              
          fragment InternalErrorsDetails on ExecutionError {
            code
            message
            ...on InvalidRecordError {
              validationErrors {
                apiIdentifier
                message
              }
              model {
                apiIdentifier
              }
              record
            }
          }


              mutation InternalDeleteWidgetModel($id: GadgetID!) {
                
            gadgetMeta {
              hydrations(modelName: "widget_model")
            }

                internal {
                  deleteWidgetModel(id: $id) {
                    success
                    errors {
                      ... InternalErrorsDetails
                    }
                  }
                }
              }
            "
        `);
        expectValidGraphQLQuery(result);
      });

      test("should build a delete many records mutation", () => {
        const result = internalDeleteManyMutation("widget_model");

        expect(result).toMatchInlineSnapshot(`
          "
              
          fragment InternalErrorsDetails on ExecutionError {
            code
            message
            ...on InvalidRecordError {
              validationErrors {
                apiIdentifier
                message
              }
              model {
                apiIdentifier
              }
              record
            }
          }


              mutation InternalDeleteManyWidgetModel(
                $search: String
                $filter: [WidgetModelFilter!]
              ) {
                
            gadgetMeta {
              hydrations(modelName: "widget_model")
            }

                internal {
                  deleteManyWidgetModel(search: $search, filter: $filter) {
                    success
                    errors {
                      ... InternalErrorsDetails
                    }
                  }
                }
              }
            "
        `);
        expectValidGraphQLQuery(result);
      });
    });
  });

  describe("internal actions", () => {
    test("should build a create record mutation", () => {
      const result = internalCreateMutation("widget");

      expect(result).toMatchInlineSnapshot(`
        "
            
        fragment InternalErrorsDetails on ExecutionError {
          code
          message
          ...on InvalidRecordError {
            validationErrors {
              apiIdentifier
              message
            }
            model {
              apiIdentifier
            }
            record
          }
        }


            mutation InternalCreateWidget($record: InternalWidgetInput) {
              
          gadgetMeta {
            hydrations(modelName: "widget")
          }

              internal {
                createWidget(widget: $record) {
                  success
                  errors {
                    ... InternalErrorsDetails
                  }
                  widget
                }
              }
            }
          "
      `);
      expectValidGraphQLQuery(result);
    });

    test("should build a bulk create records mutation", () => {
      const result = internalBulkCreateMutation("widget", "widgets");

      expect(result).toMatchInlineSnapshot(`
        "
            
        fragment InternalErrorsDetails on ExecutionError {
          code
          message
          ...on InvalidRecordError {
            validationErrors {
              apiIdentifier
              message
            }
            model {
              apiIdentifier
            }
            record
          }
        }


            mutation InternalBulkCreateWidgets($records: [InternalWidgetInput]!) {
              
          gadgetMeta {
            hydrations(modelName: "widget")
          }

              internal {
                bulkCreateWidgets(widgets: $records) {
                  success
                  errors {
                    ... InternalErrorsDetails
                  }
                  widgets
                }
              }
            }
          "
      `);
      expectValidGraphQLQuery(result);
    });

    test("should build an update record mutation", () => {
      const result = internalUpdateMutation("widget");

      expect(result).toMatchInlineSnapshot(`
        "
            
        fragment InternalErrorsDetails on ExecutionError {
          code
          message
          ...on InvalidRecordError {
            validationErrors {
              apiIdentifier
              message
            }
            model {
              apiIdentifier
            }
            record
          }
        }


            mutation InternalUpdateWidget($id: GadgetID!, $record: InternalWidgetInput) {
              
          gadgetMeta {
            hydrations(modelName: "widget")
          }

              internal {
                updateWidget(id: $id, widget: $record) {
                  success
                  errors {
                    ... InternalErrorsDetails
                  }
                  widget
                }
              }
            }
          "
      `);
      expectValidGraphQLQuery(result);
    });

    test("should build a delete record mutation", () => {
      const result = internalDeleteMutation("widget");

      expect(result).toMatchInlineSnapshot(`
        "
            
        fragment InternalErrorsDetails on ExecutionError {
          code
          message
          ...on InvalidRecordError {
            validationErrors {
              apiIdentifier
              message
            }
            model {
              apiIdentifier
            }
            record
          }
        }


            mutation InternalDeleteWidget($id: GadgetID!) {
              
          gadgetMeta {
            hydrations(modelName: "widget")
          }

              internal {
                deleteWidget(id: $id) {
                  success
                  errors {
                    ... InternalErrorsDetails
                  }
                }
              }
            }
          "
      `);
      expectValidGraphQLQuery(result);
    });

    test("should build a delete many records mutation", () => {
      const result = internalDeleteManyMutation("widget");

      expect(result).toMatchInlineSnapshot(`
        "
            
        fragment InternalErrorsDetails on ExecutionError {
          code
          message
          ...on InvalidRecordError {
            validationErrors {
              apiIdentifier
              message
            }
            model {
              apiIdentifier
            }
            record
          }
        }


            mutation InternalDeleteManyWidget(
              $search: String
              $filter: [WidgetFilter!]
            ) {
              
          gadgetMeta {
            hydrations(modelName: "widget")
          }

              internal {
                deleteManyWidget(search: $search, filter: $filter) {
                  success
                  errors {
                    ... InternalErrorsDetails
                  }
                }
              }
            }
          "
      `);
      expectValidGraphQLQuery(result);
    });
  });
});
