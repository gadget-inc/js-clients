import type { AnyErrorWrapper, GadgetRecord } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useFindOne } from "../src/useFindOne.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useFindOne", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFindOneReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindOne(relatedProductsApi.user, "10", { select: { id: true, email: true } });

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

  const _TestFindOneReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindOne(relatedProductsApi.user, "10");

    if (data) {
      data.id;
      data.email;
    }
  };

  const _TestFindOneOnNamespacedModel = () => {
    const [{ data }] = useFindOne(kitchenSinkApi.game.player, "10");

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
      findOne: {
        type: "findOne",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
        plan: jest.fn((id) => ({
          query: "query user($id: ID!) { user(id: $id) { id email } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    const [state, refetch] = useFindOne(mockManager, "123");

    // Verify the query is executing
    expect(state.fetching).toBe(true);
    expect(typeof refetch).toBe("function");

    // Verify the query was planned and executed correctly
    expect(mockManager.findOne.plan).toHaveBeenCalledWith("123", undefined);
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();

    // Verify the mock URQL client received the query
    expect(adapter.urqlClient.executeQuery).toHaveBeenCalled();

    // Note: Testing async data flow requires a framework-specific test environment
    // See TEST_GUIDE.md for more details
  });

  it("should call plan with correct id", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findOne: {
        type: "findOne",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: { id: true, email: true },
        namespace: [],
        plan: jest.fn((id) => ({
          query: "query user($id: ID!) { user(id: $id) { id } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    useFindOne(mockManager, "456");

    expect(mockManager.findOne.plan).toHaveBeenCalledWith("456", undefined);
  });

  it("should handle namespaced models", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findOne: {
        type: "findOne",
        operationName: "player",
        modelApiIdentifier: "game.player",
        defaultSelection: { id: true, name: true },
        namespace: ["game"],
        plan: jest.fn((id) => ({
          query: "query player($id: ID!) { game { player(id: $id) { id name } } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    useFindOne(mockManager, "123");

    expect(mockManager.findOne.plan).toHaveBeenCalledWith("123", undefined);
  });

  it("should pass pause option to useQuery", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockManager: any = {
      findOne: {
        type: "findOne",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: { id: true },
        namespace: [],
        plan: jest.fn((id) => ({
          query: "query user($id: ID!) { user(id: $id) { id } }",
          variables: { id },
        })),
        processResult: createMockProcessResult(),
      },
    };

    useFindOne(mockManager, "123", { pause: true });

    // Verify useQuery was called with pause option
    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });
  });
});
