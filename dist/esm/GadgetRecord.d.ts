import type { Jsonify } from "type-fest";
import { AnyInternalModelManager } from "./AnyInternalModelManager.js";
import { AnyModelManager } from "./AnyModelManager.js";
import type { PaginateOptions } from "./types.js";
export type RecordShape = Record<string, any> | null | undefined | void;
interface GadgetRecord_<Shape extends RecordShape> {
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
