"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedOutOrRedirect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
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