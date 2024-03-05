import nock from "nock";
import { BackgroundActionHandle } from "../src/BackgroundActionHandle.js";
import type { GadgetErrorGroup } from "../src/index.js";
import { GadgetConnection, actionResultRunner, actionRunner, enqueueActionRunner } from "../src/index.js";
import { MockBulkFlipDownWidgetsAction, MockBulkUpdateWidgetAction, MockGlobalAction, MockWidgetCreateAction } from "./mockActions.js";
import { mockUrqlClient } from "./mockUrqlClient.js";

nock.disableNetConnect();

// eslint-disable-next-line jest/no-export
describe("operationRunners", () => {
  let connection: GadgetConnection;
  beforeEach(() => {
    connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    jest.spyOn(connection, "currentClient", "get").mockReturnValue(mockUrqlClient as any);
  });

  describe("actionRunner", () => {
    test("can run a single create action", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        {
          connection,
        },
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
        {
          connection,
        },
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

    test("can throw the error returned by the server for a single action", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        {
          connection,
        },
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
        {
          connection,
        },
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
        {
          connection,
        },
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

    test("throws a nice error when a bulk action returns errors", async () => {
      const promise = actionRunner<{ id: string; name: string }>(
        {
          connection,
        },
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
        {
          connection,
        },
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
        {
          connection,
        },
        "bulkDeleteWidgets",
        { id: true, name: true },
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
      expect(mockUrqlClient.executeMutation.mock.calls[0][1].requestPolicy).toEqual("network-only");
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
          priority: "high",
        }
      );

      expect(mockUrqlClient.executeMutation.mock.calls.length).toEqual(1);
      expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
        backgroundOptions: { priority: "high" },
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

    test("can enqueue a bulk action with ids only and return a handle", async () => {
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
              backgroundAction: {
                id: "widget-bulkFlipWidgets-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handle = await promise;
      expect(handle).toBeInstanceOf(BackgroundActionHandle);
      expect(handle.id).toEqual("widget-bulkFlipWidgets-123");
    });

    test("can enqueue a bulk action with a list of inputs and return a handle", async () => {
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
              backgroundAction: {
                id: "background-123",
              },
            },
          },
        },
        stale: false,
        hasNext: false,
      });

      const handle = await promise;
      expect(handle).toBeInstanceOf(BackgroundActionHandle);
      expect(handle.id).toEqual("background-123");
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
      test("handles background action without an outcome", async () => {
        const promise = actionResultRunner(connection, "app-job-123456", MockWidgetCreateAction, { widget: { name: "new widget" } });

        expect(mockUrqlClient.executeQuery.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeQuery.pushResponse("createWidget", {
          data: {
            backgroundAction: {
              id: "app-job-123456",
              outcome: null,
              result: null,
            },
          },
          stale: false,
          hasNext: false,
        });

        const result = await promise;

        expect(result.outcome).toBeNull();
        expect(result.result).toBeNull();
      });

      test("handles background action with a completed result", async () => {
        const promise = actionResultRunner(connection, "app-job-123456", MockWidgetCreateAction, { widget: { name: "new widget" } });

        expect(mockUrqlClient.executeQuery.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeQuery.pushResponse("createWidget", {
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

      test("handles background action with a failed result", async () => {
        const promise = actionResultRunner(connection, "app-job-123456", MockWidgetCreateAction, { widget: { name: "new widget" } });

        expect(mockUrqlClient.executeQuery.mock.calls.length).toEqual(1);
        expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
          id: "app-job-123456",
        });

        mockUrqlClient.executeQuery.pushResponse("createWidget", {
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
  });
});
