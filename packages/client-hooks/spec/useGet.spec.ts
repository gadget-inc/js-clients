import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useGet } from "../src/useGet.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useGet", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: { id: true, userId: true },
        namespace: [],
      },
    };

    connection.getOperation = jest.fn(() => ({
      query: "query currentSession { currentSession { id userId } }",
      variables: {},
    }));

    const [state, refetch] = useGet(mockManager);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call connection.getOperation with correct parameters", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: { id: true, userId: true, createdAt: true },
        namespace: [],
      },
    };

    const mockOptions = { select: { id: true, userId: true } };

    connection.getOperation = jest.fn(() => ({
      query: "query currentSession { currentSession { id userId } }",
      variables: {},
    }));

    useGet(mockManager, mockOptions);

    expect(connection.getOperation).toHaveBeenCalledWith(
      "currentSession",
      { id: true, userId: true, createdAt: true },
      "session",
      mockOptions,
      []
    );
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "currentPlayer",
        modelApiIdentifier: "game.player",
        defaultSelection: { id: true, name: true },
        namespace: ["game"],
      },
    };

    connection.getOperation = jest.fn(() => ({
      query: "query currentPlayer { game { currentPlayer { id name } } }",
      variables: {},
    }));

    useGet(mockManager);

    expect(connection.getOperation).toHaveBeenCalledWith("currentPlayer", { id: true, name: true }, "game.player", undefined, ["game"]);
  });

  it("should pass query options correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: { id: true },
        namespace: [],
      },
    };

    connection.getOperation = jest.fn(() => ({
      query: "query currentSession { currentSession { id } }",
      variables: {},
    }));

    useGet(mockManager, { pause: true, requestPolicy: "network-only" });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({
      pause: true,
      requestPolicy: "network-only",
    });
  });

  it("should support suspense mode", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: { id: true },
        namespace: [],
      },
    };

    connection.getOperation = jest.fn(() => ({
      query: "query currentSession { currentSession { id } }",
      variables: {},
    }));

    useGet(mockManager, { suspense: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ suspense: true });
  });
});
