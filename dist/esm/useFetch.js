import { useCallback, useEffect, useReducer, useRef } from "react";
import { useConnection } from "./GadgetProvider.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper } from "./utils.js";
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
export function useFetch(path, options) {
    // Used to prevent state update if the component is unmounted
    const mounted = useRef(true);
    const memoizedOptions = useStructuralMemo(options ?? {});
    const connection = useConnection();
    const startRequestOnMount = startRequestByDefault(memoizedOptions);
    const [state, dispatch] = useReducer(reducer, memoizedOptions, (memoizedOptions) => {
        return { fetching: startRequestOnMount, options: memoizedOptions };
    });
    const send = useCallback(async (sendOptions) => {
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
            const wrapped = ErrorWrapper.forClientSideError(error, response);
            dispatch({ type: "error", payload: wrapped });
            throw wrapped;
        }
        return data;
    }, [memoizedOptions, path]);
    useEffect(() => {
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
//# sourceMappingURL=useFetch.js.map