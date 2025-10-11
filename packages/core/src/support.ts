import type { OperationResult } from "@urql/core";
import { FieldSelection, type FieldSelection as BuilderFieldSelection } from "tiny-graphql-query-compiler";
import { DataHydrator } from "./DataHydrator.js";
import type { ActionFunctionMetadata, AnyActionFunction, HasReturnType } from "./GadgetFunctions.js";
import type { RecordShape } from "./GadgetRecord.js";
import { GadgetRecord } from "./GadgetRecord.js";
import type { VariablesOptions } from "./types.js";

/**
 * Generic type of the state of any record of a Gadget model
 **/
export type AnyState = string | { [key: string]: AnyState };

/**
 * Error caused by a violated internal expectation that isn't the users fault, but the Gadget platform's. Often the best way to handle is to just retry.
 **/
export class GadgetInternalError extends Error {
  code = "GGT_INTERNAL_ERROR";
  name = "InternalError";

  /** @private */
  statusCode = 500;
  /** @private */
  causedByClient = false;
}

/**
 * An error representing misuse or a violation of the assumptions of the Gadget Client.
 */
export class GadgetClientError extends Error {
  code = "GGT_CLIENT_ERROR";
  name = "ClientError";

  /** @private */
  statusCode = 500;
  /** @private */
  causedByClient = true;
}

/**
 * A Gadget API error with an `code` and `message` describing the error. Most often these errors are caused by invalid input data or by misconfigured Gadget models. Consult the documentation for the specific `code` to learn more.
 **/
export class GadgetOperationError extends Error {
  constructor(incomingMessage: string, readonly code: string) {
    super(incomingMessage.startsWith("GGT_") ? incomingMessage : `${code}: ${incomingMessage}`);
  }
}

/**
 * Interface representing one message on one invalid field for a `InvalidRecordError`
 */
export interface InvalidFieldError {
  /** Which field of a record this error is for */
  apiIdentifier: string;
  /** Human facing string representing the error */
  message: string;
}

/**
 * A client error when the Gadget API closes the connection unexpectedly.
 */
export class GadgetUnexpectedCloseError extends Error {
  code = "GGT_UNKNOWN";
  name = "UnexpectedCloseError";

  /** @private */
  statusCode = 500;
  /** @private */
  causedByClient = false;

  /** The event that caused the unexpected close */
  readonly event: unknown;

  constructor(event: unknown) {
    let message: string;
    if (isCloseEvent(event)) {
      message = `GraphQL websocket closed unexpectedly by the server with error code ${event.code} and reason "${event.reason}"`;
    } else {
      message = "GraphQL websocket closed unexpectedly by the server";
    }

    super(message);
    this.event = event;
  }
}

/**
 * A client error when the client times out waiting for the Gadget API to open websocket connection.
 */
export class GadgetWebsocketConnectionTimeoutError extends Error {
  code = "GGT_WEBSOCKET_CONNECTION_TIMEOUT";
  name = "WebsocketConnectionTimeoutError";

  /** @private */
  statusCode = 500;
  /** @private */
  causedByClient = false;
}

/**
 * A Gadget API error when there are more requests sent in the alloted time window then permitted
 */
export class GadgetTooManyRequestsError extends Error {
  code = "GGT_TOO_MANY_REQUESTS";
  name = "TooManyRequestsError";

  /** @private */
  statusCode = 429;
  /** @private */
  causedByClient = false;
}

/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 */
export class InvalidRecordError extends Error {
  code = "GGT_INVALID_RECORD";
  name = "InvalidRecordError";

  /** @private */
  statusCode = 422;
  /** @private */
  causedByClient = true;
  /**
   * A list of validation errors for each field that failed validation.
   */
  readonly validationErrors: InvalidFieldError[];
  /**
   * The API identifier of the model for this record which failed to validate
   */
  readonly modelApiIdentifier?: string;
  /**
   * The record that failed to validate, if available
   */
  readonly record?: Record<string, any>;

  constructor(message: string | null, validationErrors: InvalidFieldError[], modelApiIdentifier?: string, record?: Record<string, any>) {
    const firstErrors = validationErrors.slice(0, 3);
    const extraErrorMessage =
      validationErrors.length > 3
        ? `, and ${validationErrors.length - 3} more error${validationErrors.length > 4 ? "s" : ""} need${
            validationErrors.length > 4 ? "" : "s"
          } to be corrected`
        : "";

    super(
      message ??
        `GGT_INVALID_RECORD: ${modelApiIdentifier ?? "Record"} is invalid and can't be saved. ${firstErrors
          .map(({ apiIdentifier, message }) => `${apiIdentifier} ${message}`)
          .join(", ")}${extraErrorMessage}.`
    );

    this.validationErrors = validationErrors;
    this.modelApiIdentifier = modelApiIdentifier;
    this.record = record;
  }
}

