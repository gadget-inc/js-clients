import type { BackgroundActionResult, BackgroundActionResultData } from "./BackgroundActionHandle.js";
import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunctionMetadata, AnyActionFunction, AnyBulkActionFunction, GlobalActionFunction, HasReturnType } from "./GadgetFunctions.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import type { ActionFunctionOptions, BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";
type LiveResultForOptions<T, LiveOptions extends {
    live?: boolean | null;
}> = LiveOptions extends {
    live: true;
} ? AsyncIterable<T> : Promise<T>;
export declare const findOneRunner: <Shape extends RecordShape = any, Options extends BaseFindOptions<any> = {}>(modelManager: {
    connection: GadgetConnection;
}, operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options | null, throwOnEmptyData?: boolean, namespace?: string | string[] | null) => LiveResultForOptions<GadgetRecord<Shape>, Options>;
export declare const findOneByFieldRunner: <Shape extends RecordShape = any, Options extends FindManyOptions = {}>(modelManager: {
    connection: GadgetConnection;
}, operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options | null, throwOnEmptyData?: boolean, namespace?: string | string[] | null) => LiveResultForOptions<NonNullable<import("./GadgetRecord.js").GadgetRecord_<Shape> & Shape> | null, Options>;
export declare const findManyRunner: <Shape extends RecordShape = any, Options extends FindManyOptions = {}>(modelManager: AnyModelManager, operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options, throwOnEmptyData?: boolean, namespace?: string | string[] | null) => LiveResultForOptions<GadgetRecordList<Shape>, Options>;
export interface ActionRunner {
    (modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | string[] | null, hasReturnType?: HasReturnType): Promise<any>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | string[] | null, hasReturnType?: false | null): Promise<Shape extends void ? void : GadgetRecord<Shape>>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | string[] | null): Promise<Shape extends void ? void : GadgetRecord<Shape>>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | string[] | null): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
    (modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | string[] | null, hasReturnType?: HasReturnType): Promise<any[]>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariablesOptions, options?: BaseFindOptions | null, namespace?: string | string[] | null, hasReturnType?: false | null): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}
export declare const actionRunner: ActionRunner;
export declare const processActionResponse: <Shape extends RecordShape = any>(defaultSelection: FieldSelection | null, response: any, record: any, modelSelectionField: string, hasReturnType?: HasReturnType | null) => any;
export declare const globalActionRunner: (connection: GadgetConnection, operation: string, variables: VariablesOptions, namespace?: string | string[] | null) => Promise<any>;
export declare function enqueueActionRunner<SchemaT, Action extends AnyBulkActionFunction, Result = BackgroundActionHandle<SchemaT, Action>>(connection: GadgetConnection, action: Action, variables: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<Result[]>;
export declare function enqueueActionRunner<SchemaT, Action extends AnyActionFunction, Result = BackgroundActionHandle<SchemaT, Action>>(connection: GadgetConnection, action: Action, variables: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<Result>;
export declare const backgroundActionResultRunner: <SchemaT, Action extends GlobalActionFunction<any> | ActionFunctionMetadata<any, any, any, SchemaT, any, any>, Options extends ActionFunctionOptions<Action>, ResultData = BackgroundActionResultData<Action, Options>>(connection: GadgetConnection, id: string, action: Action, options?: Options) => Promise<BackgroundActionResult<ResultData>>;
/** @deprecated previous export name, @see backgroundActionResultRunner */
export declare const actionResultRunner: <SchemaT, Action extends GlobalActionFunction<any> | ActionFunctionMetadata<any, any, any, SchemaT, any, any>, Options extends ActionFunctionOptions<Action>, ResultData = BackgroundActionResultData<Action, Options>>(connection: GadgetConnection, id: string, action: Action, options?: Options) => Promise<BackgroundActionResult<ResultData>>;
export {};
