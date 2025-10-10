import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useFindFirst } from "../src/useFindFirst.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useFindFirst", () => {
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

    const [state, refetch] = useFindFirst(mockManager);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call connection.findFirstOperation with correct parameters", () => {
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

    const mockOptions = {
      select: { id: true },
      filter: { email: { equals: "test@test.com" } },
      sort: { createdAt: "Descending" },
    };

    connection.findFirstOperation = jest.fn(() => ({
      query: "query users { users(first: 1) { edges { node { id } } } }",
      variables: {},
    }));

    useFindFirst(mockManager, mockOptions);

    expect(connection.findFirstOperation).toHaveBeenCalledWith("users", { id: true, email: true }, "user", mockOptions, []);
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

    useFindFirst(mockManager);

    expect(connection.findFirstOperation).toHaveBeenCalledWith("players", { id: true, name: true }, "game.player", undefined, ["game"]);
  });

  it("should pass query options correctly", () => {
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

    useFindFirst(mockManager, { pause: true, suspense: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({
      pause: true,
      suspense: true,
    });
  });
});
