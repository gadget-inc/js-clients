import type { FocusEvent } from "react";
/** Used for tracking focus state on an element */
export declare function useFocus<T extends HTMLElement = any>(outerRef?: React.RefObject<T>): [
    boolean,
    {
        onFocus: (event?: FocusEvent<T>) => void;
        onBlur: (event?: FocusEvent<T>) => void;
        ref: React.RefObject<T | null>;
    },
    boolean
];
