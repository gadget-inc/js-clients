import { renderHook } from "@testing-library/react";
import { act } from "react";
import { useGet } from "../src/hooks.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

describe("useGet", () => {
  test("it can find the current session", async () => {
    const { result } = renderHook(() => useGet(relatedProductsApi.currentSession), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    await mockUrqlClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("it can not find the current session if the server doesn't have one", async () => {
    const { result } = renderHook(() => useGet(relatedProductsApi.currentSession), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toBeCalledTimes(1);

    await mockUrqlClient.executeQuery.pushResponse("currentSession", {
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

    await mockUrqlClient.executeQuery.pushResponse("currentSession", {
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

    await act(async () => {
      await mockUrqlClient.executeQuery.waitForSubject("currentSession");
      await mockUrqlClient.executeQuery.pushResponse("currentSession", {
        data: {
          currentSession: {
            id: "123",
          },
        },
        stale: false,
        hasNext: false,
      });
    });

    // rerender as react would do when the suspense promise resolves
    rerender();
    expect(result.current).toBeTruthy();

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].error).toBeFalsy();

    const beforeObject = result.current[0];

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });
});