/**
 * @deprecated Use `InvalidRecordError` instead, here for backwards compatability
 */
export const GadgetValidationError = InvalidRecordError;

/**
 * A Gadget API error that represents an error from the server. Thrown when the server encounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
 */
export class GadgetNonUniqueDataError extends Error {
  code = "GGT_NON_UNIQUE_DATA";
  name = "NonUniqueDataError";

  /** @private */
  statusCode = 417;
  /** @private */
  causedByClient = false;
}

/**
 * A Gadget API error that represents an error where the client asked the server for data that doesn't exist server side.
 */
export class GadgetNotFoundError extends Error {
  code = "GGT_RECORD_NOT_FOUND";
  name = "RecordNotFoundError";

  /** @private */
  statusCode = 404;
  /** @private */
  causedByClient = false;
}

/**
 * Represents a group of errors that occurred when running a number of operations at once */
export class GadgetErrorGroup<Result> extends Error {
  constructor(
    /** The list of inner errors that occurred */
    public readonly errors: GadgetError[],
    /* Any objects that were successfully processed during the bulk operation (the ones that didn't throw errors) */
    public readonly results: Result[] | undefined
  ) {
    super(errors.length > 1 ? "Multiple errors occurred" : errors[0].message);
  }

  get code(): string {
    return `GGT_ERROR_GROUP(${this.errors
      .slice(0, 10)
      .map((error) => error.code ?? "GGT_UNKNOWN")
      .join(",")})`;
  }

  name = "ErrorGroup";

  /** @private */
  get statusCode() {
    return Math.max(...this.errors.map((error) => (error as any).statusCode ?? 500));
  }
}

/** All the errors a Gadget operation can throw */
export type GadgetError =
  | GadgetOperationError
  | GadgetInternalError
  | InvalidRecordError
  | GadgetNonUniqueDataError
  | GadgetNotFoundError
  | GadgetUnexpectedCloseError
  | GadgetWebsocketConnectionTimeoutError
  | GadgetErrorGroup<any>;

export function assert<T>(value: T | undefined | null, message?: string): T {
  if (!value) {
    throw new Error("assertion error" + (message ? `: ${message}` : ""));
  }
  return value;
}

export const get = (object: Record<string, any> | null | undefined, path: string[]): any => {
  const length = path.length;
  let index = 0;
  while (object != null && index < length) {
    object = object[path[index++]];
  }

  return index && index == length ? object : undefined;
};

export const isCloseEvent = (event: any): event is CloseEvent => event?.type == "close";

/**
 * Converts a string to camel case, optionally capitalizing the first character.
 * Defaults to capitalizing the first character.
 * @param str
 * @param capitalizeFirstCharacter
 * @returns Camelize string
 */
export const capitalizeIdentifier = (str: string | undefined | null, capitalizeFirstCharacter?: boolean): string => {
  if (typeof str !== "string") return "";
  return camelize(str, capitalizeFirstCharacter);
};

const capitalizeFirstCharacter = (str: string) => {
  const result = str === null || str === undefined ? "" : String(str);
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const camelize = (term: string, uppercaseFirstLetter = true) => {
  let result = "" + term;

  if (uppercaseFirstLetter) {
    result = result.replace(/^[a-z\d]*/, (a) => {
      return capitalizeFirstCharacter(a);
    });
  } else {
    result = result.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (a) => {
      return a.toLowerCase();
    });
  }

  result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, (_match, a, b, _idx, _string) => {
    a || (a = "");
    return "" + a + capitalizeFirstCharacter(b);
  });

  return result;
};

export const namespacedGraphQLTypeName = (modelApiIdentifier: string, givenNamespaces: string | string[] | null | undefined) => {
  const namespaces: string[] = Array.isArray(givenNamespaces) ? givenNamespaces : givenNamespaces ? [givenNamespaces] : [];
  const segments = [...namespaces, modelApiIdentifier];
  return segments.map((segment) => camelize(segment)).join("");
};

