import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useGlobalAction } from "../src/useGlobalAction.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

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

    const mockAction: any = {
      type: "globalAction",
      operationName: "flipAllWidgets",
      namespace: [],
      plan: jest.fn(() => ({
        query: "mutation flipAllWidgets { flipAllWidgets { success result } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const [state, execute] = useGlobalAction(mockAction);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(typeof execute).toBe("function");

    expect(mockAction.plan).toHaveBeenCalledWith();
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useMutation).toHaveBeenCalled();
  });

  it("should call plan without arguments", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "globalAction",
      operationName: "syncData",
      namespace: [],
      plan: jest.fn(() => ({
        query: "mutation syncData { syncData { success } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    useGlobalAction(mockAction);

    expect(mockAction.plan).toHaveBeenCalledWith();
  });

  it("should handle namespaced global actions", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "globalAction",
      operationName: "resetGame",
      namespace: ["game"],
      plan: jest.fn(() => ({
        query: "mutation resetGame { game { resetGame { success } } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    useGlobalAction(mockAction);

    expect(mockAction.plan).toHaveBeenCalledWith();
  });

  it("should return execute function", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockAction: any = {
      type: "globalAction",
      operationName: "doSomething",
      namespace: [],
      variablesType: {} as any,
      plan: jest.fn(() => ({
        query: "mutation doSomething { doSomething { result } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const [, execute] = useGlobalAction(mockAction);

    expect(typeof execute).toBe("function");
  });
});
