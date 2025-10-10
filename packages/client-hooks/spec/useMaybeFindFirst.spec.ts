import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useMaybeFindFirst } from "../src/useMaybeFindFirst.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useMaybeFindFirst", () => {
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
      findFirst: {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
      },
    };

    connection.findFirstOperation = jest.fn(() => ({
      query: "query users { users(first: 1) { edges { node { id email } } } }",
      variables: {},
    }));

    const [state, refetch] = useMaybeFindFirst(mockManager);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should not throw error when no data is found", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findFirst: {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true },
        namespace: [],
      },
    };

    connection.findFirstOperation = jest.fn(() => ({
      query: "query users { users(first: 1) { edges { node { id } } } }",
      variables: {},
    }));

    // Mock useQuery to return empty result
    adapter.urql.useQuery = jest.fn(() => [
      {
        fetching: false,
        stale: false,
        data: { users: { edges: [] } },
        error: undefined,
      },
      jest.fn(),
    ]) as any;

    const [state] = useMaybeFindFirst(mockManager);

    // Should not throw error, data should be null/undefined
    expect(state.error).toBeUndefined();
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findFirst: {
        type: "findFirst",
        operationName: "players",
        modelApiIdentifier: "game.player",
        defaultSelection: { id: true, name: true },
        namespace: ["game"],
      },
    };

    connection.findFirstOperation = jest.fn(() => ({
      query: "query players { game { players(first: 1) { edges { node { id name } } } } }",
      variables: {},
    }));

    useMaybeFindFirst(mockManager);

    expect(connection.findFirstOperation).toHaveBeenCalledWith("players", { id: true, name: true }, "game.player", undefined, ["game"]);
  });

  it("should pass options correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findFirst: {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true },
        namespace: [],
      },
    };

    connection.findFirstOperation = jest.fn(() => ({
      query: "query users { users(first: 1) { edges { node { id } } } }",
      variables: {},
    }));

    useMaybeFindFirst(mockManager, {
      filter: { email: { equals: "test@test.com" } },
      pause: true,
    });

    expect(connection.findFirstOperation).toHaveBeenCalledWith(
      "users",
      { id: true },
      "user",
      { filter: { email: { equals: "test@test.com" } }, pause: true },
      []
    );
  });
});
