import { FieldSelection } from "./FieldSelection";

/**
 * Get the truthy keys from a `FieldSelection`
 */
export type SelectedKeys<Selection> = {
  [Key in keyof Selection]: Selection[Key] extends false | undefined | null ? never : Key;
}[keyof Selection];

/**
 * Limit the keys in T to only those that also exist in U. AKA Subset or Intersection.
 */
export type LimitToKnownKeys<T, U> = {
  [Key in keyof T]: Key extends keyof U ? T[Key] : never;
};

/**
 * Given an options object from a find method, default the type of the selection to a default if no selection is passed
 */
export type DefaultSelection<
  SelectionType,
  Options extends Selectable<SelectionType>,
  Defaults extends SelectionType
> = Options["select"] extends SelectionType ? Options["select"] : Defaults;

/**
 * Describes any object that can have a selection specified
 */
export interface Selectable<SelectionType> {
  /** Select fields other than the defaults of the record to return */
  select?: SelectionType;
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
export type FilterNever<T extends Record<string, unknown>> = NonNeverKeys<T> extends never ? never : { [Key in NonNeverKeys<T>]: T[Key] };

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
export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : FilterNever<{
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    }>;
