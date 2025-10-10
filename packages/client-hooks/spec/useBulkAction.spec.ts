import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useBulkAction } from "../src/useBulkAction.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useBulkAction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "bulkAction",
      operationName: "bulkCreateUsers",
      modelApiIdentifier: "user",
      modelSelectionField: "users",
      hasReturnType: true,
      defaultSelection: { id: true, email: true },
      namespace: [],
      plan: jest.fn((options) => ({
        query: "mutation bulkCreateUsers($inputs: [BulkCreateUsersInput!]!) { bulkCreateUsers(inputs: $inputs) { users { id email } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const [state, execute] = useBulkAction(mockAction as any);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(typeof execute).toBe("function");

    expect(mockAction.plan).toHaveBeenCalledWith(undefined);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should call plan with options", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "bulkAction",
      operationName: "bulkCreateUsers",
      modelApiIdentifier: "user",
      modelSelectionField: "users",
      hasReturnType: true,
      defaultSelection: { id: true },
      namespace: [],
      plan: jest.fn((options) => ({
        query: "mutation bulkCreateUsers($inputs: [BulkCreateUsersInput!]!) { bulkCreateUsers(inputs: $inputs) { users { id } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const mockOptions = { select: { id: true } };
    // @ts-expect-error - Type instantiation depth is acceptable for test mock
    useBulkAction(mockAction as any, mockOptions);

    expect(mockAction.plan).toHaveBeenCalledWith(mockOptions);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "bulkAction",
      operationName: "bulkCreatePlayers",
      modelApiIdentifier: "game.player",
      modelSelectionField: "players",
      hasReturnType: true,
      defaultSelection: { id: true, name: true },
      namespace: ["game"],
      plan: jest.fn((options) => ({
        query: "mutation bulkCreatePlayers { game { bulkCreatePlayers { players { id name } } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    useBulkAction(mockAction);

    expect(mockAction.plan).toHaveBeenCalledWith(undefined);
  });

  it("should return execute function", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "bulkAction",
      operationName: "bulkUpdateUsers",
      modelApiIdentifier: "user",
      modelSelectionField: "users",
      hasReturnType: true,
      defaultSelection: { id: true },
      namespace: [],
      variablesType: {} as any,
      plan: jest.fn((options) => ({
        query: "mutation bulkUpdateUsers { bulkUpdateUsers { users { id } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const [, execute] = useBulkAction(mockAction);

    expect(typeof execute).toBe("function");
  });
});
