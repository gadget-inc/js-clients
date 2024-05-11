import { renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { act } from "react-dom/test-utils";
import { useGlobalAction } from "../src/index.js";
import type { ErrorWrapper } from "../src/utils.js";
import { bulkExampleApi, kitchenSinkApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useGlobalAction", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestUseGlobalActionCanRunGlobalActionsWithVariables = () => {
    const [{ data, fetching, error }, mutate] = useGlobalAction(bulkExampleApi.flipAll);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, any>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // can call with variables
    void mutate({ why: "foobar" });

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const _TestUseNamespacedGlobalAction = () => {
    const [{ data, fetching, error }, mutate] = useGlobalAction(kitchenSinkApi.game.calculateScore);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, any>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // can call with variables
    void mutate({ why: "foobar" });

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  test("returns no data, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useGlobalAction(bulkExampleApi.flipAll), { wrapper: MockClientWrapper(bulkExampleApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds", async () => {
    const { result } = renderHook(() => useGlobalAction(bulkExampleApi.flipAll), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("flipAll", {
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
    act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("flipAll", {
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
    const { result } = renderHook(() => useGlobalAction(kitchenSinkApi.game.calculateScore), {
      wrapper: MockClientWrapper(kitchenSinkApi),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("calculateScore", {
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
    act(() => {
      mutationPromise = result.current[1]({ why: "foobar" });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("flipAll", {
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
});
