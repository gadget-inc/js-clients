"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetRecordImplementation = exports.GadgetRecord = exports.GadgetRecord_ = exports.ChangeTracking = void 0;
const klona_1 = require("klona");
const support_js_1 = require("./support.js");
var ChangeTracking;
(function (ChangeTracking) {
    ChangeTracking[ChangeTracking["SinceLoaded"] = 0] = "SinceLoaded";
    ChangeTracking[ChangeTracking["SinceLastPersisted"] = 1] = "SinceLastPersisted";
})(ChangeTracking || (exports.ChangeTracking = ChangeTracking = {}));
const kFields = Symbol.for("g/fields");
const kInstantiatedFields = Symbol.for("g/if");
const kPersistedFields = Symbol.for("g/pf");
const kFieldKeys = Symbol.for("g/fk");
const kTouched = Symbol.for("g/t");
/** Represents one record returned from a high level Gadget API call */
class GadgetRecord_ {
    constructor(data) {
        /** Storage of the actual keys and values of this record */
        Object.defineProperty(this, _a, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        /** Storage of the keys and values of this record at the time it was instantiated */
        Object.defineProperty(this, _b, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        /** Storage of the keys and values of this record at the time it was last persisted */
        Object.defineProperty(this, _c, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        /** Storage of the keys and values of this record at the time it was last persisted */
        Object.defineProperty(this, _d, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _e, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "empty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this[kInstantiatedFields] = (0, klona_1.klona)(data) ?? {};
        this[kPersistedFields] = (0, klona_1.klona)(data) ?? {};
        Object.assign(this[kFields], data);
        if (!data || Object.keys(data).length === 0) {
            this.empty = true;
            this[kFieldKeys] = new Set();
        }
        else {
            this[kFieldKeys] = new Set(Object.keys(this[kFields]));
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        const handler = {
            get: (obj, prop) => {
                if (prop in self || typeof prop == "symbol") {
                    // if the GadgetRecord responds to the property or function, call that prioritize that
                    let val = self[prop];
                    if (typeof val == "function") {
                        val = val.bind(self);
                    }
                    return val;
                }
                else if (prop in obj) {
                    // otherwise proxy it to this [kFields] object
                    return obj[prop];
                }
            },
            set: (obj, prop, value) => {
                self.trackKey(prop);
                obj[prop.toString()] = value;
                return true;
            },
        };
        return new Proxy(this[kFields], handler);
    }
    /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
    trackKey(key) {
        const trackingKey = key.toString();
        this[kFieldKeys].add(trackingKey);
    }
    /** Helper method to compare values with special handling for Date vs string comparisons in either direction */
    hasValueChanged(current, previous) {
        if ((current instanceof Date && typeof previous === "string") || (previous instanceof Date && typeof current === "string")) {
            const currentDate = current instanceof Date ? current : new Date(current);
            const previousDate = previous instanceof Date ? previous : new Date(previous);
            // Check if both dates are valid before comparing
            if (!isNaN(currentDate.getTime()) && !isNaN(previousDate.getTime())) {
                return currentDate.getTime() !== previousDate.getTime();
            }
            return true; // If either can't be converted to a valid date, they're different
        }
        return !(0, support_js_1.isEqual)(current, previous);
    }
    /** Returns true if even a single field has changed */
    hasChanges(tracking = ChangeTracking.SinceLoaded) {
        if (this[kTouched])
            return true;
        const diffFields = tracking == ChangeTracking.SinceLoaded ? this[kInstantiatedFields] : this[kPersistedFields];
        return [...this[kFieldKeys]].some((key) => this.hasValueChanged(this[kFields][key], diffFields[key]));
    }
    /** Checks if the original constructor data was empty or not */
    isEmpty() {
        return this.empty;
    }
    /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    getField(apiIdentifier) {
        return this[kFields][apiIdentifier];
    }
    /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    setField(apiIdentifier, value) {
        this.trackKey(apiIdentifier);
        return (this[kFields][apiIdentifier] = value);
    }
    changes(prop, tracking = ChangeTracking.SinceLoaded) {
        const trackChangesSince = typeof prop == "string" ? tracking : prop || tracking;
        const diffFields = trackChangesSince == ChangeTracking.SinceLoaded ? this[kInstantiatedFields] : this[kPersistedFields];
        if (prop && typeof prop == "string") {
            const previous = diffFields[prop];
            const current = this[kFields][prop];
            const changed = this.hasValueChanged(current, previous);
            return changed ? { changed, current, previous } : { changed };
        }
        else {
            const diff = {};
            for (const key of this[kFieldKeys]) {
                if (!(0, support_js_1.isEqual)(diffFields[key], this[kFields][key])) {
                    diff[key] = { current: this[kFields][key], previous: diffFields[key] };
                }
            }
            return diff;
        }
    }
    /** Returns all current values for fields that have changed */
    toChangedJSON(tracking = ChangeTracking.SinceLoaded) {
        const diffFields = tracking == ChangeTracking.SinceLoaded ? this[kInstantiatedFields] : this[kPersistedFields];
        const current = {};
        for (const key of this[kFieldKeys]) {
            if (!(0, support_js_1.isEqual)(diffFields[key], this[kFields][key])) {
                current[key] = this[kFields][key];
            }
        }
        return current;
    }
    changed(prop, tracking = ChangeTracking.SinceLoaded) {
        if (prop && typeof prop == "string") {
            return this.changes(prop, tracking).changed;
        }
        else {
            return this.hasChanges(prop === undefined ? tracking : prop);
        }
    }
    /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
    flushChanges(tracking = ChangeTracking.SinceLoaded) {
        if (tracking == ChangeTracking.SinceLoaded) {
            this[kInstantiatedFields] = (0, klona_1.klona)(this[kFields]);
        }
        else if (tracking == ChangeTracking.SinceLastPersisted) {
            this[kPersistedFields] = (0, klona_1.klona)(this[kFields]);
        }
        this[kTouched] = false;
    }
    /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
    revertChanges(tracking = ChangeTracking.SinceLoaded) {
        let persistedKeys;
        if (tracking == ChangeTracking.SinceLoaded) {
            persistedKeys = Object.keys(this[kInstantiatedFields]);
        }
        else {
            persistedKeys = Object.keys(this[kPersistedFields]);
        }
        for (const key of this[kFieldKeys]) {
            if (!persistedKeys.includes(key))
                delete this[kFields][key];
        }
        if (tracking == ChangeTracking.SinceLoaded) {
            Object.assign(this[kFields], (0, klona_1.klona)(this[kInstantiatedFields]));
        }
        else {
            Object.assign(this[kFields], (0, klona_1.klona)(this[kPersistedFields]));
        }
        this[kTouched] = false;
    }
    /** Returns a JSON representation of all fields on this record. */
    toJSON() {
        return (0, support_js_1.toPrimitiveObject)({ ...this[kFields] });
    }
    /** Marks this record as changed so that the next save will save it and adjust any `updatedAt` timestamps */
    touch() {
        this[kTouched] = true;
    }
}
exports.GadgetRecord_ = GadgetRecord_;
_a = kFields, _b = kInstantiatedFields, _c = kPersistedFields, _d = kFieldKeys, _e = kTouched;
/**
 * Instantiates a `GadgetRecord` with the attributes of your model. A `GadgetRecord` can be used to track changes to your model and persist those changes via Gadget actions.
 **/
exports.GadgetRecord = GadgetRecord_;
/**
 * Legacy export for old generated clients expecting to find the class named this
 * @hidden
 */
exports.GadgetRecordImplementation = GadgetRecord_;
//# sourceMappingURL=GadgetRecord.js.map