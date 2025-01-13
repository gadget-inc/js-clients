/**
 * This file was copied from: https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/exchanges/cache.ts
 * Any meaningful changes are documented with comments starting with "GADGET:"
 */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  formatDocument,
  makeOperation,
  makeResult,
  type Client,
  type Exchange,
  type Operation,
  type OperationContext,
  type OperationResult,
} from "@urql/core";
import { filter, map, merge, pipe, tap } from "wonka";
import { isLiveQueryOperationDefinitionNode } from "../graphql-live-query-utils/index.js";

type ResultCache = Map<number, OperationResult>;
type OperationCache = Map<string, Set<number>>;

const shouldSkip = ({ kind }: Operation) => kind !== "mutation" && kind !== "query";

/** Adds unique typenames to query (for invalidating cache entries) */
export const mapTypeNames = (operation: Operation): Operation => {
  const query = formatDocument(operation.query);
  if (query !== operation.query) {
    const formattedOperation = makeOperation(operation.kind, operation);
    formattedOperation.query = query;
    return formattedOperation;
  } else {
    return operation;
  }
};

/** Default document cache exchange.
 *
 * @remarks
 * The default document cache in `urql` avoids sending the same GraphQL request
 * multiple times by caching it using the {@link Operation.key}. It will invalidate
 * query results automatically whenever it sees a mutation responses with matching
 * `__typename`s in their responses.
 *
 * The document cache will get the introspected `__typename` fields by modifying
 * your GraphQL operation documents using the {@link formatDocument} utility.
 *
 * This automatic invalidation strategy can fail if your query or mutation don’t
 * contain matching typenames, for instance, because the query contained an
 * empty list.
 * You can manually add hints for this exchange by specifying a list of
 * {@link OperationContext.additionalTypenames} for queries and mutations that
 * should invalidate one another.
 *
 * @see {@link https://urql.dev/goto/docs/basics/document-caching} for more information on this cache.
 */
export const cacheExchange: Exchange = ({ forward, client, dispatchDebug }) => {
  const resultCache: ResultCache = new Map();
  const operationCache: OperationCache = new Map();

  const isOperationCached = (operation: Operation) =>
    operation.kind === "query" &&
    operation.context.requestPolicy !== "network-only" &&
    (operation.context.requestPolicy === "cache-only" || resultCache.has(operation.key));

  return (ops$) => {
    const cachedOps$ = pipe(
      ops$,
      filter((op) => !shouldSkip(op) && isOperationCached(op)),
      map((operation) => {
        const cachedResult = resultCache.get(operation.key);

        dispatchDebug({
          operation,
          ...(cachedResult
            ? {
                type: "cacheHit",
                message: "The result was successfully retried from the cache",
              }
            : {
                type: "cacheMiss",
                message: "The result could not be retrieved from the cache",
              }),
        });

        let result: OperationResult =
          cachedResult ||
          makeResult(operation, {
            data: null,
          });

        result = {
          ...result,
          operation: addMetadata(operation, {
            cacheOutcome: cachedResult ? "hit" : "miss",
          }),
        };

        if (operation.context.requestPolicy === "cache-and-network") {
          result.stale = true;
          reexecuteOperation(client, operation);
        }

        return result;
      })
    );

    const forwardedOps$ = pipe(
      merge([
        pipe(
          ops$,
          filter((op) => !shouldSkip(op) && !isOperationCached(op)),
          map(mapTypeNames)
        ),
        pipe(
          ops$,
          filter((op) => shouldSkip(op))
        ),
      ]),
      map((op) => addMetadata(op, { cacheOutcome: "miss" })),
      filter((op) => op.kind !== "query" || op.context.requestPolicy !== "cache-only"),
      forward,
      tap((response) => {
        let { operation } = response;
        if (!operation) return;

        let typenames = operation.context.additionalTypenames || [];
        // NOTE: For now, we only respect `additionalTypenames` from subscriptions to
        // avoid unexpected breaking changes
        // We'd expect live queries or other update mechanisms to be more suitable rather
        // than using subscriptions as “signals” to reexecute queries. However, if they’re
        // just used as signals, it’s intuitive to hook them up using `additionalTypenames`
        if (response.operation.kind !== "subscription") {
          typenames = collectTypenames(response.data).concat(typenames);
        }

        // Invalidates the cache given a mutation's response
        if (response.operation.kind === "mutation" || response.operation.kind === "subscription") {
          const pendingOperations = new Set<number>();

          dispatchDebug({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${typenames}`,
            operation,
            data: { typenames, response },
          });

          for (let i = 0; i < typenames.length; i++) {
            const typeName = typenames[i];
            let operations = operationCache.get(typeName);
            if (!operations) operationCache.set(typeName, (operations = new Set()));
            for (const key of operations.values()) pendingOperations.add(key);
            operations.clear();
          }

          for (const key of pendingOperations.values()) {
            if (resultCache.has(key)) {
              operation = (resultCache.get(key) as OperationResult).operation;
              // GADGET: added the below line to skip reexecuting live queries when their data is invalidated since they should receive updates from the server
              if (!operation.query.definitions.some(isLiveQueryOperationDefinitionNode)) {
                resultCache.delete(key);
                reexecuteOperation(client, operation);
              }
            }
          }
        } else if (operation.kind === "query" && response.data) {
          resultCache.set(operation.key, response);
          for (let i = 0; i < typenames.length; i++) {
            const typeName = typenames[i];
            let operations = operationCache.get(typeName);
            if (!operations) operationCache.set(typeName, (operations = new Set()));
            operations.add(operation.key);
          }
        }
      })
    );

    return merge([cachedOps$, forwardedOps$]);
  };
};

/** Reexecutes an `Operation` with the `network-only` request policy.
 * @internal
 */
export const reexecuteOperation = (client: Client, operation: Operation) => {
  return client.reexecuteOperation(
    makeOperation(operation.kind, operation, {
      requestPolicy: "network-only",
    })
  );
};

// GADGET: the below functions are copied from https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/utils/collectTypenames.ts

interface EntityLike {
  [key: string]: EntityLike | EntityLike[] | any;
  __typename: string | null | void;
}

const collectTypes = (obj: EntityLike | EntityLike[], types: Set<string>) => {
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      collectTypes(obj[i], types);
    }
  } else if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      if (key === "__typename" && typeof obj[key] === "string") {
        types.add(obj[key] as string);
      } else {
        collectTypes(obj[key], types);
      }
    }
  }

  return types;
};

/** Finds and returns a list of `__typename` fields found in response data.
 *
 * @privateRemarks
 * This is used by `@urql/core`’s document `cacheExchange` to find typenames
 * in a given GraphQL response’s data.
 */
const collectTypenames = (response: object): string[] => [...collectTypes(response as EntityLike, new Set())];

// GADGET: the below function is copied from https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/utils/operation.ts

/** Adds additional metadata to an `Operation`'s `context.meta` property while copying it.
 * @see {@link OperationDebugMeta} for more information on the {@link OperationContext.meta} property.
 */
const addMetadata = (operation: Operation, meta: OperationContext["meta"]) => {
  return makeOperation(operation.kind, operation, {
    meta: {
      ...operation.context.meta,
      ...meta,
    },
  });
};
