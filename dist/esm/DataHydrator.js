export const Hydrators = {
    DateTime(value) {
        return new Date(value);
    },
};
/**
 * Utility for declaratively transforming object trees.
 * Useful for turning API date strings into real Date objects, etc.
 * Declarative so that the operations it peforms can be serialized.
 */
export class DataHydrator {
    constructor(plan) {
        Object.defineProperty(this, "plan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: plan
        });
    }
    apply(source) {
        if (Array.isArray(source)) {
            return source.map((object) => this.hydrateObject(object));
        }
        else {
            return this.hydrateObject(source);
        }
    }
    hydrateObject(object) {
        const hydrated = { ...object };
        for (const [key, hydrator] of Object.entries(this.plan)) {
            const value = hydrated[key];
            if (value != null) {
                hydrated[key] = Hydrators[hydrator](value);
            }
        }
        return hydrated;
    }
}
//# sourceMappingURL=DataHydrator.js.map