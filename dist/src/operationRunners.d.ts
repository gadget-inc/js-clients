import { VariableOptions } from ".";
import { FieldSelection } from "./FieldSelection";
import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { AnyModelManager } from "./ModelManager";
import { PaginationOptions, SelectionOptions } from "./operationBuilders";
export declare const findOneRunner: <Shape = any>(modelManager: {
    connection: GadgetConnection;
}, operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null | undefined) => Promise<Shape>;
export declare const findOneByFieldRunner: <Shape = any>(modelManager: {
    connection: GadgetConnection;
}, operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null | undefined) => Promise<import("./GadgetRecord").GadgetRecordImplementation<Shape> & Shape>;
export declare const findManyRunner: <Shape = any>(modelManager: AnyModelManager, operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: PaginationOptions | undefined) => Promise<GadgetRecordList<Shape>>;
export interface ActionRunner {
    <Shape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariableOptions, options?: SelectionOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>>;
    <Shape = any>(modelManager: {
        connection: GadgetConnection;
    }, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariableOptions, options?: SelectionOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}
export declare const actionRunner: ActionRunner;
export declare const globalActionRunner: (connection: GadgetConnection, operation: string, variables: VariableOptions, namespace?: string | null | undefined) => Promise<any>;
