import type { Jsonify } from "type-fest";
import { AnyInternalModelManager } from "./AnyInternalModelManager.js";
import { AnyModelManager } from "./AnyModelManager.js";
import type { PaginateOptions } from "./types.js";
export type RecordShape = Record<string, any> | null | undefined | void;
interface AnyGadgetRecord_<Shape extends RecordShape> {
    isEmpty(): boolean;
    getField(field: string): any;
    setField<T>(field: string, value: T): T;
    changes: {
        (): Record<string, {
            current: any;
            previous: any;
        }>;
        (prop: string): {
            changed: true;
            current: any;
            previous: any;
        } | {
            changed: false;
        };
    };
    changed: {
        (): boolean;
        (prop: string): boolean;
    };
    toJSON(): Jsonify<Shape>;
    touch(): void;
}
export type AnyGadgetRecord<Shape extends RecordShape> = AnyGadgetRecord_<Shape> & Shape;
export type PaginationConfig = {
    pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        endCursor: string;
    };
    options?: PaginateOptions;
};
export interface AnyGadgetRecordList<Shape extends RecordShape> extends Array<AnyGadgetRecord<Shape>> {
    modelManager: AnyModelManager | AnyInternalModelManager<Shape>;
    pagination: PaginationConfig;
    firstOrThrow(): AnyGadgetRecord<Shape>;
    toJSON(): Jsonify<Shape>[];
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
    nextPage(): Promise<AnyGadgetRecordList<Shape>>;
    previousPage(): Promise<AnyGadgetRecordList<Shape>>;
}
export {};
