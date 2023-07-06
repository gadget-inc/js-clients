"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetRecord = exports.GadgetRecordImplementation = exports.ChangeTracking = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const support_1 = require("./support");
var ChangeTracking;
(function (ChangeTracking) {
    ChangeTracking[ChangeTracking["SinceLoaded"] = 0] = "SinceLoaded";
    ChangeTracking[ChangeTracking["SinceLastPersisted"] = 1] = "SinceLastPersisted";
})(ChangeTracking = exports.ChangeTracking || (exports.ChangeTracking = {}));
/** Represents one record returned from a high level Gadget API call */
class GadgetRecordImplementation {
    constructor(data) {
        Object.defineProperty(this, "__gadget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                fields: {},
                instantiatedFields: {},
                persistedFields: {},
                fieldKeys: [],
                fieldKeysTracker: {},
                touched: false,
            }
        });
        Object.defineProperty(this, "empty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.__gadget.instantiatedFields = (0, lodash_clonedeep_1.default)(data);
        this.__gadget.persistedFields = (0, lodash_clonedeep_1.default)(data);
        Object.assign(this.__gadget.fields, data);
        if (!data || Object.keys(data).length === 0) {
            this.empty = true;
        }
        else {
            this.__gadget.fieldKeys = Object.keys(this.__gadget.fields);
            this.__gadget.fieldKeys.forEach((k) => (this.__gadget.fieldKeysTracker[k] = true));
        }
        const handler = {
            get: (obj, prop) => {
                if (prop in this) {
                    // if the GadgetRecordImplementation responds to the property or function
                    // prioritize that
                    return this[prop];
                }
                else if (prop in obj) {
                    // otherwise proxy it to the __gadget.fields object
                    return obj[prop];
                }
            },
            set: (obj, prop, value) => {
                this.trackKey(prop);
                obj[prop.toString()] = value;
                return true;
            },
        };
        return new Proxy(this.__gadget.fields, handler);
    }
    /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
    trackKey(key) {
        const trackingKey = key.toString();
        if (!this.__gadget.fieldKeysTracker[trackingKey]) {
            this.__gadget.fieldKeysTracker[trackingKey] = true;
            this.__gadget.fieldKeys.push(trackingKey);
        }
    }
    /** Returns true if even a single field has changed */
    hasChanges(tracking = ChangeTracking.SinceLoaded) {
        if (this.__gadget.touched)
            return true;
        const diffFields = tracking == ChangeTracking.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
        return this.__gadget.fieldKeys.some((key) => !(0, lodash_isequal_1.default)(diffFields[key], this.__gadget.fields[key]));
    }
    /** Checks if the original constructor data was empty or not */
    isEmpty() {
        return this.empty;
    }
    /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    getField(apiIdentifier) {
        return this.__gadget.fields[apiIdentifier];
    }
    /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
    setField(apiIdentifier, value) {
        this.trackKey(apiIdentifier);
        return (this.__gadget.fields[apiIdentifier] = value);
    }
    changes(prop, tracking = ChangeTracking.SinceLoaded) {
        const trackChangesSince = typeof prop == "string" ? tracking : prop || tracking;
        const diffFields = trackChangesSince == ChangeTracking.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
        if (prop && typeof prop == "string") {
            const previous = diffFields[prop];
            const current = this.__gadget.fields[prop];
            const changed = !(0, lodash_isequal_1.default)(current, previous);
            return changed ? { changed, current, previous } : { changed };
        }
        else {
            const diff = {};
            for (let index = 0; index < this.__gadget.fieldKeys.length; index++) {
                const key = this.__gadget.fieldKeys[index];
                if (!(0, lodash_isequal_1.default)(diffFields[key], this.__gadget.fields[key])) {
                    diff[key] = { current: this.__gadget.fields[key], previous: diffFields[key] };
                }
            }
            return diff;
        }
    }
    /** Returns all current values for fields that have changed */
    toChangedJSON(tracking = ChangeTracking.SinceLoaded) {
        const diffFields = tracking == ChangeTracking.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
        const current = {};
        for (let index = 0; index < this.__gadget.fieldKeys.length; index++) {
            const key = this.__gadget.fieldKeys[index];
            if (!(0, lodash_isequal_1.default)(diffFields[key], this.__gadget.fields[key])) {
                current[key] = this.__gadget.fields[key];
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
            this.__gadget.instantiatedFields = (0, lodash_clonedeep_1.default)(this.__gadget.fields);
        }
        else if (tracking == ChangeTracking.SinceLastPersisted) {
            this.__gadget.persistedFields = (0, lodash_clonedeep_1.default)(this.__gadget.fields);
        }
        this.__gadget.touched = false;
    }
    /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
    revertChanges(tracking = ChangeTracking.SinceLoaded) {
        let persistedKeys;
        if (tracking == ChangeTracking.SinceLoaded) {
            persistedKeys = Object.keys(this.__gadget.instantiatedFields);
        }
        else {
            persistedKeys = Object.keys(this.__gadget.persistedFields);
        }
        for (const key of this.__gadget.fieldKeys) {
            if (!persistedKeys.includes(key))
                delete this.__gadget.fields[key];
        }
        if (tracking == ChangeTracking.SinceLoaded) {
            Object.assign(this.__gadget.fields, (0, lodash_clonedeep_1.default)(this.__gadget.instantiatedFields));
        }
        else {
            Object.assign(this.__gadget.fields, (0, lodash_clonedeep_1.default)(this.__gadget.persistedFields));
        }
        this.__gadget.touched = false;
    }
    /** Returns a JSON representation of all fields on this record. */
    toJSON() {
        return (0, support_1.toPrimitiveObject)({ ...this.__gadget.fields });
    }
    touch() {
        this.__gadget.touched = true;
    }
}
exports.GadgetRecordImplementation = GadgetRecordImplementation;
/**
 * TypeScript hijinx to make the generic Record class include all the members of the wrapped generic Shape object
 * We want to use the `GadgetRecord` class to represent objects returned from the API to add some useful stuff to them because it's convenient for callers to use that useful stuff. `GadgetRecord`s are generic because they can hold data of an arbitrary shape from the API, but TypeScript doesn't let us have the class extend or implement anything without statically known members. So we fake TypeScript out and create this pair of constructor and instance types that
 */
/** Instantiate a `GadgetRecord` with the attributes of your model. A `GadgetRecord` can be used to track changes to your model and persist those changes via Gadget actions. */
exports.GadgetRecord = GadgetRecordImplementation;
//# sourceMappingURL=GadgetRecord.js.map