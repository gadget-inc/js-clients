import type { Reducer} from "react";
import { useCallback, useEffect, useReducer, useRef } from "react";
import { useConnection } from "./GadgetProvider";
import { useStructuralMemo } from "./useStructuralMemo";
import { ErrorWrapper } from "./utils";

export interface FetchHookState<T> {
  data?: T;
  response?: Response;
  error?: ErrorWrapper;
  fetching: boolean;
  options: FetchHookOptions;
}

export type FetchHookResult<T> = [FetchHookState<T>, (opts?: Partial<FetchHookOptions>) => Promise<T>];

type FetchAction<T> = { type: "fetching" } | { type: "fetched"; payload: T } | { type: "error"; payload: ErrorWrapper };

const reducer = <T>(state: FetchHookState<T>, action: FetchAction<T>): FetchHookState<T> => {
  switch (action.type) {
    case "fetching":
      return { ...state, fetching: true, error: undefined };
    case "fetched":
      return { ...state, fetching: false, data: action.payload, error: undefined };
    case "error":
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

export interface FetchHookOptions extends RequestInit {
  stream?: boolean;
  json?: boolean;
}

const startRequestByDefault = (options?: FetchHookOptions) => !options || !options.method || options.method === "GET";

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
 * Pass the `{ stream: true }` to get a `ReadableStream` object as a response from the server, allowing you to work with the response as it arrives. Otherwise, the response will be returned as a `string` object.
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
export function useFetch(path: string, options: { stream: true } & FetchHookOptions): FetchHookResult<ReadableStream<Uint8Array>>;
export function useFetch<T extends Record<string, any>>(url: string, options: { json: true } & FetchHookOptions): FetchHookResult<T>;
export function useFetch(path: string, options?: FetchHookOptions): FetchHookResult<string>;
export function useFetch<T = string>(path: string, options?: FetchHookOptions): FetchHookResult<T> {
  // Used to prevent state update if the component is unmounted
  const mounted = useRef<boolean>(true);
  const memoizedOptions = useStructuralMemo<FetchHookOptions>(options ?? {});
  const connection = useConnection();

  const [state, dispatch] = useReducer<Reducer<FetchHookState<T>, FetchAction<T>>, FetchHookOptions>(
    reducer,
    memoizedOptions,
    (memoizedOptions) => {
      return { fetching: startRequestByDefault(memoizedOptions), options: memoizedOptions };
    }
  );

  const send = useCallback(
    async (sendOptions?: Partial<FetchHookOptions>): Promise<T> => {
      dispatch({ type: "fetching" });

      let data: any;
      let response: Response | undefined = undefined;

      const mergedOptions = { ...memoizedOptions, ...sendOptions };
      if (mergedOptions.json) {
        mergedOptions.headers ??= {};
        (mergedOptions.headers as any)["accept"] ??= "application/json";
      }

      try {
        const { json: _json, stream: _stream, ...fetchOptions } = mergedOptions;
        // make the fetch call using GadgetConnection to pass along auth and other headers
        response = await connection.fetch(path, fetchOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        if (mergedOptions.json) {
          data = await response.json();
        } else if (mergedOptions.stream) {
          data = response.body;
        } else {
          data = await response.text();
        }

        if (!mounted.current) return data;

        dispatch({ type: "fetched", payload: data });
      } catch (error: any) {
        if (!mounted.current) return null as any;

        const wrapped = ErrorWrapper.forClientSideError(error, response);
        dispatch({ type: "error", payload: wrapped });
        throw wrapped;
      }
      return data;
    },
    [memoizedOptions, path]
  );

  useEffect(() => {
    mounted.current = true;
    if (startRequestByDefault(memoizedOptions)) {
      void send().catch(() => {
        // report error via return state
      });
    }

    return () => {
      mounted.current = false;
    };
  }, [path, memoizedOptions]);

  return [state, send];
}
