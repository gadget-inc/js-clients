import type { FieldSelection } from "./FieldSelection";
/**
 * Limit the keys in T to only those that also exist in U. AKA Subset or Intersection.
 */
export type LimitToKnownKeys<T, U> = {
    [Key in keyof T]: Key extends keyof U ? T[Key] : never;
};
/**
 * Given an options object from a find method, default the type of the selection to a default if no selection is passed
 */
export type DefaultSelection<SelectionType, Options extends Selectable<SelectionType>, Defaults extends SelectionType> = Options["select"] extends SelectionType ? Options["select"] : Defaults;
/**
 * Describes any object that can have a selection specified
 */
export interface Selectable<SelectionType> {
    /** Select fields other than the defaults of the record to return */
    select?: SelectionType | null;
}
/**
 * Get any keys of `Selection` that are not mapped to `never`
 */
export type NonNeverKeys<Selection> = {
    [Key in keyof Selection]: Selection[Key] extends never ? never : Key;
}[keyof Selection];
/**
 * Filter out any keys in `T` that are mapped to `never`.
 */
export type FilterNever<T extends Record<string, unknown>> = NonNeverKeys<T> extends never ? never : {
    [Key in NonNeverKeys<T>]: T[Key];
};
type InnerSelect<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined ? never : Schema extends (infer T)[] ? InnerSelect<T, Selection>[] : Schema extends null ? InnerSelect<Exclude<Schema, null>, Selection> | null : {
    [Key in keyof Selection & keyof Schema]: Selection[Key] extends true ? Schema[Key] : Selection[Key] extends FieldSelection ? InnerSelect<Schema[Key], Selection[Key]> : never;
};
/**
 * Filter out any keys in `T` that are mapped to `never` recursively. Any nested objects that are empty after having never valued keys removed are also removed.
 *
 * ```typescript
 * type Thing = DeepFilterNever<
 *  { a: { b: never }, c: string }
 * >;  // { c: string; }
 * ```
 */
export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
    [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;
/**
 * Extract a subset of a schema given a selection
 *
 * ```typescript
 * type Selection = Select<
 *  { apple: "red", banana: "yellow", orange: "orange" },
 *  { apple: true, banana: false }
 * >;  // { apple: "red" }
 * ```
 */
export type Select<Schema, Selection extends FieldSelection | null | undefined> = DeepFilterNever<InnerSelect<Schema, Selection>>;
export {};
