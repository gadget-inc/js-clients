import type { ReactNode } from "react";
import React from "react";
/**
 * Renders its `children` if the current `Session` is signed in (has an associated `User`), otherwise renders nothing.
 */
export declare const SignedIn: (props: {
    children: ReactNode;
}) => React.JSX.Element | null;
