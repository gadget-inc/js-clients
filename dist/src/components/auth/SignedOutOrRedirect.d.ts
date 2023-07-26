import type { ReactNode } from "react";
import React from "react";
/**
 * Renders its `children` if the current `Session` is signed out, otherwise redirects the browser to the `signOutPath` configured in the `Provider`. Uses `window.location.assign` to perform the redirect.
 */
export declare const SignedOutOrRedirect: (props: {
    children: ReactNode;
}) => React.JSX.Element | null;
