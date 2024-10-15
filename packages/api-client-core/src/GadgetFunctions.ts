import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import type { GadgetRecordList } from "./GadgetRecordList.js";
import type { AllFieldsSelected, AvailableSelection2, DefaultSelection2, LimitToKnownKeys, Select2, VariablesOptions } from "./types.js";

export type PromiseOrLiveIterator<T> = Promise<T> | AsyncIterable<T>;
export type AsyncRecord<T extends RecordShape> = PromiseOrLiveIterator<GadgetRecord<T>>;
export type AsyncNullableRecord<T extends RecordShape> = PromiseOrLiveIterator<GadgetRecord<T> | null>;
export type AsyncRecordList<T extends RecordShape> = PromiseOrLiveIterator<GadgetRecordList<T>>;

export interface GQLBuilderResult {
  query: string;
  variables: Record<string, any>;
}

export interface FindOneFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
  <Options extends OptionsT>(fieldValue: string, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
  type: "findOne";
  findByVariableName: string;
  operationName: string;
  modelApiIdentifier: string;
  defaultSelection: DefaultsT;
  namespace?: string | string[] | null;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  plan?: <Options extends OptionsT>(fieldValue: string, options?: LimitToKnownKeys<Options, OptionsT>) => GQLBuilderResult;
}

export interface MaybeFindOneFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
  <Options extends OptionsT>(fieldValue: string, options?: LimitToKnownKeys<Options, OptionsT>): AsyncNullableRecord<any>;

  type: "maybeFindOne";
  findByVariableName: string;
  operationName: string;
  modelApiIdentifier: string;
  defaultSelection: DefaultsT;
  namespace?: string | string[] | null;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  plan?: <Options extends OptionsT>(fieldValue: string, options?: LimitToKnownKeys<Options, OptionsT>) => GQLBuilderResult;
}

export interface FindManyFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
  <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecordList<any>;

  type: "findMany";
  operationName: string;
  modelApiIdentifier: string;
  defaultSelection: DefaultsT;
  namespace?: string | string[] | null;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  plan?: <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>) => GQLBuilderResult;
}

export interface FindFirstFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
  <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;

  type: "findFirst";
  operationName: string;
  modelApiIdentifier: string;
  defaultSelection: DefaultsT;
  namespace?: string | string[] | null;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  plan?: <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>) => GQLBuilderResult;
}

export interface MaybeFindFirstFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
  <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncNullableRecord<any>;

  type: "maybeFindFirst";
  operationName: string;
  modelApiIdentifier: string;
  defaultSelection: DefaultsT;
  namespace?: string | string[] | null;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  plan?: <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>) => GQLBuilderResult;
}

export interface ActionWithIdAndVariables<OptionsT, VariablesT> {
  <Options extends OptionsT>(id: string, variables: VariablesT, options?: LimitToKnownKeys<Options, OptionsT>):
    | AsyncRecord<any>
    | Promise<void>;
}

export interface ActionWithNoIdAndVariables<OptionsT, VariablesT> {
  <Options extends OptionsT>(variables: VariablesT, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}

export interface ActionWithIdAndNoVariables<OptionsT> {
  <Options extends OptionsT>(id: string, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any> | Promise<void>;
}

export interface ActionWithNoIdAndNoVariables<OptionsT> {
  <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}

export interface BulkActionWithIdsAndNoVariables<OptionsT> {
  <Options extends OptionsT>(ids: string[], options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}

export interface BulkActionWithInputs<OptionsT, VariablesT> {
  <Options extends OptionsT>(inputs: VariablesT, options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<any>;
}

export type HasReturnType = boolean | Record<string, { hasReturnType: HasReturnType } | { select: boolean }>;

export interface ActionFunctionMetadata<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT, IsBulk> {
  type: "action";
  operationName: string;
  operationReturnType?: string;
  namespace: string | string[] | null;
  modelApiIdentifier: string;
  operatesWithRecordIdentity?: boolean;
  modelSelectionField: string;
  defaultSelection: DefaultsT;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  variables: VariablesOptions;
  variablesType: VariablesT;
  isBulk: IsBulk;
  hasAmbiguousIdentifier?: boolean;
  acceptsModelInput?: boolean;
  paramOnlyVariables?: readonly string[];
  hasReturnType?: HasReturnType;
  singleActionFunctionName?: string;
  plan?: <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>) => GQLBuilderResult;
  /** @deprecated */
  hasCreateOrUpdateEffect?: boolean;
}

export type StubbedActionReason = "MissingApiTrigger";

export interface StubbedActionFunctionMetadata {
  type: "stubbedAction";
  functionName: string;
  operationName?: string;
  errorMessage: string;
  actionApiIdentifier: string;
  modelApiIdentifier?: string;
  variables: VariablesOptions;
  reason: StubbedActionReason;
  dataPath: string;
}

export type StubbedActionFunction<OptionsT> = StubbedActionFunctionMetadata & ActionWithNoIdAndNoVariables<OptionsT>;

export type ActionFunction<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT> = ActionFunctionMetadata<
  OptionsT,
  VariablesT,
  SelectionT,
  SchemaT,
  DefaultsT,
  false
> &
  (
    | ActionWithIdAndVariables<OptionsT, VariablesT>
    | ActionWithIdAndNoVariables<OptionsT>
    | ActionWithNoIdAndVariables<OptionsT, VariablesT>
    | ActionWithNoIdAndNoVariables<OptionsT>
  );

export type BulkActionFunction<OptionsT, VariablesT, SelectionT, SchemaT, DefaultsT> = ActionFunctionMetadata<
  OptionsT,
  VariablesT,
  SelectionT,
  SchemaT,
  DefaultsT,
  true
> &
  (BulkActionWithIdsAndNoVariables<OptionsT> | BulkActionWithInputs<OptionsT, VariablesT>);

export interface GetFunction<OptionsT, SelectionT, SchemaT, DefaultsT> {
  <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>): AsyncRecord<GadgetRecord<any>>;

