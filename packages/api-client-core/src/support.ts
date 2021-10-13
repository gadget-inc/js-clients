import { OperationResult } from "@urql/core";
import { DataHydrator } from "./DataHydrator";
import { GadgetRecord } from "./GadgetRecord";

/**
 * Generic type of the state of any record of a Gadget model
 **/
export type AnyState = string | { [key: string]: AnyState };

/**
 * Error caused by a violated internal expectation that isn't the users fault, but the Gadget platform's. Often the best way to handle is to just retry.
 **/
export class GadgetInternalError extends Error {}

/**
 * An error representing misuse or a violation of the assumptions of the Gadget Client.
 */
export class GadgetClientError extends Error {}

/**
 * A Gadget API error with an `errorCode` and `message` describing the error. Most often these errors are caused by invalid input data or by misconfigured Gadget models. Consult the documentation for the specific `errorCode` to learn more.
 **/
export class GadgetOperationError extends Error {
  constructor(message: string, readonly errorCode: string) {
    super(message);
  }
}

/**
 * Interface representing one message on one invalid field for a `GadgetValidationError`
 */
export interface InvalidFieldError {
  apiIdentifier: string;
  message: string;
}

/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 **/
export class GadgetValidationError extends Error {
  errorCode = "GGT_INVALID_RECORD";

  constructor(message: string, readonly validationErrors: InvalidFieldError[]) {
    super(message);
  }
}
/**
 * A Gadget API error that represents an error from the server. Thrown when the server enounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
 */
export class GadgetNonUniqueDataError extends Error {
  errorCode = "GGT_NON_UNIQUE_DATA";
}

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

export const capitalize = (str: string | undefined | null) => {
  const result = str === null || str === undefined ? "" : String(str);
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const camelize = (term: string, uppercaseFirstLetter = true) => {
  let result = "" + term;

  if (uppercaseFirstLetter) {
    result = result.replace(/^[a-z\d]*/, (a) => {
      return capitalize(a);
    });
  } else {
    result = result.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (a) => {
      return a.toLowerCase();
    });
  }

  result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, (_match, a, b, _idx, _string) => {
    a || (a = "");
    return "" + a + capitalize(b);
  });

  return result;
};

export const sortTypeName = (modelApiIdentifier: string) => `${camelize(modelApiIdentifier)}Sort`;
export const filterTypeName = (modelApiIdentifier: string) => `${camelize(modelApiIdentifier)}Filter`;

export const assertOperationSuccess = (response: OperationResult<any>, dataPath: string[]) => {
  if (response.error) {
    throw response.error.message;
  }

  const result = get(response.data, dataPath);
  if (result === undefined) {
    throw new GadgetInternalError(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath}`);
  } else if (result === null) {
    throw new GadgetInternalError(`Internal Error: Gadget API returned no data at ${dataPath}`);
  }

  return result;
};

export const assertMutationSuccess = (response: OperationResult<any>, dataPath: string[]) => {
  const operationResponse = assertOperationSuccess(response, dataPath);

  if (!operationResponse.success) {
    const firstErrorBlob = operationResponse.errors && operationResponse.errors[0];
    let error;
    if (firstErrorBlob) {
      if (firstErrorBlob.code == "GGT_INVALID_RECORD") {
        error = new GadgetValidationError(operationResponse.errors[0].message, operationResponse.errors[0].validationErrors);
      } else {
        if (
          operationResponse.errors[0].code == "GGT_UNKNOWN" &&
          operationResponse.errors[0].message.includes("duplicate key value violates unique constraint")
        ) {
          error = new GadgetNonUniqueDataError(operationResponse.errors[0].message);
        } else {
          error = new GadgetOperationError(operationResponse.errors[0].message, operationResponse.errors[0].code);
        }
      }
    } else {
      error = new GadgetOperationError(`Gadget API operation not successful.`, "GGT_UNKNOWN");
    }
    throw error;
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

export const hydrateRecord = <Shape = any>(response: Result, record: any): Shape => {
  let hydrator;
  if ((hydrator = getHydrator(response))) {
    record = hydrator.apply(record);
  }
  return new GadgetRecord<Shape>(record);
};

export const hydrateRecordArray = <Shape = any>(response: Result, records: Array<any>) => {
  const hydrator = getHydrator(response);
  if (hydrator) {
    records = hydrator.apply(records) as any;
  }
  return records?.map((record) => new GadgetRecord<Shape>(record));
};

export const hydrateConnection = <Shape = any>(response: Result, connection: { edges: { node: Node }[] }) => {
  const nodes = connection.edges.map((edge) => edge.node);
  return hydrateRecordArray<Shape>(response, nodes);
};

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
    if (Object.prototype.toString.call(value) === "[object Object]") {
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
