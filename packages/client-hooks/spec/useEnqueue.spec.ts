import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useEnqueue } from "../src/useEnqueue.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useEnqueue", () => {
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
      namespace: [],
      modelApiIdentifier: "user",
      modelSelectionField: "user",
      defaultSelection: { id: true },
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: false,
      isBulk: false,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation enqueueCreateUser { enqueueCreateUser { success backgroundAction { id } } }",
      variables: {},
    }));

    const [state, enqueue] = useEnqueue(mockAction);

    expect(state.fetching).toBe(false);
    expect(state.handle).toBeNull();
    expect(state.error).toBeUndefined();
    expect(typeof enqueue).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should call connection.actionOperation for background action", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "sendEmail",
      namespace: [],
      modelApiIdentifier: "email",
      modelSelectionField: "email",
      defaultSelection: { id: true },
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: false,
      isBulk: false,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation enqueueSendEmail { enqueueSendEmail { success backgroundAction { id } } }",
      variables: {},
    }));

    useEnqueue(mockAction);

    // The enqueue hook should call actionOperation with the action
    expect(connection.actionOperation).toHaveBeenCalled();
  });

  it("should handle base background options", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "processJob",
      namespace: [],
      modelApiIdentifier: "job",
      modelSelectionField: "job",
      defaultSelection: { id: true },
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: false,
      isBulk: false,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation enqueueProcessJob { enqueueProcessJob { success backgroundAction { id } } }",
      variables: {},
    }));

    const baseBackgroundOptions = {
      id: "custom-id",
      priority: "high",
      retries: 3,
    };

    useEnqueue(mockAction, baseBackgroundOptions);

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should handle bulk actions", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockBulkAction: any = {
      type: "action",
      operationName: "bulkCreateUsers",
      namespace: [],
      modelApiIdentifier: "user",
      modelSelectionField: "users",
      defaultSelection: { id: true },
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: false,
      isBulk: true,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation enqueueBulkCreateUsers { enqueueBulkCreateUsers { success backgroundAction { id } } }",
      variables: {},
    }));

    const [state] = useEnqueue(mockBulkAction);

    // For bulk actions, state should have 'handles' instead of 'handle'
    expect(state.handles).toBeNull();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should handle namespaced actions", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "createPlayer",
      namespace: ["game"],
      modelApiIdentifier: "game.player",
      modelSelectionField: "player",
      defaultSelection: { id: true },
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: false,
      isBulk: false,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation enqueueCreatePlayer { game { enqueueCreatePlayer { success backgroundAction { id } } } }",
      variables: {},
    }));

    useEnqueue(mockAction);

    expect(connection.actionOperation).toHaveBeenCalledWith(
      "createPlayer",
      { id: true },
      "game.player",
      "player",
      {},
      undefined,
      ["game"],
      false,
      false
    );
  });
});
