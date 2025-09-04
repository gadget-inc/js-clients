/**
 * @jest-environment ./spec/jsdom-environment.ts
 */

import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import React, { act } from "react";
import { Readable } from "stream";
import { useFetch } from "../src/useFetch.js";
import type { ErrorWrapper } from "../src/utils.js";
import { relatedProductsApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

const RelatedProductsWrapper = MockClientWrapper(relatedProductsApi);

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
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can fetch a string from the backend in strict mode", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper, reactStrictMode: true });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({})]);

    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch).toHaveBeenCalledTimes(2);
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

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual({ hello: 1 });
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

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

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
    act(() => {
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
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].streaming).toBe(false);
    expect(onStreamCompleteCalled).toBe("hello world");

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can fetch a string stream from the backend with a custom encoding", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { stream: "windows-1251", sendImmediately: false }), {
      wrapper: RelatedProductsWrapper,
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    let sendPromise: Promise<ReadableStream<string>>;
    act(() => {
      sendPromise = result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

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
    expect(result.current[0].streaming).toBe(true);

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
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can when a string stream is requested a second time in the middle of processing", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar", { stream: "string", sendImmediately: false }), {
      wrapper: RelatedProductsWrapper,
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    let firstSendPromise: Promise<ReadableStream<string>>;
    act(() => {
      firstSendPromise = result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const firstResponseStream = new Readable({ read() {} });

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({ sendImmediately: false })]);
    await mockUrqlClient.mockFetch.pushResponse(new Response(Readable.toWeb(firstResponseStream) as any));

    let firstStream: ReadableStream<string>;

    await act(async () => {
      firstStream = await firstSendPromise!;
    });

    const firstStreamReader = firstStream!.getReader();

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(result.current[0].data).toEqual("");
    expect(result.current[0].streaming).toBe(true);

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
    expect(result.current[0].streaming).toBe(true);

    let secondSendPromise: Promise<ReadableStream<string>>;
    act(() => {
      secondSendPromise = result.current[1]();
    });

    expect(result.current[0].data).toEqual("hello");
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(false);

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

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({ sendImmediately: false })]);
    await mockUrqlClient.mockFetch.pushResponse(new Response(Readable.toWeb(secondResponseStream) as any));

    let secondStream: ReadableStream<string>;

    await act(async () => {
      secondStream = await secondSendPromise!;
    });

    const secondStreamReader = secondStream!.getReader();

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].streaming).toBe(true);

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
    expect(result.current[0].streaming).toBe(true);

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
    expect(result.current[0].streaming).toBe(true);

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
    expect(result.current[0].streaming).toBe(false);

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(2);
  });

  test("it reports response errors from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("error response", { status: 500, statusText: "Internal Server Error" }));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toBeUndefined();
    expect(result.current[0].error).toBeTruthy();
    expect(result.current[0].error!.message).toMatchInlineSnapshot(`"[GraphQL] Internal Server Error"`);
    expect(result.current[0].error!.response).toBeTruthy();
    expect(result.current[0].error!.response.status).toEqual(500);

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  test("it can rexecute to fetch a new string from the backend", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));
    expect(result.current[0].data).toEqual("hello world");
    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);

    let reexecutePromise: Promise<string>;
    act(() => {
      reexecutePromise = result.current[1]();
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("hello canada"));

    const reexecuteResult = await reexecutePromise!;

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].data).toEqual("hello canada");

    expect(reexecuteResult).toEqual("hello canada");
  });

  test("it can recover from response errors if the next request succeeds", async () => {
    const { result } = renderHook(() => useFetch("/foo/bar"), { wrapper: RelatedProductsWrapper });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("error response", { status: 500 }));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeTruthy();

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);

    let reexecutePromise: Promise<string>;
    act(() => {
      reexecutePromise = result.current[1]();
    });

    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    await mockUrqlClient.mockFetch.pushResponse(new Response("fixed"));

    const reexecuteResult = await reexecutePromise!;

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
    expect(result.current[0].data).toEqual("fixed");

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

    act(() => {
      void result.current[1]();
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual(["/foo/bar", expect.objectContaining({ method: "POST" })]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
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

    act(() => {
      void result.current[1]({ headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) });
    });

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ method: "POST", headers: { "X-Test": "hello" }, body: JSON.stringify({ test: true }) }),
    ]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("hello world"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("hello world");
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);

    act(() => {
      void result.current[1]({ headers: { "X-Test": "other" }, body: "other body" });
    });

    expect(mockUrqlClient.mockFetch.requests[0].args).toEqual([
      "/foo/bar",
      expect.objectContaining({ method: "POST", headers: { "X-Test": "other" }, body: "other body" }),
    ]);
    await mockUrqlClient.mockFetch.pushResponse(new Response("second response"));

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual("second response");
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

    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].data).toEqual({ hello: 1 });
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.mockFetch).toBeCalledTimes(1);
  });

  const FetchTester = () => {
    const [{ data, fetching, error }, send] = useFetch("/test", {
      method: "POST",
      body: JSON.stringify({ body: true }),
      headers: {
        "content-type": "application/json",
      },
      json: true,
    });

    return (
      <div>
        <button data-testid="send" onClick={() => void send()}>
          Send
        </button>
        {fetching && <div role="spinner" className="loading" />}
        {error && (
          <div role="error" className="error">
            {String(error)}
          </div>
        )}
        {data && (
          <div role="data">
            <code>
              <pre>{JSON.stringify(data)}</pre>
            </code>
          </div>
        )}
      </div>
    );
  };

  describe.each([
    ["in lax mode", false],
    ["in strict mode", true],
  ])(`%s`, (_, strictMode) => {
    test("it can fetch a result in a component", async () => {
      render(<FetchTester />, {
        wrapper: RelatedProductsWrapper,
        reactStrictMode: strictMode,
      });

      await userEvent.click(screen.getByTestId("send"));
      await screen.findByRole("spinner");

      expect(screen.queryByRole("error")).not.toBeInTheDocument();

      expect(mockUrqlClient.mockFetch.requests[0].args).toEqual([
        "/test",
        expect.objectContaining({ headers: { accept: "application/json", "content-type": "application/json" } }),
      ]);
      await mockUrqlClient.mockFetch.pushResponse(new Response('{"hello":1}'));

      expect(await screen.findByRole("data")).toHaveTextContent(`{"hello":1}`);
    });
  });
});
