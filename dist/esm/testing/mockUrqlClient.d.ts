import { jest } from "@jest/globals";
import type { Client, GraphQLRequest, OperationResult, OperationResultSource } from "@urql/core";
import type { DocumentNode, ExecutionResult } from "graphql";
import type { SubscribePayload, Client as SubscriptionClient, Sink as SubscriptionSink } from "graphql-ws";
import type { FunctionLike } from "jest-mock";
import pRetry from "p-retry";
import type { Source, Subject } from "wonka";
type ActFn = <T>(callback: () => T | Promise<T>) => Promise<T>;
export declare const setAct: (actFn: ActFn) => void;
/** Patches a `toPromise` method onto the `Source` passed to it.
 * @param source$ - the Wonka {@link Source} to patch.
 * @returns The passed `source$` with a patched `toPromise` method as a {@link PromisifiedSource}.
 * copied from https://github.com/urql-graphql/urql/blob/656495100ea3861075b70b48516b10914efbcfd6/packages/core/src/utils/streamUtils.ts#L10
 */
export declare function withPromise<T extends OperationResult>(_source$: Source<T>): OperationResultSource<T>;
export type MockOperationFn<F extends FunctionLike> = jest.Mock<(...args: any[]) => any> & {
    subjects: Record<string, Subject<OperationResult>>;
    /**
     * Push a response to any subscribed listeners from an `executeXYZ` call in an urql client.
     *
     * The key word here is "subscribed". If no query/mutation/subscription call has been made yet, the pushed response will be "dropped".
     * One should ensure the appropriate `executeXYZ` call has been made by urql, then call this function.
     */
    pushResponse: (key: string, response: Omit<OperationResult, "operation">) => void;
    /**
     *
     * Waits for a subject to be created for a given key. This is useful for ensuring waiting in a test for a query or mutation to be run
     */
    waitForSubject: (key: string) => Promise<void>;
};
export type MockFetchFn = jest.Mock & {
    requests: {
        args: any[];
        resolve: (response: Response) => void;
        reject: (error: Error) => void;
    }[];
    pushResponse: (response: Response) => Promise<void>;
    waitForRequest: (options?: pRetry.Options) => Promise<void>;
};
declare const $gadgetConnection: unique symbol;
export interface MockUrqlClient extends Client {
    executeQuery: MockOperationFn<Client["executeQuery"]>;
    executeMutation: MockOperationFn<Client["executeMutation"]>;
    executeSubscription: MockOperationFn<Client["executeSubscription"]>;
    [$gadgetConnection]: {
        fetch: MockFetchFn;
    };
    mockFetch: MockFetchFn;
    _react?: any;
}
export declare const graphqlDocumentName: (doc: DocumentNode) => any;
export declare const createMockUrqlClient: (assertions?: {
    mutationAssertions?: (request: GraphQLRequest) => void;
    queryAssertions?: (request: GraphQLRequest) => void;
}) => MockUrqlClient;
export interface MockSubscription {
    payload: SubscribePayload;
    sink: SubscriptionSink<ExecutionResult<any, any>>;
    push: (result: ExecutionResult<any, any>) => void;
    disposed: boolean;
}
export type MockSubscribeFn = ((payload: SubscribePayload, sink: SubscriptionSink<ExecutionResult<any, any>>) => () => void) & {
    subscriptions: MockSubscription[];
};
export interface MockGraphQLWSClient extends SubscriptionClient {
    subscribe: MockSubscribeFn;
}
export declare const mockUrqlClient: MockUrqlClient;
export declare const mockGraphQLWSClient: MockGraphQLWSClient;
export {};
