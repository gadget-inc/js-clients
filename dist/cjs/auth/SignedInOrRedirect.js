"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedInOrRedirect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
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