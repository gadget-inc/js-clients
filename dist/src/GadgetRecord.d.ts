export declare enum ChangeTracking {
    SinceLoaded = 0,
    SinceLastPersisted = 1
}
/** Represents one record returned from a high level Gadget API call */
export declare class GadgetRecordImplementation<Shape> {
    private __gadget;
    constructor(data: Shape);
    /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    getField(apiIdentifier: string): any;
    /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    setField(apiIdentifier: string, value: any): any;
    /** Returns the `current` and `previous` values for any changed fields, keyed by field `apiIdentifier`.  */
    changes(): {
        [prop: string]: {
            current: any;
            previous: any;
        };
    };
    changes(tracking: ChangeTracking): {
        [prop: string]: {
            current: any;
            previous: any;
        };
    };
    /** Returns the `current` and `previous` values if they have `changed`, otherwise `changed` is `false`. */
    changes(prop: string): {
        changed: true;
        current: any;
        previous: any;
    } | {
        changed: false;
    };
    changes(prop: string, tracking: ChangeTracking): {
        changed: true;
        current: any;
        previous: any;
    } | {
        changed: false;
    };
    /** Returns `true` if any field has changed on this record. */
    changed(): boolean;
    changed(tracking: ChangeTracking): boolean;
    /** Returns `true` if the specified field has changed on this record. */
    changed(prop: string): boolean;
    changed(prop: string, tracking: ChangeTracking): boolean;
    /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
    flushChanges(tracking?: ChangeTracking): void;
    /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
    revertChanges(tracking?: ChangeTracking): void;
    /** Returns a JSON representation of all fields on this record. */
    toJSON(): any;
}
/**
 * TypeScript hijinx to make the generic Record class include all the members of the wrapped generic Shape object
 * We want to use the `GadgetRecord` class to represent objects returned from the API to add some useful stuff to them because it's convienient for callers to use that useful stuff. `GadgetRecord`s are generic because they can hold data of an arbitrary shape from the API, but TypeScript doesn't let us have the class extend or implement anything without statically known members. So we fake TypeScript out and create this pair of constructor and instance types that
 */
/** Instantiate a `GadgetRecord` with the attributes of your model. A `GadgetRecord` can be used to track changes to your model and persist those changes via Gadget actions. */
export declare const GadgetRecord: new <Shape>(data: Shape) => GadgetRecordImplementation<Shape> & Shape;
export declare type GadgetRecord<Shape> = GadgetRecordImplementation<Shape> & Shape;