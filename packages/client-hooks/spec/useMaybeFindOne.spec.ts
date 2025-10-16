import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useMaybeFindOne } from "../src/useMaybeFindOne.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

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
        plan: jest.fn((id) => ({
          query: "query user($id: ID!) { user(id: $id) { id email } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    const [state, refetch] = useMaybeFindOne(mockManager, "123");

    expect(state.fetching).toBe(true);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(mockManager.findOne.plan).toHaveBeenCalledWith("123");
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call plan with correct id", () => {
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
        defaultSelection: { id: true },
        namespace: [],
        plan: jest.fn((id) => ({
          query: "query user($id: ID!) { user(id: $id) { id } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    useMaybeFindOne(mockManager, "456");

    expect(mockManager.findOne.plan).toHaveBeenCalledWith("456");
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
        plan: jest.fn((id) => ({
          query: "query player($id: ID!) { game { player(id: $id) { id name } } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    useMaybeFindOne(mockManager, "123");

    expect(mockManager.findOne.plan).toHaveBeenCalledWith("123");
  });

  it("should pass pause option", () => {
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
        defaultSelection: { id: true },
        namespace: [],
        plan: jest.fn((id) => ({
          query: "query user($id: ID!) { user(id: $id) { id } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    useMaybeFindOne(mockManager, "123", { pause: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });
  });
});
