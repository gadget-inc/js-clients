import type { FieldSelection } from "./FieldSelection.js";
import type { BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";
export type FindFirstPaginationOptions = Omit<FindManyOptions, "first" | "last" | "before" | "after">;
export declare const findOneOperation: (operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findOneByFieldOperation: (operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findManyOperation: (operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: FindManyOptions) => {
    query: string;
    variables: Record<string, any>;
};
export declare const actionOperation: (operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null, isBulkAction?: boolean | null, hasReturnType?: boolean | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const globalActionOperation: (operation: string, variables: VariablesOptions, namespace?: string | null, options?: {
    live?: boolean;
}) => {
    query: string;
    variables: Record<string, any>;
};
export declare const graphqlizeBackgroundOptions: (options?: EnqueueBackgroundActionOptions<any> | null) => {
    [x: string]: any;
    id?: string | undefined;
    priority?: "low" | "default" | "high" | undefined;
    queue?: string | import("./types.js").BackgroundActionQueue | undefined;
    retries?: number | import("./types.js").BackgroundActionRetryPolicy | undefined;
    onDuplicateID?: "ignore" | "error" | undefined;
    _instance?: import("@urql/core/dist/urql-core-chunk.js").OperationInstance | undefined;
    additionalTypenames?: string[] | undefined;
    fetch?: typeof fetch | undefined;
    url?: string | undefined;
    fetchOptions?: RequestInit | (() => RequestInit) | undefined;
    fetchSubscriptions?: boolean | undefined;
    requestPolicy?: import("@urql/core/dist/urql-core-chunk.js").RequestPolicy | undefined;
    meta?: import("@urql/core/dist/urql-core-chunk.js").OperationDebugMeta | undefined;
    preferGetMethod?: boolean | "force" | "within-url-limit" | undefined;
    suspense?: boolean | undefined;
} | null;
export declare const enqueueActionOperation: (operation: string, variables: VariablesOptions, namespace?: string | null, options?: EnqueueBackgroundActionOptions<any> | null) => {
    query: string;
    variables: Record<string, any>;
};
