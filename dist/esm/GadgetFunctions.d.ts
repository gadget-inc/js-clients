import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import type { GadgetRecordList } from "./GadgetRecordList.js";
import type { LimitToKnownKeys, VariablesOptions } from "./types.js";
export type AsyncRecord<T extends RecordShape> = Promise<GadgetRecord<T>>;
export type AsyncNullableRecord<T extends RecordShape> = Promise<GadgetRecord<T> | null>;
export type AsyncRecordList<T extends RecordShape> = Promise<GadgetRecordList<T>>;
export interface FindOneFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
    <Options extends OptionsT>(fieldValue: string, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
    type: "findOne";
    findByVariableName: string;
    operationName: string;
    modelApiIdentifier: string;
    defaultSelection: DefaultsT;
    selectionType: SelectionT;
    optionsType: OptionsT;
    schemaType: SchemaT | null;
}
export interface MaybeFindOneFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
    <Options extends OptionsT>(fieldValue: string, options?: LimitToKnownKeys<Options, OptionsT>): AsyncNullableRecord<any>;
    type: "maybeFindOne";
    findByVariableName: string;
    operationName: string;
    modelApiIdentifier: string;
    defaultSelection: DefaultsT;
    selectionType: SelectionT;
    optionsType: OptionsT;
    schemaType: SchemaT | null;
}
export interface FindManyFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
    <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecordList<any>;
    type: "findMany";
    operationName: string;
    modelApiIdentifier: string;
    defaultSelection: DefaultsT;
    selectionType: SelectionT;
    optionsType: OptionsT;
    schemaType: SchemaT | null;
}
export interface FindFirstFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
    <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
    type: "findFirst";
    operationName: string;
    modelApiIdentifier: string;
    defaultSelection: DefaultsT;
    selectionType: SelectionT;
    optionsType: OptionsT;
    schemaType: SchemaT | null;
}
export interface MaybeFindFirstFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
    <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncNullableRecord<any>;
    type: "maybeFindFirst";
    operationName: string;
    modelApiIdentifier: string;
    defaultSelection: DefaultsT;
    selectionType: SelectionT;
    optionsType: OptionsT;
    schemaType: SchemaT | null;
}
interface ActionWithIdAndVariables<OptionsT, VariablesT> {
    <Options extends OptionsT>(id: string, variables: VariablesT, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any> | Promise<void>;
}
interface ActionWithNoIdAndVariables<OptionsT, VariablesT> {
    <Options extends OptionsT>(variables: VariablesT, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}
interface ActionWithIdAndNoVariables<OptionsT> {
    <Options extends OptionsT>(id: string, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any> | Promise<void>;
}
interface ActionWithNoIdAndNoVariables<OptionsT> {
    <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}
interface BulkActionWithIdsAndNoVariables<OptionsT> {
    <Options extends OptionsT>(ids: string[], options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}
interface BulkActionWithInputs<OptionsT, VariablesT> {
    <Options extends OptionsT>(inputs: VariablesT, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}
export interface ActionFunctionMetadata<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT, IsBulk> {
    type: "action";
    operationName: string;
    namespace: string | null;
    modelApiIdentifier: string;
    modelSelectionField: string;
    defaultSelection: DefaultsT;
    selectionType: SelectionT;
    optionsType: OptionsT;
    schemaType: SchemaT | null;
    variables: VariablesOptions;
    variablesType: VariablesT;
    isBulk: IsBulk;
    hasAmbiguousIdentifier?: boolean;
    /** @deprecated */
    hasCreateOrUpdateEffect?: boolean;
    acceptsModelInput?: boolean;
    paramOnlyVariables?: readonly string[];
    hasReturnType?: boolean;
}
export type ActionFunction<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT> = ActionFunctionMetadata<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT, false> & (ActionWithIdAndVariables<OptionsT, VariablesT> | ActionWithIdAndNoVariables<OptionsT> | ActionWithNoIdAndVariables<OptionsT, VariablesT> | ActionWithNoIdAndNoVariables<OptionsT>);
export type BulkActionFunction<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT> = ActionFunctionMetadata<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT, true> & (BulkActionWithIdsAndNoVariables<OptionsT> | BulkActionWithInputs<OptionsT, VariablesT>);
export interface GetFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
    <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<GadgetRecord<any>>;
    type: "get";
    operationName: string;
    modelApiIdentifier: string;
    defaultSelection: DefaultsT;
    selectionType: SelectionT;
    optionsType: OptionsT;
    schemaType: SchemaT | null;
}
export interface GlobalActionFunction<VariablesT> {
    (variables: VariablesT): Promise<any>;
    type: "globalAction";
    operationName: string;
    namespace: string | null;
    variables: VariablesOptions;
    variablesType: VariablesT;
}
export type AnyActionFunction = ActionFunctionMetadata<any, any, any, any, any, any> | GlobalActionFunction<any>;
export {};
