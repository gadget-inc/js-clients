import type { OperationContext, RequestPolicy } from "@urql/core";
interface QueryPlan {
    variables: any;
    query: string;
}
interface QueryOptions {
    context?: Partial<OperationContext>;
    pause?: boolean;
    requestPolicy?: RequestPolicy;
    suspense?: boolean;
}
/**
 * Given a plan from a gadget query plan generator, create the query options object to pass to `urql`'s `useQuery` hook
 **/
export declare const useQueryArgs: <Plan extends QueryPlan, Options extends QueryOptions>(plan: Plan, options?: Options) => any;
export declare const noProviderErrorMessage = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>";
export declare function assert<T>(value: T | undefined | null, message?: string): T;
export {};
