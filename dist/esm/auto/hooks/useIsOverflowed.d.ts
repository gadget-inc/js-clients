/// <reference types="react" resolution-mode="require"/>
export declare const useIsOverflowed: () => {
    isOverflowed: boolean;
    childElementRef: import("react").RefObject<HTMLDivElement>;
    containerRef: import("react").RefObject<HTMLDivElement>;
    checkOverflow: () => void;
};
