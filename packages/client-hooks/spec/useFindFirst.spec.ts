import type { AnyErrorWrapper, GadgetRecord } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useFindFirst } from "../src/useFindFirst.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useFindFirst", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFindFirstReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindFirst(relatedProductsApi.user, {
      filter: { email: { equals: "hello@gello.com" } },
      select: { id: true, email: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.email;
    }

    // hook return value includes the urql refresh function
    refresh();
  };

  const _TestFindFirstReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindFirst(relatedProductsApi.user);

    if (data) {
      data.id;
      data.email;
    }
  };

  const _TestFindFirstOnNamespacedModel = () => {
    const [{ data }] = useFindFirst(kitchenSinkApi.game.player);

    if (data) {
      data.id;
      data.name;
    }
  };

  it("should initialize the hook correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findFirst: {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
        plan: jest.fn((options) => ({
          query: "query users { users(first: 1) { edges { node { id email } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    const [state, refetch] = useFindFirst(mockManager);

    expect(state.fetching).toBe(true);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    // useFindFirst automatically adds { first: 1 } to the options
    expect(mockManager.findFirst.plan).toHaveBeenCalledWith({ first: 1 });
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should call plan with correct parameters", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findFirst: {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
        plan: jest.fn((options) => ({
          query: "query users { users(first: 1) { edges { node { id } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    const mockOptions = {
      select: { id: true },
      filter: { email: { equals: "test@test.com" } },
      sort: { createdAt: "Descending" },
    };

    useFindFirst(mockManager, mockOptions);

    // useFindFirst automatically adds { first: 1 } to the options
    expect(mockManager.findFirst.plan).toHaveBeenCalledWith({ ...mockOptions, first: 1 });
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findFirst: {
        type: "findFirst",
        operationName: "players",
        modelApiIdentifier: "game.player",
        defaultSelection: { id: true, name: true },
        namespace: ["game"],
        plan: jest.fn((options) => ({
          query: "query players { game { players(first: 1) { edges { node { id name } } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useFindFirst(mockManager);

    // useFindFirst automatically adds { first: 1 } to the options
    expect(mockManager.findFirst.plan).toHaveBeenCalledWith({ first: 1 });
  });

  it("should pass query options correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findFirst: {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: { id: true },
        namespace: [],
        plan: jest.fn((options) => ({
          query: "query users { users(first: 1) { edges { node { id } } } }",
          variables: {},
        })),
        processResult: createMockProcessResult(),
      },
    };

    useFindFirst(mockManager, { pause: true, requestPolicy: "cache-first" });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({
      pause: true,
      requestPolicy: "cache-first",
    });
  });
});
