"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSignOut = void 0;
const react_1 = require("react");
const GadgetProvider_js_1 = require("../GadgetProvider.js");
const useAction_js_1 = require("../useAction.js");
const useUser_js_1 = require("./useUser.js");
const utils_js_1 = require("./utils.js");
/**
 * Returns a callback that will call the configured `signOutActionApiIdentifier` on the `User` model and optionally redirect (by default). Throws an `error` if one occurs while performing the `signOut` action, or if the `User` is not signed in.
 * @param opts - `redirectOnSuccess` defaults to `true` and will redirect the browser via `window.location.assign` if the sign out action is successful. Setting it to `false` will call the action but will not return. Defaults to `true`.
 * @param opts - `redirectToPath` defaults to the `signInPath` configured in the `GadgetConfigurationContext` and will be used as the redirect path if `redirectOnSuccess` is `true`.
 */
const useSignOut = (opts) => {
    const redirectOnSuccess = opts?.redirectOnSuccess ?? true;
    const redirectToPath = opts?.redirectToPath;
    const api = (0, GadgetProvider_js_1.useApi)();
    const user = (0, useUser_js_1.useUser)();
    const context = (0, react_1.useContext)(GadgetProvider_js_1.GadgetConfigurationContext);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { signOutActionApiIdentifier, signInPath } = context.auth;
    if (signOutActionApiIdentifier && api.user[signOutActionApiIdentifier]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [{ error, data }, signOutAction] = (0, useAction_js_1.useAction)(api.user[signOutActionApiIdentifier], { suspense: true });
        if (error)
            throw error;
        // eslint-disable-next-line
        (0, react_1.useEffect)(() => {
            if (redirectOnSuccess && data) {
                const redirectUrl = new URL(redirectToPath ?? signInPath, window.location.origin);
                const navigate = context?.navigate ?? utils_js_1.windowNavigate;
                navigate(`${redirectUrl.pathname}${redirectUrl.search}`);
            }
        }, [data]);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return (0, react_1.useCallback)(async () => {
            if (!user)
                throw new Error("attempting to sign out when the user is not signed in");
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            await signOutAction({ id: user.id });
        }, [user, signOutAction]);
    }
    else {
        throw new Error(`missing configured signOutActionApiIdentifier '${signOutActionApiIdentifier}' on the \`api.user\` model manager.`);
    }
};
exports.useSignOut = useSignOut;
//# sourceMappingURL=useSignOut.js.map