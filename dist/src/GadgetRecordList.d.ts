import { GadgetRecord, RecordShape } from "./GadgetRecord";
import type { InternalModelManager } from "./InternalModelManager";
import type { AnyModelManager } from "./ModelManager";
import type { PaginationOptions } from "./operationBuilders";
declare type PaginationConfig = {
    pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        endCursor: string;
    };
    options?: PaginationOptions;
};
/** Represents a list of objects returned from the API. Facilitates iterating and paginating. */
export declare class GadgetRecordList<Shape extends RecordShape> extends Array<GadgetRecord<Shape>> {
    modelManager: AnyModelManager | InternalModelManager;
    pagination: PaginationConfig;
    /** Internal method used to create a list. Should not be used by applications. */
    static boot<Shape extends RecordShape>(modelManager: AnyModelManager | InternalModelManager, nodes: GadgetRecord<Shape>[], pagination: PaginationConfig): GadgetRecordList<Shape>;
    static get [Symbol.species](): ArrayConstructor;
    firstOrThrow(): GadgetRecord<Shape>;
    toJSON(): any[];
    get hasNextPage(): boolean;
    get hasPreviousPage(): boolean;
    nextPage(): Promise<GadgetRecordList<Shape>>;
    previousPage(): Promise<GadgetRecordList<Shape>>;
}
export {};
