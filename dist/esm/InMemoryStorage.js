/**
 * Implements part of the `window.localStorage` api, but in memory such that the stored values are lost as soon as the JS VM's life ends
 **/
export class InMemoryStorage {
    constructor() {
        Object.defineProperty(this, "values", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
    }
    getItem(key) {
        return this.values[key] || null;
    }
    setItem(key, value) {
        this.values[key] = value;
    }
}
//# sourceMappingURL=InMemoryStorage.js.map