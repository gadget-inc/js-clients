import type { ReactNode } from "react";
import React from "react";
/**
 * Renders its `children` if the current `Session` is signed out (no associated `User`), otherwise renders nothing.
 */
export declare const SignedOut: (props: {
    children: ReactNode;
}) => React.JSX.Element | null;
