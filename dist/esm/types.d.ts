import { OperationContext } from "@urql/core";
import type { VariableOptions } from "tiny-graphql-query-compiler";
import type { FieldSelection } from "./FieldSelection.js";
import type { ActionFunction, AnyActionFunction, BulkActionFunction, GlobalActionFunction } from "./GadgetFunctions.js";
/**
 * Limit the keys in T to only those that also exist in U. AKA Subset or Intersection.
 */
export type LimitToKnownKeys<T, U> = {
    [Key in keyof T]: Key extends keyof U ? T[Key] : never;
};
/**
 * A set of variable metadatas, keyed by variable name. Is exported by a generated Gadget client. Can have values filled in or not.
 *
 * @example
 * {
 *   "id": { type: "GadgetID", required: true },
 *   "widget": { type: "CreateWidgetInpput" }
 * }
 */
export type VariablesOptions = Record<string, VariableOptions>;
/**
 * Given an options object from a find method, default the type of the selection to a default if no selection is passed
 */
export type DefaultSelection<SelectionType, Options extends {
    select?: SelectionType | null;
}, Defaults extends SelectionType> = Options["select"] extends SelectionType ? Options["select"] : Defaults;
/**
 * Describes an option set that accepts a selection
 */
export interface Selectable<SelectionType = any> {
    /** Select fields other than the defaults of the record to return */
    select?: SelectionType | null;
}
/**
 * Describes the base options that many record finders accept
 */
