import type { FieldSelection } from "./FieldSelection.js";
import type { AnyActionFunction, HasReturnType } from "./index.js";
import type { ActionFunctionOptions, BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";
export type FindFirstPaginationOptions = Omit<FindManyOptions, "first" | "last" | "before" | "after">;
export declare const findOneOperation: (operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null, namespace?: string | string[] | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findOneByFieldOperation: (operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null, namespace?: string | string[] | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findManyOperation: (operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: FindManyOptions, namespace?: string | string[] | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const actionOperation: (operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | string[] | null, isBulkAction?: boolean | null, hasReturnType?: HasReturnType | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const backgroundActionResultOperation: <Action extends AnyActionFunction, Options extends ActionFunctionOptions<Action>>(id: string, action: Action, options?: Options) => {
    query: string;
    variables: Record<string, any>;
};
/** @deprecated previous export name, @see backgroundActionResultOperation */
export declare const actionResultOperation: <Action extends AnyActionFunction, Options extends ActionFunctionOptions<Action>>(id: string, action: Action, options?: Options) => {
    query: string;
    variables: Record<string, any>;
};
export declare const globalActionOperation: (operation: string, variables: VariablesOptions, namespace?: string | string[] | null, options?: {
    live?: boolean;
}) => {
    query: string;
    variables: Record<string, any>;
};
export interface GraphQLBackgroundActionOptions {
    retries?: {
        retryCount: number;
    };
    queue?: {
        name: string;
        maxConcurrency?: number;
    };
    priority?: "LOW" | "DEFAULT" | "HIGH";
    startAt?: string;
}
export declare const graphqlizeBackgroundOptions: (options?: EnqueueBackgroundActionOptions<any> | null) => GraphQLBackgroundActionOptions | null;
export declare const enqueueActionOperation: (operation: string, variables: VariablesOptions, namespace?: string | string[] | null, options?: EnqueueBackgroundActionOptions<any> | null, isBulk?: boolean) => {
    query: string;
    variables: Record<string, any>;
};
