import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import type { BaseFindOptions, FindManyOptions, VariablesOptions } from "./types.js";
type LiveResultForOptions<T, LiveOptions extends {
    live?: boolean | null;
}> = LiveOptions extends {
    live: true;
} ? AsyncIterable<T> : Promise<T>;
export declare const findOneRunner: <Shape extends RecordShape = any, Options extends BaseFindOptions<any> = {
    live: false;
}>(modelManager: {
    connection: GadgetConnection;
}, operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options | null | undefined, throwOnEmptyData?: boolean) => LiveResultForOptions<GadgetRecord<Shape>, Options>;
export declare const findOneByFieldRunner: <Shape extends RecordShape = any>(modelManager: {
    connection: GadgetConnection;
}, operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: BaseFindOptions | null) => Promise<import("./GadgetRecord.js").GadgetRecordImplementation<Shape> & Shape>;
export declare const findManyRunner: <Shape extends RecordShape = any, Options extends FindManyOptions = {
    live: false;
}>(modelManager: AnyModelManager, operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: Options | undefined, throwOnEmptyData?: boolean) => LiveResultForOptions<GadgetRecordList<Shape>, Options>;
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
export {};
