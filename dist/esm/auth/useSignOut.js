import { useCallback, useContext, useEffect } from "react";
import { GadgetConfigurationContext, useApi } from "../GadgetProvider.js";
import { useAction } from "../useAction.js";
import { useUser } from "./useUser.js";
import { windowNavigate } from "./utils.js";
/**
 * Returns a callback that will call the configured `signOutActionApiIdentifier` on the `User` model and optionally redirect (by default). Throws an `error` if one occurs while performing the `signOut` action, or if the `User` is not signed in.
 * @param opts - `redirectOnSuccess` defaults to `true` and will redirect the browser via `window.location.assign` if the sign out action is successful. Setting it to `false` will call the action but will not return. Defaults to `true`.
 * @param opts - `redirectToPath` defaults to the `signInPath` configured in the `GadgetConfigurationContext` and will be used as the redirect path if `redirectOnSuccess` is `true`.
 */
export const useSignOut = (opts) => {
    const redirectOnSuccess = opts?.redirectOnSuccess ?? true;
    const redirectToPath = opts?.redirectToPath;
    const api = useApi();
    const user = useUser();
    const context = useContext(GadgetConfigurationContext);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { signOutActionApiIdentifier, signInPath } = context.auth;
    if (signOutActionApiIdentifier && api.user[signOutActionApiIdentifier]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [{ error, data }, signOutAction] = useAction(api.user[signOutActionApiIdentifier], { suspense: true });
        if (error)
            throw error;
        // eslint-disable-next-line
        useEffect(() => {
            if (redirectOnSuccess && data) {
                const redirectUrl = new URL(redirectToPath ?? signInPath, window.location.origin);
                const navigate = context?.navigate ?? windowNavigate;
                navigate(`${redirectUrl.pathname}${redirectUrl.search}`);
            }
        }, [data]);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return useCallback(async () => {
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
//# sourceMappingURL=useSignOut.js.map