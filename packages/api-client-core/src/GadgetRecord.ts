import cloneDeep from "lodash.clonedeep";
import isEqual from "lodash.isequal";
import { toPrimitiveObject } from "./support";

export enum ChangeTracking {
  SinceLoaded,
  SinceLastPersisted,
}

export type RecordShape = Record<string, any> | null | undefined | void;

/** Represents one record returned from a high level Gadget API call */
export class GadgetRecordImplementation<Shape extends RecordShape> {
  private __gadget = {
    fields: {} as any,
    instantiatedFields: {} as any,
    persistedFields: {} as any,
    fieldKeys: [] as string[],
    fieldKeysTracker: {} as Record<string, boolean>,
  };

  private empty = false;

  constructor(data: Shape) {
    this.__gadget.instantiatedFields = cloneDeep(data);
    this.__gadget.persistedFields = cloneDeep(data);
    Object.assign(this.__gadget.fields, data);

    if (!data || Object.keys(data).length === 0) {
      this.empty = true;
    } else {
      this.__gadget.fieldKeys = Object.keys(this.__gadget.fields);
      this.__gadget.fieldKeys.forEach((k) => (this.__gadget.fieldKeysTracker[k] = true));
    }

    const handler = {
      get: (obj: any, prop: string | symbol) => {
        if (prop in this) {
          // if the GadgetRecordImplementation responds to the property or function
          // prioritize that
          return (this as any)[prop];
        } else if (prop in obj) {
          // otherwise proxy it to the __gadget.fields object
          return obj[prop];
        }
      },
      set: (obj: Record<string, any>, prop: string | symbol, value: any) => {
        this.trackKey(prop);
        obj[prop.toString()] = value;
        return true;
      },
    };

    return new Proxy(this.__gadget.fields, handler);
  }

  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  private trackKey(key: string | symbol) {
    const trackingKey = key.toString();
    if (!this.__gadget.fieldKeysTracker[trackingKey]) {
      this.__gadget.fieldKeysTracker[trackingKey] = true;
      this.__gadget.fieldKeys.push(trackingKey);
    }
  }

  /** Returns true if even a single field has changed */
  private hasChanges(tracking = ChangeTracking.SinceLoaded) {
    const diffFields = tracking == ChangeTracking.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((key) => !isEqual(diffFields[key], this.__gadget.fields[key]));
  }

  /** Checks if the original constructor data was empty or not */
  isEmpty(): boolean {
    return this.empty;
  }

  /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  getField(apiIdentifier: string) {
    return this.__gadget.fields[apiIdentifier];
  }
  /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  setField(apiIdentifier: string, value: any) {
    this.trackKey(apiIdentifier);
    return (this.__gadget.fields[apiIdentifier] = value);
  }

  /** Returns the `current` and `previous` values for any changed fields, keyed by field `apiIdentifier`.  */
  changes(): { [prop: string]: { current: any; previous: any } };
  changes(tracking: ChangeTracking): { [prop: string]: { current: any; previous: any } };
  /** Returns the `current` and `previous` values if they have `changed`, otherwise `changed` is `false`. */
  changes(prop: string): { changed: true; current: any; previous: any } | { changed: false };
  changes(prop: string, tracking: ChangeTracking): { changed: true; current: any; previous: any } | { changed: false };
  changes(prop?: string | ChangeTracking, tracking = ChangeTracking.SinceLoaded) {
    const trackChangesSince: ChangeTracking = typeof prop == "string" ? tracking : prop || tracking;
    const diffFields = trackChangesSince == ChangeTracking.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;

    if (prop && typeof prop == "string") {
      const previous = diffFields[prop];
      const current = this.__gadget.fields[prop];

      const changed = !isEqual(current, previous);

      return changed ? { changed, current, previous } : { changed };
    } else {
      const diff = {} as Record<string, { current: any; previous: any }>;
      for (let index = 0; index < this.__gadget.fieldKeys.length; index++) {
        const key = this.__gadget.fieldKeys[index];
        if (!isEqual(diffFields[key], this.__gadget.fields[key])) {
          diff[key] = { current: this.__gadget.fields[key], previous: diffFields[key] };
        }
      }
      return diff;
    }
  }

  /** Returns `true` if any field has changed on this record. */
  changed(): boolean;
  changed(tracking: ChangeTracking): boolean;
  /** Returns `true` if the specified field has changed on this record. */
  changed(prop: string): boolean;
  changed(prop: string, tracking: ChangeTracking): boolean;
  changed(prop?: string | ChangeTracking, tracking = ChangeTracking.SinceLoaded) {
    return prop && typeof prop == "string"
      ? this.changes(prop, tracking).changed
      : this.hasChanges(prop === undefined ? tracking : (prop as ChangeTracking));
  }

  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(tracking = ChangeTracking.SinceLoaded) {
    if (tracking == ChangeTracking.SinceLoaded) {
      this.__gadget.instantiatedFields = cloneDeep(this.__gadget.fields);
    } else if (tracking == ChangeTracking.SinceLastPersisted) {
      this.__gadget.persistedFields = cloneDeep(this.__gadget.fields);
    }
  }

  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(tracking = ChangeTracking.SinceLoaded) {
    let persistedKeys: string[];

    if (tracking == ChangeTracking.SinceLoaded) {
      persistedKeys = Object.keys(this.__gadget.instantiatedFields);
    } else {
      persistedKeys = Object.keys(this.__gadget.persistedFields);
    }

    for (const key of this.__gadget.fieldKeys) {
      if (!persistedKeys.includes(key)) delete this.__gadget.fields[key];
    }

    if (tracking == ChangeTracking.SinceLoaded) {
      Object.assign(this.__gadget.fields, cloneDeep(this.__gadget.instantiatedFields));
    } else {
      Object.assign(this.__gadget.fields, cloneDeep(this.__gadget.persistedFields));
    }
  }

  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return toPrimitiveObject({ ...this.__gadget.fields });
  }
}

/**
 * TypeScript hijinx to make the generic Record class include all the members of the wrapped generic Shape object
 * We want to use the `GadgetRecord` class to represent objects returned from the API to add some useful stuff to them because it's convenient for callers to use that useful stuff. `GadgetRecord`s are generic because they can hold data of an arbitrary shape from the API, but TypeScript doesn't let us have the class extend or implement anything without statically known members. So we fake TypeScript out and create this pair of constructor and instance types that
 */

/** Instantiate a `GadgetRecord` with the attributes of your model. A `GadgetRecord` can be used to track changes to your model and persist those changes via Gadget actions. */
export const GadgetRecord: new <Shape extends RecordShape>(data: Shape) => GadgetRecordImplementation<Shape> & Shape =
  GadgetRecordImplementation as any;
export type GadgetRecord<Shape extends RecordShape> = GadgetRecordImplementation<Shape> & Shape;
