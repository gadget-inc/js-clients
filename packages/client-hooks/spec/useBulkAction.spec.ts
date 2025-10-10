import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useBulkAction } from "../src/useBulkAction.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

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
      type: "action",
      operationName: "bulkUpdateUsers",
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
      query: "mutation bulkUpdateUsers { bulkUpdateUsers { success users { id } } }",
      variables: {},
    }));

    const [state, mutate] = useBulkAction(mockAction);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof mutate).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should call connection.actionOperation with isBulk=true", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "bulkCreateWidgets",
      namespace: [],
      modelApiIdentifier: "widget",
      modelSelectionField: "widgets",
      defaultSelection: { id: true, name: true },
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: false,
      isBulk: true,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation bulkCreateWidgets { bulkCreateWidgets { success } }",
      variables: {},
    }));

    useBulkAction(mockAction);

    expect(connection.actionOperation).toHaveBeenCalledWith(
      "bulkCreateWidgets",
      { id: true, name: true },
      "widget",
      "widgets",
      {},
      undefined,
      [],
      true,
      false
    );
  });

  it("should handle namespaced bulk actions", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "bulkCreatePlayers",
      namespace: ["game"],
      modelApiIdentifier: "game.player",
      modelSelectionField: "players",
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
      query: "mutation bulkCreatePlayers { game { bulkCreatePlayers { success } } }",
      variables: {},
    }));

    useBulkAction(mockAction);

    expect(connection.actionOperation).toHaveBeenCalledWith(
      "bulkCreatePlayers",
      { id: true },
      "game.player",
      "players",
      {},
      undefined,
      ["game"],
      true,
      false
    );
  });

  it("should use adapter hooks correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "bulkDeleteWidgets",
      namespace: [],
      modelApiIdentifier: "widget",
      modelSelectionField: "widgets",
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
      query: "mutation bulkDeleteWidgets { bulkDeleteWidgets { success } }",
      variables: {},
    }));

    useBulkAction(mockAction);

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.framework.useCallback).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });
});
