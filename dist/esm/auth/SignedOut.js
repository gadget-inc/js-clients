import React from "react";
import { useAuth } from "./useAuth.js";
import { isSessionSignedOut } from "./utils.js";
/**
 * Renders its `children` if the current `Session` is signed out (no associated `User`), otherwise renders nothing.
 */
export const SignedOut = (props) => {
    const { session, user } = useAuth();
    if (!session || isSessionSignedOut(session) || !user) {
        return React.createElement(React.Fragment, null, props.children);
    }
    else {
        return null;
    }
};
//# sourceMappingURL=SignedOut.js.map