/**
 * Map a Selection of {key: boolean} to the list of keys that have actually been selected with `true`s
 */
export type SelectedKeys<Selection> = {
  [Key in keyof Selection]: Selection[Key] extends false | undefined | null ? never : Key;
}[keyof Selection];

/**
 * Limit the keys in T to only those that also exist in U. AKA Subset or Intersection
 */
export type LimitToKnownKeys<T, U> = {
  [Key in keyof T]: Key extends keyof U ? T[Key] : never;
};

/** Given an options object from a find method, default the type of the selection to a default if no selection is passed */
export type DefaultSelection<
  SelectionType,
  Options extends Selectable<SelectionType>,
  Defaults extends SelectionType
> = Options["select"] extends SelectionType ? Options["select"] : Defaults;

/** Describes any object that can have a selection specified */
export interface Selectable<SelectionType> {
  /** Select fields other than the defaults of the record to return */
  select?: SelectionType | null;
}
