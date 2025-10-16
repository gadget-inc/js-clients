import type { AnyErrorWrapper } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { createHooks } from "../src/createHooks.js";
import { useView } from "../src/useView.js";
import { testApi } from "./apis.js";
import { createMockAdapter, createMockApiClient, createMockConnection, createMockProcessResult } from "./mockAdapter.js";

describe("useView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // all these functions are typechecked but never run to avoid actually making API calls
  const _TestUseViewNoVariablesReturnsTypedData = () => {
    const [{ data, fetching, error }, refresh] = useView(testApi.totalInStock);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | { totalInStock: number | null }>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    if (data) {
      data.totalInStock;
    }

    refresh();
  };

  const _TestUseViewVariablesReturnsTypedData = () => {
    const [{ data, fetching, error }, refresh] = useView(testApi.echo, { value: "test" });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | { value: string | null }>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    if (data) {
      data.value;
    }

    refresh();
  };

  const _TestUseViewOptions = () => {
    const [{ data, fetching, error }, refresh] = useView(testApi.echo, { value: "test" }, { pause: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | { value: string | null }>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    if (data) {
      data.value;
    }

    refresh();
  };

  const _TestUseNamespacedView = () => {
    const [{ data }] = useView(testApi.game.echo, { value: 123 });

    assert<IsExact<typeof data, undefined | { value: number | null }>>(true);

    if (data) {
      data.value;
    }
  };

  const _TestUseModelNamespacedView = () => {
    const [{ data }] = useView(testApi.widget.stats, { inStockOnly: false });

    assert<IsExact<typeof data, undefined | { count: number | null }>>(true);

    if (data) {
      data.count;
    }
  };

  const _TestUseInlineViewNoVariables = () => {
    const [{ data, fetching, error }, refresh] = useView("{ count(todos) }");

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | unknown>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    refresh();
  };

  const _TestUseInlineViewWithVariables = () => {
    const [{ data, fetching, error }, refresh] = useView("($first: Int){ count(todos) }", { first: 10 });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | unknown>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    refresh();
  };

  const _TestUseInlineViewWithVariablesAndOptions = () => {
    const [{ data, fetching, error }, refresh] = useView("($first: Int){ count(todos) }", { first: 10 }, { pause: true });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | unknown>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);

    refresh();
  };

  it("should initialize the hook with inline view string", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const [state, refetch] = useView("{ users { id email } }");

    expect(state.fetching).toBe(true);
    expect(state.error).toBeFalsy();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should initialize with ViewFunction", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      gqlFieldName: "recentUsers",
      namespace: [],
      referencedTypenames: ["User"],
      plan: jest.fn((variablesOptions) => ({
        query: "query recentUsers { recentUsers }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    const [state, refetch] = useView(mockView);

    expect(state.fetching).toBe(true);
    expect(state.error).toBeFalsy();
    expect(typeof refetch).toBe("function");

    expect(mockView.plan).toHaveBeenCalled();
    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should pass variables to ViewFunction with variables", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      gqlFieldName: "usersByRole",
      namespace: [],
      variables: {
        role: { type: "String", required: true },
      },
      plan: jest.fn((variablesOptions: any) => ({
        query: "query usersByRole($role: String!) { usersByRole(role: $role) }",
        variables: { role: variablesOptions.role?.value },
      })),
      processResult: createMockProcessResult(),
    };

    useView(mockView, { role: "admin" });

    expect(mockView.plan).toHaveBeenCalled();
    const callArgs = mockView.plan.mock.calls[0][0];
    expect(callArgs).toBeDefined();
    expect(callArgs.role).toBeDefined();
    expect(callArgs.role.value).toBe("admin");
  });

  it("should handle namespaced views", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      gqlFieldName: "topPlayers",
      namespace: ["game"],
      referencedTypenames: ["Player"],
      plan: jest.fn((variablesOptions) => ({
        query: "query topPlayers { game { topPlayers } }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    useView(mockView);

    expect(mockView.plan).toHaveBeenCalled();
  });

  it("should pass pause option", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      gqlFieldName: "recentUsers",
      namespace: [],
      plan: jest.fn((variablesOptions) => ({
        query: "query recentUsers { recentUsers }",
        variables: {},
      })),
      processResult: createMockProcessResult(),
    };

    useView(mockView, { pause: true });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ pause: true });
  });

  it("should handle inline view with variables", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const variables = { limit: 10 };
    const [state] = useView("{ users(limit: $limit) { id } }", variables);

    expect(state.fetching).toBe(true);
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should pass options when using inline view", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    useView("{ users { id } }", { limit: 10 }, { pause: true, requestPolicy: "network-only" });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({
      pause: true,
      requestPolicy: "network-only",
    });
  });
});
