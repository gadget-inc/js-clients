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
function useFetch(path, options) {
    // Used to prevent state update if the component is unmounted
    const mounted = (0, react_1.useRef)(true);
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options ?? {});
    const connection = (0, GadgetProvider_1.useConnection)();
    const startRequestOnMount = startRequestByDefault(memoizedOptions);
    const [state, dispatch] = (0, react_1.useReducer)(reducer, memoizedOptions, (memoizedOptions) => {
        return { fetching: startRequestOnMount, options: memoizedOptions };
    });
    const send = (0, react_1.useCallback)(async (sendOptions) => {
        var _a;
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
            response = await connection.fetch(path, fetchOptions);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            if (mergedOptions.json) {
                data = await response.json();
            }
            else if (mergedOptions.stream) {
                data = response.body;
            }
            else {
                data = await response.text();
            }
            if (!mounted.current)
                return data;
            dispatch({ type: "fetched", payload: data });
        }
        catch (error) {
            if (!mounted.current)
                return null;
            const wrapped = utils_1.ErrorWrapper.forClientSideError(error, response);
            dispatch({ type: "error", payload: wrapped });
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
        };
    }, [path, startRequestOnMount, send]);
    return [state, send];
}
exports.useFetch = useFetch;
//# sourceMappingURL=useFetch.js.map