export const sortTypeName = (modelApiIdentifier: string, namespace: string | string[] | null | undefined) =>
  `${namespacedGraphQLTypeName(modelApiIdentifier, namespace)}Sort`;

export const filterTypeName = (modelApiIdentifier: string, namespace: string | string[] | null | undefined) =>
  `${namespacedGraphQLTypeName(modelApiIdentifier, namespace)}Filter`;

export const getNonUniqueDataError = (modelApiIdentifier: string, fieldName: string, fieldValue: string) =>
  new GadgetNonUniqueDataError(
    `More than one record found for ${modelApiIdentifier}.${fieldName} = ${fieldValue}. Please confirm your unique validation is not reporting an error.`
  );

export type FetchableResult = Result & { fetching: boolean; stale?: boolean };

export const getNonNullableError = (response: FetchableResult, dataPath: string[]) => {
  if (response.fetching) {
    return;
  }
  const result = get(response.data, dataPath);
  if (result === undefined) {
    return new GadgetInternalError(
      `Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath.join(".")}`
    );
  } else if (result === null) {
    return new GadgetNotFoundError(`Record Not Found Error: Gadget API returned no data at ${dataPath.join(".")}`);
  }
};

export const assertOperationSuccess = (response: OperationResult<any>, dataPath: string[], throwOnEmptyData = false) => {
  if (response.error) {
    if ("networkError" in response.error && response.error.networkError) {
      if (response.error.networkError?.message) {
        response.error.message = `[Network] ${response.error.networkError.message}`;
      } else {
        response.error.message = `[Network] No message, error: string(response.error.networkError) \nstack: ${String(
          response.error.networkError.stack
        )}}`;
      }
    }
    throw response.error;
  }

  const result = get(response.data, dataPath);
  const edges = get(result, ["edges"]);
  const dataArray = edges ?? result;
  if (result === undefined) {
    throw new GadgetInternalError(
      `Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath.join(".")}`
    );
  } else if (result === null || (throwOnEmptyData && Array.isArray(dataArray) && dataArray.length === 0)) {
    throw new GadgetNotFoundError(`Record Not Found Error: Gadget API returned no data at ${dataPath.join(".")}`);
  }

  return result;
};

export const assertNullableOperationSuccess = (response: OperationResult<any>, dataPath: string[]) => {
  if (response.error) {
    if ("networkError" in response.error && (response.error.networkError as any as Error[])?.length) {
      response.error.message = (response.error.networkError as any as Error[]).map((error) => "[Network] " + error.message).join("\n");
    }
    throw response.error;
  }

  const result = get(response.data, dataPath);
  return result ?? null;
};

export const gadgetErrorFor = (error: Record<string, any>) => {
  if (error.code == "GGT_INVALID_RECORD") {
    return new InvalidRecordError(error.message, error.validationErrors, error.model?.apiIdentifier, error.record);
  } else if (error.code == "GGT_UNKNOWN" && error.message.includes("duplicate key value violates unique constraint")) {
    return new GadgetNonUniqueDataError(error.message);
  } else {
    return new GadgetOperationError(error.message, error.code);
  }
};

export const assertMutationSuccess = (response: OperationResult<any>, dataPath: string[]) => {
  const operationResponse = assertOperationSuccess(response, dataPath);

  return assertResponseSuccess(operationResponse);
};

export const assertResponseSuccess = (operationResponse: any) => {
  if (!operationResponse.success) {
    const firstErrorBlob = operationResponse.errors && operationResponse.errors[0];
    if (firstErrorBlob) {
      throw gadgetErrorFor(firstErrorBlob);
    } else {
      throw new GadgetOperationError(`Gadget API operation not successful.`, "GGT_UNKNOWN");
    }
  }

  return operationResponse;
};

// All of these functions only need the data bit, so narrow the type to make it easier to use these functions
type Result = Pick<OperationResult<any>, "data">;

export const getHydrator = (response: Result) => {
  if (response.data?.gadgetMeta?.hydrations) {
    return new DataHydrator(response.data?.gadgetMeta?.hydrations);
  }
};

export const hydrateRecord = <Shape extends RecordShape = RecordShape>(response: Result, record: any): GadgetRecord<Shape> => {
  const hydrator = getHydrator(response);
  if (hydrator) {
    record = hydrator.apply(record);
  }
  return new GadgetRecord<Shape>(record);
};

export const hydrateRecordArray = <Shape extends RecordShape = any>(response: Result, records: Array<any>) => {
  const hydrator = getHydrator(response);
  if (hydrator) {
    records = hydrator.apply(records) as any;
  }
  return records?.map((record) => new GadgetRecord<Shape>(record));
};

