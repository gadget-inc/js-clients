import type { AnyClient, AnyCoreImplementation, AnyModelManager } from "@gadgetinc/core";
import type { RefCallback, RefObject } from "react";
/**
 * Get a dot-separated path from an object
 * From https://youmightnotneed.com/lodash
 */
export declare const get: (obj: any, path: string | string[]) => any;
/**
 * Set a dot-separated path to a value on an object
 * From https://youmightnotneed.com/lodash
 */
export declare const set: (obj: any, path: string, value: any) => void;
/**
 * Based on Lodash uniqBy to ensure all array elements are unique by a property
 * https://youmightnotneed.com/lodash
 */
export declare const uniqByProperty: (arr: any[], property: string) => any[];
/**
 * Based on Lodash uniq to ensure all array elements are unique
 * https://youmightnotneed.com/lodash
 */
export declare const uniq: (arr: any[]) => any[];
/**
 * Based on Lodash compact to ensure all array elements are truthy
 * https://youmightnotneed.com/lodash
 */
export declare const compact: (arr: any[]) => any[];
/**
 * Removes the property at path of object.
 * From https://youmightnotneed.com/lodash
 */
export declare const unset: (obj: any, path: string) => void;
/**
 * Omits the given properties from an object
 * From https://youmightnotneed.com/lodash
 */
export declare const omit: (obj: any, omittedProperties: string[], safe?: boolean) => any;
/**
 * Wrapper to make a debounced function
 * NOTE: When using this within a React component, make sure to wrap this in a `useCallback` so that the previous timeoutId is preserved between renders.
 */
export declare const debounce: (fn: Function, delayInMs?: number) => (...args: any[]) => void;
export declare const getModelManager: (apiClient: AnyClient, coreImplementation: AnyCoreImplementation, apiIdentifier: string, namespace?: string[] | string | null) => AnyModelManager | undefined;
type SortOrder = "asc" | "desc";
export declare const sortByProperty: <T>(arr: T[], property: keyof T, options?: {
    order?: SortOrder;
    transform?: (value: any) => any;
}) => T[];
/**
 * In some cases, we need to exclude the `ref` property from the original object (e.g. input controllers) to prevent from showing up a warning message from React.
 * This function helps to get the object without the `ref` property.
 *
 * Check out https://github.com/gadget-inc/js-clients/pull/466 for more details.
 */
export declare const getPropsWithoutRef: <T extends {
    ref: RefCallback<any> | RefObject<any>;
}>(props: T) => Omit<T, "ref">;
export type RichTextValueType = {
    markdown: string;
    __typename: "RichText";
};
export type RoleAssignmentsValueType = {
    key: string;
    name: string;
    __typename: "Role";
};
export type FileValueType = {
    url: string;
    mimeType: string;
    fileName: string;
    __typename: "StoredFile";
};
export type ValueWithTypename = {
    __typename: string;
    [key: string]: ColumnValueType;
};
export type HasManyValueType = {
    __typename: string;
    edges: {
        node: ValueWithTypename;
    }[];
};
export type Nullable<T> = T | null;
export type ColumnValueType = Nullable<string> | Nullable<number> | Nullable<boolean> | Nullable<Date> | null | Nullable<string>[] | Array<null> | RoleAssignmentsValueType[] | Nullable<FileValueType> | Nullable<RichTextValueType> | Nullable<ValueWithTypename> | Nullable<HasManyValueType>;
export declare const isRoleAssignmentsArray: (value: ColumnValueType) => value is RoleAssignmentsValueType[];
/**
 * Humanizes a camelCase string by adding spaces between words and capitalizing the first letter
 * Examples
 *    humanizeCamelCase("createNewWidget") => "Create New Widget"
 *    humanizeCamelCase("do99Things") => "Do 99 Things"
 */
export declare const humanizeCamelCase: (camelCaseString: string) => string;
export declare const deepMerge: (obj1: any, obj2: any) => any;
/**
 * Deep flattens an object by converting all nested objects into a single level of keys.
 * Example:
 *    deepFlattenObject( { a: { b: { c: 1, d: 2, }, e: 3, }, f: 4, }} ) => {
 *      "a.b.c": 1, "a.b.d": 2, "a.e": 3, "f": 4
 *    }
 * @param obj - The object to flatten.
 * @param parentKey - The current key path in the object.
 * @param separator - The separator to use between keys.
 * @returns A flattened object with keys separated by the specified separator.
 */
export declare const deepFlattenObject: (obj: any, parentKey?: string, separator?: string) => Record<string, any>;
/**
 * Get a list of all the keys in a flattened object
 * @param obj - The object to flatten
 * @returns A list of all the keys in the flattened object
 */
export declare const getFlattenedObjectKeys: (obj: any) => string[];
export declare const groupPaths: (paths: string[], uniquePaths?: boolean) => Record<string, string[]>;
/**
 * Get the step value for a number input based on the number of decimals
 * @param numberOfDecimals - The number of decimals
 * @returns The step value
 */
export declare const getStepFromNumberOfDecimals: (numberOfDecimals: number) => number;
/**
 * Count the number of decimals in a string
 * @param value - The string to count the decimals in
 * @returns The number of decimals
 */
export declare const countNumberOfDecimals: (value: string) => number;
/**
 * Get an error message from an error string
 * @param errorString - The error string
 * @returns The error message
 */
export declare const getErrorMessage: (errorString: string) => "Missing permissions. Cannot read related model" | "Invalid records found in related model" | "Cannot retrieve records from related model";
export {};
