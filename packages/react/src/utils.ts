import type { AnyClient, AnyCoreImplementation, AnyModelManager } from "@gadgetinc/core";
import type { RefCallback, RefObject } from "react";

/**
 * Get a list of path segments from a dot-separated path
 */
const pathToPathArray = (path: string | string[]) => {
  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return Array.isArray(path) ? path : path.match(/([^[.\]])+/g)!;
};

/**
 * Get a dot-separated path from an object
 * From https://youmightnotneed.com/lodash
 */
export const get = (obj: any, path: string | string[]) => {
  if (!path) return undefined;
  return pathToPathArray(path).reduce((prevObj, key) => prevObj && prevObj[key], obj);
};

/**
 * Set a dot-separated path to a value on an object
 * From https://youmightnotneed.com/lodash
 */
export const set = (obj: any, path: string, value: any) => {
  const pathArray = pathToPathArray(path);
  pathArray.reduce((acc, key, i) => {
    if (acc[key] === undefined) acc[key] = {};
    if (i === pathArray.length - 1) acc[key] = value;
    return acc[key];
  }, obj);
};

/**
 * Based on Lodash uniqBy to ensure all array elements are unique by a property
 * https://youmightnotneed.com/lodash
 */
export const uniqByProperty = (arr: any[], property: string) => {
  const getPropertyValue = (item: any) => item[property];
  return arr.filter((x, i, self) => i === self.findIndex((y) => getPropertyValue(x) === getPropertyValue(y)));
};

/**
 * Based on Lodash uniq to ensure all array elements are unique
 * https://youmightnotneed.com/lodash
 */
export const uniq = (arr: any[]) => [...new Set(arr)];

/**
 * Based on Lodash compact to ensure all array elements are truthy
 * https://youmightnotneed.com/lodash
 */
export const compact = (arr: any[]) => arr.filter((x) => !!x);

/**
 * Removes the property at path of object.
 * From https://youmightnotneed.com/lodash
 */
export const unset = (obj: any, path: string) => {
  const pathArray = pathToPathArray(path);

  pathArray.reduce((acc, key, i) => {
    if (i === pathArray.length - 1) delete acc[key];
    return acc[key];
  }, obj);
};

/**
 * Omits the given properties from an object
 * From https://youmightnotneed.com/lodash
 */
export const omit = (obj: any, omittedProperties: string[], safe = false) => {
  obj = { ...obj };
  omittedProperties.forEach((prop) => {
    if (safe && !(prop in obj)) {
      return;
    }
    delete obj[prop];
  });
  return obj;
};

/**
 * Wrapper to make a debounced function
 * NOTE: When using this within a React component, make sure to wrap this in a `useCallback` so that the previous timeoutId is preserved between renders.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (fn: Function, delayInMs = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delayInMs);
  };
};

export const getModelManager = (
  apiClient: AnyClient,
  coreImplementation: AnyCoreImplementation,
  apiIdentifier: string,
  namespace?: string[] | string | null
): AnyModelManager | undefined => {
  return get(apiClient, coreImplementation.namespaceDataPath([apiIdentifier], namespace).join("."));
};

type SortOrder = "asc" | "desc";
export const sortByProperty = <T>(arr: T[], property: keyof T, options?: { order?: SortOrder; transform?: (value: any) => any }): T[] => {
  const { order = "asc", transform } = options ?? {};

  return arr.sort((a, b) => {
    const aValue = transform ? transform(a[property]) : a[property];
    const bValue = transform ? transform(b[property]) : b[property];

    if (aValue < bValue) {
      return order === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
};

/**
 * In some cases, we need to exclude the `ref` property from the original object (e.g. input controllers) to prevent from showing up a warning message from React.
 * This function helps to get the object without the `ref` property.
 *
 * Check out https://github.com/gadget-inc/js-clients/pull/466 for more details.
 */
