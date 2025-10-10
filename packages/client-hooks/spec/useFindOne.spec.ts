import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useFindOne } from "../src/useFindOne.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useFindOne", () => {
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

    const [state, refetch] = useFindOne(mockManager, "123");

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call connection.findOneOperation with correct parameters", () => {
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

    const mockOptions = { select: { id: true } };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($id: ID!) { user(id: $id) { id } }",
      variables: { id: "456" },
    }));

    useFindOne(mockManager, "456", mockOptions);

    expect(connection.findOneOperation).toHaveBeenCalledWith("user", "456", { id: true, email: true }, "user", mockOptions, []);
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

    useFindOne(mockManager, "123");

    expect(connection.findOneOperation).toHaveBeenCalledWith("player", "123", { id: true, name: true }, "game.player", undefined, ["game"]);
  });

  it("should pass pause option to useQuery", () => {
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
      },
    };

    connection.findOneOperation = jest.fn(() => ({
      query: "query user($id: ID!) { user(id: $id) { id } }",
      variables: { id: "123" },
    }));

    useFindOne(mockManager, "123", { pause: true });

    // Verify useQuery was called with pause option
    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });
  });
});
