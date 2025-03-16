import { GraphQLError } from "@0no-co/graphql.web";
import { jest } from "@jest/globals";
import { diff } from "@n1ru4l/json-patch-plus";
import { CombinedError } from "@urql/core";
import nock from "nock";
import { BackgroundActionHandle } from "../src/BackgroundActionHandle.js";
import type { AnyPublicModelManager, GadgetErrorGroup, LimitToKnownKeys } from "../src/index.js";
import {
  GadgetConnection,
  actionRunner,
  backgroundActionResultRunner,
  enqueueActionRunner,
  findManyRunner,
  findOneByFieldRunner,
  findOneRunner,
} from "../src/index.js";
import { DefaultPostSelection, type CreatePostOptions, type CreatePostResult, type SelectedPostOrDefault } from "./TestSchema.js";
import { asyncIterableToIterator, waitForExpectationToPass } from "./helpers.js";
import { MockBulkFlipDownWidgetsAction, MockBulkUpdateWidgetAction, MockGlobalAction, MockWidgetCreateAction } from "./mockActions.js";
import { createMockUrqlClient, mockGraphQLWSClient, type MockUrqlClient } from "./mockUrqlClient.js";

nock.disableNetConnect();

describe("type checks", () => {
  // Prior to Gadget v1.1 this is the way that action functions were defined.
  // This test ensures that the legacy clients still type check correctly
  const _TestLegacyActionRunnerTypeCheck = () => {
    async function _createPost<Options extends CreatePostOptions>(
      this: { connection: GadgetConnection },
      options?: LimitToKnownKeys<Options, CreatePostOptions>
    ): Promise<CreatePostResult<Options>> {
      return await actionRunner<SelectedPostOrDefault<Options>>(
        this,
        "createPost",
        DefaultPostSelection,
        "post",
        "post",
        false,
        {},
        options,
        null,
        false
      );
    }
  };
});

