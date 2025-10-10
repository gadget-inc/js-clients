import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useGlobalAction } from "../src/useGlobalAction.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useGlobalAction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockGlobalAction: any = {
      type: "globalAction",
      operationName: "flipAll",
      namespace: [],
      modelApiIdentifier: undefined,
      modelSelectionField: "result",
      defaultSelection: undefined,
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: true,
      isBulk: false,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation flipAll { flipAll { success result } }",
      variables: {},
    }));

    const [state, mutate] = useGlobalAction(mockGlobalAction);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof mutate).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should call connection.actionOperation with hasReturnType=true", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockGlobalAction: any = {
      type: "globalAction",
      operationName: "calculateTotal",
      namespace: [],
      modelApiIdentifier: undefined,
      modelSelectionField: "result",
      defaultSelection: undefined,
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: true,
      isBulk: false,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation calculateTotal { calculateTotal { success result } }",
      variables: {},
    }));

    useGlobalAction(mockGlobalAction);

    expect(connection.actionOperation).toHaveBeenCalledWith(
      "calculateTotal",
      undefined,
      undefined,
      "result",
      {},
      undefined,
      [],
      false,
      true
    );
  });

  it("should handle namespaced global actions", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockGlobalAction: any = {
      type: "globalAction",
      operationName: "calculateScore",
      namespace: ["game"],
      modelApiIdentifier: undefined,
      modelSelectionField: "result",
      defaultSelection: undefined,
      selectionType: {},
      optionsType: {},
      schemaType: {},
      variablesType: {},
      variables: {},
      hasReturnType: true,
      isBulk: false,
    };

    connection.actionOperation = jest.fn(() => ({
      query: "mutation calculateScore { game { calculateScore { success result } } }",
      variables: {},
    }));

    useGlobalAction(mockGlobalAction);

    expect(connection.actionOperation).toHaveBeenCalledWith(
      "calculateScore",
      undefined,
      undefined,
      "result",
      {},
      undefined,
      ["game"],
      false,
      true
    );
  });

  it("should dispatch stubbed action event for global actions", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockStubbedGlobalAction: any = {
      type: "stubbedAction",
      reason: "MissingApiTrigger",
      dataPath: "fakePath",
      functionName: "fakeGlobalAction",
      actionApiIdentifier: "fakeGlobalAction",
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

    useGlobalAction(mockStubbedGlobalAction);

    // Call the effect function to simulate it running
    const effectCall = (adapter.framework.useEffect as jest.Mock).mock.calls[0];
    if (effectCall && effectCall[0]) {
      effectCall[0]();
    }

    expect(eventDispatched).toBeTruthy();
    expect(eventDispatched?.detail).toEqual({
      reason: "MissingApiTrigger",
      action: {
        functionName: "fakeGlobalAction",
        actionApiIdentifier: "fakeGlobalAction",
        dataPath: "fakePath",
      },
    });
  });
});
