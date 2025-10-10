import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useFetch } from "../src/useFetch.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state, execute] = useFetch("/api/custom");

    expect(state.fetching).toBe(false);
    expect(state.streaming).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof execute).toBe("function");

    expect(adapter.framework.useState).toHaveBeenCalled();
  });

  it("should accept fetch options", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foo: "bar" }),
    };

    const [state] = useFetch("/api/custom", options);

    expect(state.options).toMatchObject(options);
  });

  it("should support json option", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state] = useFetch("/api/custom", { json: true });

    expect(state.options.json).toBe(true);
  });

  it("should support stream option", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state] = useFetch("/api/custom", { stream: true });

    expect(state.options.stream).toBe(true);
  });

  it("should support sendImmediately option for GET requests", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state] = useFetch("/api/custom", { sendImmediately: true });

    expect(state.options.sendImmediately).toBe(true);
    // For GET requests with sendImmediately, useEffect should be called to trigger fetch
    expect(adapter.framework.useEffect).toHaveBeenCalled();
  });

  it("should support onStreamComplete callback", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const onStreamComplete = jest.fn();
    const [state] = useFetch("/api/custom", { stream: "string", onStreamComplete });

    expect(state.options.stream).toBe("string");
    expect(state.options.onStreamComplete).toBe(onStreamComplete);
  });

  it("should use adapter hooks correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    useFetch("/api/custom");

    expect(adapter.framework.useState).toHaveBeenCalled();
    expect(adapter.framework.useCallback).toHaveBeenCalled();
    expect(adapter.framework.useEffect).toHaveBeenCalled();
  });

  it("should handle different HTTP methods", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    // POST request
    const [statePost] = useFetch("/api/create", { method: "POST" });
    expect(statePost.options.method).toBe("POST");

    // PUT request
    const [statePut] = useFetch("/api/update", { method: "PUT" });
    expect(statePut.options.method).toBe("PUT");

    // DELETE request
    const [stateDelete] = useFetch("/api/delete", { method: "DELETE" });
    expect(stateDelete.options.method).toBe("DELETE");
  });
});
