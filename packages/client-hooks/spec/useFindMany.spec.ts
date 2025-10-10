import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useFindMany } from "../src/useFindMany.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useFindMany", () => {
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
      findMany: {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
      },
    };

    connection.findManyOperation = jest.fn(() => ({
      query: "query users { users { edges { node { id email } } } }",
      variables: {},
    }));

    const [state, refetch] = useFindMany(mockManager);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call connection.findManyOperation with correct parameters", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findMany: {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
      },
    };

    const mockOptions = {
      select: { id: true },
      first: 10,
      filter: { email: { equals: "test@test.com" } },
    };

    connection.findManyOperation = jest.fn(() => ({
      query: "query users { users { edges { node { id } } } }",
      variables: { first: 10 },
    }));

    useFindMany(mockManager, mockOptions);

    expect(connection.findManyOperation).toHaveBeenCalledWith("users", { id: true, email: true }, "user", mockOptions, []);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findMany: {
        type: "findMany",
        operationName: "players",
        modelApiIdentifier: "game.player",
        defaultSelection: { id: true, name: true },
        namespace: ["game"],
      },
    };

    connection.findManyOperation = jest.fn(() => ({
      query: "query players { game { players { edges { node { id name } } } } }",
      variables: {},
    }));

    useFindMany(mockManager);

    expect(connection.findManyOperation).toHaveBeenCalledWith("players", { id: true, name: true }, "game.player", undefined, ["game"]);
  });

  it("should pass pause and other query options", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findMany: {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true },
        namespace: [],
      },
    };

    connection.findManyOperation = jest.fn(() => ({
      query: "query users { users { edges { node { id } } } }",
      variables: {},
    }));

    useFindMany(mockManager, { pause: true, requestPolicy: "cache-first" });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({
      pause: true,
      requestPolicy: "cache-first",
    });
  });

  it("should support live queries", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findMany: {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true },
        namespace: [],
      },
    };

    connection.findManyOperation = jest.fn(() => ({
      query: "query users { users { edges { node { id } } } }",
      variables: {},
    }));

    useFindMany(mockManager, { live: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ live: true });
  });
});
