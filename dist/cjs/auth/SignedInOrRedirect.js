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
exports.SignedInOrRedirect = void 0;
const react_1 = __importStar(require("react"));
const GadgetProvider_js_1 = require("../GadgetProvider.js");
const useAuth_js_1 = require("./useAuth.js");
const utils_js_1 = require("./utils.js");
/**
 * Renders its `children` if the current `Session` is signed in, otherwise redirects the browser to the `signInPath` configured in the `Provider`. Uses `window.location.assign` to perform the redirect.
 */
const SignedInOrRedirect = (props) => {
    const [redirected, setRedirected] = (0, react_1.useState)(false);
    const { user, isSignedIn } = (0, useAuth_js_1.useAuth)();
    const context = (0, react_1.useContext)(GadgetProvider_js_1.GadgetConfigurationContext);
    const { auth } = context ?? {};
    (0, react_1.useEffect)(() => {
        if (auth && !redirected && (!isSignedIn || !user)) {
            setRedirected(true);
            const redirectPath = props.path ?? auth.signInPath;
            const redirectUrl = new URL(redirectPath, window.location.origin);
            redirectUrl.searchParams.set("redirectTo", window.location.pathname);
            const navigate = context?.navigate ?? utils_js_1.windowNavigate;
            navigate(`${redirectUrl.pathname}${redirectUrl.search}`);
        }
    }, [props.path, redirected, isSignedIn, auth, user]);
    if (user && isSignedIn) {
        return react_1.default.createElement(react_1.default.Fragment, null, props.children);
    }
    else {
        return null;
    }
};
exports.SignedInOrRedirect = SignedInOrRedirect;
//# sourceMappingURL=SignedInOrRedirect.js.map