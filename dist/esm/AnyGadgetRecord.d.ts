import type { Jsonify } from "type-fest";
export type RecordShape = Record<string, any> | null | undefined | void;
export interface AnyGadgetRecord<Shape extends RecordShape> {
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
export interface AnyGadgetRecordList<Shape extends RecordShape> extends Array<AnyGadgetRecord<Shape>> {
    firstOrThrow(): AnyGadgetRecord<Shape>;
    toJSON(): Jsonify<Shape>[];
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
    nextPage(): Promise<AnyGadgetRecordList<Shape>>;
    previousPage(): Promise<AnyGadgetRecordList<Shape>>;
}
