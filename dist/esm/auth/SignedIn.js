import React from "react";
import { useAuth } from "./useAuth.js";
import { isSessionSignedIn } from "./utils.js";
/**
 * Renders its `children` if the current `Session` is signed in (has an associated `User`), otherwise renders nothing.
 */
export const SignedIn = (props) => {
    const { session, user, isSignedIn } = useAuth();
    if (user && isSignedIn && isSessionSignedIn(session)) {
        return React.createElement(React.Fragment, null, props.children);
    }
    else {
        return null;
    }
};
//# sourceMappingURL=SignedIn.js.map