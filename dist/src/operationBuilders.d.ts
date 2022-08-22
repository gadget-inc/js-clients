import VariableOptions from "gql-query-builder/build/VariableOptions";
import { FieldSelection } from ".";
export type { default as VariableOptions } from "gql-query-builder/build/VariableOptions";
declare type AnySort = any;
declare type AnyFilter = any;
export declare type SelectionOptions = {
    select?: any;
};
export declare type PaginationOptions = {
    sort?: AnySort | null;
    filter?: AnyFilter | null;
    search?: string | null;
    after?: string | null;
    first?: number | null;
    before?: string | null;
    last?: number | null;
} & SelectionOptions;
export declare type FindFirstPaginationOptions = Omit<PaginationOptions, "first" | "last" | "before" | "after">;
export declare const findOneOperation: (operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null | undefined) => {
    variables: any;
    query: string;
};
export declare const findOneByFieldOperation: (operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null | undefined) => {
    variables: any;
    query: string;
};
export declare const findManyOperation: (operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: PaginationOptions | undefined) => {
    variables: any;
    query: string;
};
export declare const actionOperation: (operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, variables: VariableOptions, options?: SelectionOptions | null | undefined, namespace?: string | null | undefined) => {
    variables: any;
    query: string;
};
export declare const globalActionOperation: (operation: string, variables: VariableOptions, namespace?: string | null | undefined) => {
    variables: any;
    query: string;
};
