import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useAction } from "../src/useAction.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useAction", () => {
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
      type: "action",
      operationName: "createUser",
      modelApiIdentifier: "user",
      modelSelectionField: "user",
      hasReturnType: true,
      defaultSelection: { id: true, email: true },
      namespace: [],
      plan: jest.fn((options) => ({
        query: "mutation createUser($user: CreateUserInput!) { createUser(user: $user) { success user { id email } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const [state, execute] = useAction(mockAction);

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
      type: "action",
      operationName: "createUser",
      modelApiIdentifier: "user",
      modelSelectionField: "user",
      hasReturnType: true,
      defaultSelection: { id: true },
      namespace: [],
      plan: jest.fn((options) => ({
        query: "mutation createUser($user: CreateUserInput!) { createUser(user: $user) { success user { id } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const mockOptions = { select: { id: true } };
    useAction(mockAction, mockOptions);

    expect(mockAction.plan).toHaveBeenCalledWith(mockOptions);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "createPlayer",
      modelApiIdentifier: "game.player",
      modelSelectionField: "player",
      hasReturnType: true,
      defaultSelection: { id: true, name: true },
      namespace: ["game"],
      plan: jest.fn((options) => ({
        query:
          "mutation createPlayer($player: CreatePlayerInput!) { game { createPlayer(player: $player) { success player { id name } } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    useAction(mockAction);

    expect(mockAction.plan).toHaveBeenCalledWith(undefined);
  });

  it("should return execute function", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "updateUser",
      modelApiIdentifier: "user",
      modelSelectionField: "user",
      hasReturnType: true,
      defaultSelection: { id: true },
      namespace: [],
      variablesType: {} as any,
      plan: jest.fn((options) => ({
        query: "mutation updateUser { updateUser { user { id } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const [, execute] = useAction(mockAction);

    expect(typeof execute).toBe("function");
  });
});
