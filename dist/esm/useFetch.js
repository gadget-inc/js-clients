import { useCallback, useEffect, useReducer, useRef } from "react";
import { useConnection } from "./GadgetProvider.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper } from "./utils.js";
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
    if (typeof options?.sendImmediately != "undefined") {
        return options.sendImmediately;
    }
    else {
        return !options?.method || options.method === "GET";
    }
};
const dispatchError = (mounted, dispatch, error, response) => {
    if (!mounted.current)
        return null;
    const wrapped = ErrorWrapper.forClientSideError(error, response);
    dispatch({ type: "error", payload: wrapped });
    return wrapped;
};
export function useFetch(path, options) {
    // Used to prevent state update if the component is unmounted
    const mounted = useRef(true);
    const { onStreamComplete, ...optionsToMemoize } = options ?? {};
    const memoizedOptions = useStructuralMemo(optionsToMemoize);
    const connection = useConnection();
    const startRequestOnMount = startRequestByDefault(memoizedOptions);
    const controller = useRef(null);
    const [state, dispatch] = useReducer(reducer, memoizedOptions, (memoizedOptions) => {
        return { fetching: startRequestOnMount, streaming: false, options: memoizedOptions };
    });
    const send = useCallback(async (sendOptions) => {
        var _a;
        controller.current?.abort("useFetch is starting a new request, aborting the previous one");
        const abortContoller = new AbortController();
        controller.current = abortContoller;
        dispatch({ type: "fetching" });
        let data;
        let response = undefined;
        const mergedOptions = { ...memoizedOptions, onStreamComplete, ...sendOptions };
        // add implicit headers from options, being careful not to mutate any inputs
        if (mergedOptions.json) {
            mergedOptions.headers = { ...mergedOptions.headers };
            (_a = mergedOptions.headers)["accept"] ?? (_a["accept"] = "application/json");
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
                    if (!abortContoller.signal.aborted) {
                        dispatchError(mounted, dispatch, error, response);
                    }
                });
                dispatch({ type: "fetched", payload: "" });
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
                                dispatch({ type: "update", payload: responseText });
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
            const wrapped = dispatchError(mounted, dispatch, error, response);
            if (!wrapped)
                return null;
            throw wrapped;
        }
        return data;
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [connection, memoizedOptions, path]);
    // track if we're mounted or not
    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);
    // execute the initial request on mount if needed
    useEffect(() => {
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
}
//# sourceMappingURL=useFetch.js.map