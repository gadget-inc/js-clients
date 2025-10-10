import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useMaybeFindOne } from "../src/useMaybeFindOne.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useMaybeFindOne", () => {
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
      findOne: {
        type: "findOne",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
      },
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($id: ID!) { user(id: $id) { id email } }",
      variables: { id: "123" },
    }));

    const [state, refetch] = useMaybeFindOne(mockManager, "123");

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should not throw error when data is null", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findOne: {
        type: "findOne",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
      },
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($id: ID!) { user(id: $id) { id email } }",
      variables: { id: "123" },
    }));

    // Mock useQuery to return data: null
    adapter.urql.useQuery = jest.fn(() => [
      {
        fetching: false,
        stale: false,
        data: { user: null },
        error: undefined,
      },
      jest.fn(),
    ]) as any;

    const [state] = useMaybeFindOne(mockManager, "123");

    // Should not throw error, data should be null/undefined
    expect(state.error).toBeUndefined();
    expect(state.data).toBeNull();
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findOne: {
        type: "findOne",
        operationName: "player",
        modelApiIdentifier: "game.player",
        defaultSelection: { id: true, name: true },
        namespace: ["game"],
      },
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query player($id: ID!) { game { player(id: $id) { id name } } }",
      variables: { id: "123" },
    }));

    useMaybeFindOne(mockManager, "123");

    expect(connection.findOneOperation).toHaveBeenCalledWith("player", "123", { id: true, name: true }, "game.player", undefined, ["game"]);
  });

  it("should pass options correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findOne: {
        type: "findOne",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
      },
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($id: ID!) { user(id: $id) { id } }",
      variables: { id: "123" },
    }));

    useMaybeFindOne(mockManager, "123", { select: { id: true }, pause: true });

    expect(connection.findOneOperation).toHaveBeenCalledWith(
      "user",
      "123",
      { id: true, email: true },
      "user",
      { select: { id: true }, pause: true },
      []
    );
  });
});
