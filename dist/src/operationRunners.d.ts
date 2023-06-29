import type { VariableOptions } from ".";
import type { AnyPublicModelManager } from "./AnyModelManager";
import { AnyPublicSingletonModelManager } from "./AnyModelManager";
import type { FieldSelection } from "./FieldSelection";
import type { GadgetConnection } from "./GadgetConnection";
import type { GadgetRecord, RecordShape } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import type { PaginationOptions, SelectionOptions } from "./operationBuilders";
export declare const findOneRunner: <Shape extends RecordShape = any>(modelManager: AnyPublicModelManager | AnyPublicSingletonModelManager, operation: string, id: string | undefined, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null, throwOnEmptyData?: boolean) => Promise<GadgetRecord<Shape>>;
export declare const findOneByFieldRunner: <Shape extends RecordShape = any>(modelManager: AnyPublicModelManager, operation: string, fieldName: string, fieldValue: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: SelectionOptions | null) => Promise<import("./GadgetRecord").GadgetRecordImplementation<Shape> & Shape>;
export declare const findManyRunner: <Shape extends RecordShape = any>(modelManager: AnyPublicModelManager, operation: string, defaultSelection: FieldSelection, modelApiIdentifier: string, options?: PaginationOptions, throwOnEmptyData?: boolean) => Promise<GadgetRecordList<Shape>>;
export interface ActionRunner {
    <Shape extends RecordShape = any>(modelManager: AnyPublicModelManager, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: false, variables: VariableOptions, options?: SelectionOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>>;
    <Shape extends RecordShape = any>(modelManager: AnyPublicModelManager, operation: string, defaultSelection: FieldSelection | null, modelApiIdentifier: string, modelSelectionField: string, isBulkAction: true, variables: VariableOptions, options?: SelectionOptions | null, namespace?: string | null): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}
export declare const actionRunner: ActionRunner;
export declare const globalActionRunner: (connection: GadgetConnection, operation: string, variables: VariableOptions, namespace?: string | null) => Promise<any>;
