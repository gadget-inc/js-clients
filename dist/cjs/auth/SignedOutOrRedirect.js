"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedOutOrRedirect = void 0;
const react_1 = __importStar(require("react"));
const GadgetProvider_js_1 = require("../GadgetProvider.js");
const useAuth_js_1 = require("./useAuth.js");
const utils_js_1 = require("./utils.js");
/**
 * Renders its `children` if the current `Session` is signed out, otherwise redirects the browser to the `path` prop. Uses `window.location.assign` to perform the redirect.
 */
const SignedOutOrRedirect = (props) => {
    const [redirected, setRedirected] = (0, react_1.useState)(false);
    const { path, children } = props;
    const { user, isSignedIn } = (0, useAuth_js_1.useAuth)();
    const context = (0, react_1.useContext)(GadgetProvider_js_1.GadgetConfigurationContext);
    const { auth } = context ?? {};
    (0, react_1.useEffect)(() => {
        if (!redirected && (isSignedIn || user)) {
            setRedirected(true);
            const searchParams = new URLSearchParams(window.location.search);
            const redirectPath = searchParams.get("redirectTo") ?? path ?? auth?.redirectOnSuccessfulSignInPath ?? "/";
            const redirectUrl = new URL(redirectPath, window.location.origin);
            const navigate = context?.navigate ?? utils_js_1.windowNavigate;
            navigate(`${redirectUrl.pathname}${redirectUrl.search}`);
        }
    }, [redirected, isSignedIn, path, user, auth]);
    if (!user && !isSignedIn) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
    else {
        return null;
    }
};
exports.SignedOutOrRedirect = SignedOutOrRedirect;
//# sourceMappingURL=SignedOutOrRedirect.js.map