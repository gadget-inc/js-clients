import React from "react";
export interface PolarisWCTruncatedTextWithTooltipProps {
    /** The text (or content) to show; truncated with ellipsis when it overflows. */
    text: string;
}
/**
 * Renders text with ellipsis when it overflows. When truncated, shows a popover
 * with the full content on hover over the truncated text only.
 */
export declare const PolarisWCTruncatedTextWithTooltip: (props: PolarisWCTruncatedTextWithTooltipProps) => React.JSX.Element;
