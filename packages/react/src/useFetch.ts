import type { Reducer } from "react";
import { useCallback, useEffect, useReducer, useRef } from "react";
import { useConnection } from "./GadgetProvider.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper } from "./utils.js";

export interface FetchHookState<T> {
  data?: T;
  response?: Response;
  error?: ErrorWrapper;
  fetching: boolean;
  streaming: boolean;
  options: FetchHookOptions;
}

export type FetchHookResult<T, U = T> = [FetchHookState<T>, (opts?: Partial<FetchHookOptions>) => Promise<U>];

type FetchAction<T> =
  | { type: "fetching" }
  | { type: "streaming" }
  | { type: "fetched"; payload: T }
  | { type: "streamed" }
  | { type: "update"; payload: T }
  | { type: "error"; payload: ErrorWrapper };

const reducer = <T>(state: FetchHookState<T>, action: FetchAction<T>): FetchHookState<T> => {
  switch (action.type) {
    case "fetching":
      return { ...state, fetching: true, streaming: false, error: undefined };
    case "streaming":
      return { ...state, streaming: true };
    case "streamed":
      return { ...state, streaming: false };
    case "fetched":
      return { ...state, fetching: false, data: action.payload, error: undefined };
    case "update":
      return { ...state, data: action.payload };
    case "error":
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

export interface FetchHookOptions extends RequestInit {
  stream?: boolean | string;
  json?: boolean;
  sendImmediately?: boolean;
  onStreamComplete?: (value: string) => void;
}

const startRequestByDefault = (options?: FetchHookOptions) => {
  if (typeof options?.sendImmediately != "undefined") {
    return options.sendImmediately;
  } else {
    return !options?.method || options.method === "GET";
  }
};

const dispatchError = (
  mounted: React.MutableRefObject<boolean>,
  dispatch: React.Dispatch<FetchAction<any>>,
  error: any,
  response?: Response
) => {
  if (!mounted.current) return null;

  const wrapped = ErrorWrapper.forClientSideError(error, response);
  dispatch({ type: "error", payload: wrapped });

  return wrapped;
};

/**
 * React hook to make an HTTP request to a Gadget backend HTTP route. Preserves client side session information and ensures it's passed along to the backend.
 *
 * Returns a tuple with the current state of the request and a function to send or re-send the request. The state is an object with the following fields:
 * - `data`: the response data, if the request was successful
 * - `fetching`: a boolean describing if the fetch request is currently in progress
 * - `streaming`: a boolean describing if the fetch request is currently streaming. This is only set when the option `{ stream: "string" }` is passed
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
 * When `{ stream: "string" }` is used, the `streaming` field in the state will be set to `true` while the stream is active, and `false` when the stream is complete. You can use this to show a loading indicator while the stream is active.
 * You can also pass an `onStreamComplete` callback that will be called with the value of the streamed string once it has completed.
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
export function useFetch(path: string, options: { stream: string } & FetchHookOptions): FetchHookResult<string, ReadableStream<string>>;
export function useFetch(path: string, options: { stream: true } & FetchHookOptions): FetchHookResult<ReadableStream<Uint8Array>>;
export function useFetch<T extends Record<string, any>>(url: string, options: { json: true } & FetchHookOptions): FetchHookResult<T>;
export function useFetch(path: string, options?: FetchHookOptions): FetchHookResult<string>;
export function useFetch<T = string>(path: string, options?: FetchHookOptions): FetchHookResult<T> {
  // Used to prevent state update if the component is unmounted
  const mounted = useRef<boolean>(true);
  const { onStreamComplete, ...optionsToMemoize } = options ?? {};
  const memoizedOptions = useStructuralMemo<FetchHookOptions>(optionsToMemoize);
  const connection = useConnection();
  const startRequestOnMount = startRequestByDefault(memoizedOptions);
  const controller = useRef<AbortController | null>(null);

  const [state, dispatch] = useReducer<Reducer<FetchHookState<T>, FetchAction<T>>, FetchHookOptions>(
    reducer,
    memoizedOptions,
    (memoizedOptions) => {
      return { fetching: startRequestOnMount, streaming: false, options: memoizedOptions };
    }
  );

  const send = useCallback(
    async (sendOptions?: Partial<FetchHookOptions>): Promise<T> => {
      controller.current?.abort("useFetch is starting a new request");

      const abortContoller = new AbortController();
      controller.current = abortContoller;

      dispatch({ type: "fetching" });

      let data: any;
      let response: Response | undefined = undefined;

      const mergedOptions = { ...memoizedOptions, onStreamComplete, ...sendOptions };

      if (mergedOptions.json) {
        mergedOptions.headers ??= {};
        (mergedOptions.headers as any)["accept"] ??= "application/json";
      }

      try {
        const { json: _json, stream: _stream, onStreamComplete: _onStreamComplete, ...fetchOptions } = mergedOptions;
        // make the fetch call using GadgetConnection to pass along auth and other headers
        response = await connection.fetch(path, { signal: abortContoller.signal, ...fetchOptions });
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        let dispatchData = true;

        if (mergedOptions.json) {
          data = await response.json();
        } else if (typeof mergedOptions.stream === "string") {
          dispatchData = false;
          const decodedStream = response.body!.pipeThrough(
            new TextDecoderStream(mergedOptions.stream === "string" ? "utf8" : mergedOptions.stream)
          );

          const [responseStream, updateStream] = decodedStream.tee();

          data = responseStream;
          const decodedStreamReader = updateStream.getReader();

          decodedStreamReader.closed.catch((error) => {
            if (!abortContoller.signal.aborted) {
              dispatchError(mounted, dispatch, error, response);
            }
          });

          dispatch({ type: "fetched", payload: "" as any });

          (async () => {
            let responseText = "";
            let done = false;

            dispatch({ type: "streaming" });

            while (!done) {
              const { value, done: _done } = await decodedStreamReader.read();
              done = _done;

              if (value) {
                responseText += value;

                if (!abortContoller.signal.aborted) {
                  dispatch({ type: "update", payload: responseText as any });
                }
              }
            }

            mergedOptions.onStreamComplete?.(responseText);
          })()
            .catch((error) => {
              if (!abortContoller.signal.aborted) {
                dispatchError(mounted, dispatch, error, response);
              }
            })
            .finally(() => {
              dispatch({ type: "streamed" });
            });
        } else if (mergedOptions.stream) {
          data = response.body;
        } else {
          data = await response.text();
        }

        if (!mounted.current || !dispatchData) return data;

        dispatch({ type: "fetched", payload: data });
      } catch (error: any) {
        const wrapped = dispatchError(mounted, dispatch, error, response);
        if (!wrapped) return null as any;
        throw wrapped;
      }
      return data;
    },
    [memoizedOptions, path]
  );

  useEffect(() => {
    mounted.current = true;
    if (startRequestOnMount) {
      void send().catch(() => {
        // report error via return state
      });
    }

    return () => {
      mounted.current = false;
      controller.current?.abort();
    };
  }, [path, startRequestOnMount, send]);

  return [state, send];
}