export const hydrateConnection = <Shape extends RecordShape = any>(response: Result, connection: { edges: { node: Node }[] }) => {
  const nodes = connection.edges.map((edge) => edge.node);
  return hydrateRecordArray<Shape>(response, nodes);
};

const objObjType = "[object Object]";
const stringObjType = "[object String]";

export const toPrimitiveObject = (value: any): any => {
  if (value != null && typeof value.toJSON === "function") value = value.toJSON();
  if (value === undefined) return undefined;
  if (value === null) return null;
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      const arr = [];

      for (let i = 0; i < value.length; i++) {
        const v = value[i];
        arr[i] = v === undefined ? null : toPrimitiveObject(v);
      }

      return arr;
    }
    if (Object.prototype.toString.call(value) === "[object Error]") return {};
    if (Object.prototype.toString.call(value) === objObjType) {
      const obj: any = {};
      for (const key of Object.keys(value)) {
        const parsed = toPrimitiveObject(value[key]);
        // Remove undefined fields
        if (parsed !== undefined) obj[key] = parsed;
      }
      return obj;
    }
  }
};

/**
 * Get a string representing an error that is an `Error` object or anything else that might be `throw`n
 */
export const errorMessage = (error: unknown) => {
  if (typeof error == "string") {
    return error;
  } else if (error && (error as any)?.message) {
    return (error as any).message;
  } else {
    return String(error);
  }
};

// Gadget Storage Test Key that minifies well
const key = "gstk";