  type: "get";
  operationName: string;
  modelApiIdentifier: string;
  defaultSelection: DefaultsT;
  namespace?: string | string[] | null;
  selectionType: SelectionT;
  optionsType: OptionsT;
  schemaType: SchemaT | null;
  plan?: <Options extends OptionsT>(options?: LimitToKnownKeys<Options, OptionsT>) => GQLBuilderResult;
}

export interface GlobalActionFunction<VariablesT> {
  (variables: VariablesT): Promise<any>;

  type: "globalAction";
  operationName: string;
  operationReturnType?: string;
  namespace: string | string[] | null;
  variables: VariablesOptions;
  variablesType: VariablesT;
  isBulk?: undefined;
  plan?: (variables?: VariablesOptions) => GQLBuilderResult;
}

export type AnyActionFunction = ActionFunctionMetadata<any, any, any, any, any, any> | GlobalActionFunction<any>;
export type AnyBulkActionFunction = ActionFunctionMetadata<any, any, any, any, any, true>;

// This is a function that represents a computed view that doesn't take any input parameters/variables.
// Result is an explicit type parameter defining the shape of the full result.
export type ComputedViewFunctionWithoutVariables<Result> =
  // Available, Options and Defaults are inferred at call time.
  <
    // Available is the full FieldSelection type derived from the shape of the Result type, i.e. all possible selections.
    Available extends AvailableSelection2<Result> & FieldSelection,
    // Options holds the actual selection at call time.
    Options extends { select?: Available | null },
    // Defaults is the default selection to be used when one is not provided at call time,
    // for views we default to everything being selected.
    Defaults extends AllFieldsSelected<Available>
  >(
    options?: Options
  ) => Promise<Select2<Result, DefaultSelection2<Available, Options, Defaults>>>;

// Represents a computed view that doesn't take any input parameters/variables.
// It includes the view function and the view metadata.
export interface ComputedViewWithoutVariables<Result> extends ComputedViewFunctionWithoutVariables<Result> {
  type: "computedView";
  operationName: string;
  namespace: string | string[] | null;
  defaultSelection: FieldSelection;
  selection?: FieldSelection;
  selectionType: AvailableSelection2<Result>;
  resultType: Result;
}

// This is a function that represents a computed view that takes input parameters/variables.
// Result is an explicit type parameter defining the shape of the full result.
// Variables is an explicit type parameter that describes the shape of the variables parameter.
export type ComputedViewFunctionWithVariables<Variables, Result> =
  // Available, Options and Defaults are inferred at call time.
  <
    // Available is the full FieldSelection type derived from the shape of the Result type, i.e. all possible selections.
    Available extends AvailableSelection2<Result> & FieldSelection,
    // Options holds the actual selection at call time.
    Options extends { select?: Available | null },
    // Defaults is the default selection to be used when one is not provided at call time,
    // for views we default to everything being selected.
    Defaults extends AllFieldsSelected<Available>
  >(
    variables: Variables,
    options?: Options
  ) => Promise<Select2<Result, DefaultSelection2<Available, Options, Defaults>>>;

// Represents a computed view that takes input parameters/variables.
// It includes the view function and the view metadata.
export interface ComputedViewWithVariables<Variables, Result> extends ComputedViewFunctionWithVariables<Variables, Result> {
  type: "computedView";
  operationName: string;
  namespace: string | string[] | null;
  variables: VariablesOptions;
  variablesType: Variables;
  defaultSelection: FieldSelection;
  selection?: FieldSelection;
  selectionType: AvailableSelection2<Result>;
  resultType: Result;
}
