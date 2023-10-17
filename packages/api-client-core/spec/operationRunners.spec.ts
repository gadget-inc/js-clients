import { diff } from "@n1ru4l/json-patch-plus";
import { CombinedError } from "@urql/core";
import { GraphQLError } from "graphql";
import nock from "nock";
import type { AnyModelManager, GadgetErrorGroup } from "../src/index.js";
import { GadgetConnection, actionRunner, findManyRunner, findOneRunner } from "../src/index.js";
import { asyncIterableToIterator } from "./helpers.js";
import { mockGraphQLWSClient, mockUrqlClient } from "./mockUrqlClient.js";

nock.disableNetConnect();

// eslint-disable-next-line jest/no-export
describe("operationRunners", () => {
  let connection: GadgetConnection;

  describe("static", () => {
    beforeEach(() => {
      connection = new GadgetConnection({ endpoint: "https://someapp.gadget.app" });
      jest.spyOn(connection, "currentClient", "get").mockReturnValue(mockUrqlClient as any);
    });

    describe("findOneRunner", () => {
      test("can run a single findOne find", async () => {
        const promise = findOneRunner(
          {
            connection,
          },
          "widget",
          "123",
          { id: true, name: true },
          "widget",
          {},
          true
        );

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

      test("returns an error if the backend returns an error", async () => {
        const promise = findOneRunner(
          {
            connection,
          },
          "widget",
          "123",
          { id: true, name: true },
          "widget",
          {},
          true
        );

        mockUrqlClient.executeQuery.pushResponse("widget", {
          data: null,
          error: new CombinedError({ networkError: new Error("backend exploded") }),
          stale: false,
          hasNext: false,
        });

        await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"[Network] backend exploded"`);
      });
    });

    describe("findManyRunner", () => {
      test("can run a findMany", async () => {
        const promise = findManyRunner({ connection } as AnyModelManager, "widgets", { id: true, name: true }, "widget", {}, true);

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
        expect(result[0].id).toBeTruthy();
        expect(result[0].name).toBeTruthy();
      });
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

      test("can throw a transport error", async () => {
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
          data: null,
          error: new CombinedError({ networkError: new Error("backend exploded") }),
          stale: false,
          hasNext: false,
        });

        await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(`"[Network] backend exploded"`);
      });

      test("can throw the error returned by the server in the mutation result for a single action", async () => {
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

        await Promise.resolve();

        expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1);
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

      test("can run a live findOne find with returns an error", async () => {
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

        await Promise.resolve();

        expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1);
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

        await Promise.resolve();

        expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1);
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
            { connection } as AnyModelManager,
            "widgets",
            { id: true, name: true },
            "widget",
            { live: true },
            true
          )
        );

        const firstValuePromise = iterator.next();
        await Promise.resolve();

        expect(mockGraphQLWSClient.subscribe.subscriptions).toHaveLength(1);
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
