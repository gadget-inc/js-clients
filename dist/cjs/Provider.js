"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.getToken = void 0;
const tslib_1 = require("tslib");
const react_1 = require("@gadgetinc/react");
const react_2 = tslib_1.__importStar(require("react"));
const AUTH_TOKEN_TOOL_NAME = "__getGadgetAuthTokenV1";
/** Get the backend auth token for the current widget using the special __getGadgetAuthTokenV1 backend tool */
const getToken = async () => {
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
exports.getToken = getToken;
/**
 * React Provider that ChatGPT Apps Widgets should be wrapped in to make calls to the Gadget backend.
 */
const Provider = ({ children, api, authenticate = true }) => {
    const tokenPromiseRef = (0, react_2.useRef)(null);
    (0, react_2.useEffect)(() => {
        if (!authenticate) {
            api.connection.setAuthenticationMode({
                browserSession: true,
            });
            return;
        }
        let tokenPromise = tokenPromiseRef.current;
        if (!tokenPromise) {
            tokenPromise = (0, exports.getToken)();
            tokenPromiseRef.current = tokenPromise;
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
    }, [api, authenticate]);
    return react_2.default.createElement(react_1.Provider, { api: api }, children);
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map