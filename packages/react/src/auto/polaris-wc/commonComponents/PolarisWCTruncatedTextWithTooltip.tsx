import React, { useEffect } from "react";
import { useHover } from "../../hooks/useHover.js";
import { useIsOverflowed } from "../../hooks/useIsOverflowed.js";
import { PolarisWCPopover } from "./PolarisWCPopover.js";

const truncationStyle: React.CSSProperties = {
  display: "block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  minWidth: 0,
};

export interface PolarisWCTruncatedTextWithTooltipProps {
  /** The text (or content) to show; truncated with ellipsis when it overflows. */
  text: string;
}

/**
 * Renders text with ellipsis when it overflows. When truncated, shows a popover
 * with the full content on hover over the truncated text only.
 */
export const PolarisWCTruncatedTextWithTooltip = (props: PolarisWCTruncatedTextWithTooltipProps) => {
  const { text } = props;
  const { isOverflowed, childElementRef, containerRef, checkOverflow } = useIsOverflowed({
    useScrollWidthCheck: true,
  });

  useEffect(() => {
    checkOverflow();
  }, [checkOverflow, text]);

  const [isHovering, hoverProps] = useHover();

  const truncatedText = (
    <div ref={containerRef as React.RefObject<HTMLDivElement>} style={{ overflow: "hidden", minWidth: 0, width: "100%" }}>
      <span ref={childElementRef as React.RefObject<HTMLSpanElement>} style={truncationStyle}>
        <s-text>{text}</s-text>
      </span>
    </div>
  );

  if (!isOverflowed) {
    return truncatedText;
  }

  return (
    <div {...hoverProps} style={{ cursor: "default", minWidth: 0 }}>
      <PolarisWCPopover
        open={isHovering}
        onClose={() => hoverProps.onMouseLeave(null as any)}
        anchor={truncatedText}
        maxHeight="200px"
        contentProps={{
          ...hoverProps,
          style: { padding: "8px" },
        }}
      >
        <s-text>{text}</s-text>
      </PolarisWCPopover>
    </div>
  );
};
