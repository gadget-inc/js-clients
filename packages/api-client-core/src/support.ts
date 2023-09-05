import type { Span, SpanOptions } from "@opentelemetry/api";
import { SpanStatusCode, context as contextApi, trace as traceApi } from "@opentelemetry/api";
import type { OperationResult } from "@urql/core";
import { CombinedError } from "@urql/core";
import { DataHydrator } from "./DataHydrator.js";
import type { RecordShape } from "./GadgetRecord.js";
import { GadgetRecord } from "./GadgetRecord.js";

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
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 **/
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
    public readonly results: Result[]
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

export const sortTypeName = (modelApiIdentifier: string) => `${camelize(modelApiIdentifier)}Sort`;
export const filterTypeName = (modelApiIdentifier: string) => `${camelize(modelApiIdentifier)}Filter`;

export const getNonUniqueDataError = (modelApiIdentifier: string, fieldName: string, fieldValue: string) =>
  new GadgetNonUniqueDataError(
    `More than one record found for ${modelApiIdentifier}.${fieldName} = ${fieldValue}. Please confirm your unique validation is not reporting an error.`
  );

export const getNonNullableError = (response: Result & { fetching: boolean }, dataPath: string[]) => {
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
    if (response.error instanceof CombinedError && (response.error.networkError as any as Error[])?.length) {
      response.error.message = (response.error.networkError as any as Error[]).map((error) => "[Network] " + error.message).join("\n");
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
    if (response.error instanceof CombinedError && (response.error.networkError as any as Error[])?.length) {
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

export const tracer = traceApi.getTracer("gadget-api-client");

export const onSpanError = (span: Span, error: any) => {
  span.recordException(error);
  span.setStatus({ code: SpanStatusCode.ERROR, message: errorMessage(error) });
};

export function withSpan<T>(name: string, fn: (span: Span) => T): T;
export function withSpan<T>(name: string, options: SpanOptions, fn: (span: Span) => T): T;
export function withSpan<T>(name: string, fnOrOptions: SpanOptions | ((span: Span) => T), fn?: (span: Span) => T): T {
  let func: (span: Span) => T;
  let options: SpanOptions | undefined;

  if (fn) {
    func = fn;
    options = fnOrOptions as SpanOptions;
  } else {
    func = fnOrOptions as typeof func;
    options = {};
  }

  return tracer.startActiveSpan(name, options, (span) => func(span));
}

export async function trace<T extends Promise<any>>(name: string, fn: (span: Span) => T): Promise<Awaited<T>>;
export async function trace<T extends Promise<any>>(name: string, options: SpanOptions, fn: (span: Span) => T): Promise<Awaited<T>>;
export async function trace<T extends Promise<any>>(
  name: string,
  fnOrOptions: SpanOptions | ((span: Span) => T),
  fn?: (span: Span) => T
): Promise<Awaited<T>> {
  let func: (span: Span) => T;
  let options: SpanOptions | undefined;

  if (fn) {
    func = fn;
    options = fnOrOptions as SpanOptions;
  } else {
    func = fnOrOptions as typeof func;
    options = {};
  }

  return await withSpan(name, options, async (span) => {
    try {
      const result = await func(span);
      span.end();
      return result;
    } catch (error) {
      onSpanError(span, error);
      span.end();
      throw error;
    }
  });
}

/** Wrap a function in tracing, and return it  */
export function traceFunction<This, Fn extends (this: This, ...args: any[]) => Promise<any>>(name: string, fn: Fn): Fn;
export function traceFunction<This, Fn extends (this: This, ...args: any[]) => Promise<any>>(
  name: string,
  options: SpanOptions,
  fn: Fn
): Fn;
export function traceFunction<This, Fn extends (this: This, ...args: any[]) => Promise<any>>(
  name: string,
  fnOrOptions: SpanOptions | Fn,
  fn?: Fn
): Fn {
  let func: Fn;
  let options: SpanOptions;

  if (fn) {
    func = fn;
    options = fnOrOptions as SpanOptions;
  } else {
    func = fnOrOptions as Fn;
    options = {};
  }

  return async function (this: any, ...args: Parameters<Fn>) {
    return await trace(name, options, () => func.apply(this, args));
  } as Fn;
}

export const getCurrentSpan = () => traceApi.getSpan(contextApi.active());

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
