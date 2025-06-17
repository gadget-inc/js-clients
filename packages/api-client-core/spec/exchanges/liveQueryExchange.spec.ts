import { jest } from "@jest/globals";
import type { Operation } from "@urql/core";
import { gql, makeOperation } from "@urql/core";
import { fromArray, pipe, toArray } from "wonka";
import { liveQueryExchange } from "../../src/exchanges/liveQueryExchange.js";

describe("liveQueryExchange", () => {
  const mockForward = jest.fn((ops$: any) => ops$);
  let exchange: any;

  beforeEach(() => {
    jest.clearAllMocks();
    exchange = liveQueryExchange({ forward: mockForward, client: {} as any, dispatchDebug: jest.fn() });
  });

  const createLiveQuery = (key = 1, variables: any = {}): Operation => {
    return makeOperation(
      "query",
      {
        key,
        query: gql`
          query TestQuery @live {
            users {
              id
              name
            }
          }
        `,
        variables,
      },
      {} as any
    );
  };

  const createRegularQuery = (key = 2): Operation => {
    return makeOperation(
      "query",
      {
        key,
        query: gql`
          query TestQuery {
            users {
              id
              name
            }
          }
        `,
        variables: {},
      },
      {} as any
    );
  };

  const createTeardown = (key = 1, variables: any = {}): Operation => {
    return makeOperation(
      "teardown",
      {
        key,
        query: gql`
          query TestQuery @live {
            users {
              id
              name
            }
          }
        `,
        variables,
      },
      {} as any
    );
  };

  test("allows first live query to pass through", () => {
    const liveQuery = createLiveQuery(1);
    const operations$ = fromArray([liveQuery]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(1);
    expect(results[0]).toBe(liveQuery);
  });

  test("blocks duplicate live query execution with same variables", () => {
    const liveQuery1 = createLiveQuery(1, { filter: { id: "1" } });
    const liveQuery2 = createLiveQuery(1, { filter: { id: "1" } }); // Same key and variables
    const operations$ = fromArray([liveQuery1, liveQuery2]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(1);
    expect(results[0]).toBe(liveQuery1);
  });

  test("allows regular queries to pass through unchanged", () => {
    const regularQuery1 = createRegularQuery(1);
    const regularQuery2 = createRegularQuery(1); // Same key but not live
    const operations$ = fromArray([regularQuery1, regularQuery2]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(2);
    expect(results[0]).toBe(regularQuery1);
    expect(results[1]).toBe(regularQuery2);
  });

  test("allows teardown operations to pass through", () => {
    const liveQuery = createLiveQuery(1);
    const teardown = createTeardown(1);
    const operations$ = fromArray([liveQuery, teardown]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(2);
    expect(results[0]).toBe(liveQuery);
    expect(results[1]).toBe(teardown);
  });

  test("allows live query re-execution after teardown", () => {
    const variables = { filter: { id: "1" } };
    const liveQuery1 = createLiveQuery(1, variables);
    const teardown = createTeardown(1, variables); // Same variables as the query
    const liveQuery2 = createLiveQuery(1, variables); // Same key and variables after teardown
    const operations$ = fromArray([liveQuery1, teardown, liveQuery2]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(3);
    expect(results[0]).toBe(liveQuery1);
    expect(results[1]).toBe(teardown);
    expect(results[2]).toBe(liveQuery2);
  });

  test("handles multiple live queries with different keys", () => {
    const liveQuery1 = createLiveQuery(1, { filter: { id: "1" } });
    const liveQuery2 = createLiveQuery(2, { filter: { id: "2" } });
    const operations$ = fromArray([liveQuery1, liveQuery2]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(2);
    expect(results[0]).toBe(liveQuery1);
    expect(results[1]).toBe(liveQuery2);
  });

  test("allows live queries with same key but different variables", () => {
    const liveQuery1 = createLiveQuery(1, { filter: { id: "1" } });
    const liveQuery2 = createLiveQuery(1, { filter: { id: "2" } }); // Same key, different variables
    const operations$ = fromArray([liveQuery1, liveQuery2]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(2);
    expect(results[0]).toBe(liveQuery1);
    expect(results[1]).toBe(liveQuery2);
  });

  test("allows non-query operations for live queries to pass through", () => {
    const liveQuery = createLiveQuery(1);
    const mutation = makeOperation(
      "mutation",
      {
        key: 1,
        query: gql`
          mutation TestMutation @live {
            updateUser(id: "1", user: { name: "test" }) {
              id
              name
            }
          }
        `,
        variables: {},
      },
      {} as any
    );
    const operations$ = fromArray([liveQuery, mutation]);

    const result$ = exchange(operations$);
    const results = pipe(result$, toArray);

    expect(results).toHaveLength(2);
    expect(results[0]).toBe(liveQuery);
    expect(results[1]).toBe(mutation);
  });
});
