import type { BackgroundActionResult, BackgroundActionResultData } from "./BackgroundActionHandle.js";
import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunctionMetadata, GlobalActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import type { BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";
export declare const findOneRunner: <Shape extends RecordShape = any>(modelManager: {
    connection: GadgetConnection;
}, operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null, throwOnEmptyData?: boolean) => Promise<GadgetRecord<Shape>>;
export declare const findOneByFieldRunner: <Shape extends RecordShape = any>(modelManager: {
    connection: GadgetConnection;
}, operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null) => Promise<import("./GadgetRecord.js").GadgetRecordImplementation<Shape> & Shape>;
export declare const findManyRunner: <Shape extends RecordShape = any>(modelManager: AnyModelManager, operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: FindManyOptions, throwOnEmptyData?: boolean) => Promise<GadgetRecordList<Shape>>;
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
export declare const enqueueActionRunner: <Action extends ActionFunctionMetadata<any, any, any, any, any, any> | GlobalActionFunction<any>>(connection: GadgetConnection, action: Action, variables: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>) => Promise<BackgroundActionHandle<Action>>;
export declare const actionResultRunner: <SchemaT, Action extends GlobalActionFunction<any> | ActionFunctionMetadata<any, any, any, SchemaT, any, any>, ResultData = BackgroundActionResultData<SchemaT, Action>>(connection: GadgetConnection, id: string, action: Action, options?: Action extends ActionFunctionMetadata<any, any, any, any, any, any> ? Action["optionsType"] : never) => Promise<BackgroundActionResult<ResultData>>;
