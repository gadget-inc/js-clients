export declare const Hydrators: {
    DateTime(value: string): Date;
};
export type Hydration = keyof typeof Hydrators;
/** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
export interface HydrationPlan {
    [key: string]: Hydration;
}
/**
 * Utility for declaratively transforming object trees.
 * Useful for turning API date strings into real Date objects, etc.
 * Declarative so that the operations it peforms can be serialized.
 */
export declare class DataHydrator {
    readonly plan: HydrationPlan;
    constructor(plan: HydrationPlan);
    apply(source: Record<string, any> | Record<string, any>[]): {
        [x: string]: any;
    } | {
        [x: string]: any;
    }[];
    private hydrateObject;
}
