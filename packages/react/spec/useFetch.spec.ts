import { $gadgetConnection } from "@gadgetinc/api-client-core";
import { act, renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { Response } from "cross-fetch";
import { useFetch } from "../src/useFetch";
import type { ErrorWrapper } from "../src/utils";
import { TestWrapper, mockUrqlClient } from "./testWrapper";

describe("useFetch", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFetchReturnsStringDataByDefault = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar");

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, string | undefined>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // hook return value includes the urql refresh function
    void refresh().then((data) => {
      assert<IsExact<typeof data, string>>(true);
    });
  };

  const _TestFetchReturnsStreamInStreamingMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar", { stream: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, ReadableStream<Uint8Array> | undefined>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, ReadableStream<Uint8Array>>>(true);
    });
  };

  const _TestFetchReturnsAnyJSONInJSONMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar", { json: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, Record<string, any> | undefined>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, Record<string, any>>>(true);
    });
  };

  const _TestFetchReturnsCustomJSONTypeInJSONMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch<{ foo: "bar" }>("/foo/bar", { json: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, { foo: "bar" } | undefined>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, { foo: "bar" }>>(true);
    });
  };

  test("it can fetch a string from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", {}]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can fetch json from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { json: true }), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", { headers: { accept: "application/json" } }]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response('{"hello": 1}'));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual({ hello: 1 });
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it reports response errors from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("error response", { status: 500 }));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toBeUndefined();
    expect(result.current[0].error).toBeTruthy();
    expect(result.current[0].error!.message).toMatchInlineSnapshot(`"[GraphQL] Internal Server Error"`);
    expect(result.current[0].error!.response).toBeTruthy();
    expect(result.current[0].error!.response.status).toEqual(500);

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can rexecute to fetch a new string from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper });

    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("hello world"));
    expect(result.current[0].data).toEqual("hello world");
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);

    let reexecutePromise: Promise<string>;
    act(() => {
      reexecutePromise = result.current[1]();
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("hello canada"));

    const reexecuteResult = await reexecutePromise!;

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].data).toEqual("hello canada");

    expect(reexecuteResult).toEqual("hello canada");
  });

  test("it can recover from response errors if the next request succeeds", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("error response", { status: 500 }));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeTruthy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);

    let reexecutePromise: Promise<string>;
    act(() => {
      reexecutePromise = result.current[1]();
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("fixed"));

    const reexecuteResult = await reexecutePromise!;

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].data).toEqual("fixed");

    expect(reexecuteResult).toEqual("fixed");
  });

  test("it automatically starts sending requests with no method specified", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", {}]);
  });

  test("it automatically starts sending requests with the GET method specified", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET" }), { wrapper: TestWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it does not automatically start sending requests with the GET method specified but sendImmediately: false", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET", sendImmediately: false }), { wrapper: TestWrapper });

    expect(result.current[0].fetching).toBe(false);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(0);
  });

  test("it doesn't automatically start sending POST requests by default", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "POST" }), { wrapper: TestWrapper });

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(0);
    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    let reexecutePromise: Promise<string>;
    act(() => {
      reexecutePromise = result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", { method: "POST" }]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it automatically starts sending requests with the POST method specified and sendImmediately: true", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET", sendImmediately: true }), { wrapper: TestWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("POST requests can be given options when executed", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "POST" }), { wrapper: TestWrapper });

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(0);

    let reexecutePromise: Promise<string>;
    act(() => {
      reexecutePromise = result.current[1]({ headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) });
    });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      { method: "POST", headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) },
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);

    act(() => {
      reexecutePromise = result.current[1]({ headers: { "X-Test": "other" }, body: "other body" });
    });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      { method: "POST", headers: { "X-Test": "other" }, body: "other body" },
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("second response"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("second response");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(2);
  });

  test("it can fetch json from third party apis", async () => {
    const { result } = renderHook(() => useFetch("https://dummyjson.com/products", { json: true }), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "https://dummyjson.com/products",
      { headers: { accept: "application/json" } },
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response('{"hello": 1}'));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual({ hello: 1 });
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });
});
