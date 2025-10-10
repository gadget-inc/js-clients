import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useAction } from "../src/useAction.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useAction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    // Initialize the hooks with the adapter
    createHooks(adapter);

    // Mock action function
    const mockAction: any = {
      type: "action",
      operationName: "updateUser",
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

    // Mock connection.actionOperation to return a valid plan
    connection.actionOperation = jest.fn(() => ({
      query: "mutation updateUser($id: ID!) { updateUser(id: $id) { success user { id } } }",
      variables: { id: "123" },
    }));

    // Call the hook
    const [state, mutate] = useAction(mockAction);

    // Verify initial state
    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();

    // Verify mutate function is returned
    expect(typeof mutate).toBe("function");

    // Verify adapter methods were called
    expect(adapter.framework.useMemo).toHaveBeenCalled();
  });

  it("should call connection.actionOperation with correct parameters", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "action",
      operationName: "updateUser",
      namespace: [],
      modelApiIdentifier: "user",
      modelSelectionField: "user",
      defaultSelection: { id: true, email: true },
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: false,
      isBulk: false,
    };

    const mockOptions = { select: { id: true } };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation updateUser { updateUser { success } }",
      variables: {},
    }));

    useAction(mockAction, mockOptions);

    expect(connection.actionOperation).toHaveBeenCalledWith(
      "updateUser",
      { id: true, email: true },
      "user",
      "user",
      {},
      mockOptions,
      [],
      false,
      false
    );
  });

  it("should handle stubbed actions and dispatch event", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockStubbedAction: any = {
      type: "stubbedAction",
      reason: "MissingApiTrigger",
      dataPath: "fakePath",
      functionName: "fakeAction",
      actionApiIdentifier: "fakeAction",
      modelApiIdentifier: "fakeModel",
      variables: {},
    };

    let eventDispatched: CustomEvent | undefined;
    globalThis.addEventListener("gadget:devharness:stubbedActionError", (event) => {
      eventDispatched = event as CustomEvent;
    });

    connection.actionOperation = jest.fn(() => ({
      query: "mutation fake { fake { success } }",
      variables: {},
    }));

    useAction(mockStubbedAction);

    // Verify useEffect was called (which dispatches the event)
    expect(adapter.framework.useEffect).toHaveBeenCalled();

    // Call the effect function to simulate it running
    const effectCall = (adapter.framework.useEffect as jest.Mock).mock.calls[0];
    if (effectCall && effectCall[0]) {
      effectCall[0]();
    }

    expect(eventDispatched).toBeTruthy();
    expect(eventDispatched?.detail).toEqual({
      reason: "MissingApiTrigger",
      action: {
        functionName: "fakeAction",
        actionApiIdentifier: "fakeAction",
        dataPath: "fakePath",
        modelApiIdentifier: "fakeModel",
      },
    });
  });

  it("should use adapter hooks correctly", () => {
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
      query: "mutation createUser { createUser { success } }",
      variables: {},
    }));

    useAction(mockAction);

    // Verify framework adapter methods were called
    expect(adapter.framework.useEffect).toHaveBeenCalled();
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.framework.useCallback).toHaveBeenCalled();

    // Verify urql methods were called
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });
});
