import type { Jsonify } from "type-fest";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import type { InternalModelManager } from "./InternalModelManager.js";
import type { AnyModelManager } from "./ModelManager.js";
import type { PaginateOptions } from "./types.js";
type PaginationConfig = {
    pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        endCursor: string;
    };
    options?: PaginateOptions;
};
/** Represents a list of objects returned from the API. Facilitates iterating and paginating. */
export declare class GadgetRecordList<Shape extends RecordShape> extends Array<GadgetRecord<Shape>> {
    modelManager: AnyModelManager | InternalModelManager<Shape>;
    pagination: PaginationConfig;
    /** Internal method used to create a list. Should not be used by applications. */
    static boot<Shape extends RecordShape>(modelManager: AnyModelManager | InternalModelManager<Shape>, records: GadgetRecord<Shape>[], pagination: PaginationConfig): GadgetRecordList<Shape>;
    static get [Symbol.species](): ArrayConstructor;
    firstOrThrow(): NonNullable<GadgetRecord<Shape>>;
    toJSON(): Jsonify<Shape>[];
    get hasNextPage(): boolean;
    get hasPreviousPage(): boolean;
    get startCursor(): string;
    get endCursor(): string;
    nextPage(): Promise<GadgetRecordList<Shape>>;
    previousPage(): Promise<GadgetRecordList<Shape>>;
}
export {};
