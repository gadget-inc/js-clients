import React, { useContext, useEffect, useState } from "react";
import { GadgetConfigurationContext } from "../GadgetProvider.js";
import { useAuth } from "./useAuth.js";
import { windowNavigate } from "./utils.js";
/**
 * Renders its `children` if the current `Session` is signed out, otherwise redirects the browser to the `path` prop. Uses `window.location.assign` to perform the redirect.
 */
export const SignedOutOrRedirect = (props) => {
    const [redirected, setRedirected] = useState(false);
    const { path, children } = props;
    const { user, isSignedIn } = useAuth();
    const context = useContext(GadgetConfigurationContext);
    const { auth } = context ?? {};
    useEffect(() => {
        if (!redirected && (isSignedIn || user)) {
            setRedirected(true);
            const searchParams = new URLSearchParams(window.location.search);
            const redirectPath = searchParams.get("redirectTo") ?? path ?? auth?.redirectOnSuccessfulSignInPath ?? "/";
            const redirectUrl = new URL(redirectPath, window.location.origin);
            const navigate = context?.navigate ?? windowNavigate;
            navigate(`${redirectUrl.pathname}${redirectUrl.search}`);
        }
    }, [redirected, isSignedIn, path, user, auth]);
    if (!user && !isSignedIn) {
        return React.createElement(React.Fragment, null, children);
    }
    else {
        return null;
    }
};
//# sourceMappingURL=SignedOutOrRedirect.js.map