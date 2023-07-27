"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSignOut = void 0;
const react_1 = require("react");
const GadgetProvider_1 = require("../../src/GadgetProvider");
const useAction_1 = require("../../src/useAction");
const useUser_1 = require("./useUser");
/**
 * Returns a callback that will call the configured `signOutActionApiIdentifier` on the `User` model and optionally redirect (by default).
 * @returns The `Promise` to call to execute the `signOut` action. Will automatically redirect to the configured `signInPath` unless the `redirect: false` option is provided.
 */
const useSignOut = (opts) => {
    const redirectOnSuccess = opts?.redirectOnSuccess ?? true;
    const redirectToPath = opts?.redirectToPath;
    const api = (0, GadgetProvider_1.useApi)();
    const user = (0, useUser_1.useUser)();
    const context = (0, react_1.useContext)(GadgetProvider_1.GadgetConfigurationContext);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { signOutActionApiIdentifier, signInPath } = context.auth;
    if (signOutActionApiIdentifier && api.user[signOutActionApiIdentifier]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [{ error, data }, signOutAction] = (0, useAction_1.useAction)(api.user[signOutActionApiIdentifier], { suspense: true });
        if (error)
            throw error;
        if (redirectOnSuccess && data) {
            const redirectUrl = new URL(redirectToPath ?? signInPath, window.location.origin);
            window.location.assign(redirectUrl.toString());
        }
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