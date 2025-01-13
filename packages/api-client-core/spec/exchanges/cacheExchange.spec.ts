/**
 * This file was copied from: https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/exchanges/cache.test.ts
 * Any meaningful changes are documented with comments starting with "GADGET:"
 */
import { jest } from "@jest/globals";
import { type Client, type ExchangeInput, type Operation, type OperationResult } from "@urql/core";
import type { Source, Subject } from "wonka";
import { forEach, makeSubject, map, pipe, publish, scan, toPromise } from "wonka";
import { cacheExchange } from "../../src/exchanges/cacheExchange.js";
import {
  liveQueryOperation,
  liveQueryResponse,
  mutationOperation,
  mutationResponse,
  queryOperation,
  queryResponse,
  subscriptionOperation,
  subscriptionResult,
  undefinedQueryResponse,
} from "./test-utils.js";

const reexecuteOperation = jest.fn();
const dispatchDebug = jest.fn();

let response: any;
let exchangeArgs: ExchangeInput;
let forwardedOperations: Operation[];
let input: Subject<Operation>;

beforeEach(() => {
  response = queryResponse;
  forwardedOperations = [];
  input = makeSubject<Operation>();

  // Collect all forwarded operations
  const forward = (s: Source<Operation>) => {
    return pipe(
      s,
      map((op) => {
        forwardedOperations.push(op);
        return response;
      })
    );
  };

  const client = {
    reexecuteOperation: reexecuteOperation as any,
  } as Client;

  exchangeArgs = { forward, client, dispatchDebug };
});

describe("on query", () => {
  it("forwards to next exchange when no cache hit", () => {
    const { source: ops$, next, complete } = input;
    const exchange = cacheExchange(exchangeArgs)(ops$);

    publish(exchange);
    next(queryOperation);
    complete();
    expect(forwardedOperations.length).toBe(1);
    expect(reexecuteOperation).not.toHaveBeenCalled();
  });

  it("caches results", () => {
    const { source: ops$, next, complete } = input;
    const exchange = cacheExchange(exchangeArgs)(ops$);

    publish(exchange);
    next(queryOperation);
    next(queryOperation);
    complete();
    expect(forwardedOperations.length).toBe(1);
    expect(reexecuteOperation).not.toHaveBeenCalled();
  });

  it("respects cache-and-network", () => {
    const { source: ops$, next, complete } = input;
    const result = jest.fn();
    const exchange = cacheExchange(exchangeArgs)(ops$);

    pipe(exchange, forEach(result));
    next(queryOperation);

    next({
      ...queryOperation,
      context: {
        ...queryOperation.context,
        requestPolicy: "cache-and-network",
      },
    });

    complete();
    expect(forwardedOperations.length).toBe(1);
    expect(reexecuteOperation).toHaveBeenCalledTimes(1);
    expect(result).toHaveBeenCalledTimes(2);
    expect((result.mock.calls as any[])[1][0].stale).toBe(true);

    expect(reexecuteOperation.mock.calls[0][0]).toEqual({
      ...queryOperation,
      context: { ...queryOperation.context, requestPolicy: "network-only" },
    });
  });

  it("respects cache-only", () => {
    const { source: ops$, next, complete } = input;
    const exchange = cacheExchange(exchangeArgs)(ops$);

    publish(exchange);
    next({
      ...queryOperation,
      context: {
        ...queryOperation.context,
        requestPolicy: "cache-only",
      },
    });
    complete();
    expect(forwardedOperations.length).toBe(0);
    expect(reexecuteOperation).not.toHaveBeenCalled();
  });

  describe("cache hit", () => {
    it("is miss when operation is forwarded", () => {
      const { source: ops$, next, complete } = input;
      const exchange = cacheExchange(exchangeArgs)(ops$);

      publish(exchange);
      next(queryOperation);
      complete();

      expect(forwardedOperations[0].context).toHaveProperty("meta.cacheOutcome", "miss");
    });

    it("is true when cached response is returned", async () => {
      const { source: ops$, next, complete } = input;
      const exchange = cacheExchange(exchangeArgs)(ops$);

      const results$ = pipe(
        exchange,
        scan((acc, x) => [...acc, x], [] as OperationResult[]),
        toPromise
      );

      publish(exchange);
      next(queryOperation);
      next(queryOperation);
      complete();

      const results = await results$;
      expect(results[1].operation.context).toHaveProperty("meta.cacheOutcome", "hit");
    });
  });
});

describe("on mutation", () => {
  it("does not cache", () => {
    response = mutationResponse;
    const { source: ops$, next, complete } = input;
    const exchange = cacheExchange(exchangeArgs)(ops$);

    publish(exchange);
    next(mutationOperation);
    next(mutationOperation);
    complete();
    expect(forwardedOperations.length).toBe(2);
    expect(reexecuteOperation).not.toHaveBeenCalled();
  });
});

describe("on subscription", () => {
  it("forwards subscriptions", () => {
    response = subscriptionResult;
    const { source: ops$, next, complete } = input;
    const exchange = cacheExchange(exchangeArgs)(ops$);

    publish(exchange);
    next(subscriptionOperation);
    next(subscriptionOperation);
    complete();
    expect(forwardedOperations.length).toBe(2);
    expect(reexecuteOperation).not.toHaveBeenCalled();
  });
});

// Empty query response implies the data propertys is undefined
describe("on empty query response", () => {
  beforeEach(() => {
    response = undefinedQueryResponse;
    forwardedOperations = [];
    input = makeSubject<Operation>();

    // Collect all forwarded operations
    const forward = (s: Source<Operation>) => {
      return pipe(
        s,
        map((op) => {
          forwardedOperations.push(op);
          return response;
        })
      );
    };

    const client = {
      reexecuteOperation: reexecuteOperation as any,
    } as Client;

    exchangeArgs = { forward, client, dispatchDebug };
  });

  it("does not cache response", () => {
    const { source: ops$, next, complete } = input;
    const exchange = cacheExchange(exchangeArgs)(ops$);

    publish(exchange);
    next(queryOperation);
    next(queryOperation);
    complete();
    // 2 indicates it's not cached.
    expect(forwardedOperations.length).toBe(2);
    expect(reexecuteOperation).not.toHaveBeenCalled();
  });
});

// GADGET: added the below describe block
describe("on live query", () => {
  it("does not reexecute when cache is invalidated", () => {
    const { source: ops$, next, complete } = input;
    const exchange = cacheExchange(exchangeArgs)(ops$);

    publish(exchange);

    response = liveQueryResponse;
    next(liveQueryOperation);

    response = mutationResponse;
    next(mutationOperation);

    complete();
    expect(forwardedOperations.length).toBe(2);
    expect(reexecuteOperation).not.toHaveBeenCalled();
  });
});
