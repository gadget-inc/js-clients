import { $gadgetConnection } from "@gadgetinc/api-client-core";
import { act, renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { Readable } from "stream";
import { useFetch } from "../src/useFetch";
import type { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";
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

  const _TestFetchReturnsStringInStringStreamingMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar", { stream: "string" });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, string | undefined>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, ReadableStream<string>>>(true);
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
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can fetch json from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { json: true }), { wrapper: TestWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ headers: { accept: "application/json" } }),
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response('{"hello": 1}'));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual({ hello: 1 });
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can fetch stream from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { stream: true }), { wrapper: TestWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const responseStream = new Readable({ read() {} });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response(Readable.toWeb(responseStream) as any));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    const stream = result.current[0].data;
    const reader = stream!.getReader();

    responseStream.push("hello world");
    expect(await reader.read()).toMatchInlineSnapshot(`
      {
        "done": false,
        "value": Uint8Array [
          104,
          101,
          108,
          108,
          111,
          32,
          119,
          111,
          114,
          108,
          100,
        ],
      }
    `);

    responseStream.push(null);
    expect(await reader.read()).toMatchInlineSnapshot(`
      {
        "done": true,
        "value": undefined,
      }
    `);

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can fetch a string stream from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { stream: "string", sendImmediately: false }), {
      wrapper: TestWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    let sendPromise: Promise<ReadableStream<string>>;
    act(() => {
      sendPromise = result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const responseStream = new Readable({ read() {} });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ sendImmediately: false }),
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response(Readable.toWeb(responseStream) as any));

    let stream: ReadableStream<string>;

    await act(async () => {
      stream = await sendPromise!;
    });

    const streamReader = stream!.getReader();

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(result.current[0].data).toEqual("");

    await act(async () => {
      responseStream.push("hello");
      expect(await streamReader.read()).toMatchInlineSnapshot(`
        {
          "done": false,
          "value": "hello",
        }
      `);
    });
    expect(result.current[0].data).toEqual("hello");

    await act(async () => {
      responseStream.push(" world");
      expect(await streamReader.read()).toMatchInlineSnapshot(`
        {
          "done": false,
          "value": " world",
        }
      `);
    });
    expect(result.current[0].data).toEqual("hello world");

    await act(async () => {
      responseStream.push(null);
      expect(await streamReader.read()).toMatchInlineSnapshot(`
        {
          "done": true,
          "value": undefined,
        }
      `);
    });
    expect(result.current[0].data).toEqual("hello world");

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can fetch a string stream from the backend with a custom encoding", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { stream: "windows-1251", sendImmediately: false }), {
      wrapper: TestWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    let sendPromise: Promise<ReadableStream<string>>;
    act(() => {
      sendPromise = result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const responseStream = new Readable({ read() {} });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ sendImmediately: false }),
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response(Readable.toWeb(responseStream) as any));

    let stream: ReadableStream<string>;

    await act(async () => {
      stream = await sendPromise!;
    });

    const streamReader = stream!.getReader();

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(result.current[0].data).toEqual("");

    await act(async () => {
      const bytes = new Uint8Array([207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33]);

      responseStream.push(bytes);
      expect(await streamReader.read()).toMatchInlineSnapshot(`
        {
          "done": false,
          "value": "Привет, мир!",
        }
      `);
    });

    expect(result.current[0].data).toEqual("Привет, мир!");

    await act(async () => {
      responseStream.push(null);
      expect(await streamReader.read()).toMatchInlineSnapshot(`
        {
          "done": true,
          "value": undefined,
        }
      `);
    });
    expect(result.current[0].data).toEqual("Привет, мир!");

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can when a string stream is requested a second time in the middle of processing", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { stream: "string", sendImmediately: false }), {
      wrapper: TestWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    let firstSendPromise: Promise<ReadableStream<string>>;
    act(() => {
      firstSendPromise = result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const firstResponseStream = new Readable({ read() {} });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ sendImmediately: false }),
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response(Readable.toWeb(firstResponseStream) as any));

    let firstStream: ReadableStream<string>;

    await act(async () => {
      firstStream = await firstSendPromise!;
    });

    const firstStreamReader = firstStream!.getReader();

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(result.current[0].data).toEqual("");

    await act(async () => {
      firstResponseStream.push("hello");
      expect(await firstStreamReader.read()).toMatchInlineSnapshot(`
        {
          "done": false,
          "value": "hello",
        }
      `);
    });
    expect(result.current[0].data).toEqual("hello");

    let secondSendPromise: Promise<ReadableStream<string>>;
    act(() => {
      secondSendPromise = result.current[1]();
    });

    expect(result.current[0].data).toEqual("hello");
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await act(async () => {
      firstResponseStream.push(" world");
      expect(await firstStreamReader.read()).toMatchInlineSnapshot(`
        {
          "done": false,
          "value": " world",
        }
      `);
    });
    expect(result.current[0].data).toEqual("hello");

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const secondResponseStream = new Readable({ read() {} });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ sendImmediately: false }),
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response(Readable.toWeb(secondResponseStream) as any));

    let secondStream: ReadableStream<string>;

    await act(async () => {
      secondStream = await secondSendPromise!;
    });

    const secondStreamReader = secondStream!.getReader();

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(result.current[0].data).toEqual("");

    await act(async () => {
      secondResponseStream.push("hey");
      expect(await secondStreamReader.read()).toMatchInlineSnapshot(`
        {
          "done": false,
          "value": "hey",
        }
      `);
    });
    expect(result.current[0].data).toEqual("hey");

    await act(async () => {
      secondResponseStream.push(" there!");
      expect(await secondStreamReader.read()).toMatchInlineSnapshot(`
        {
          "done": false,
          "value": " there!",
        }
      `);
    });
    expect(result.current[0].data).toEqual("hey there!");

    await act(async () => {
      secondResponseStream.push(null);
      expect(await secondStreamReader.read()).toMatchInlineSnapshot(`
        {
          "done": true,
          "value": undefined,
        }
      `);
    });
    expect(result.current[0].data).toEqual("hey there!");

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(2);
  });

  test("it reports response errors from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(
      new Response("error response", { status: 500, statusText: "Internal Server Error" })
    );

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toBeUndefined();
    expect(result.current[0].error).toBeTruthy();
    expect(result.current[0].error!.message).toMatchInlineSnapshot(`"[GraphQL] Internal Server Error"`);
    expect(result.current[0].error!.response).toBeTruthy();
    expect(result.current[0].error!.response.status).toEqual(500);

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it can rexecute to fetch a new string from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper(relatedProductsApi) });

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
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper(relatedProductsApi) });

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
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: TestWrapper(relatedProductsApi) });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);
  });

  test("it automatically starts sending requests with the GET method specified", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET" }), { wrapper: TestWrapper(relatedProductsApi) });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it does not automatically start sending requests with the GET method specified but sendImmediately: false", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET", sendImmediately: false }), {
      wrapper: TestWrapper(relatedProductsApi),
    });

    expect(result.current[0].fetching).toBe(false);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(0);
  });

  test("it doesn't automatically start sending POST requests by default", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "POST" }), { wrapper: TestWrapper(relatedProductsApi) });

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

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({ method: "POST" })]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("it automatically starts sending requests with the POST method specified and sendImmediately: true", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET", sendImmediately: true }), {
      wrapper: TestWrapper(relatedProductsApi),
    });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });

  test("POST requests can be given options when executed", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "POST" }), { wrapper: TestWrapper(relatedProductsApi) });

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(0);

    let reexecutePromise: Promise<string>;
    act(() => {
      reexecutePromise = result.current[1]({ headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) });
    });

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ method: "POST", headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) }),
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
      expect.objectContaining({ method: "POST", headers: { "X-Test": "other" }, body: "other body" }),
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response("second response"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("second response");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(2);
  });

  test("it can fetch json from third party apis", async () => {
    const { result } = renderHook(() => useFetch("https://dummyjson.com/products", { json: true }), {
      wrapper: TestWrapper(relatedProductsApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch.requests[0].args).toEqual([
      "https://dummyjson.com/products",
      expect.objectContaining({ headers: { accept: "application/json" } }),
    ]);
    await mockUrqlClient[$gadgetConnection].fetch.pushResponse(new Response('{"hello": 1}'));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual({ hello: 1 });
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient[$gadgetConnection].fetch).toBeCalledTimes(1);
  });
});
