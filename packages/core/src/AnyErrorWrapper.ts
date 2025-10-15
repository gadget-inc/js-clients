/**
 * An error returned by any of the Gadget hooks.
 * Always has a message, but can be inspected to retrieve more detailed errors from either the network, the raw GraphQL layer, or Gadget specific errors like validation errors.
 * Not intended for creating outside of Gadget-owned code.
 **/
export interface AnyErrorWrapper<ExecutionErrorT extends Error = Error> {
  /** Error message for this error. Derived from the other errors this wraps. */
  message: string;
  /**
   * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
   * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
   **/
  executionErrors: ExecutionErrorT[];
  /**
   * An error encountered when trying to communicate with the backend from the client. Includes things like connection timeouts, connection interrupts, or no internet connection errors
   **/
  networkError?: Error;

  /**
   * The response from the server, if any was retrieved.
   */
  response?: any;
}
