export const Hydrators = {
  DateTime(value: string) {
    return new Date(value);
  },
};

export type Hydration = keyof typeof Hydrators;

export interface HydrationPlan {
  [key: string]: Hydration;
}

/**
 * Utility for declaratively transforming object trees.
 * Useful for turning API date strings into real Date objects, etc.
 * Declarative so that the operations it peforms can be serialized.
 */
export class DataHydrator {
  constructor(readonly plan: HydrationPlan) {}

  apply(source: Record<string, any> | Record<string, any>[]) {
    if (Array.isArray(source)) {
      return source.map((object) => this.hydrateObject(object));
    } else {
      return this.hydrateObject(source);
    }
  }

  private hydrateObject(object: Record<string, any>) {
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
