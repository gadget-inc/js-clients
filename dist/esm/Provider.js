import { Provider as GadgetUrqlProvider } from "@gadgetinc/react";
import React, { useEffect, useState } from "react";
/** Get the backend auth token for the current widget using the special __getGadgetAuthTokenV1 backend tool */
export const getToken = async () => {
    const result = await window.openai.callTool("__getGadgetAuthTokenV1", {});
    const structuredResult = result.structuredResult;
    if ("error" in structuredResult) {
        throw new Error(structuredResult.error);
    }
    return structuredResult.token;
};
/**
 * React Provider that ChatGPT Apps Widgets should be wrapped in to make calls to the Gadget backend.
 */
export const Provider = ({ children, api }) => {
    const [tokenPromise, setTokenPromise] = useState(null);
    useEffect(() => {
        api.connection.setAuthenticationMode({
            custom: {
                async processFetch(_input, init) {
                    const token = await tokenPromise;
                    const headers = new Headers(init.headers);
                    headers.append("Authorization", `Bearer ${token}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
                    });
                },
                async processTransactionConnectionParams(params) {
                    const token = await tokenPromise;
                    params.auth = { type: "custom", jwt: token };
                },
            },
        });
    }, [api, tokenPromise]);
    useEffect(() => {
        if (!tokenPromise) {
            setTokenPromise(getToken());
            return;
        }
    }, []);
    return React.createElement(GadgetUrqlProvider, { api: api }, children);
};
//# sourceMappingURL=Provider.js.map