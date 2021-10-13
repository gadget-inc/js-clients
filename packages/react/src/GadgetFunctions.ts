import { GadgetRecord, GadgetRecordList, LimitToKnownKeys, VariableOptions } from "@gadgetinc/api-client-core";

export type AsyncRecord<T> = Promise<GadgetRecord<T>>;
export type AsyncRecordList<T> = Promise<GadgetRecordList<T>>;

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

interface ActionWithIdAndVariables<OptionsT, VariablesT> {
  <Options extends OptionsT>(id: string, variables: VariablesT, options?: LimitToKnownKeys<Options, OptionsT>):
    | AsyncRecord<any>
    | Promise<void>;
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

interface ActionFunctionMetadata<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT> {
  type: "action";
  operationName: string;
  modelApiIdentifier: string;
  defaultSelection: DefaultsT;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  variables: VariableOptions;
  variablesType: VariablesT;
}

export type ActionFunction<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT> = ActionFunctionMetadata<
  OptionsT,
  VariablesT,
  SelectionT,
  SchemaT,
  DefaultsT
> &
  (
    | ActionWithIdAndVariables<OptionsT, VariablesT>
    | ActionWithIdAndNoVariables<OptionsT>
    | ActionWithNoIdAndVariables<OptionsT, VariablesT>
    | ActionWithNoIdAndNoVariables<OptionsT>
  );
