import VariableOptions from "gql-query-builder/build/VariableOptions";
import { FieldSelection } from "./FieldSelection";
import { FindManyOptions, SelectionOptions } from "./types";
export type { default as VariableOptions } from "gql-query-builder/build/VariableOptions";
export declare type FindFirstPaginationOptions = Omit<FindManyOptions, "first" | "last" | "before" | "after">;
export declare const findOneOperation: (operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null) => {
    variables: any;
    query: string;
};
export declare const findOneByFieldOperation: (operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null) => {
    variables: any;
    query: string;
};
export declare const findManyOperation: (operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: FindManyOptions) => {
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
