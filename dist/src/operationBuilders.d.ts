import type VariableOptions from "gql-query-builder/build/VariableOptions";
import type { FieldSelection } from ".";
export type { default as VariableOptions } from "gql-query-builder/build/VariableOptions";
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
    variables: any;
    query: string;
};
export declare const findOneByFieldOperation: (operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null) => {
    variables: any;
    query: string;
};
export declare const findManyOperation: (operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: PaginationOptions) => {
    variables: any;
    query: string;
};
export declare const actionOperation: (operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, variables: VariableOptions, options?: SelectionOptions | null, namespace?: string | null) => {
    variables: any;
    query: string;
};
export declare const globalActionOperation: (operation: string, variables: VariableOptions, namespace?: string | null) => {
    variables: any;
    query: string;
};
