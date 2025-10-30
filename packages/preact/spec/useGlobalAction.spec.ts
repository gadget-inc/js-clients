import { renderHook } from "@testing-library/preact";
import { act } from "preact/test-utils";
import { useGlobalAction } from "../src/index.js";
import { bulkExampleApi, kitchenSinkApi } from "./apis.js";
import { MockClientWrapper, createMockUrqlClient, mockUrqlClient } from "./testWrappers.js";

describe("useGlobalAction", () => {
  test("returns no data, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useGlobalAction(bulkExampleApi.flipAll), { wrapper: MockClientWrapper(bulkExampleApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useGlobalAction(bulkExampleApi.flipAll), { wrapper: MockClientWrapper(bulkExampleApi, client) });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeMutation).toBeCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "mutation flipAll($why: String) {
        flipAll(why: $why) {
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
          result
        }
      }"
    `);

    await client.executeMutation.pushResponse("flipAll", {
      data: {
        flipAll: {
          success: true,
          result: { flipped: true },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data).toEqual({ flipped: true });
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data).toEqual({ flipped: true });
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns an error when the mutation is run and the server responds with success: false", async () => {
    const { result } = renderHook(() => useGlobalAction(bulkExampleApi.flipAll), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("flipAll", {
      data: {
        flipAll: {
          success: false,
          errors: [
            {
              message: "Something went wrong in the backend",
              code: "GGT_UNKNOWN",
            },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeTruthy();
    });

    expect(result.current[0].fetching).toBe(false);
    const error = result.current[0].error;
    expect(error).toBeTruthy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds for a namespaced global action", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useGlobalAction(kitchenSinkApi.game.calculateScore), {
      wrapper: MockClientWrapper(kitchenSinkApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeMutation).toBeCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "mutation calculateScore($why: String) {
        game {
          calculateScore(why: $why) {
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
            result
          }
        }
      }"
    `);

    await client.executeMutation.pushResponse("calculateScore", {
      data: {
        game: {
          calculateScore: {
            success: true,
            result: { score: 10 },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data).toEqual({ score: 10 });
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data).toEqual({ score: 10 });
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns the same data after executing the mutation and rerendering", async () => {
    const { result, rerender } = renderHook(() => useGlobalAction(bulkExampleApi.flipAll), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("flipAll", {
      data: {
        flipAll: {
          success: true,
          result: { flipped: true },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await mutationPromise;
    });

    const beforeObject = result.current[0];

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });

  test("sends a stubbedActionError event when the action is stubbed", () => {
    let eventDispatched: CustomEvent | undefined;

    globalThis.addEventListener("gadget:devharness:stubbedActionError", (event) => {
      eventDispatched = event as CustomEvent;
    });

    const { result, rerender } = renderHook(
      () =>
        useGlobalAction({
          // @ts-expect-error intentionally passing the wrong type
          type: "stubbedAction",
          reason: "MissingApiTrigger",
          dataPath: "fakePath",
          functionName: "fakeAction",
          actionApiIdentifier: "fakeAction",
          variables: {},
          plan: () => ({
            query: "",
            variables: {},
          }),
          processResult: () => ({
            data: {},
            fetching: false,
            error: undefined,
          }),
        }),
      {
        wrapper: MockClientWrapper(bulkExampleApi),
      }
    );

    expect(eventDispatched).toBeTruthy();
    expect(eventDispatched!.detail).toEqual({
      reason: "MissingApiTrigger",
      action: {
        functionName: "fakeAction",
        actionApiIdentifier: "fakeAction",
        dataPath: "fakePath",
      },
    });
  });
});
