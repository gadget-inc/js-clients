import { jest } from "@jest/globals";
import { createHooks } from "../src/createHooks.js";
import { useView } from "../src/useView.js";
import { createMockAdapter, createMockApiClient, createMockConnection } from "./mockAdapter.js";

describe("useView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the hook correctly for view without variables", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      type: "view",
      operationName: "leaderboard",
      hasVariables: false,
      namespace: [],
    };

    connection.viewOperation = jest.fn(() => ({
      query: "query leaderboard { leaderboard { name score } }",
      variables: {},
    }));

    const [state, refetch] = useView(mockView);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(adapter.framework.useMemo).toHaveBeenCalled();
    expect(adapter.urql.useQuery).toHaveBeenCalled();
  });

  it("should initialize the hook correctly for view with variables", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      type: "view",
      operationName: "topScores",
      hasVariables: true,
      namespace: [],
    };

    const variables = { limit: 10, minScore: 100 };

    connection.viewOperation = jest.fn(() => ({
      query: "query topScores($limit: Int!, $minScore: Int!) { topScores(limit: $limit, minScore: $minScore) { name score } }",
      variables,
    }));

    const [state, refetch] = useView(mockView, variables);

    expect(state.fetching).toBe(false);
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
    expect(typeof refetch).toBe("function");

    expect(connection.viewOperation).toHaveBeenCalledWith("topScores", variables, undefined, []);
  });

  it("should handle inline gelly query strings", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const gellyQuery = "{ count(todos) }";
    const variables = { filter: { completed: true } };

    connection.viewOperation = jest.fn(() => ({
      query: "query InlineView($filter: JSON) { view(filter: $filter) }",
      variables,
    }));

    useView(gellyQuery, variables);

    expect(connection.viewOperation).toHaveBeenCalledWith(gellyQuery, variables, undefined, []);
  });

  it("should handle namespaced views", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      type: "view",
      operationName: "playerStats",
      hasVariables: false,
      namespace: ["game"],
    };

    connection.viewOperation = jest.fn(() => ({
      query: "query playerStats { game { playerStats { name totalScore } } }",
      variables: {},
    }));

    useView(mockView);

    expect(connection.viewOperation).toHaveBeenCalledWith("playerStats", undefined, undefined, ["game"]);
  });

  it("should pass query options correctly", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      type: "view",
      operationName: "summary",
      hasVariables: false,
      namespace: [],
    };

    connection.viewOperation = jest.fn(() => ({
      query: "query summary { summary { total } }",
      variables: {},
    }));

    useView(mockView, { pause: true, requestPolicy: "network-only" });

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({
      pause: true,
      requestPolicy: "network-only",
    });
  });

  it("should support views with complex variable types", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      type: "view",
      operationName: "filteredData",
      hasVariables: true,
      namespace: [],
    };

    const complexVariables = {
      filters: {
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        categories: ["A", "B", "C"],
      },
      sorting: { field: "createdAt", direction: "DESC" },
      pagination: { first: 20, after: "cursor123" },
    };

    connection.viewOperation = jest.fn(() => ({
      query:
        "query filteredData($filters: FilterInput, $sorting: SortInput, $pagination: PaginationInput) { filteredData(filters: $filters, sorting: $sorting, pagination: $pagination) { results } }",
      variables: complexVariables,
    }));

    useView(mockView, complexVariables);

    expect(connection.viewOperation).toHaveBeenCalledWith("filteredData", complexVariables, undefined, []);
  });

  it("should handle options for view with variables", () => {
    const connection = createMockConnection();
    const api = createMockApiClient();
    api.connection = connection;
    const adapter = createMockAdapter(api, connection);

    createHooks(adapter);

    const mockView: any = {
      type: "view",
      operationName: "report",
      hasVariables: true,
      namespace: [],
    };

    const variables = { year: 2024 };
    const options = { suspense: true };

    connection.viewOperation = jest.fn(() => ({
      query: "query report($year: Int!) { report(year: $year) { data } }",
      variables,
    }));

    useView(mockView, variables, options);

    const useQueryCall = (adapter.urql.useQuery as jest.Mock).mock.calls[0];
    expect(useQueryCall).toBeDefined();
    expect(useQueryCall[0]).toMatchObject({ suspense: true });
  });
});
