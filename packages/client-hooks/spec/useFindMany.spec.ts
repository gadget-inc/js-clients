import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useFindMany } from "../src/useFindMany.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

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
        plan: jest.fn((options) => ({
          query: "query users { users { edges { node { id email } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    const [state, refetch] = useFindMany(mockManager);

    expect(state.fetching).toBe(true);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeFalsy();
    expect(typeof refetch).toBe("function");

    expect(mockManager.findMany.plan).toHaveBeenCalledWith(undefined);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call plan with correct parameters", () => {
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
        plan: jest.fn((options) => ({
          query: "query users { users { edges { node { id } } } }",
          variables: { first: 10 },
        })),
        processResult: createMockProcessResult(),
      },
    };

    const mockOptions = {
      select: { id: true },
      first: 10,
      filter: { email: { equals: "test@test.com" } },
    };

    useFindMany(mockManager, mockOptions);

    expect(mockManager.findMany.plan).toHaveBeenCalledWith(mockOptions);
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
        plan: jest.fn((options) => ({
          query: "query players { game { players { edges { node { id name } } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useFindMany(mockManager);

    expect(mockManager.findMany.plan).toHaveBeenCalledWith(undefined);
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
        plan: jest.fn((options) => ({
          query: "query users { users { edges { node { id } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

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
        plan: jest.fn((options) => ({
          query: "query users { users { edges { node { id } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useFindMany(mockManager, { live: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ live: true });
  });
});
