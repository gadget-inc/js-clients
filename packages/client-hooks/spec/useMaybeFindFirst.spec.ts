import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useMaybeFindFirst } from "../src/useMaybeFindFirst.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

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
        plan: jest.fn((options) => ({
          query: "query users { users(first: 1) { edges { node { id email } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    const [state, refetch] = useMaybeFindFirst(mockManager);

    expect(state.fetching).toBe(true);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    // useMaybeFindFirst automatically adds { first: 1 } to the options
    expect(mockManager.findFirst.plan).toHaveBeenCalledWith({ first: 1 });
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
      findFirst: {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true },
        namespace: [],
        plan: jest.fn((options) => ({
          query: "query users { users(first: 1) { edges { node { id } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    const mockOptions = {
      select: { id: true },
      filter: { email: { equals: "test@test.com" } },
    };

    useMaybeFindFirst(mockManager, mockOptions);

    // useMaybeFindFirst automatically adds { first: 1 } to the options
    expect(mockManager.findFirst.plan).toHaveBeenCalledWith({ ...mockOptions, first: 1 });
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
        plan: jest.fn((options) => ({
          query: "query players { game { players(first: 1) { edges { node { id name } } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useMaybeFindFirst(mockManager);

    // useMaybeFindFirst automatically adds { first: 1 } to the options
    expect(mockManager.findFirst.plan).toHaveBeenCalledWith({ first: 1 });
  });

  it("should pass query options", () => {
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
        plan: jest.fn((options) => ({
          query: "query users { users(first: 1) { edges { node { id } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useMaybeFindFirst(mockManager, { pause: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });
  });
});
