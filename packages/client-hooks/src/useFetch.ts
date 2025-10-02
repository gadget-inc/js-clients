import { ErrorWrapper } from "@gadgetinc/utils";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, FetchHookOptions, FetchHookResult, FetchHookState, UseFetch } from "./types.js";

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

const startRequestByDefault = (options?: FetchHookOptions) => {
  if (typeof options?.sendImmediately != "undefined") {
    return options.sendImmediately;
  } else {
    return !options?.method || options.method === "GET";
  }
};

const dispatchError = (
  mounted: { current: boolean },
  dispatch: (action: FetchAction<any>) => void,
  abortController: AbortController,
  error: any,
  response?: Response
) => {
  if (!mounted.current || abortController.signal.aborted) return null;

  const wrapped = ErrorWrapper.forClientSideError(error, response);
  dispatch({ type: "error", payload: wrapped });

  return wrapped;
};

export let useFetch: UseFetch = createHookStub("useFetch", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFetch = <T = string>(path: string, options?: FetchHookOptions): FetchHookResult<T> => {
    // Used to prevent state update if the component is unmounted
    const mounted = adapter.framework.useRef<boolean>(true);
    const { onStreamComplete, ...optionsToMemoize } = options ?? {};
    const memoizedOptions = coreHooks.useStructuralMemo<FetchHookOptions>(optionsToMemoize);
    const connection = coreHooks.useConnection();
    const startRequestOnMount = startRequestByDefault(memoizedOptions);
    const controller = adapter.framework.useRef<AbortController | null>(null);

    const [state, dispatch] = adapter.framework.useReducer<FetchHookState<T>, FetchHookOptions, [FetchAction<T>]>(
      reducer,
      memoizedOptions,
      (memoizedOptions) => {
        return { fetching: startRequestOnMount, streaming: false, options: memoizedOptions };
      }
    );

    const send = adapter.framework.useCallback(
      async (sendOptions?: Partial<FetchHookOptions>): Promise<T> => {
        if (controller.current && !controller.current.signal.aborted) {
          controller.current.abort("useFetch is starting a new request, aborting the previous one");
        }

        const abortContoller = new AbortController();
        controller.current = abortContoller;

        dispatch({ type: "fetching" });

        let data: any;
        let response: Response | undefined = undefined;

        const mergedOptions = { ...memoizedOptions, onStreamComplete, ...sendOptions };

        // add implicit headers from options, being careful not to mutate any inputs
        if (mergedOptions.json) {
          mergedOptions.headers = { ...mergedOptions.headers };
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
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const decodedStream = response.body!.pipeThrough(
              new TextDecoderStream(mergedOptions.stream === "string" ? "utf8" : mergedOptions.stream)
            );

            const [responseStream, updateStream] = decodedStream.tee();

            data = responseStream;
            const decodedStreamReader = updateStream.getReader();

            decodedStreamReader.closed.catch((error) => {
              dispatchError(mounted, dispatch, abortContoller, error, response);
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
                dispatchError(mounted, dispatch, abortContoller, error, response);
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
          const wrapped = dispatchError(mounted, dispatch, abortContoller, error, response);
          if (!wrapped) return null as any;
          throw wrapped;
        }
        return data;
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [connection, memoizedOptions, path]
    );

    // track if we're mounted or not
    adapter.framework.useEffect(() => {
      mounted.current = true;

      return () => {
        mounted.current = false;
      };
    }, []);

    // execute the initial request on mount if needed
    adapter.framework.useEffect(() => {
      if (startRequestOnMount) {
        void send().catch(() => {
          // error will be reported via the return value of the hook
        });
      }

      // abort if the component is unmounted, or if one of the key elements of the request changes such that we don't want an outstanding request's result anymore
      return () => {
        controller.current?.abort();
      };
    }, [path, startRequestOnMount, send]);

    return [state, send];
  };
});
