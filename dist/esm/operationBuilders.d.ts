import type { FieldSelection } from "./FieldSelection.js";
import type { BaseFindOptions, FindManyOptions, VariablesOptions } from "./types.js";
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
