import type { Exchange } from "@urql/core";
/**
 * Exchange that prevents duplicate execution of live queries while allowing proper teardown and re-establishment.
 *
 * Live queries are long-running special subscriptions that receive real-time updates from the server. When mutations occur, urql's cache exchange tries to re-execute any mounted queries that could be affected and so re-executes live queries. Live queries automatically update their own data using their own persistent connection, so they shouldn't be re-executed if already mounted.
 */
export declare const liveQueryExchange: Exchange;
