import type { AnyErrorWrapper, GadgetRecord } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { Has, IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useGet } from "../src/useGet.js";
import { relatedProductsApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useGet", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestGetReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useGet(relatedProductsApi.currentSession, { select: { id: true, state: true } });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<Has<typeof data, undefined | GadgetRecord<{ id: string; state: any }>>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.state;
    }

    // hook return value includes the urql refresh function
    refresh();
  };

  const _TestGetReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useGet(relatedProductsApi.currentSession);

    if (data) {
      data.id;
      data.state;
    }
  };

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: { id: true },
        namespace: [],
        plan: jest.fn((options) => ({
          query: "query session { session { id } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    const [state, refetch] = useGet(mockManager);

    expect(state.fetching).toBe(true);
    expect(state.data).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(mockManager.get.plan).toHaveBeenCalledWith(undefined);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call plan with options", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: { id: true, userId: true },
        namespace: [],
        plan: jest.fn((options) => ({
          query: "query session { session { id userId } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    const mockOptions = { select: { id: true, userId: true } };
    useGet(mockManager, mockOptions);

    expect(mockManager.get.plan).toHaveBeenCalledWith(mockOptions);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "app.session",
        defaultSelection: { id: true },
        namespace: ["app"],
        plan: jest.fn((options) => ({
          query: "query currentSession { app { currentSession { id } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useGet(mockManager);

    expect(mockManager.get.plan).toHaveBeenCalledWith(undefined);
  });

  it("should pass query options", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      get: {
        type: "get",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: { id: true },
        namespace: [],
        plan: jest.fn((options) => ({
          query: "query session { session { id } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useGet(mockManager, { pause: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });
  });
});
