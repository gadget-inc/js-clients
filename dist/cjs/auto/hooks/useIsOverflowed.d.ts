/// <reference types="react" />
export declare const useIsOverflowed: () => {
    isOverflowed: boolean;
    childElementRef: import("react").RefObject<HTMLDivElement | null>;
    containerRef: import("react").RefObject<HTMLDivElement | null>;
    checkOverflow: () => void;
};
