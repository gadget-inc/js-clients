import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/useAuth.js";
/**
 * Renders its `children` if the current `Session` is signed out, otherwise redirects the browser to the `path` prop. Uses `window.location.assign` to perform the redirect.
 */
export const SignedOutOrRedirect = (props) => {
    const [redirected, setRedirected] = useState(false);
    const { path, children } = props;
    const { user, isSignedIn } = useAuth();
    useEffect(() => {
        if (!redirected && (isSignedIn || user)) {
            setRedirected(true);
            const redirectUrl = new URL(path, window.location.origin);
            window.location.assign(redirectUrl.toString());
        }
    }, [redirected, isSignedIn, path, user]);
    if (!user && !isSignedIn) {
        return React.createElement(React.Fragment, null, children);
    }
    else {
        return null;
    }
};
//# sourceMappingURL=SignedOutOrRedirect.js.map