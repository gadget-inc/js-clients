"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.getToken = void 0;
const tslib_1 = require("tslib");
const react_1 = require("@gadgetinc/react");
const react_2 = tslib_1.__importStar(require("react"));
/** Get the backend auth token for the current widget using the special __getGadgetAuthTokenV1 backend tool */
const getToken = async () => {
    const result = await window.openai.callTool("__getGadgetAuthTokenV1", {});
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
const Provider = ({ children, api }) => {
    const [tokenPromise, setTokenPromise] = (0, react_2.useState)(null);
    (0, react_2.useEffect)(() => {
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
    (0, react_2.useEffect)(() => {
        if (!tokenPromise) {
            setTokenPromise((0, exports.getToken)());
            return;
        }
    }, []);
    return react_2.default.createElement(react_1.Provider, { api: api }, children);
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map