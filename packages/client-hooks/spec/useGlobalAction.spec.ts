import type { AnyErrorWrapper } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useGlobalAction } from "../src/useGlobalAction.js";
import { bulkExampleApi, kitchenSinkApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useGlobalAction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestUseGlobalActionCanRunGlobalActionsWithVariables = () => {
    const [{ data, fetching, error }, mutate] = useGlobalAction(bulkExampleApi.flipAll);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, any>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    // can call with variables
    void mutate({ why: "foobar" });

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const _TestUseNamespacedGlobalAction = () => {
    const [{ data, fetching, error }, mutate] = useGlobalAction(kitchenSinkApi.game.calculateScore);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, any>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    // can call with variables
    void mutate({ why: "foobar" });

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

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
