import type React from "react";
/** Used for tracking hover state on an element */
export declare function useHover<T extends HTMLElement = any>(): [
    boolean,
    {
        onMouseEnter: React.MouseEventHandler<T>;
        onMouseLeave: React.MouseEventHandler<T>;
    }
];
