import React, { type ReactNode } from "react";
/** Position of the popover panel relative to the anchor. */
export type PolarisWCPopoverPosition = "below-start" | "below-end" | "above-start" | "above-end";
export interface PolarisWCPopoverProps {
    /**
     * Whether the popover panel is open.
     */
    open: boolean;
    /**
     * Callback when the popover is closed. Receives the reason when closed by user action.
     */
    onClose?: (reason?: "escape" | "click-outside") => void;
    /**
     * The element to anchor the popover panel to (e.g. an input or button).
     * The panel is positioned relative to this element per the `position` prop.
     */
    anchor: ReactNode;
    /**
     * Content to render inside the popover panel.
     */
    children?: ReactNode;
    /**
     * ID for the panel element (e.g. for aria-controls).
     */
    contentId?: string;
    /**
     * Ref forwarded to the panel wrapper so parents can attach scroll listeners etc.
     */
    contentRef?: React.RefObject<HTMLDivElement | null>;
    /**
     * Optional max height for the panel (default 300px).
     */
    maxHeight?: string | number;
    /**
     * Optional props to spread onto the panel div (e.g. role, aria-multiselectable).
     */
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Position of the panel relative to the anchor. Defaults to "below-start".
     * - below-start: below anchor, start (left in LTR) edge aligned
     * - below-end: below anchor, end (right in LTR) edge aligned
     * - above-start: above anchor, start edge aligned
     * - above-end: above anchor, end edge aligned
     */
    position?: PolarisWCPopoverPosition;
}
/**
 * A general popover component using Polaris styling.
 * Portals the panel to document.body to avoid clipping. Positions using the anchor rect.
 */
export declare const PolarisWCPopover: (props: PolarisWCPopoverProps) => React.JSX.Element;
