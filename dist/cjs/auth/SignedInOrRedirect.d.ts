import type { ReactNode } from "react";
import React from "react";
/**
 * Renders its `children` if the current `Session` is signed in, otherwise redirects the browser to the `signInPath` configured in the `Provider`. Uses `window.location.assign` to perform the redirect.
 */
export declare const SignedInOrRedirect: (props: {
    children: ReactNode;
}) => React.JSX.Element | null;
