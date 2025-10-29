/**
 * @jest-environment ./spec/jsdom-environment.ts
 */

import { renderHook, waitFor } from "@testing-library/preact";
import { act } from "preact/test-utils";
import { Readable } from "stream";
import { useFetch } from "../src/hooks.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

const RelatedProductsWrapper = MockClientWrapper(relatedProductsApi);

describe("useFetch", () => {
  test("it can fetch a string from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual("hello world");
    });

    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can fetch json from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { json: true }), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ headers: { accept: "application/json" } }),
    ]);
    await mockUrqlClient.mockFetch.pushResponse(new Response('{"hello": 1}'));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual({ hello: 1 });
    });

    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can fetch stream from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { stream: true }), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const responseStream = new Readable({ read() {} });

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);
    await mockUrqlClient.mockFetch.pushResponse(new Response(Readable.toWeb(responseStream) as any));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
    });

    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    const stream = result.current[0].data!;
    const reader = stream.getReader();

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

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can fetch a string stream from the backend", async () => {
    let onStreamCompleteCalled: boolean | string = false;
    const { result } = renderHook(
      () =>
        useFetch("/foo/bar", {
          stream: "string",
          sendImmediately: false,
          onStreamComplete: (value) => {
            onStreamCompleteCalled = value;
          },
        }),
      {
        wrapper: RelatedProductsWrapper,
      }
    );

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);
    expect(onStreamCompleteCalled).toBe(false);

    let sendPromise: Promise<ReadableStream<string>>;
    await act(() => {
      sendPromise = result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);
    expect(onStreamCompleteCalled).toBe(false);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const responseStream = new Readable({ read() {} });

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({ sendImmediately: false })]);
    await mockUrqlClient.mockFetch.pushResponse(new Response(Readable.toWeb(responseStream) as any));

    let stream: ReadableStream<string>;

    await act(async () => {
      stream = await sendPromise!;
    });

    const streamReader = stream!.getReader();

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(true);
    expect(onStreamCompleteCalled).toBe(false);

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
    expect(result.current[0].streaming).toBe(true);
    expect(onStreamCompleteCalled).toBe(false);

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
    expect(result.current[0].streaming).toBe(true);
    expect(onStreamCompleteCalled).toBe(false);

    await act(async () => {
      responseStream.push(null);
      expect(await streamReader.read()).toMatchInlineSnapshot(`
        {
          "done": true,
          "value": undefined,
        }
      `);
    });

    await waitFor(() => {
      expect(result.current[0].streaming).toBe(false);
      expect(result.current[0].data).toEqual("hello world");
      expect(onStreamCompleteCalled).toBe("hello world");
    });

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it reports response errors from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("error response", { status: 500, statusText: "Internal Server Error" }));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].error).toBeTruthy();
    });

    expect(result.current[0].data).toBeUndefined();
    expect(result.current[0].error!.message).toMatchInlineSnapshot(`"[GraphQL] Internal Server Error"`);
    expect(result.current[0].error!.response).toBeTruthy();
    expect(result.current[0].error!.response.status).toEqual(500);

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can rexecute to fetch a new string from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    await waitFor(() => {
      expect(result.current[0].data).toEqual("hello world");
    });

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);

    let reexecutePromise: Promise<string>;
    await act(() => {
      reexecutePromise = result.current[1]();
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("hello canada"));

    const reexecuteResult = await reexecutePromise!;

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual("hello canada");
    });

    expect(result.current[0].error).toBeFalsy();
    expect(reexecuteResult).toEqual("hello canada");
  });

  test("it can recover from response errors if the next request succeeds", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("error response", { status: 500 }));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].error).toBeTruthy();
    });

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);

    let reexecutePromise: Promise<string>;
    await act(() => {
      reexecutePromise = result.current[1]();
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("fixed"));

    const reexecuteResult = await reexecutePromise!;

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual("fixed");
    });

    expect(result.current[0].error).toBeFalsy();
    expect(reexecuteResult).toEqual("fixed");
  });

  test("it automatically starts sending requests with no method specified", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);
  });

  test("it automatically starts sending requests with the GET method specified", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET" }), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it does not automatically start sending requests with the GET method specified but sendImmediately: false", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET", sendImmediately: false }), {
      wrapper: RelatedProductsWrapper,
    });

    expect(result.current[0].fetching).toBe(false);
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(0);
  });

  test("it doesn't automatically start sending POST requests by default", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "POST" }), { wrapper: RelatedProductsWrapper });

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(0);
    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    await act(() => {
      void result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({ method: "POST" })]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual("hello world");
    });

    expect(result.current[0].error).toBeFalsy();
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it automatically starts sending requests with the POST method specified and sendImmediately: true", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "GET", sendImmediately: true }), {
      wrapper: RelatedProductsWrapper,
    });

    expect(result.current[0].fetching).toBe(true);
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("POST requests can be given options when executed", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { method: "POST" }), { wrapper: RelatedProductsWrapper });

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(0);

    await act(() => {
      void result.current[1]({ headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) });
    });

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ method: "POST", headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) }),
    ]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual("hello world");
    });

    expect(result.current[0].error).toBeFalsy();
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);

    await act(() => {
      void result.current[1]({ headers: { "X-Test": "other" }, body: "other body" });
    });

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ method: "POST", headers: { "X-Test": "other" }, body: "other body" }),
    ]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("second response"));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual("second response");
    });

    expect(result.current[0].error).toBeFalsy();
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(2);
  });

  test("it can fetch json from third party apis", async () => {
    const { result } = renderHook(() => useFetch("https://dummyjson.com/products", { json: true }), {
      wrapper: RelatedProductsWrapper,
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual([
      "https://dummyjson.com/products",
      expect.objectContaining({ headers: { accept: "application/json" } }),
    ]);
    await mockUrqlClient.mockFetch.pushResponse(new Response('{"hello": 1}'));

    await waitFor(() => {
      expect(result.current[0].fetching).toBe(false);
      expect(result.current[0].data).toEqual({ hello: 1 });
    });

    expect(result.current[0].error).toBeFalsy();
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });
});
