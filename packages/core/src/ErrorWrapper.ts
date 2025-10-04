import { GraphQLError } from "@0no-co/graphql.web";
import type { CombinedError } from "@urql/core";
import {
  GadgetError,
  InvalidFieldError,
  InvalidRecordError,
  gadgetErrorFor,
  getNonNullableError,
  type FetchableResult,
} from "./support.js";

/**
 * An error returned by any of the Gadget hooks.
 * Always has a message, but can be inspected to retrieve more detailed errors from either the network, the raw GraphQL layer, or Gadget specific errors like validation errors.
 * Not intended for creating outside of Gadget-owned code.
 **/
export class ErrorWrapper extends Error {
  /** @private */
  static forClientSideError(error: Error, response?: any) {
    return new ErrorWrapper({
      executionErrors: [error],
      response,
    });
  }
  /** @private */
  static forErrorsResponse(errors: Record<string, any>[], response?: any) {
    return new ErrorWrapper({
      executionErrors: errors.map(gadgetErrorFor),
      response,
    });
  }
  /** @private */
  static forMaybeCombinedError(error?: CombinedError | null) {
    if (!error) return undefined;
    return new ErrorWrapper({
      networkError: error.networkError,
      executionErrors: error.graphQLErrors,
      response: error.response,
    });
  }
  /** @private */
  static errorIfDataAbsent(result: FetchableResult & { error?: CombinedError | null }, dataPath: string[], paused = false) {
    const nonNullableError = getNonNullableError(result, dataPath);
    let error = ErrorWrapper.forMaybeCombinedError(result.error);
    if (!error && nonNullableError && !paused) {
      error = ErrorWrapper.forClientSideError(nonNullableError);
    }
    return error;
  }

  /** Error message for this error. Derived from the other errors this wraps. */
  public message: string;
  /**
   * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
   * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
   **/
  public executionErrors: (GraphQLError | GadgetError)[];
  /**
   * An error encountered when trying to communicate with the backend from the client. Includes things like connection timeouts, connection interrupts, or no internet connection errors
   **/
  public networkError?: Error;

  /**
   * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
   * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
   *
   * This property allows this object to match the interface of urql's `CombinedError` object.
   *
   * @deprecated use `executionErrors` instead for a list of the errors that the GraphQL backend API returned *and* client side errors from unexpected responses.
   **/
  public graphQLErrors: GraphQLError[];

  /**
   * The response from the server, if any was retrieved.
   */
  public response?: any;

  constructor({
    networkError,
    executionErrors,
    response,
  }: {
    networkError?: Error;
    executionErrors?: Array<string | Partial<GraphQLError> | Error>;
    validationErrors?: InvalidFieldError[];
    response?: any;
  }) {
    const normalizedExecutionErrors = (executionErrors || []).map(rehydrateGraphQlError);
    const message = generateErrorMessage(networkError, normalizedExecutionErrors);

    super(message);

    this.message = message;
    this.executionErrors = normalizedExecutionErrors;
    this.graphQLErrors = normalizedExecutionErrors;
    this.networkError = networkError;
    this.response = response;
  }

  /** Class name of this error -- always `ErrorWrapper` */
  get name() {
    return "ErrorWrapper";
  }

  toString() {
    return this.message;
  }

  /**
   * A list of errors the backend reported for specific fields being invalid for the records touched by an action. Is a shortcut for accessing the validation errors of a `GadgetInvalidRecordError` if that's what is in the `executionErrors`.
   **/
  public get validationErrors(): InvalidFieldError[] | null {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const firstInvalidRecordError = this.executionErrors.find((err) => (err as any).code == "GGT_INVALID_RECORD") as
      | InvalidRecordError
      | undefined;

    return firstInvalidRecordError?.validationErrors ?? null;
  }
}

const rehydrateGraphQlError = (error: any): GraphQLError => {
  if (typeof error === "string") {
    return new GraphQLError(error);
  } else if (error?.message && !error.code) {
    return new GraphQLError(error.message, error.nodes, error.source, error.positions, error.path, error, error.extensions || {});
  } else {
    return error;
  }
};

const generateErrorMessage = (networkErr?: Error, graphQlErrs?: GraphQLError[]) => {
  let error = "";
  if (networkErr !== undefined) {
    error = `[Network] ${networkErr.message}`;
  } else if (graphQlErrs !== undefined) {
    graphQlErrs.forEach((err) => {
      error += `[GraphQL] ${err.message}\n`;
    });
  } else {
    error = "Unknown error";
  }

  return error.trim();
};