export interface BaseFindOptions<SelectionType = any> {
    /** Select fields other than the defaults of the record to return */
    select?: SelectionType | null;
    /** Turn on live query mode, where the query will trigger re-renders when data changes on the backend */
    live?: boolean;
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
/** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
export type CurrencyAmount = string;
/** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
export type ISO8601DateString = string;
/** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSONObject = {
    [key: string]: any;
};
/** The ID of a record in Gadget */
export type GadgetID = string;
/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = Date;
/** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
export type RecordState = string | {
    [key: string]: RecordState;
};
/** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
export type EmailAddress = string;
/** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
export type URLString = string;
/** The `JSONBlob` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSONBlob = {
    [key: string]: any;
} | string | null | any[];
/**
 * The filters available for filtering an ID type field on the backend
 *
 * @example
 * { id: { equals: "123" } }
 *
 * @example
 * { id: { in: ["123", "456"] } }
 **/
export interface IDFilter {
    /** Filter to where the backend value is equal to this ID value */
    equals?: GadgetID | null;
    /** Filter to where the backend value anything other than this ID value */
    notEquals?: GadgetID | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
    /** Filter to where the backend value is within this set of IDs */
    in?: (GadgetID | null)[];
    /** Filter to where the backend value is not included in this set of IDs */
    notIn?: (GadgetID | null)[];
    /** Filter to where the backend value is numerically lower than this value */
    lessThan?: GadgetID | null;
    /** Filter to where the backend value is numerically lower or equal to this value */
    lessThanOrEqual?: GadgetID | null;
    /** Filter to where the backend value is numerically greater than this value */
    greaterThan?: GadgetID | null;
    /** Filter to where the backend value is numerically greater than or equal to this value */
    greaterThanOrEqual?: GadgetID | null;
}
/**
 * The filters available for filtering an Number field type that has no decimals on the backend
 *
 * @example
 * { age: { equals: 18 } }
 *
 * @example
 * { age: { in: [18, 19, 20] } }
 *
 * @example
 * { age: { greaterThan: 18 } }
 **/
export interface IntFilter {
    /** Filter to where the backend value is equal to this value */
    equals?: number | bigint | null;
    /** Filter to where the backend value is not equal to this value */
    notEquals?: number | bigint | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
    /** Filter to where the backend value is within this set of numbers */
    in?: (number | bigint | null)[];
    /** Filter to where the backend value is not within this set of numbers */
    notIn?: (number | bigint | null)[];
    /** Filter to where the backend value is lower than this number */
    lessThan?: number | bigint | null;
    /** Filter to where the backend value is lower than or equal to this number */
    lessThanOrEqual?: number | bigint | null;
    /** Filter to where the backend value is greater than to this number */
    greaterThan?: number | bigint | null;
    /** Filter to where the backend value is greater than or equal to this number */
    greaterThanOrEqual?: number | bigint | null;
}
/**
 * The filters available for filtering an Number field type that has decimals on the backend
 *
 * @example
 * { age: { equals: 18.5 } }
 *
 * @example
 * { age: { in: [18.5, 19.5, 20.5] } }
 *
 * @example
 * { age: { greaterThan: 18.5 } }
 * */
export interface FloatFilter {
    /** Filter to where the backend value is equal to this value */
    equals?: number | bigint | null;
    /** Filter to where the backend value is not equal to this value */
    notEquals?: number | bigint | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
    /** Filter to where the backend value is within this set of numbers */
    in?: (number | bigint | null)[];
    /** Filter to where the backend value is not within this set of numbers */
    notIn?: (number | bigint | null)[];
    /** Filter to where the backend value is lower than this number */
    lessThan?: number | bigint | null;
    /** Filter to where the backend value is lower than or equal to this number */
    lessThanOrEqual?: number | bigint | null;
    /** Filter to where the backend value is greater than to this number */
    greaterThan?: number | bigint | null;
    /** Filter to where the backend value is greater than or equal to this number */
    greaterThanOrEqual?: number | bigint | null;
}
/**
 * The filters available for filtering a Date type field on the backend that includes the time part of a date time
 *
 * @example
 * { createdAt: { equals: new Date() } }
 *
 * @example
 * { createdAt: { after: "2020-01-01T00:00:00.000Z" } }
 *
 * @example
 * { publishedAt: { isSet: true } }
 *
 **/
export interface DateTimeFilter {
    /** Filter to where the backend value is equal to this date value. Accepts `Date` objects or ISO8601 formatted date strings */
    equals?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is anything other than this value. Accepts `Date` objects or ISO8601 formatted date strings */
    notEquals?: Date | ISO8601DateString | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: (boolean | null) | null;
    /** Filter to where the backend value is included in this given set of dates. Accepts an array of `Date` objects or ISO8601 formatted date strings */
    in?: (Date | ISO8601DateString | null)[];
    /** Filter to where the backend value is not included in this given set of dates. Accepts an array of `Date` objects or ISO8601 formatted date strings */
    notIn?: (Date | ISO8601DateString | null)[];
    /** Filter to where the backend value is numerically lower than this given date value, as in, before this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    lessThan?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is numerically lower or equal to this given date value, as in, before or equal to this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    lessThanOrEqual?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is numerically greater than to this given date value, as in, after this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    greaterThan?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is numerically greater than or equal to to this given date value, as in, after or equal to this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    greaterThanOrEqual?: Date | ISO8601DateString | null;
    /** Filter to where the backend date value is before this given date value in time. Accepts a `Date` object or a ISO8601 formatted date string */
    before?: Date | ISO8601DateString | null;
    /** Filter to where the backend date value is after this given date value in time. Accepts a `Date` object or a ISO8601 formatted date string */
    after?: Date | ISO8601DateString | null;
}
/** The filters available for filtering a Date type field on the backend that is just the date part of a timestamp and does not include the time. */
export interface DateFilter {
    /** Filter to where the backend value is equal to this date value. Accepts `Date` objects or ISO8601 formatted date strings */
    equals?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is anything other than this value. Accepts `Date` objects or ISO8601 formatted date strings */
    notEquals?: Date | ISO8601DateString | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: (boolean | null) | null;
    /** Filter to where the backend value is included in this given set of dates. Accepts an array of `Date` objects or ISO8601 formatted date strings */
    in?: (Date | ISO8601DateString | null)[];
    /** Filter to where the backend value is not included in this given set of dates. Accepts an array of `Date` objects or ISO8601 formatted date strings */
    notIn?: (Date | ISO8601DateString | null)[];
    /** Filter to where the backend value is numerically lower than this given date value, as in, before this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    lessThan?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is numerically lower or equal to this given date value, as in, before or equal to this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    lessThanOrEqual?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is numerically greater than to this given date value, as in, after this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    greaterThan?: Date | ISO8601DateString | null;
    /** Filter to where the backend value is numerically greater than or equal to to this given date value, as in, after or equal to this given date in time. Accepts a `Date` object or a ISO8601 formatted date string */
    greaterThanOrEqual?: Date | ISO8601DateString | null;
    /** Filter to where the backend date value is before this given date value in time. Accepts a `Date` object or a ISO8601 formatted date string */
    before?: Date | ISO8601DateString | null;
    /** Filter to where the backend date value is before or the same as this given date value. Accepts a `Date` object or a ISO8601 formatted date string */
    beforeOrOn?: Date | ISO8601DateString | null;
    /** Filter to where the backend date value is after this given date value in time. Accepts a `Date` object or a ISO8601 formatted date string */
    after?: Date | ISO8601DateString | null;
    /** Filter to where the backend date value is after or the same as this given date value. Accepts a `Date` object or a ISO8601 formatted date string */
    afterOrOn?: Date | ISO8601DateString | null;
}
/** The filters available for filtering a JSON type field on the backend */
export interface JSONFilter {
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
    /** Filter to where the backend value is equal to this value. Does an exact comparison of JSON key-by-key. */
    equals?: JSONBlob | null;
    /** Filter to where the backend value is equal to any of the given values. Accepts a list of JSON objects. */
    in?: (JSONBlob | null)[];
    /** Filter to where the backend value is not equal to any of the given values. Accepts a list of JSON objects. */
    notIn?: (JSONBlob | null)[];
    /** Filter to where the backend value is not exactly equal to the given value. Accepts one JSON object. Will filter out any records with exact matches, but will allow records with partial matches through. To do partial testing, use the `matches` operator. */
    notEquals?: JSONBlob | null;
    /** Filter to where the backend value matches the given value on a key by key basis. Accepts one JSON object. Will filter down to only records that have the same value in their backend data as is specified in this value. Backend records can have other keys or values as well. */
    matches?: JSONBlob | null;
}
/** The filters available for filtering a String type field on the backend */
export interface StringFilter {
    /** Filter to where the backend value is equal to this string */
    equals?: string | null;
    /** Filter to where the backend value is not equal to this string */
    notEquals?: string | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
    /** Filter to where the backend value is exactly equal to any of the given strings */
    in?: (string | null)[];
    /** Filter to where the backend value is not exactly equal to any of the given strings */
    notIn?: (string | null)[];
    /** Filter to where the backend value sorts alphanumerically lower than this given string. Sorts using Postgres string sorting rules. */
    lessThan?: string | null;
    /** Filter to where the backend value sorts alphanumerically lower than or equal to this given string. Sorts using Postgres string sorting rules. */
    lessThanOrEqual?: string | null;
    /** Filter to where the backend value sorts alphanumerically greater than this given string. Sorts using Postgres string sorting rules. */
    greaterThan?: string | null;
    /** Filter to where the backend value sorts alphanumerically greater than or equal to this given string. Sorts using Postgres string sorting rules. */
    greaterThanOrEqual?: string | null;
    /** Filter to where the backend string starts with this exact string. */
    startsWith?: string | null;
}
/**
 * Filters available on an Enum type field
 *
 * @example
 * { equals: 'Green' }
 *
 * @example
 * { isSet: true }
 *
 * @example
 * { notEquals: "Red" }
 */
export interface SingleEnumFilter {
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
    /** Filter to where the backend value exactly equal to this given enum value */
    equals?: string | null;
    /** Filter to where the backend value is not exactly equal to this given enum value */
    notEquals?: string | null;
    /** Filter to where the backend value is included in this list of of enum values */
    in?: (string | null)[];
}
/**
 * Filters available on an Enum type field where the backend can select multiple values
 *
 * @example
 * { equals: ['Green', 'Red'] }
 *
 * @example
 * { contains: 'Green' }
 *
 * @example
 * { isSet: true }
 *
 * @example
 * { notEquals: ["Red"] }
 */
export interface MultiEnumFilter {
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
    /** Filter to where the backend value exactly equal to this list of given enum values. The backend value must be exactly this list to match. */
    equals?: (string | null)[];
    /** Filter to where the backend value is not equal to this list of given enum values. Any records with exactly this list will not be returned, but partial matches will be. */
    notEquals?: (string | null)[];
    /** Filter to where the backend value list of enums includes this given value or list of values. */
    contains?: string | null | (string | null)[];
}
/**
 * Filters available for filtering boolean type fields on the backend
 *
 * @example
 * { equals: true }
 *
 * @example
 * { notEquals: false }
 */
export interface BooleanFilter {
    /** Filter to where the backend value is equal to this boolean. */
    equals?: boolean | null;
    /** Filter to where the backend value is not equal to this boolean. */
    notEquals?: boolean | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
}
/**
 * Filters available for filtering record state type fields on the backend
 *
 * @example
 * { inState: { created: "installed "} }
 *
 * @example
 * { isSet: false }
 */
export interface StateFilter {
    /** Filter to where the backend value is equal to this state string or nested state set. */
    inState?: string | Record<string, any> | null;
    /**
     * Filter to where the backend value is set to any value at all.
     *  - if true, will exclude records where this field is null.
     *  - if false, will only return records where this field is null.
     **/
    isSet?: boolean | null;
}
/** The order to sort records by when returning from the backend */
export type SortOrder = "Ascending" | "Descending";
/** How order to sort records by a vector field when returning from the backend */
export type VectorSortOrder = {
    /** Sort by the cosine similarity between the stored vector and this given vector. Defaults the sort order to Ascending, which will return the most similar vectors first. */
    cosineSimilarityTo?: (number | null)[] | null;
    /** Sort by the L2 distance between the stored vector and this given vector */
    l2DistanceTo?: (number | null)[] | null;
    order?: SortOrder | null;
};
/** A sort for one field by a particular order. Can only include one key for one field to be valid. */
export type FieldSort = {
    [field: string]: SortOrder | VectorSortOrder | null | undefined;
};
/**
 * A sort to return backend records by
 * @example
 * { name: 'Ascending' }
 *
 * @example
 * [{ name: 'Ascending'}, {id: 'Descending' }]
 **/
export type AnySort = FieldSort | FieldSort[];
export type AnyFieldFilter = IDFilter | DateTimeFilter | DateFilter | JSONFilter | StringFilter | SingleEnumFilter | MultiEnumFilter | IntFilter | FloatFilter | BooleanFilter | StateFilter;
export type FilterElement = {
    /** A list of filter conditions that all must be matched for the record to be returned */
    AND?: FilterElement[] | null;
    /** A list of filter conditions where any one within can be matched for the record to be returned */
    OR?: FilterElement[] | null;
    /** A list of filter conditions to invert for matching */
    NOT?: FilterElement[] | null;
} | Record<string, AnyFieldFilter | FilterElement[] | undefined | null> | null;
/**
 * A filter for filtering the records returned by the backed.
 * Is not specific to any backend model. Look for the backend specific types in the generated API client if you need strong type safety.
 *
 * @example
 * { name: { equals: 'Jane' } }
 *
 * @example
 * { name: { equals: 'Bob' }, age: { greaterThan: 18 } }
 *
 * @example
 * { AND: [{ name: { equals: 'Bob' } }, { age: { greaterThan: 18 } }, { age: { lessThan: 50 } }] }
 *
 **/
export type AnyFilter = FilterElement | FilterElement[];
/**
 * A list of fields to return from the backend
 * Is not specific to any backend model. Look for the backend specific types in the generated API client if you need strong type safety.
 */
export interface AnySelection {
    [key: string]: boolean | null | undefined | AnySelection;
}
/** The options a record find operation takes that selects which fields are returned from the backend */
export type SelectionOptions = {
    select?: AnySelection;
};
/** The options a record find operation takes that can return many records */
export interface FindManyOptions extends BaseFindOptions {
    /** Sort the returned records by the given criteria */
    sort?: AnySort | null;
    /** Only return records which match the given set of filters */
    filter?: AnyFilter | AnyFilter[] | null;
    /** Only return records which match this given search string */
    search?: string | null;
    /**
     * Return records after the given cursor for pagination. Useful in tandem with the `first` count option for pagination.
     **/
    after?: string | null;
    /**
     * Return this number of records. Useful in tandem with the `after` cursor option for pagination.
     **/
    first?: number | null;
    /**
     * Return records before the given cursor for pagination. Useful in tandem with the `last` count option for pagination.
     **/
    before?: string | null;
    /**
     * Return this number of records. Useful in tandem with the `before` cursor option for pagination.
     **/
    last?: number | null;
}
/** The options a record find operation takes that can return many records */
export type FindFilteredOptions = {
    /** Return only the given fields on the backend record (and related records) */
    select?: AnySelection;
    /** Sort the returned records by the given critera */
    sort?: AnySort | null;
    /** Only return records which match the given set of filters */
    filter?: AnyFilter | null;
    /** Only return records which match this given search string */
    search?: string | null;
};
/**
 * A list of fields to select from the internal API
 *
 * Matches the format of the Public API `select` option, but only allows going one level deep -- no relationships can be selected using the internal API.
 *
 * Supports passing a list of strings as a shorthand.
 *
 * @example
 * { fieldA: true, fieldB: true, fieldC: false }
 *
 * @example
 * ['fieldA', 'fieldB']
 */
export type InternalFieldSelection = string[] | {
    [field: string]: boolean | null | undefined;
};
/** Options for the api functions that return one record on an InternalModelManager */
export interface InternalFindOneOptions {
    /**
     * What fields to retrieve from the API for this API call
     * __Note__: This selection is different than the top level select option -- it just accepts a list of string fields, and not a nested selection. To use a nested selection, use the top level API.
     **/
    select?: InternalFieldSelection;
}
/** Options for functions that query a list of records on an InternalModelManager */
export interface InternalFindListOptions {
    /**
     * A string to search for within all the stringlike fields of the records
     * Matches the behavior of the Public API `search` option
     **/
    search?: string | null;
    /**
     * How to sort the returned records
     * Matches the format and behavior of the Public API `sort` option
     *
     * @example
     * {
     *   sort: { publishedAt: "Descending" }
     * }
     **/
    sort?: AnySort | null;
    /**
     * Only return records matching this filter
     * Matches the format and behavior of the Public API `filter` option
     *
     * @example
     * {
     *   filter: { published: { equals: true } }
     * }
     * */
    filter?: AnyFilter | null;
    /**
     * What fields to retrieve from the API for this API call
     * __Note__: This selection is different than the top level select option -- it just accepts a list of string fields, and not a nested selection. To use a nested selection, use the top level API.
     **/
    select?: InternalFieldSelection;
}
/** Options for functions that return a paginated list of records from an InternalModelManager */
export interface InternalFindManyOptions extends InternalFindListOptions {
    /**
     * A count of records to return
     * Often used in tandem with the `after` option for GraphQL relay-style cursor pagination
     * Matches the pagination style and behavior of the Public API
     **/
    first?: number | null;
    /**
     * The `after` cursor from the GraphQL Relay pagination spec
     * Matches the pagination style and behavior of the Public API
     **/
    after?: string | null;
    /**
     * A count of records to return
     * Often used in tandem with the `before` option for GraphQL relay-style cursor pagination
     * Matches the pagination style and behavior of the Public API
     **/
    last?: number | null;
    /**
     * The `before` cursor from the GraphQL Relay pagination spec
     * Matches the pagination style and behavior of the Public API
     **/
    before?: string | null;
}
/** The options an internal record mutation takes */
export type InternalMutationOptions = {
    /**
     * Which fields to return from the backend
     * __Note__: This selection is different than the top level select option -- it just accepts a list of string fields, and not a nested selection. To use a nested selection, use the top level API.
     **/
    select?: InternalFieldSelection;
};
/**
 * @private
 */
export type PaginateOptions = {
    after?: string | null;
    first?: number | null;
    before?: string | null;
    last?: number | null;
    select?: AnySelection | InternalFieldSelection | null;
};
/**
 * Convert a schema type into the type that a selection of it must extend
 *
 * Example Schema:
 *
 * {
 *   foo: boolean;
 *   bar?: string;
 *   nested?: {
 *     count: number
 *   }
 * }
 *
 * Example available selection:
 *
 * {
 *   foo?: boolean | null | undefined;
 *   bar?: boolean | null | undefined;
 *   nested?: {
 *     count: boolean | null | undefined
 *   }
 * }
 */
export type AvailableSelection<Schema> = Schema extends string | number | bigint | null | undefined ? boolean | null | undefined : {
    [key in keyof Schema]?: AvailableSelection<Schema[key]>;
};
/** Options for configuring the queue for a background action */
export interface BackgroundActionQueue {
    /**
     * The name of the queue to put this background action in. Actions enqueued into the same queue will be grouped together, and at most the `maxConcurrency` number of actions will execute at once. Queue names don't need to be defined ahead of time or explicitly created.
     */
    name: string;
    /**
     * The maximum number of actions in this queue that can be running at once
     */
    maxConcurrency?: number;
}
/** Options for configuring how a background action will retry on failure */
export interface BackgroundActionRetryPolicy {
    /**
     * The maximum number of times to retry the operation if it keeps failing. Default is 10.
     */
    retryCount?: number;
    /**
     * How long to initially delay the first retry. Default is 1000.
     */
    initialInterval?: number;
    /**
     * The maximum amount of time to delay a retry while exponentially backing off. Default is not set, so the retry can backoff indefinitely.
     */
    maxInterval?: number;
    /**
     * Randomizes the delays between attempts by multiplying with a factor between 1 to 2. Default is false.
     */
    randomizeInterval?: boolean;
    /**
     * The exponential backoff factor to use for calculating the retry delay for successive retries. Set this higher to delay longer. Default is 2.
     */
    backoffFactor?: number;
}
/**
 * Options for governing how a background action is enqueued
 */
export type EnqueueBackgroundActionOptions<Action extends AnyActionFunction> = {
    /**
     * A unique identifier to use for this background action. Must be unique among all other background actions within this environment. If not set, a unique ID will be autogenerated and returned.
     **/
    id?: string;
    /**
     * How high to place this background action in it's queue. `high` priority actions will be executed before `default` priority actions, and those before `low` priority actions. If not set, the `default` priority will be used.
     */
    priority?: "low" | "default" | "high";
    /**
     * A queue to put this background action in that limits the maximum concurrency of all actions in the queue. If not set, the action will go into the global queue, and won't be concurrency limited.
     *
     * Pass a string to enqueue this action into a queue with the given name and an assumed max concurrency of `1`. Pass an object to enqueue this action into a queue with the given name and concurrency settings.
     */
    queue?: string | BackgroundActionQueue;
    /**
     * Configure how many times to retry this action if it fails (and how fast)
     *
     * Setting `retries` to `1` means the action will be attempted once, and if it fails, retries again once.
     * Setting `retries` to `0` means failures won't be retried at all.
     * Setting `retries` to an object allows configuring the count as well as the schedule retries will be attempted on, @see BackgroundActionRetryPolicy
     *
     * @example
     * // retry up to 3 more times after failure (4 attempts total)
     * retries: 3
     *
     * @example
     * retries: { retryCount: 5, initialInterval: 1000, maxInterval: 60000, randomizeInterval: true }
     *
     * @default 10 retry 10 times with exponential backoff
     **/
    retries?: number | BackgroundActionRetryPolicy;
    /**
     * Define client behavior when a background action is enqueued with the same ID as an existing action.
     * - `ignore` will not enqueue the new action, and will return a handle representing the existing action (which will have the same id)
     * - `error` will throw the GGT_DUPLICATE_BACKGROUND_ACTION_ID error for the caller to handle
     */
    onDuplicateID?: "ignore" | "error";
} & Partial<OperationContext>;
export type ActionFunctionOptions<Action extends AnyActionFunction> = Action extends ActionFunction<infer Options, any, any, any, any> ? Options : Action extends BulkActionFunction<infer Options, any, any, any, any> ? Options : Action extends GlobalActionFunction<any> ? Record<string, never> : never;
export {};
