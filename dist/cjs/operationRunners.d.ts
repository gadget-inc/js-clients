import type { BackgroundActionResult, BackgroundActionResultData } from "./BackgroundActionHandle.js";
import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunctionMetadata, AnyActionFunction, AnyBulkActionFunction, GlobalActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import type { BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";
type LiveResultForOptions<T, LiveOptions extends {
    live?: boolean | null;
}> = LiveOptions extends {
    live: true;
} ? AsyncIterable<T> : Promise<T>;
export declare const findOneRunner: <Shape extends RecordShape = any, Options extends BaseFindOptions<any> = {}>(modelManager: {
    connection: GadgetConnection;
}, operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options | null, throwOnEmptyData?: boolean) => LiveResultForOptions<GadgetRecord<Shape>, Options>;
export declare const findOneByFieldRunner: <Shape extends RecordShape = any, Options extends FindManyOptions = {}>(modelManager: {
    connection: GadgetConnection;
}, operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options | null, throwOnEmptyData?: boolean) => LiveResultForOptions<NonNullable<import("./GadgetRecord.js").GadgetRecordImplementation<Shape> & Shape> | null, Options>;
export declare const findManyRunner: <Shape extends RecordShape = any, Options extends FindManyOptions = {}>(modelManager: AnyModelManager, operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options, throwOnEmptyData?: boolean) => LiveResultForOptions<GadgetRecordList<Shape>, Options>;
export interface ActionRunner {
    (modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null, hasReturnType?: true): Promise<any>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null, hasReturnType?: false): Promise<Shape extends void ? void : GadgetRecord<Shape>>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
    (modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null, hasReturnType?: true): Promise<any[]>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | null, hasReturnType?: false): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}
export declare const actionRunner: ActionRunner;
export declare const globalActionRunner: (connection: GadgetConnection, operation: string, variables: VariablesOptions, namespace?: string | null) => Promise<any>;
export declare function enqueueActionRunner<SchemaT, Action extends AnyBulkActionFunction, Result = BackgroundActionHandle<SchemaT, Action>>(connection: GadgetConnection, action: Action, variables: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<Result[]>;
export declare function enqueueActionRunner<SchemaT, Action extends AnyActionFunction, Result = BackgroundActionHandle<SchemaT, Action>>(connection: GadgetConnection, action: Action, variables: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<Result>;
export declare const backgroundActionResultRunner: <SchemaT, Action extends GlobalActionFunction<any> | ActionFunctionMetadata<any, any, any, SchemaT, any, any>, ResultData = BackgroundActionResultData<Action>>(connection: GadgetConnection, id: string, action: Action, options?: Action extends ActionFunctionMetadata<any, any, any, SchemaT, any, any> ? Action["optionsType"] : never) => Promise<BackgroundActionResult<ResultData>>;
/** @deprecated previous export name, @see backgroundActionResultRunner */
export declare const actionResultRunner: <SchemaT, Action extends GlobalActionFunction<any> | ActionFunctionMetadata<any, any, any, SchemaT, any, any>, ResultData = BackgroundActionResultData<Action>>(connection: GadgetConnection, id: string, action: Action, options?: Action extends ActionFunctionMetadata<any, any, any, SchemaT, any, any> ? Action["optionsType"] : never) => Promise<BackgroundActionResult<ResultData>>;
export {};