// eslint-disable-next-line jest/no-export
describe("operationRunners", () => {
  let connection: GadgetConnection;
  let manager: AnyPublicModelManager;
  let query: string | undefined;
  let mockUrqlClient: MockUrqlClient;

  beforeEach(() => {
    query = undefined;
    connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    mockUrqlClient = createMockUrqlClient({
      queryAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });
    jest.spyOn(connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient as any);
    manager = { connection } as AnyPublicModelManager;
  });

  describe("findOneRunner", () => {
    test("can execute a findOne operation against a model", async () => {
      const promise = findOneRunner({ connection }, "widget", "123", { id: true, name: true }, "widget");

      expect(query).toMatchInlineSnapshot(`
        "query widget($id: GadgetID!) {
          widget(id: $id) {
            id
            name
            __typename
          }
          gadgetMeta {
            hydrations(modelName: 
        "widget")
          }
        }"
      `);

      mockUrqlClient.executeQuery.pushResponse("widget", {
        data: {
          widget: {
            id: "123",
            name: "foo",
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute a findOne operation against a namespaced model", async () => {
      const promise = findOneRunner({ connection }, "widget", "123", { id: true, name: true }, "widget", undefined, undefined, [
        "outer",
        "inner",
      ]);

      expect(query).toMatchInlineSnapshot(`
        "query widget($id: GadgetID!) {
          outer {
            inner {
              widget(id: $id) {
                id
                name
                __typename
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "outer.inner.widget")
          }
        }"
      `);

      mockUrqlClient.executeQuery.pushResponse("widget", {
        data: {
          outer: {
            inner: {
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
  });

  describe("findOneByFieldRunner", () => {
    test("can execute a findOneByField operation against a model", async () => {
      const promise = findOneByFieldRunner({ connection }, "widgets", "email", "test@test.com", { id: true, name: true }, "widget");

      expect(query).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int, $filter: [WidgetFilter!]) {
          widgets(
            after: $after
            first: $first
            before: $before
            last: $last
            filter: $filter
          ) {
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
            hydrations(modelName: 
        "widget")
          }
        }"
      `);

      mockUrqlClient.executeQuery.pushResponse("widgets", {
        data: {
          widgets: {
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
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("can execute a findOneByField operation against a namespaced model", async () => {
      const promise = findOneByFieldRunner(
        { connection },
        "widgets",
        "email",
        "test@test.com",
        { id: true, name: true },
        "widget",
        undefined,
        undefined,
        ["outer", "inner"]
      );

      expect(query).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int, $filter: [OuterInnerWidgetFilter!]) {
          outer {
            inner {
              widgets(
                after: $after
                first: $first
                before: $before
                last: $last
                filter: $filter
              ) {
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
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "outer.inner.widget")
          }
        }"
      `);

      mockUrqlClient.executeQuery.pushResponse("widgets", {
        data: {
          outer: {
            inner: {
              widgets: {
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
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.id).toBeTruthy();
      expect(result.name).toBeTruthy();
    });

    test("throws an error if no data is found", async () => {
      const promise = findOneByFieldRunner({ connection }, "widgets", "email", "test@test.com", { id: true, name: true }, "widget");

      mockUrqlClient.executeQuery.pushResponse("widgets", {
        data: {
          widgets: {
            edges: [],
          },
        },
        stale: false,
        hasNext: false,
      });

      await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"widget record with email=test@test.com not found"`);
    });

    test("does not throw an error if no data is found in the no-throw mode", async () => {
      const promise = findOneByFieldRunner(
        { connection },
        "widgets",
        "email",
        "test@test.com",
        { id: true, name: true },
        "widget",
        undefined,
        false
      );

      mockUrqlClient.executeQuery.pushResponse("widgets", {
        data: {
          widgets: {
            edges: [],
          },
        },
        stale: false,
        hasNext: false,
      });

      expect(await promise).toBeNull();
    });
  });

  describe("findManyRunner", () => {
    test("can execute a findMany operation against a model", async () => {
      const promise = findManyRunner({ connection } as AnyPublicModelManager, "widgets", { id: true, name: true }, "widget");

      expect(query).toMatchInlineSnapshot(`
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
              }
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "widget")
          }
        }"
      `);

      mockUrqlClient.executeQuery.pushResponse("widgets", {
        data: {
          widgets: {
            edges: [
              { cursor: "123", node: { id: "123", name: "foo" } },
              { cursor: "abc", node: { id: "124", name: "bar" } },
            ],
            pageInfo: {
              startCursor: "123",
              endCursor: "abc",
              hasNextPage: false,
              hasPreviousPage: false,
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

    test("can execute a findMany operation against a namespaced model", async () => {
      const promise = findManyRunner(
        { connection } as AnyPublicModelManager,
        "widgets",
        { id: true, name: true },
        "widget",
        undefined,
        undefined,
        ["outer", "inner"]
      );
      expect(query).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          outer {
            inner {
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
            }
          }
          gadgetMeta {
            hydrations(modelName: 
        "outer.inner.widget")
          }
        }"
      `);

      mockUrqlClient.executeQuery.pushResponse("widgets", {
        data: {
          outer: {
            inner: {
              widgets: {
                edges: [
                  { cursor: "123", node: { id: "123", name: "foo" } },
                  { cursor: "abc", node: { id: "124", name: "bar" } },
                ],
                pageInfo: {
                  startCursor: "123",
                  endCursor: "abc",
                  hasNextPage: false,
                  hasPreviousPage: false,
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

    test("can execute a findMany operation against a namespaced model when the namespace is a string", async () => {
      const promise = findManyRunner(
        { connection } as AnyPublicModelManager,
        "widgets",
        { id: true, name: true },
        "widget",
        undefined,
        undefined,
        "outer"
      );

      expect(query).toMatchInlineSnapshot(`
        "query widgets($after: String, $first: Int, $before: String, $last: Int) {
          outer {
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
          }
          gadgetMeta {
            hydrations(modelName: 
        "outer.widget")
          }
        }"
      `);

      mockUrqlClient.executeQuery.pushResponse("widgets", {
        data: {
          outer: {
            widgets: {
              edges: [
                { cursor: "123", node: { id: "123", name: "foo" } },
                { cursor: "abc", node: { id: "124", name: "bar" } },
              ],
              pageInfo: {
                startCursor: "123",
                endCursor: "abc",
                hasNextPage: false,
                hasPreviousPage: false,
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
  });

  describe("actionRunner", () => {
    test("can run a single create action", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "createWidget",
        { id: true, name: true },
        "widget",
        "widget",
        false,
        {
          widget: {
            value: { name: "hello" },
            required: false,
            type: "CreateWidgetInput",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("createWidget", {
        data: {
          createWidget: {
            success: true,
            errors: null,
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

    test("can run a single update action", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "updateWidget",
        { id: true, name: true },
        "widget",
        "widget",
        false,
        {
          id: {
            value: "123",
            required: true,
            type: "GadgetID",
          },
          widget: {
            value: { name: "hello" },
            required: false,
            type: "UpdateWidgetInput",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("updateWidget", {
        data: {
          updateWidget: {
            success: true,
            errors: null,
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

    test("can run a single action with an object result type", async () => {
      const promise = actionRunner(
        manager,
        "upsertWidget",
        { id: true, name: true, eventAt: true },
        "widget",
        "widget",
        false,
        {
          widget: {
            value: { name: "hello" },
            required: false,
            type: "UpsertWidgetInput",
          },
        },
        {},
        null,
        {
          "... on CreatePostResult": { hasReturnType: false },
          "... on UpdatePostResult": { hasReturnType: false },
        }
      );

      mockUrqlClient.executeMutation.pushResponse("upsertWidget", {
        data: {
          upsertWidget: {
            __typename: "CreatePostResult",
            success: true,
            errors: null,
            widget: {
              __typename: "Widget",
              id: "123",
              name: "foo",
              eventAt: "2021-01-01T00:00:00Z",
            },
          },
          gadgetMeta: {
            hydrations: {
              eventAt: "DateTime",
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.__typename).toEqual("Widget");
      expect(result.id).toEqual("123");
      expect(result.name).toEqual("foo");
      expect(result.eventAt).toEqual(new Date("2021-01-01T00:00:00Z"));
    });

    test("can run a single action with an object result type that has an inner return type", async () => {
      const promise = actionRunner(
        manager,
        "upsertWidget",
        { id: true, name: true, eventAt: true },
        "widget",
        "widget",
        false,
        {
          widget: {
            value: { name: "hello" },
            required: false,
            type: "UpsertWidgetInput",
          },
        },
        {},
        null,
        {
          "... on CreatePostResult": { hasReturnType: false },
          "... on UpdatePostResult": { hasReturnType: true },
        }
      );

      mockUrqlClient.executeMutation.pushResponse("upsertWidget", {
        data: {
          upsertWidget: {
            __typename: "UpdatePostResult",
            success: true,
            errors: null,
            result: { foo: "bar" },
          },
          gadgetMeta: {
            hydrations: {
              eventAt: "DateTime",
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result).toEqual({ foo: "bar" });
    });

    test("can run an action with hasReturnType", async () => {
      const promise = actionRunner(
        manager,
        "createWidget",
        { id: true, name: true },
        "widget",
        "widget",
        false,
        {
          widget: {
            value: { name: "hello" },
            required: false,
            type: "CreateWidgetInput",
          },
        },
        {},
        null,
        true
      );

      mockUrqlClient.executeMutation.pushResponse("createWidget", {
        data: {
          createWidget: {
            success: true,
            errors: null,
            result: {
              result: "ok",
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result.result).toEqual("ok");
    });

    test("can throw the error returned by the server for a single action", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "updateWidget",
        { id: true, name: true },
        "widget",
        "widget",
        false,
        {
          id: {
            value: "123",
            required: true,
            type: "GadgetID",
          },
          widget: {
            value: { name: "hello" },
            required: false,
            type: "UpdateWidgetInput",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("updateWidget", {
        data: {
          updateWidget: {
            success: false,
            errors: [
              {
                code: "GGT_SOMETHING_OR_OTHER",
                message: "An internal error occurred",
              },
            ],
            widget: null,
          },
        },
        stale: false,
        hasNext: false,
      });

      await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"GGT_SOMETHING_OR_OTHER: An internal error occurred"`);
    });

    test("can run a bulk action by ids", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "bulkFlipWidgets",
        { id: true, name: true },
        "widget",
        "widgets",
        true,
        {
          ids: {
            value: ["123", "456"],
            required: true,
            type: "[GadgetID!]",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("bulkFlipWidgets", {
        data: {
          bulkFlipWidgets: {
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
        stale: false,
        hasNext: false,
      });

      const results = await promise;
      expect(results[0].id).toBeTruthy();
      expect(results[0].name).toBeTruthy();
      expect(results[1].id).toBeTruthy();
      expect(results[1].name).toBeTruthy();
    });

    test("can run a bulk action with params", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "bulkCreateWidgets",
        { id: true, name: true },
        "widget",
        "widgets",
        true,
        {
          inputs: {
            value: [{ id: "123", widget: { name: "foo" } }],
            required: true,
            type: "[BulkCreateWidgetInput!]",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("bulkCreateWidgets", {
        data: {
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
        stale: false,
        hasNext: false,
      });

      const results = await promise;
      expect(results[0].id).toBeTruthy();
      expect(results[0].name).toBeTruthy();
      expect(results[1].id).toBeTruthy();
      expect(results[1].name).toBeTruthy();
    });

    test("can run a bulk action with a returnType", async () => {
      const promise = actionRunner(
        manager,
        "bulkCreateWidgets",
        { id: true, name: true },
        "widget",
        "widgets",
        true,
        {
          inputs: {
            value: [{ id: "123", widget: { name: "foo" } }],
            required: true,
            type: "[BulkCreateWidgetInput!]",
          },
        },
        {},
        null,
        true
      );

      mockUrqlClient.executeMutation.pushResponse("bulkCreateWidgets", {
        data: {
          bulkCreateWidgets: {
            success: true,
            errors: null,
            results: [{ hello: "world" }, { hello: "other world" }, "a string result"],
          },
        },
        stale: false,
        hasNext: false,
      });

      const results = await promise;

      expect(results[0]).toEqual({ hello: "world" });
      expect(results[1]).toEqual({ hello: "other world" });
      expect(results[2]).toEqual("a string result");
    });

    test("can run a bulk action with an object returnType", async () => {
      const promise = actionRunner(
        manager,
        "bulkUpsertWidgets",
        { id: true, name: true },
        "widget",
        "widgets",
        true,
        {
          inputs: {
            value: [{ widget: { id: "123", name: "foo" } }],
            required: true,
            type: "[BulkUpsertWidgetInput!]",
          },
        },
        {},
        null,
        {
          widgets: {
            hasReturnType: {
              "... on Widget": { select: true },
              "... on UpsertWidgetReturnType": { hasReturnType: true },
            },
          },
        }
      );

      mockUrqlClient.executeMutation.pushResponse("bulkUpsertWidgets", {
        data: {
          bulkUpsertWidgets: {
            success: true,
            errors: null,
            widgets: [
              { __typename: "Widget", id: "1", name: "foo" },
              { __typename: "UpsertWidgetReturnType", result: [{ hello: "other world" }, "other string"] },
            ],
          },
        },
        stale: false,
        hasNext: false,
      });

      const results = await promise;
      expect(results[0]).toEqual({ __typename: "Widget", id: "1", name: "foo" });
      expect(results[1]).toEqual([{ hello: "other world" }, "other string"]);
    });

    test("throws a nice error when a bulk action returns errors", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "bulkCreateWidgets",
        { id: true, name: true },
        "widget",
        "widgets",
        true,
        {
          inputs: {
            value: [{ id: "123", widget: { name: "foo" } }],
            required: true,
            type: "[BulkCreateWidgetInput!]",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("bulkCreateWidgets", {
        data: {
          bulkCreateWidgets: {
            success: false,
            errors: [
              { code: "GGT_ERROR_CODE_A", message: "Something went super wrong" },
              { code: "GGT_ERROR_CODE_B", message: "Something went super wrong" },
            ],
            widgets: null,
          },
        },
        stale: false,
        hasNext: false,
      });

      await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"Multiple errors occurred"`);
    });

    test("throws a nice error when a bulk action returns errors and data", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "bulkCreateWidgets",
        { id: true, name: true },
        "widget",
        "widgets",
        true,
        {
          inputs: {
            value: [{ id: "123", widget: { name: "foo" } }],
            required: true,
            type: "[BulkCreateWidgetInput!]",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("bulkCreateWidgets", {
        data: {
          bulkCreateWidgets: {
            success: false,
            errors: [
              { code: "GGT_ERROR_CODE_A", message: "Something went super wrong" },
              { code: "GGT_ERROR_CODE_B", message: "Something went super wrong" },
            ],
            widgets: [{ id: "123", name: "foo" }],
          },
        },
        stale: false,
        hasNext: false,
      });

      let error: GadgetErrorGroup<any>;
      await promise.catch((e) => {
        error = e;
      });
      expect(error!).toBeTruthy();
      expect(error!.errors.length).toBe(2);
      expect(error!.code).toMatchInlineSnapshot(`"GGT_ERROR_GROUP(GGT_ERROR_CODE_A,GGT_ERROR_CODE_B)"`);
      expect(error!.results?.[0].id).toBeTruthy();
    });

    test("returns undefined when bulk action does not have a result", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        manager,
        "bulkDeleteWidgets",
        null,
        "widget",
        "widgets",
        true,
        {
          ids: {
            value: ["123", "234"],
            required: true,
            type: "[GadgetID!]",
          },
        },
        {},
        null,
        false
      );

      mockUrqlClient.executeMutation.pushResponse("bulkDeleteWidgets", {
        data: {
          bulkDeleteWidgets: {
            success: true,
            errors: null,
          },
        },
        stale: false,
        hasNext: false,
      });

      const result = await promise;
      expect(result).toBeUndefined();
    });
  });

  describe("enqueueActionRunner", () => {
    test("can enqueue an action and return a handle", async () => {
      const promise = enqueueActionRunner(connection, MockWidgetCreateAction, { widget: { name: "new widget" } });

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: {},
        widget: { name: "new widget" },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-createWidget-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handle = await promise;
      expect(handle).toBeInstanceOf(BackgroundActionHandle);
      expect(handle.id).toEqual("widget-createWidget-123");
    });

    test("can pass shorthand retry options", async () => {
      const promise = enqueueActionRunner(
        connection,
        MockWidgetCreateAction,
        { widget: { name: "new widget" } },
        {
          retries: 10,
        }
      );

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: { retries: { retryCount: 10 } },
        widget: { name: "new widget" },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-createWidget-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await promise;
    });

    test("can pass urql request policies", async () => {
      const promise = enqueueActionRunner(
        connection,
        MockWidgetCreateAction,
        { widget: { name: "new widget" } },
        {
          retries: 10,
          requestPolicy: "network-only",
        }
      );

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][1]!.requestPolicy).toEqual("network-only");
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: { retries: { retryCount: 10 } },
        widget: { name: "new widget" },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-createWidget-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await promise;
    });

    test("can pass longhand retry options", async () => {
      const promise = enqueueActionRunner(
        connection,
        MockWidgetCreateAction,
        { widget: { name: "new widget" } },
        {
          retries: { retryCount: 10, backoffFactor: 10, initialInterval: 1, maxInterval: 2 },
        }
      );

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: { retries: { retryCount: 10, backoffFactor: 10, initialInterval: 1, maxInterval: 2 } },
        widget: { name: "new widget" },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-createWidget-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await promise;
    });

    test("can pass priority options", async () => {
      const promise = enqueueActionRunner(
        connection,
        MockWidgetCreateAction,
        { widget: { name: "new widget" } },
        {
          priority: "HIGH",
        }
      );

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: { priority: "HIGH" },
        widget: { name: "new widget" },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-createWidget-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await promise;
    });

    test("can pass shorthand concurrency queue options", async () => {
      const promise = enqueueActionRunner(
        connection,
        MockWidgetCreateAction,
        { widget: { name: "new widget" } },
        {
          queue: "foobar",
        }
      );

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: { queue: { name: "foobar" } },
        widget: { name: "new widget" },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-createWidget-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await promise;
    });

    test("can pass longhand concurrency queue options", async () => {
      const promise = enqueueActionRunner(
        connection,
        MockWidgetCreateAction,
        { widget: { name: "new widget" } },
        {
          queue: { name: "foobar", maxConcurrency: 10 },
        }
      );

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: { queue: { name: "foobar", maxConcurrency: 10 } },
        widget: { name: "new widget" },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-createWidget-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await promise;
    });

    test("can enqueue a global action and return a handle", async () => {
      const promise = enqueueActionRunner(connection, MockGlobalAction, { toState: "whatever" });

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: {},
        toState: "whatever",
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueFlipAllWidgets", {
        data: {
          background: {
            flipAllWidgets: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-flipAllWidgets-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handle = await promise;
      expect(handle).toBeInstanceOf(BackgroundActionHandle);
      expect(handle.id).toEqual("widget-flipAllWidgets-123");
    });

    test("can enqueue a global action without passing params and return a handle", async () => {
      const promise = enqueueActionRunner(connection, MockGlobalAction, {});

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: {},
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueFlipAllWidgets", {
        data: {
          background: {
            flipAllWidgets: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-flipAllWidgets-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handle = await promise;
      expect(handle).toBeInstanceOf(BackgroundActionHandle);
      expect(handle.id).toEqual("widget-flipAllWidgets-123");
    });

    test("can enqueue a global action without passing params and with options and return a handle", async () => {
      const promise = enqueueActionRunner(connection, MockGlobalAction, {}, { queue: "some-queue" });

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: {
          queue: { name: "some-queue" },
        },
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueFlipAllWidgets", {
        data: {
          background: {
            flipAllWidgets: {
              success: true,
              errors: null,
              backgroundAction: {
                id: "widget-flipAllWidgets-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handle = await promise;
      expect(handle).toBeInstanceOf(BackgroundActionHandle);
      expect(handle.id).toEqual("widget-flipAllWidgets-123");
    });

    test("can enqueue a bulk action with ids only and return handles", async () => {
      const promise = enqueueActionRunner(connection, MockBulkFlipDownWidgetsAction, ["123", "456"]);

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: {},
        ids: ["123", "456"],
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueBulkFlipDownWidgets", {
        data: {
          background: {
            bulkFlipDownWidgets: {
              success: true,
              errors: null,
              backgroundActions: [
                {
                  id: "widget-bulkFlipWidgets-123",
                },
                {
                  id: "widget-bulkFlipWidgets-456",
                },
              ],
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handles = await promise;
      expect(handles[0]).toBeInstanceOf(BackgroundActionHandle);
      expect(handles[0].id).toEqual("widget-bulkFlipWidgets-123");
      expect(handles[1].id).toEqual("widget-bulkFlipWidgets-456");
    });

    test("can enqueue a bulk action with a list of inputs and return handles", async () => {
      const promise = enqueueActionRunner(connection, MockBulkUpdateWidgetAction, [
        { id: "123", name: "foo" },
        { id: "124", name: "bar" },
      ]);

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: {},
        inputs: [
          { id: "123", widget: { name: "foo" } },
          { id: "124", widget: { name: "bar" } },
        ],
      });

      mockUrqlClient.executeMutation.pushResponse("enqueueBulkUpdateWidgets", {
        data: {
          background: {
            bulkUpdateWidgets: {
              success: true,
              errors: null,
              backgroundActions: [
                {
                  id: "background-123",
                },
                {
                  id: "background-456",
                },
              ],
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handles = await promise;
      expect(handles[0]).toBeInstanceOf(BackgroundActionHandle);
      expect(handles[0].id).toEqual("background-123");
      expect(handles[1].id).toEqual("background-456");
    });

    test("throws a duplicate ID error by default from the server", async () => {
      const promise = enqueueActionRunner(connection, MockWidgetCreateAction, { widget: { name: "new widget" } }, { id: "fixed-id" });

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: false,
              errors: [
                {
                  code: "GGT_DUPLICATE_BACKGROUND_ACTION_ID",
                  message: "Duplicate ID",
                },
              ],
              backgroundAction: null,
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"GGT_DUPLICATE_BACKGROUND_ACTION_ID: Duplicate ID"`);
    });

    test("ignores duplicate ID errors when onDuplicateID: ignore is set", async () => {
      const promise = enqueueActionRunner(
        connection,
        MockWidgetCreateAction,
        { widget: { name: "new widget" } },
        { id: "fixed-id", onDuplicateID: "ignore" }
      );

      mockUrqlClient.executeMutation.pushResponse("enqueueCreateWidget", {
        data: {
          background: {
            createWidget: {
              success: false,
              errors: [
                {
                  code: "GGT_DUPLICATE_BACKGROUND_ACTION_ID",
                  message: "Duplicate ID",
                },
              ],
              backgroundAction: null,
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handle = await promise;
      expect(handle).toBeInstanceOf(BackgroundActionHandle);
      expect(handle.id).toEqual("fixed-id");
    });
  });

  describe("actionResultRunner", () => {
    describe("action", () => {
      test("waits for background action with a completed result", async () => {
        const promise = backgroundActionResultRunner(connection, "app-job-123456", MockWidgetCreateAction, undefined);

        expect(mockUrqlClient.executeSubscription.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeSubscription.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: null,
              result: null,
            },
          },
          stale: false,
          hasNext: true,
        });

        mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: "completed",
              result: {
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

        expect(result.outcome).toEqual("completed");
        expect(result.result?.id).toEqual("123");
        expect(result.result?.name).toEqual("foo");
      });

      test("waits for background action with failed result", async () => {
        const promise = backgroundActionResultRunner(connection, "app-job-123456", MockWidgetCreateAction, { select: { id: true } });

        expect(mockUrqlClient.executeSubscription.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeSubscription.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: null,
              result: null,
            },
          },
          stale: false,
          hasNext: true,
        });

        mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: "failed",
              result: {
                success: false,
                errors: [
                  {
                    code: "GGT_SOMETHING_OR_OTHER",
                    message: "An internal error occurred",
                  },
                ],
                widget: null,
              },
            },
          },
          stale: false,
          hasNext: false,
        });

        await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"GGT_SOMETHING_OR_OTHER: An internal error occurred"`);
      });
    });

    describe("globalAction", () => {
      test("waits for completed background action response", async () => {
        const promise = backgroundActionResultRunner(connection, "app-job-123456", MockGlobalAction);

        expect(mockUrqlClient.executeSubscription.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeSubscription.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeSubscription.pushResponse("FlipAllWidgetsBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: null,
              result: null,
            },
          },
          stale: false,
          hasNext: true,
        });

        mockUrqlClient.executeSubscription.pushResponse("FlipAllWidgetsBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: "completed",
              result: {
                success: true,
                errors: null,
                result: {},
              },
            },
          },
          stale: false,
          hasNext: false,
        });

        const result = await promise;

        expect(result.outcome).toEqual("completed");
      });

      test("waits for failed background action response", async () => {
        const promise = backgroundActionResultRunner(connection, "app-job-123456", MockGlobalAction);

        expect(mockUrqlClient.executeSubscription.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeSubscription.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeSubscription.pushResponse("FlipAllWidgetsBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: null,
              result: null,
            },
          },
          stale: false,
          hasNext: true,
        });

        mockUrqlClient.executeSubscription.pushResponse("FlipAllWidgetsBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: "failed",
              result: {
                success: false,
                errors: [
                  {
                    code: "GGT_SOMETHING_OR_OTHER",
                    message: "An internal error occurred",
                  },
                ],
                result: null,
              },
            },
          },
          stale: false,
          hasNext: false,
        });

        await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"GGT_SOMETHING_OR_OTHER: An internal error occurred"`);
      });
    });

    describe("bulk action", () => {
      test("waits for a background bulk action element with a completed result", async () => {
        const promise = backgroundActionResultRunner(connection, "app-job-123456", MockBulkUpdateWidgetAction);

        expect(mockUrqlClient.executeSubscription.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeSubscription.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeSubscription.pushResponse("UpdateWidgetBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: null,
              result: null,
            },
          },
          stale: false,
          hasNext: true,
        });

        mockUrqlClient.executeSubscription.pushResponse("UpdateWidgetBackgroundResult", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: "completed",
              result: {
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

        expect(result.outcome).toEqual("completed");
        expect(result.result.id).toBeTruthy();
        expect(result.result.name).toBeTruthy();
      });
    });

    test("permission error", async () => {
      const promise = backgroundActionResultRunner(connection, "app-job-123456", MockWidgetCreateAction, { select: { id: true } });

      expect(mockUrqlClient.executeSubscription.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeSubscription.mock.calls[0][0].variables).toEqual({
        id: "app-job-123456",
      });

      mockUrqlClient.executeSubscription.pushResponse("CreateWidgetBackgroundResult", {
        error: new CombinedError({
          graphQLErrors: [
            {
              message: "GGT_PERMISSION_DENIED: Permission denied to access this resource.",
              locations: [
                {
                  line: 2,
                  column: 3,
                },
              ],
              path: ["backgroundAction"],
            },
          ],
        }),
        stale: false,
        hasNext: false,
      });

      await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(
        `"[GraphQL] GGT_PERMISSION_DENIED: Permission denied to access this resource."`
      );
    });
  });

  describe("live", () => {
    beforeEach(() => {
      connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
      jest.replaceProperty(connection, "baseSubscriptionClient", mockGraphQLWSClient as any);
    });

    describe("findOneRunner", () => {
      test("can run a live findOne find", async () => {
        const iterator = asyncIterableToIterator(
          findOneRunner<{ id: string; name: string }, { live: true }>(
            {
              connection,
            },
            "widget",
            "123",
            { id: true, name: true },
            "widget",
            { live: true },
            true
          )
        );

        const firstValuePromise = iterator.next();

        await waitForExpectationToPass(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

        const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
        expect(subscription.payload.query).toContain("@live");

        subscription.push({
          data: {
            widget: {
              id: "123",
              name: "test widget",
            },
          },
          revision: 1,
        } as any);

        let { value } = await firstValuePromise;
        expect(value.id).toEqual("123");
        expect(value.name).toEqual("test widget");

        subscription.push({
          patch: {
            widget: {
              name: [null, "a new name"],
            },
          },
          revision: 2,
        } as any);

        ({ value } = await iterator.next());
        expect(value.id).toEqual("123");
        expect(value.name).toEqual("a new name");
      });

      test("can run a live findOne find that returns an error", async () => {
        const iterator = asyncIterableToIterator(
          findOneRunner<{ id: string; name: string }, { live: true }>(
            {
              connection,
            },
            "widget",
            "123",
            { id: true, name: true },
            "widget",
            { live: true },
            true
          )
        );

        const firstValuePromise = iterator.next();

        await waitForExpectationToPass(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

        const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
        expect(subscription.payload.query).toContain("@live");

        subscription.push({
          errors: [{ message: "backend error encountered processing" }],
        } as any);

        await expect(firstValuePromise).rejects.toThrowErrorMatchingInlineSnapshot(`"[GraphQL] backend error encountered processing"`);
      });

      test("can run a live findOne that starts with working data then later returns an error", async () => {
        const iterator = asyncIterableToIterator(
          findOneRunner<{ id: string; name: string }, { live: true }>(
            {
              connection,
            },
            "widget",
            "123",
            { id: true, name: true },
            "widget",
            { live: true },
            true
          )
        );

        const firstValuePromise = iterator.next();

        await waitForExpectationToPass(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

        const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
        expect(subscription.payload.query).toContain("@live");

        subscription.push({
          data: {
            widget: {
              id: "123",
              name: "test widget",
            },
          },
          revision: 1,
        } as any);

        expect(await firstValuePromise).toBeTruthy();

        const nextValuePromise = iterator.next();

        subscription.push({
          data: null,
          errors: [new GraphQLError("backend exploded")],
        });

        await expect(nextValuePromise).rejects.toThrowErrorMatchingInlineSnapshot(`"[GraphQL] backend exploded"`);
      });
    });

    describe("findManyRunner", () => {
      test("can run a live findMany", async () => {
        const iterator = asyncIterableToIterator(
          findManyRunner<{ id: string; name: string }, { live: true }>(
            { connection } as AnyPublicModelManager,
            "widgets",
            { id: true, name: true },
            "widget",
            { live: true },
            true
          )
        );

        const firstValuePromise = iterator.next();
        await waitForExpectationToPass(() => expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1));

        const subscription = mockGraphQLWSClient.subscribe.subscriptions[0];
        expect(subscription.payload.query).toContain("@live");

        const initial = {
          widgets: {
            edges: [
              {
                node: {
                  id: "123",
                  name: "test 1",
                },
              },
              {
                node: {
                  id: "456",
                  name: "test 2",
                },
              },
            ],
          },
        };

        subscription.push({
          data: initial,
          revision: 1,
        } as any);

        let { value } = await firstValuePromise;
        expect(value[0].id).toEqual("123");
        expect(value[1].id).toEqual("456");

        const next = {
          widgets: {
            edges: [
              {
                node: {
                  id: "123",
                  name: "a new name",
                },
              },
              {
                node: {
                  id: "456",
                  name: "test 2",
                },
              },
              {
                node: {
                  id: "789",
                  name: null,
                },
              },
            ],
          },
        };

        subscription.push({
          patch: diff({ left: initial, right: next }),
          revision: 2,
        } as any);

        ({ value } = await iterator.next());
        expect(value[0].id).toEqual("123");
        expect(value[0].name).toEqual("a new name");
        expect(value[1].name).toEqual("test 2");
        expect(value[2].id).toEqual("789");
        expect(value[2].name).toEqual(null);
      });
    });
  });
});
