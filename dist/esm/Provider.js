import { Provider as GadgetUrqlProvider } from "@gadgetinc/react";
import React, { useEffect, useState } from "react";
const AUTH_TOKEN_TOOL_NAME = "__getGadgetAuthTokenV1";
/** Get the backend auth token for the current widget using the special __getGadgetAuthTokenV1 backend tool */
export const getToken = async () => {
    let result;
    try {
        result = await window.openai.callTool(AUTH_TOKEN_TOOL_NAME, {});
    }
    catch (error) {
        if (error.message.includes("MCP Resource not found")) {
            throw new Error(`Backend Gadget MCP server does not have the ${AUTH_TOKEN_TOOL_NAME} tool defined which is required for authentication.`);
        }
        else {
            throw error;
        }
    }
    const structuredContent = result.structuredContent;
    if ("error" in structuredContent) {
        throw new Error(structuredContent.error);
    }
    return structuredContent.token;
};
/**
 * React Provider that ChatGPT Apps Widgets should be wrapped in to make calls to the Gadget backend.
 */
export const Provider = ({ children, api, authenticate = true }) => {
    // eslint-disable-next-line prefer-const
    let [tokenPromise, setTokenPromise] = useState(null);
    useEffect(() => {
        if (!authenticate) {
            api.connection.setAuthenticationMode({
                browserSession: true,
            });
            return;
        }
        if (!tokenPromise) {
            tokenPromise = getToken();
            setTokenPromise(tokenPromise);
        }
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
    return React.createElement(GadgetUrqlProvider, { api: api }, children);
};
//# sourceMappingURL=Provider.js.map