import type { Jsonify } from "type-fest";
import type { AnyInternalModelManager } from "./AnyInternalModelManager.js";
import type { AnyModelManager } from "./AnyModelManager.js";
import type { PaginateOptions } from "./types.js";
export type RecordShape = Record<string, any> | null | undefined | void;
export declare enum ChangeTracking {
    SinceLoaded = 0,
    SinceLastPersisted = 1
}
interface GadgetRecord_<Shape extends RecordShape> {
    /** Checks if the original constructor data was empty or not */
    isEmpty(): boolean;
    /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    getField(field: string): any;
    /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    setField<T>(field: string, value: T): T;
    changes: {
        /** Returns the `current` and `previous` values for any changed fields, keyed by field `apiIdentifier`.  */
        (): Record<string, {
            current: any;
            previous: any;
        }>;
        (tracking: ChangeTracking): Record<string, {
            current: any;
            previous: any;
        }>;
        /** Returns the `current` and `previous` values if they have `changed`, otherwise `changed` is `false`. */
        (prop: string): {
            changed: true;
            current: any;
            previous: any;
        } | {
            changed: false;
        };
        (prop: string, tracking: ChangeTracking): {
            changed: true;
            current: any;
            previous: any;
        } | {
            changed: false;
        };
    };
    /** Returns all current values for fields that have changed */
    toChangedJSON(tracking?: ChangeTracking): Record<string, any>;
    changed: {
        /** Returns `true` if any field has changed on this record. */
        (): boolean;
        (tracking: ChangeTracking): boolean;
        /** Returns `true` if the specified field has changed on this record. */
        (prop: string): boolean;
        (prop: string, tracking: ChangeTracking): boolean;
    };
    /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
    flushChanges(tracking?: ChangeTracking): void;
    /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
    revertChanges(tracking?: ChangeTracking): void;
    /** Returns a JSON representation of all fields on this record. */
    toJSON(): Jsonify<Shape>;
    /** Marks this record as changed so that the next save will save it and adjust any `updatedAt` timestamps */
    touch(): void;
}
/** Represents one record returned from a high level Gadget API call */
export type GadgetRecord<Shape extends RecordShape> = GadgetRecord_<Shape> & Shape;
export type PaginationConfig = {
    pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        endCursor: string;
    };
    options?: PaginateOptions;
};
export interface GadgetRecordList<Shape extends RecordShape> extends Array<GadgetRecord<Shape>> {
    modelManager: AnyModelManager | AnyInternalModelManager<Shape>;
    pagination: PaginationConfig;
    firstOrThrow(): GadgetRecord<Shape>;
    toJSON(): Jsonify<Shape>[];
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
    nextPage(): Promise<GadgetRecordList<Shape>>;
    previousPage(): Promise<GadgetRecordList<Shape>>;
}
export {};
