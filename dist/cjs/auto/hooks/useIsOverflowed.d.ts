/// <reference types="react" />
export interface UseIsOverflowedOptions {
    /**
     * When true, overflow is detected via scrollWidth > clientWidth on the child
     * (works when the child is constrained with display:block + overflow:hidden + text-overflow:ellipsis).
     * When false or omitted, overflow is detected via container.offsetWidth < childElement.offsetWidth.
     */
    useScrollWidthCheck?: boolean;
}
export declare const useIsOverflowed: (options?: UseIsOverflowedOptions) => {
    isOverflowed: boolean;
    childElementRef: import("react").RefObject<HTMLDivElement | null>;
    containerRef: import("react").RefObject<HTMLDivElement | null>;
    checkOverflow: () => void;
};
