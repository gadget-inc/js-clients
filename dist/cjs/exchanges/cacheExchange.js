"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reexecuteOperation = exports.cacheExchange = exports.mapTypeNames = void 0;
/**
 * This file is identical to the cacheExchange from the @urql/core package
 * with the addition of `|| query.definitions.some(isLiveQueryOperationDefinitionNode)`
 * in the `shouldSkip` function.
 *
 * https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/exchanges/cache.ts
 */
/* eslint-disable @typescript-eslint/no-use-before-define */
const core_1 = require("@urql/core");
const wonka_1 = require("wonka");
const index_js_1 = require("../graphql-live-query-utils/index.js");
const shouldSkip = ({ kind, query }) => (kind !== "mutation" && kind !== "query") || query.definitions.some(index_js_1.isLiveQueryOperationDefinitionNode);
/** Adds unique typenames to query (for invalidating cache entries) */
const mapTypeNames = (operation) => {
    const query = (0, core_1.formatDocument)(operation.query);
    if (query !== operation.query) {
        const formattedOperation = (0, core_1.makeOperation)(operation.kind, operation);
        formattedOperation.query = query;
        return formattedOperation;
    }
    else {
        return operation;
    }
};
exports.mapTypeNames = mapTypeNames;
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
const cacheExchange = ({ forward, client, dispatchDebug }) => {
    const resultCache = new Map();
    const operationCache = new Map();
    const isOperationCached = (operation) => operation.kind === "query" &&
        operation.context.requestPolicy !== "network-only" &&
        (operation.context.requestPolicy === "cache-only" || resultCache.has(operation.key));
    return (ops$) => {
        const cachedOps$ = (0, wonka_1.pipe)(ops$, (0, wonka_1.filter)((op) => !shouldSkip(op) && isOperationCached(op)), (0, wonka_1.map)((operation) => {
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
            let result = cachedResult ||
                (0, core_1.makeResult)(operation, {
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
                (0, exports.reexecuteOperation)(client, operation);
            }
            return result;
        }));
        const forwardedOps$ = (0, wonka_1.pipe)((0, wonka_1.merge)([
            (0, wonka_1.pipe)(ops$, (0, wonka_1.filter)((op) => !shouldSkip(op) && !isOperationCached(op)), (0, wonka_1.map)(exports.mapTypeNames)),
            (0, wonka_1.pipe)(ops$, (0, wonka_1.filter)((op) => shouldSkip(op))),
        ]), (0, wonka_1.map)((op) => addMetadata(op, { cacheOutcome: "miss" })), (0, wonka_1.filter)((op) => op.kind !== "query" || op.context.requestPolicy !== "cache-only"), forward, (0, wonka_1.tap)((response) => {
            let { operation } = response;
            if (!operation)
                return;
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
                const pendingOperations = new Set();
                dispatchDebug({
                    type: "cacheInvalidation",
                    message: `The following typenames have been invalidated: ${typenames}`,
                    operation,
                    data: { typenames, response },
                });
                for (let i = 0; i < typenames.length; i++) {
                    const typeName = typenames[i];
                    let operations = operationCache.get(typeName);
                    if (!operations)
                        operationCache.set(typeName, (operations = new Set()));
                    for (const key of operations.values())
                        pendingOperations.add(key);
                    operations.clear();
                }
                for (const key of pendingOperations.values()) {
                    if (resultCache.has(key)) {
                        operation = resultCache.get(key).operation;
                        resultCache.delete(key);
                        (0, exports.reexecuteOperation)(client, operation);
                    }
                }
            }
            else if (operation.kind === "query" && response.data) {
                resultCache.set(operation.key, response);
                for (let i = 0; i < typenames.length; i++) {
                    const typeName = typenames[i];
                    let operations = operationCache.get(typeName);
                    if (!operations)
                        operationCache.set(typeName, (operations = new Set()));
                    operations.add(operation.key);
                }
            }
        }));
        return (0, wonka_1.merge)([cachedOps$, forwardedOps$]);
    };
};
exports.cacheExchange = cacheExchange;
/** Reexecutes an `Operation` with the `network-only` request policy.
 * @internal
 */
const reexecuteOperation = (client, operation) => {
    return client.reexecuteOperation((0, core_1.makeOperation)(operation.kind, operation, {
        requestPolicy: "network-only",
    }));
};
exports.reexecuteOperation = reexecuteOperation;
const collectTypes = (obj, types) => {
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            collectTypes(obj[i], types);
        }
    }
    else if (typeof obj === "object" && obj !== null) {
        for (const key in obj) {
            if (key === "__typename" && typeof obj[key] === "string") {
                types.add(obj[key]);
            }
            else {
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
const collectTypenames = (response) => [...collectTypes(response, new Set())];
// the below function is copied from https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/utils/operation.ts
/** Adds additional metadata to an `Operation`'s `context.meta` property while copying it.
 * @see {@link OperationDebugMeta} for more information on the {@link OperationContext.meta} property.
 */
const addMetadata = (operation, meta) => {
    return (0, core_1.makeOperation)(operation.kind, operation, {
        meta: {
            ...operation.context.meta,
            ...meta,
        },
    });
};
//# sourceMappingURL=cacheExchange.js.map