/**
 * This file was copied from: https://github.com/urql-graphql/urql/blob/25d114d25807f0676dbf453732602753279ba0db/packages/core/src/exchanges/cache.ts
 * Any meaningful changes are documented with comments starting with "GADGET:"
 */
import { type Client, type Exchange, type Operation } from "@urql/core";
/** Adds unique typenames to query (for invalidating cache entries) */
export declare const mapTypeNames: (operation: Operation) => Operation;
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
export declare const cacheExchange: Exchange;
/** Reexecutes an `Operation` with the `network-only` request policy.
 * @internal
 */
export declare const reexecuteOperation: (client: Client, operation: Operation) => void;