export const getPropsWithoutRef = <T extends { ref: RefCallback<any> | RefObject<any> }>(props: T) => {
  const { ref: _ref, ...rest } = props;
  return rest;
};

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

export type ColumnValueType =
  | Nullable<string>
  | Nullable<number>
  | Nullable<boolean>
  | Nullable<Date>
  | null
  | Nullable<string>[]
  | Array<null>
  | RoleAssignmentsValueType[]
  | Nullable<FileValueType>
  | Nullable<RichTextValueType>
  | Nullable<ValueWithTypename>
  | Nullable<HasManyValueType>;

export const isRoleAssignmentsArray = (value: ColumnValueType): value is RoleAssignmentsValueType[] => {
  if (!Array.isArray(value) || value.length === 0) return false;
  if (!value.every((item) => item !== null && typeof item === "object" && "__typename" in item && item.__typename === "Role")) return false;
  return true;
};

/**
 * Humanizes a camelCase string by adding spaces between words and capitalizing the first letter
 * Examples
 *    humanizeCamelCase("createNewWidget") => "Create New Widget"
 *    humanizeCamelCase("do99Things") => "Do 99 Things"
 */
export const humanizeCamelCase = (camelCaseString: string): string => {
  // Regular expression to find sequences of lowercase letters or digits followed by uppercase letters
  const uppercaseAfterLowercaseRegex = /([a-z\d])([A-Z])/g;

  // Add a space between the lowercase letter or digit and the uppercase letter
  let humanized = camelCaseString.replace(uppercaseAfterLowercaseRegex, "$1 $2");

  // Adjust to keep sequential numbers together with spaces around them
  humanized = humanized.replace(/([a-zA-Z])(\d)/g, "$1 $2");
  humanized = humanized.replace(/(\d)([a-zA-Z])/g, "$1 $2");

  // Capitalize the first letter
  return humanized.replace(/^./, (str) => str.toUpperCase());
};

export const deepMerge = (obj1: any, obj2: any) => {
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
};

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
export const deepFlattenObject = (obj: any, parentKey = "", separator = "."): Record<string, any> => {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, deepFlattenObject(obj[key], newKey, separator));
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
};

/**
 * Get a list of all the keys in a flattened object
 * @param obj - The object to flatten
 * @returns A list of all the keys in the flattened object
 */
export const getFlattenedObjectKeys = (obj: any) => {
  return Object.keys(deepFlattenObject(obj));
};

export const groupPaths = (paths: string[], uniquePaths = true) => {
  const groups: Record<string, string[]> = {};

  const pathsToGroup = uniquePaths ? Array.from(new Set(paths)) : paths;

  for (const path of pathsToGroup) {
    const [rootSegment, ...childSegments] = path.split(".");

    groups[rootSegment] ??= [];

    if (childSegments.length) {
      groups[rootSegment].push(childSegments.join("."));
    }
  }

  return groups;
};

/**
 * Get the step value for a number input based on the number of decimals
 * @param numberOfDecimals - The number of decimals
 * @returns The step value
 */
export const getStepFromNumberOfDecimals = (numberOfDecimals: number) =>
  numberOfDecimals === 0 ? 1 : Number(`0.${"0".repeat(numberOfDecimals - 1)}1`);

/**
 * Count the number of decimals in a string
 * @param value - The string to count the decimals in
 * @returns The number of decimals
 */
export const countNumberOfDecimals = (value: string) => {
  if (value.includes("e")) {
    // +e scientific notation for large numbers does not get decimal steps
    return 0;
  }
  const [, decimals] = value.split(".");
  return decimals?.length ?? 0;
};

/**
 * Get an error message from an error string
 * @param errorString - The error string
 * @returns The error message
 */
export const getErrorMessage = (errorString: string) => {
  if (errorString.includes("GGT_PERMISSION_DENIED")) return `Missing permissions. Cannot read related model`;

  if (errorString.includes("GGT_INVALID_STORED_DATA")) return `Invalid records found in related model`;

  return "Cannot retrieve records from related model";
};