/** Detect if the window object and window.localStorage or window.sessionStorage objects are functional */
export const storageAvailable = (type: "localStorage" | "sessionStorage") => {
  try {
    const storage = window[type];
    storage.setItem(key, key);
    storage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

// smaller implementation of lodash's isEqual from https://github.com/NickGard/tiny-isequal but made a bit more performant and typesafe
const toString = Object.prototype.toString,
  getPrototypeOf = Object.getPrototypeOf,
  getOwnProperties = Object.getOwnPropertySymbols
    ? (c: any) => (Object.keys(c) as any[]).concat(Object.getOwnPropertySymbols(c))
    : Object.keys;

const checkEquality = (a: any, b: any, refs: any[]): boolean => {
  // trivial case: primitives and referentially equal objects
  if (a === b) return true;

  // if both are null/undefined, the above check would have returned true
  if (a == null || b == null) return false;

  // check to see if we've seen this reference before; if yes, return true
  // eslint-disable-next-line lodash/prefer-includes
  if (refs.indexOf(a) > -1 && refs.indexOf(b) > -1) return true;

  const aType = toString.call(a);
  const bType = toString.call(b);

  let aElements, bElements, element;

  // save results for circular checks
  refs.push(a, b);

  // gadget-specific check for _link equality -- this is a special case for GadgetRecord
  if (aType == objObjType && bType == stringObjType && "_link" in a && Object.keys(a).length == 1) {
    return a._link === b;
  } else if (bType == objObjType && aType == stringObjType && "_link" in b && Object.keys(b).length == 1) {
    return b._link === a;
  }

  if (aType != bType) return false; // not the same type of objects

  // for non-null objects, check all custom properties
  aElements = getOwnProperties(a);
  bElements = getOwnProperties(b);
  if (
    aElements.length != bElements.length ||
    aElements.some(function (key) {
      return !checkEquality(a[key], b[key], refs);
    })
  ) {
    return false;
  }

  switch (aType.slice(8, -1)) {
    case "Symbol":
      return a.valueOf() == b.valueOf();
    case "Date":
    case "Number":
      return +a == +b || (+a != +a && +b != +b); // convert Dates to ms, check for NaN
    case "RegExp":
    case "Function":
    case "String":
    case "Boolean":
      return "" + a == "" + b;
    case "Set":
    case "Map": {
      aElements = a.entries();
      bElements = b.entries();
      do {
        element = aElements.next();
        if (!checkEquality(element.value, bElements.next().value, refs)) {
          return false;
        }
      } while (!element.done);
      return true;
    }
    case "ArrayBuffer":
      (a = new Uint8Array(a)), (b = new Uint8Array(b)); // fall through to be handled as an Array
    case "DataView":
      (a = new Uint8Array(a.buffer)), (b = new Uint8Array(b.buffer)); // fall through to be handled as an Array
    case "Float32Array":
    case "Float64Array":
    case "Int8Array":
    case "Int16Array":
    case "Int32Array":
    case "Uint8Array":
    case "Uint16Array":
    case "Uint32Array":
    case "Uint8ClampedArray":
    case "Arguments":
    case "Array":
      if (a.length != b.length) return false;
      for (element = 0; element < a.length; element++) {
        if (!(element in a) && !(element in b)) continue; // empty slots are equal
        // either one slot is empty but not both OR the elements are not equal
        if (element in a != element in b || !checkEquality(a[element], b[element], refs)) return false;
      }
      return true;
    case "Object":
      return checkEquality(getPrototypeOf(a), getPrototypeOf(b), refs);
    default:
      return false;
  }
};

export const isEqual = (a: any, b: any) => checkEquality(a, b, []);

/**
 * Processes the flexible, convenient JS-land inputs for an action to the fully qualified GraphQL API inputs
 * @internal
 **/
export const disambiguateActionVariables = (action: AnyActionFunction, variables: Record<string, any> | undefined) => {
  variables ??= {};
  if (!("hasAmbiguousIdentifier" in action) && !("acceptsModelInput" in action)) return variables;

  if (action.hasAmbiguousIdentifier) {
    if (
      Object.keys(variables).some((key) => key !== "id" && !action.paramOnlyVariables?.includes(key) && key !== action.modelApiIdentifier)
    ) {
      throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${action.modelApiIdentifier}: { ... } })?`);
    }
  }

  let newVariables: Record<string, any>;

  // for backwards compatibilty, actions without the operatesWithRecordIdentity metadata should extract the id from the variables
  const shouldExtractId = action.operatesWithRecordIdentity ?? true;

  if (action.acceptsModelInput ?? action.hasCreateOrUpdateEffect) {
    if (
      action.modelApiIdentifier in variables &&
      typeof variables[action.modelApiIdentifier] === "object" &&
      variables[action.modelApiIdentifier] != null
    ) {
      newVariables = variables;
    } else {
      newVariables = {
        [action.modelApiIdentifier]: Object.create(null),
      };
      for (const [key, value] of Object.entries(variables)) {
        if (action.paramOnlyVariables?.includes(key)) {
          newVariables[key] = value;
        } else {
          if (key == "id" && shouldExtractId) {
            newVariables.id = value;
          } else {
            newVariables[action.modelApiIdentifier][key] = value;
          }
        }
      }
    }
  } else {
    newVariables = variables;
  }

  return newVariables;
};

/**
 * Normalizes incoming params from JS land into the variable format the GraphQL API is expecting
 * Some bulk actions take GraphQL variables like `{ids: ["1","2","3"]}`, and others take `{inputs: [{field: "value"}, {field: "value"}]}`. In JS land, we accept the fully qualified variables that look like that, as well as the inner array shorthands.
 **/
export const disambiguateBulkActionVariables = (
  action: ActionFunctionMetadata<any, any, any, any, any, true>,
  inputs: Record<string, any> | Record<string, any>[] = {}
) => {
  if (action.variables["ids"]) {
    // for actions which accept ids only, normalize the array shorthand into the full GraphQL variables
    return Array.isArray(inputs) ? { ids: inputs } : inputs;
  } else {
    // for actions which accept inputs, normalize each element of the array of inputs, and then normalize arrays into the object form
    const inputsArray: Record<string, any>[] = (Array.isArray(inputs) ? inputs : inputs.inputs) ?? [];
    return {
      inputs: inputsArray.map((input) => disambiguateActionVariables(action, input)),
    };
  }
};

/**
 * Given a set of variables defined with their types and requiredness and whatnot, return the same options with the values for each variable filled in, suitable for passing to one invocation
 */
export const setVariableOptionValues = (variableOptions: VariablesOptions, values: Record<string, unknown>) => {
  const result: VariablesOptions = {};
  for (const [key, variable] of Object.entries(variableOptions)) {
    result[key] = { ...variable, value: values[key] };
  }
  return result;
};

export const namespaceDataPath = (dataPath: string[], namespace?: string[] | string | null) => {
  if (namespace) {
    dataPath.unshift(...(Array.isArray(namespace) ? namespace : [namespace]));
  }
  return dataPath;
};

/**
 * Wrap a field selection in a set of namespaces
 **/
export function namespacify(namespace: string[] | string | undefined | null, fields: any) {
  if (!namespace) return fields;
  if (!Array.isArray(namespace)) {
    namespace = [namespace];
  }
  if (namespace) {
    for (let i = namespace.length - 1; i >= 0; i--) {
      fields = {
        [namespace[i]]: fields,
      };
    }
  }
  return fields;
}

export const ErrorsSelection: BuilderFieldSelection = {
  errors: {
    message: true,
    code: true,
    "... on InvalidRecordError": {
      model: {
        apiIdentifier: true,
      },
      validationErrors: {
        message: true,
        apiIdentifier: true,
      },
    },
  },
};

/**
 * Recursively converts a Map<string, any> to a plain object.
 */
function mapToObject(map: Map<string, any>): Record<string, any> {
  const obj: Record<string, any> = {};
  for (const [key, value] of map.entries()) {
    if (value instanceof Map) {
      obj[key] = mapToObject(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

/**
 * Formats error messages into a structured object.
 *
 * @param {Error} error - The error object to format.
 * @returns {Record<string, any>} An object containing formatted error messages.
 *   For InvalidRecordError, it structures validation errors by model and field.
 *   For other errors, it returns a single root message.
 *
 * @example
 * // For an InvalidRecordError:
 * // {
 * //   modelName: {
 * //     fieldName: { message: "Error message" }
 * //   }
 * // }
 *
 * @example
 * // For other errors:
 * // {
 * //   root: { message: "Error message" }
 * // }
 */
export const formatErrorMessages = (error: Error) => {
  const result: Map<string, any> = new Map();

  if ("validationErrors" in error) {
    const invalidRecordError = error as InvalidRecordError;
    for (const validationError of invalidRecordError.validationErrors) {
      if (invalidRecordError.modelApiIdentifier) {
        if (!result.has(invalidRecordError.modelApiIdentifier)) {
          result.set(invalidRecordError.modelApiIdentifier, new Map());
        }
        const modelMap = result.get(invalidRecordError.modelApiIdentifier);
        modelMap.set(validationError.apiIdentifier, { message: validationError.message });
      } else {
        result.set(validationError.apiIdentifier, { message: validationError.message });
      }
    }
  } else {
    const codeToReplace = "code" in error ? `${error.code}: ` : "";
    const message = error.message.replace(codeToReplace, "");

    result.set("root", { message });
  }

  return mapToObject(result);
};

export const processBulkActionResponse = <Shape extends RecordShape = any>(
  defaultSelection: FieldSelection | null,
  response: any,
  records: any,
  modelSelectionField: string,
  hasReturnType?: HasReturnType | null
) => {
  if (defaultSelection == null) return;
  if (!hasReturnType) {
    return hydrateRecordArray<Shape>(response, records[modelSelectionField]);
  } else if (typeof hasReturnType == "boolean") {
    return records.results;
  } else {
    return Object.entries(hasReturnType).flatMap(([returnTypeField, innerHasReturnType]) => {
      const results = records[returnTypeField];

      if (!Array.isArray(results)) {
        return [];
      }

      return results.map((result) => {
        const returnTypeForResult =
          "hasReturnType" in innerHasReturnType ? returnTypeForRecord(result, innerHasReturnType.hasReturnType) : false;

        if (!returnTypeForResult) {
          return hydrateRecord<Shape>(response, result);
        } else {
          return processActionResponse(defaultSelection, response, result, modelSelectionField, returnTypeForResult);
        }
      });
    });
  }
};

export const processActionResponse = <Shape extends RecordShape = any>(
  defaultSelection: FieldSelection | null,
  response: any,
  record: any,
  modelSelectionField: string,
  hasReturnType?: HasReturnType | null
): any => {
  // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
  // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
  if (defaultSelection == null) return;
  if (!hasReturnType) {
    return hydrateRecord<Shape>(response, record[modelSelectionField]);
  } else if (typeof hasReturnType == "boolean") {
    return record.result;
  } else {
    const innerReturnType = returnTypeForRecord(record, hasReturnType);

    return processActionResponse(defaultSelection, response, record, modelSelectionField, innerReturnType);
  }
};

const returnTypeForRecord = (record: any, hasReturnType: HasReturnType) => {
  if (typeof hasReturnType == "boolean") {
    return hasReturnType;
  }

  const innerReturnTypeForTypename = hasReturnType[`... on ${record.__typename}`];

  return innerReturnTypeForTypename && "hasReturnType" in innerReturnTypeForTypename ? innerReturnTypeForTypename.hasReturnType : false;
};
