import React, { useContext, useEffect, useState } from "react";
import { GadgetConfigurationContext } from "../GadgetProvider.js";
import { useAuth } from "./useAuth.js";
import { windowNavigate } from "./utils.js";
/**
 * Renders its `children` if the current `Session` is signed in, otherwise redirects the browser to the `signInPath` configured in the `Provider`. Uses `window.location.assign` to perform the redirect.
 */
export const SignedInOrRedirect = (props) => {
    const [redirected, setRedirected] = useState(false);
    const { user, isSignedIn } = useAuth();
    const context = useContext(GadgetConfigurationContext);
    const { auth } = context ?? {};
    useEffect(() => {
        if (auth && !redirected && (!isSignedIn || !user)) {
            setRedirected(true);
            const redirectPath = props.path ?? auth.signInPath;
            const redirectUrl = new URL(redirectPath, window.location.origin);
            redirectUrl.searchParams.set("redirectTo", window.location.pathname);
            const navigate = context?.navigate ?? windowNavigate;
            navigate(`${redirectUrl.pathname}${redirectUrl.search}`);
        }
    }, [props.path, redirected, isSignedIn, auth, user]);
    if (user && isSignedIn) {
        return React.createElement(React.Fragment, null, props.children);
    }
    else {
        return null;
    }
};
//# sourceMappingURL=SignedInOrRedirect.js.map