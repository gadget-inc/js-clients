import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import type { PaginationOptions, SelectionOptions, VariableOptions } from "./operationBuilders.js";
export declare const findOneRunner: <Shape extends RecordShape = any>(modelManager: {
    connection: GadgetConnection;
}, operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null, throwOnEmptyData?: boolean) => Promise<GadgetRecord<Shape>>;
export declare const findOneByFieldRunner: <Shape extends RecordShape = any>(modelManager: {
    connection: GadgetConnection;
}, operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null) => Promise<import("./GadgetRecord.js").GadgetRecordImplementation<Shape> & Shape>;
export declare const findManyRunner: <Shape extends RecordShape = any>(modelManager: AnyModelManager, operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: PaginationOptions, throwOnEmptyData?: boolean) => Promise<GadgetRecordList<Shape>>;
export interface ActionRunner {
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariableOptions, options?: SelectionOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>>;
    <Shape extends RecordShape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariableOptions, options?: SelectionOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}
export declare const actionRunner: ActionRunner;
export declare const globalActionRunner: (connection: GadgetConnection, operation: string, variables: VariableOptions, namespace?: string | null) => Promise<any>;
