"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseFetch = void 0;
const utils_js_1 = require("./utils.js");
const reducer = (state, action) => {
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
const startRequestByDefault = (options) => {
    if (typeof (options === null || options === void 0 ? void 0 : options.sendImmediately) != "undefined") {
        return options.sendImmediately;
    }
    else {
        return !(options === null || options === void 0 ? void 0 : options.method) || options.method === "GET";
    }
};
const dispatchError = (mounted, dispatch, abortController, error, response) => {
    if (!mounted.current || abortController.signal.aborted)
        return null;
    const wrapped = utils_js_1.ErrorWrapper.forClientSideError(error, response);
    dispatch({ type: "error", payload: wrapped });
    return wrapped;
};
const createUseFetch = (adapter, coreHooks) => {
    function useFetch(path, options) {
        // Used to prevent state update if the component is unmounted
        const mounted = adapter.framework.useRef(true);
        const { onStreamComplete, ...optionsToMemoize } = options !== null && options !== void 0 ? options : {};
        const memoizedOptions = coreHooks.useStructuralMemo(optionsToMemoize);
        const connection = coreHooks.useConnection();
        const startRequestOnMount = startRequestByDefault(memoizedOptions);
        const controller = adapter.framework.useRef(null);
        const [state, dispatch] = adapter.framework.useReducer(reducer, memoizedOptions, (memoizedOptions) => {
            return { fetching: startRequestOnMount, streaming: false, options: memoizedOptions };
        });
        const send = adapter.framework.useCallback(async (sendOptions) => {
            var _a;
            var _b;
            if (controller.current && !controller.current.signal.aborted) {
                controller.current.abort("useFetch is starting a new request, aborting the previous one");
            }
            const abortContoller = new AbortController();
            controller.current = abortContoller;
            dispatch({ type: "fetching" });
            let data;
            let response = undefined;
            const mergedOptions = { ...memoizedOptions, onStreamComplete, ...sendOptions };
            // add implicit headers from options, being careful not to mutate any inputs
            if (mergedOptions.json) {
                mergedOptions.headers = { ...mergedOptions.headers };
                (_a = (_b = mergedOptions.headers)["accept"]) !== null && _a !== void 0 ? _a : (_b["accept"] = "application/json");
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
                }
                else if (typeof mergedOptions.stream === "string") {
                    dispatchData = false;
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    const decodedStream = response.body.pipeThrough(new TextDecoderStream(mergedOptions.stream === "string" ? "utf8" : mergedOptions.stream));
                    const [responseStream, updateStream] = decodedStream.tee();
                    data = responseStream;
                    const decodedStreamReader = updateStream.getReader();
                    decodedStreamReader.closed.catch((error) => {
                        dispatchError(mounted, dispatch, abortContoller, error, response);
                    });
                    dispatch({ type: "fetched", payload: "" });
                    (async () => {
                        var _a;
                        let responseText = "";
                        let done = false;
                        dispatch({ type: "streaming" });
                        while (!done) {
                            const { value, done: _done } = await decodedStreamReader.read();
                            done = _done;
                            if (value) {
                                responseText += value;
                                if (!abortContoller.signal.aborted) {
                                    dispatch({ type: "update", payload: responseText });
                                }
                            }
                        }
                        (_a = mergedOptions.onStreamComplete) === null || _a === void 0 ? void 0 : _a.call(mergedOptions, responseText);
                    })()
                        .catch((error) => {
                        dispatchError(mounted, dispatch, abortContoller, error, response);
                    })
                        .finally(() => {
                        dispatch({ type: "streamed" });
                    });
                }
                else if (mergedOptions.stream) {
                    data = response.body;
                }
                else {
                    data = await response.text();
                }
                if (!mounted.current || !dispatchData)
                    return data;
                dispatch({ type: "fetched", payload: data });
            }
            catch (error) {
                const wrapped = dispatchError(mounted, dispatch, abortContoller, error, response);
                if (!wrapped)
                    return null;
                throw wrapped;
            }
            return data;
        }, 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [connection, memoizedOptions, path]);
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
                var _a;
                (_a = controller.current) === null || _a === void 0 ? void 0 : _a.abort();
            };
        }, [path, startRequestOnMount, send]);
        return [state, send];
    }
    return {
        /**
         * Hook to make an HTTP request to a Gadget backend HTTP route. Preserves client side session information and ensures it's passed along to the backend.
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
        useFetch,
    };
};
exports.createUseFetch = createUseFetch;
//# sourceMappingURL=useFetch.js.map