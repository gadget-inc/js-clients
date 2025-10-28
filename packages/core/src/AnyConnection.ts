import type { Client } from "@urql/core";
import type { AnyErrorWrapper } from "./AnyErrorWrapper.js";
import type { AnyGadgetTransaction, TransactionRun } from "./AnyGadgetTransaction.js";
import type { AnyActionFunction, AnyBulkActionFunction, FunctionResult } from "./GadgetFunctions.js";
import type { AnyBackgroundActionHandle, BuildOperationResult, EnqueueBackgroundActionOptions } from "./types.js";

export type AnyConnectionOptions<SubscriptionClientOptionsT extends Record<string, any> = Record<string, any>> = Record<string, any> & {
  endpoint: string;
  subscriptionClientOptions?: SubscriptionClientOptionsT;
};

export type AnyConnection<OptionsT extends AnyConnectionOptions = AnyConnectionOptions, AuthenticationModeT = any> = {
  endpoint: string;
  options: OptionsT;
  get currentClient(): Client;
  setAuthenticationMode(authenticationMode?: AuthenticationModeT): void;
  close(): void;
  fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
  transaction: {
    <R, T extends AnyGadgetTransaction = AnyGadgetTransaction>(
      options: NonNullable<OptionsT["subscriptionClientOptions"]>,
      run: TransactionRun<R, T>
    ): Promise<R>;
    <R, T extends AnyGadgetTransaction = AnyGadgetTransaction>(run: TransactionRun<R, T>): Promise<R>;
  };
  enqueue: {
    plan: (action: AnyActionFunction, options?: EnqueueBackgroundActionOptions<any> | null) => BuildOperationResult;
    processOptions: (options: EnqueueBackgroundActionOptions<any>) => Record<string, any> | null;
    processResult: {
      <SchemaT, Action extends AnyBulkActionFunction>(action: Action, result: FunctionResult): {
        handles: AnyBackgroundActionHandle<SchemaT, Action>[] | null;
        error: AnyErrorWrapper | undefined;
      };
      <SchemaT, Action extends AnyActionFunction>(action: Action, result: FunctionResult): {
        handle: AnyBackgroundActionHandle<SchemaT, Action> | null;
        error: AnyErrorWrapper | undefined;
      };
    };
  };
};
