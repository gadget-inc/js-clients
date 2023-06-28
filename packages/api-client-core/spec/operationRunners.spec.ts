import nock from "nock";
import type { AnyPublicModelManager, GadgetErrorGroup } from "../src/index.js";
import { GadgetConnection, actionRunner } from "../src/index.js";
import { mockUrqlClient } from "./mockUrqlClient.js";

nock.disableNetConnect();

// eslint-disable-next-line jest/no-export
describe("operationRunners", () => {
  let connection: GadgetConnection;
  let manager: AnyPublicModelManager;
  beforeEach(() => {
    connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
    jest.spyOn(connection, "currentClient", "get").mockReturnValue(mockUrqlClient as any);
    manager = { connection } as AnyPublicModelManager;
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
});
