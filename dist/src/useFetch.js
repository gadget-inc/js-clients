"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const react_1 = require("react");
const GadgetProvider_1 = require("./GadgetProvider");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
const reducer = (state, action) => {
    switch (action.type) {
        case "fetching":
            return { ...state, fetching: true, error: undefined };
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
    const wrapped = utils_1.ErrorWrapper.forClientSideError(error, response);
    dispatch({ type: "error", payload: wrapped });
    return wrapped;
};
function useFetch(path, options) {
    // Used to prevent state update if the component is unmounted
    const mounted = (0, react_1.useRef)(true);
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options ?? {});
    const connection = (0, GadgetProvider_1.useConnection)();
    const startRequestOnMount = startRequestByDefault(memoizedOptions);
    const controller = (0, react_1.useRef)(null);
    const [state, dispatch] = (0, react_1.useReducer)(reducer, memoizedOptions, (memoizedOptions) => {
        return { fetching: startRequestOnMount, options: memoizedOptions };
    });
    const send = (0, react_1.useCallback)(async (sendOptions) => {
        var _a;
        controller.current?.abort("useFetch is starting a new request");
        const abortContoller = new AbortController();
        controller.current = abortContoller;
        dispatch({ type: "fetching" });
        let data;
        let response = undefined;
        const mergedOptions = { ...memoizedOptions, ...sendOptions };
        if (mergedOptions.json) {
            mergedOptions.headers ?? (mergedOptions.headers = {});
            (_a = mergedOptions.headers)["accept"] ?? (_a["accept"] = "application/json");
        }
        try {
            const { json: _json, stream: _stream, ...fetchOptions } = mergedOptions;
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
                })().catch((error) => {
                    if (!abortContoller.signal.aborted) {
                        dispatchError(mounted, dispatch, error, response);
                    }
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
    }, [memoizedOptions, path]);
    (0, react_1.useEffect)(() => {
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
exports.useFetch = useFetch;
//# sourceMappingURL=useFetch.js.map