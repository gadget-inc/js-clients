import type { FieldSelection } from "./FieldSelection.js";
import type { VariablesOptions } from "./types.js";
type AnySort = any;
type AnyFilter = any;
export type SelectionOptions = {
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
} & SelectionOptions;
export type FindFirstPaginationOptions = Omit<PaginationOptions, "first" | "last" | "before" | "after">;
export declare const findOneOperation: (operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findOneByFieldOperation: (operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const findManyOperation: (operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: PaginationOptions) => {
    query: string;
    variables: Record<string, any>;
};
export declare const actionOperation: (operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, variables: VariablesOptions, options?: SelectionOptions | null, namespace?: string | null) => {
    query: string;
    variables: Record<string, any>;
};
export declare const globalActionOperation: (operation: string, variables: VariablesOptions, namespace?: string | null) => {
    query: string;
    variables: Record<string, any>;
};
export {};
