import type { GadgetRecord } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";
import type { Has, IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { useGet } from "../src/useGet.js";
import type { ErrorWrapper } from "../src/utils.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useGet", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestGetReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useGet(relatedProductsApi.currentSession, { select: { id: true, state: true } });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<Has<typeof data, undefined | GadgetRecord<{ id: string; state: any }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.state;
    }

    // hook return value includes the urql refresh function
    refresh();
  };

  const _TestGetReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useGet(relatedProductsApi.currentSession);

    if (data) {
      data.id;
      data.state;
    }
  };

  test("it can find the current session", async () => {
    const { result } = renderHook(() => useGet(relatedProductsApi.currentSession), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("it can not find the current session if the server doesn't have one", async () => {
    const { result } = renderHook(() => useGet(relatedProductsApi.currentSession), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: null,
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data).toBe(null);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("it returns the same data on rerender", async () => {
    const { result, rerender } = renderHook(() => useGet(relatedProductsApi.currentSession), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
        },
      },
      stale: false,
      hasNext: false,
    });

    const beforeObject = result.current[0];

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });

  test("it can find the current session with suspense", async () => {
    const { result, rerender } = renderHook(() => useGet(relatedProductsApi.currentSession, { suspense: true }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();
    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
        },
      },
      stale: false,
      hasNext: false,
    });

    // rerender as react would do when the suspense promise resolves
    rerender();
    expect(result.current).toBeTruthy();

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].error).toBeFalsy();

    const beforeObject = result.current[0];

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });
});
