import { ErrorWrapper } from "./utils";
export interface FetchHookState<T> {
    data?: T;
    response?: Response;
    error?: ErrorWrapper;
    fetching: boolean;
    options: FetchHookOptions;
}
export type FetchHookResult<T, U = T> = [FetchHookState<T>, (opts?: Partial<FetchHookOptions>) => Promise<U>];
export interface FetchHookOptions extends RequestInit {
    stream?: boolean | string;
    json?: boolean;
    sendImmediately?: boolean;
}
/**
 * React hook to make an HTTP request to a Gadget backend HTTP route. Preserves client side session information and ensures it's passed along to the backend.
 *
 * Returns a tuple with the current state of the request and a function to send or re-send the request. The state is an object with the following fields:
 * - `data`: the response data, if the request was successful
 * - `fetching`: a boolean describing if the fetch request is currently in progress
 * - `error`: an error object if the request failed in any way
 *
 * The second return value is a function for executing the fetch request. It returns a promise for the response body.
 *
 * By default, `GET` requests are sent as soon as the hook executes. Any other request methods are not sent automatically, and must be triggered by calling the `execute` function returned in the second argument.
 *
 * Pass the `{ json: true }` option to expect a JSON response from the server, and to automatically parse the response as JSON. Otherwise, the response will be returned as a `string` object.
 *
 * Pass the `{ stream: true }` to get a `ReadableStream` object as a response from the server, allowing you to work with the response as it arrives.
 *
 * Pass the `{ stream: "string" }` to decode the `ReadableStream` as a string and update data as it arrives. If the stream is in an encoding other than utf8 use i.e. `{ stream: "utf-16" }`.
 *
 * If you want to read model data, see the `useFindMany` function and similar. If you want to invoke a backend Action, use the `useAction` hook instead.
 *
 * @param path the backend path to fetch
 * @param options the `fetch` options for the request
 *
 * @example
 * ```
 * export function UserByEmail(props: { email: string }) {
 *   const [{data, fetching, error}, refresh] = useFetch("/users/get", {
 *     method: "GET",
 *     body: JSON.stringify({ email: props.email }})
 *     headers: {
 *       "content-type": "application/json",
 *     }
 *     json: true,
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found with id={props.id}</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 */
export declare function useFetch(path: string, options: {
    stream: string;
} & FetchHookOptions): FetchHookResult<string, ReadableStream<string>>;
export declare function useFetch(path: string, options: {
    stream: true;
} & FetchHookOptions): FetchHookResult<ReadableStream<Uint8Array>>;
export declare function useFetch<T extends Record<string, any>>(url: string, options: {
    json: true;
} & FetchHookOptions): FetchHookResult<T>;
export declare function useFetch(path: string, options?: FetchHookOptions): FetchHookResult<string>;
