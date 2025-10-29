import type { AnyErrorWrapper } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useFetch } from "../src/useFetch.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFetchReturnsStringDataByDefault = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar");

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, string | undefined>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    // hook return value includes the urql refresh function
    void refresh().then((data) => {
      assert<IsExact<typeof data, string>>(true);
    });
  };

  const _TestFetchReturnsStreamInStreamingMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar", { stream: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, ReadableStream<Uint8Array> | undefined>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, ReadableStream<Uint8Array>>>(true);
    });
  };

  const _TestFetchReturnsStringInStringStreamingMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar", { stream: "string" });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, string | undefined>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, ReadableStream<string>>>(true);
    });
  };

  const _TestFetchReturnsAnyJSONInJSONMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch("/foo/bar", { json: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, Record<string, any> | undefined>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, Record<string, any>>>(true);
    });
  };

  const _TestFetchReturnsCustomJSONTypeInJSONMode = () => {
    const [{ data, fetching, error }, refresh] = useFetch<{ foo: "bar" }>("/foo/bar", { json: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, { foo: "bar" } | undefined>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    void refresh().then((data) => {
      assert<IsExact<typeof data, { foo: "bar" }>>(true);
    });
  };

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    connection.fetch = jest.fn() as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state, send] = useFetch("/api/test", { sendImmediately: false });

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(typeof send).toBe("function");

    expect(adapter.framework.useReducer).toHaveBeenCalled();
    expect(adapter.framework.useCallback).toHaveBeenCalled();
    expect(adapter.framework.useEffect).toHaveBeenCalled();
  });

  it("should start fetching immediately for GET requests", () => {
    const connection = createMockConnection();
    // @ts-expect-error - Mock response type
    (connection.fetch as any) = jest.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("response"),
    });

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state] = useFetch("/api/test");

    // Default behavior for GET is to start immediately
    expect(state.fetching).toBe(true);
  });

  it("should not start immediately for POST requests", () => {
    const connection = createMockConnection();
    connection.fetch = jest.fn() as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state] = useFetch("/api/test", { method: "POST" });

    expect(state.fetching).toBe(false);
  });

  it("should respect sendImmediately option", () => {
    const connection = createMockConnection();
    connection.fetch = jest.fn() as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state] = useFetch("/api/test", { sendImmediately: false });

    expect(state.fetching).toBe(false);
  });

  it("should support JSON option", () => {
    const connection = createMockConnection();
    connection.fetch = jest.fn() as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [, send] = useFetch("/api/test", { json: true, sendImmediately: false });

    expect(typeof send).toBe("function");
  });

  it("should support custom headers", () => {
    const connection = createMockConnection();
    connection.fetch = jest.fn() as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const headers = { "X-Custom-Header": "value" };
    useFetch("/api/test", { headers, sendImmediately: false });

    expect(adapter.framework.useCallback).toHaveBeenCalled();
  });

  it("should support POST with body", () => {
    const connection = createMockConnection();
    connection.fetch = jest.fn() as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const body = JSON.stringify({ data: "test" });
    useFetch("/api/test", { method: "POST", body, sendImmediately: false });

    expect(adapter.framework.useCallback).toHaveBeenCalled();
  });

  it("should support streaming responses", () => {
    const connection = createMockConnection();
    connection.fetch = jest.fn() as any;

    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    useFetch("/api/stream", { stream: "string", sendImmediately: false });

    expect(adapter.framework.useRef).toHaveBeenCalled();
    expect(adapter.framework.useCallback).toHaveBeenCalled();
  });
});
