import type { Client } from "@urql/core";
import { AnyActionFunction } from "./GadgetFunctions.js";
import { TransactionRun } from "./GadgetTransaction.js";
import { AnyBackgroundActionHandle, BuildOperationResult, EnqueueBackgroundActionOptions } from "./types.js";
export type AnyConnectionOptions<SubscriptionClientOptionsT extends Record<string, any> = Record<string, any>> = Record<string, any> & {
    endpoint: string;
    subscriptionClientOptions?: SubscriptionClientOptionsT;
};
export type AnyConnection<OptionsT extends AnyConnectionOptions = AnyConnectionOptions> = {
    endpoint: string;
    options: OptionsT;
    get currentClient(): Client;
    close(): void;
    fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
    transaction: {
        <T>(options: OptionsT["subscriptionClientOptions"], run: TransactionRun<T>): Promise<T>;
        <T>(run: TransactionRun<T>): Promise<T>;
    };
    enqueue: {
        plan: (action: AnyActionFunction, options?: EnqueueBackgroundActionOptions<any> | null) => BuildOperationResult;
        processOptions: (options: EnqueueBackgroundActionOptions<any>) => Record<string, any> | null;
        createHandle: <SchemaT, Action extends AnyActionFunction>(action: Action, id: string) => AnyBackgroundActionHandle<SchemaT, Action>;
    };
};
