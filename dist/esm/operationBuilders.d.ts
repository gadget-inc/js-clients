import type { FieldSelection } from "./FieldSelection.js";
import type { VariablesOptions } from "./types.js";
type AnySort = any;
type AnyFilter = any;
export type BaseFindOptions = {
    live?: boolean;
    select?: any;
};
export type PaginationOptions = {
    sort?: AnySort | null;
    filter?: AnyFilter | null;
    search?: string | null;
    after?: string | null;
    first?: number | null;
    before?: string | null;
    last?: number | null;
} & BaseFindOptions;
export type FindFirstPaginationOptions = Omit<PaginationOptions, "first" | "last" | "before" | "after">;
export declare const findOneOperation: (operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findOneByFieldOperation: (operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findManyOperation: (operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: PaginationOptions) => {
    query: string;
    variables: Record<string, any>;
};
export declare const actionOperation: (operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const globalActionOperation: (operation: string, variables: VariablesOptions, namespace?: string | null, options?: {
    live?: boolean;
}) => {
    query: string;
    variables: Record<string, any>;
};
export {};
