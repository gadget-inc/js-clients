import type React from "react";
export type TooltipProps = {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened. This will
     * override the prop with the same name passed to Provider.
     * @defaultValue 700
     */
    delayDuration?: number;
    /**
     * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @defaultValue false
     */
    disableHoverableContent?: boolean;
};
export type TooltipTriggerProps = React.HTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>;
export type TooltipContentProps = React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement> & {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
    /**
     * A more descriptive label for accessibility purpose
     */
    "aria-label"?: string;
    /**
     * Event handler called when the escape key is down.
     * Can be prevented.
     */
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    /**
     * Event handler called when the a `pointerdown` event happens outside of the `Tooltip`.
     * Can be prevented.
     */
    onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
};
export type TooltipProviderProps = {
    children: React.ReactNode;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened.
     * @defaultValue 700
     */
    delayDuration?: number;
    /**
     * How much time a user has to enter another trigger without incurring a delay again.
     * @defaultValue 300
     */
    skipDelayDuration?: number;
    /**
     * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @defaultValue false
     */
    disableHoverableContent?: boolean;
};
type PointerDownOutsideEvent = CustomEvent<{
    originalEvent: PointerEvent;
}>;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent) */
interface CustomEvent<T = any> extends Event {
    /**
     * Returns any custom data event was created with. Typically used for synthetic events.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)
     */
    readonly detail: T;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)
     */
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: T): void;
}
export {};
