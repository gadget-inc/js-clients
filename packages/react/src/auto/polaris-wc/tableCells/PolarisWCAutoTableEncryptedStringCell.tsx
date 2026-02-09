import React, { useEffect, useRef, useState } from "react";
import { defaultPlaceholderHiddenText } from "../../shared/defaults.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";

export const PolarisWCAutoTableEncryptedStringCell = (props: { value: any }) => {
  const { value } = props;
  const [isShown, setIsShown] = useState(false);
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = (e: Event) => {
      // Prevent the row's onClick handler from being called when the button is clicked
      e.stopPropagation();
      e.preventDefault();
      setIsShown(!isShown);
    };

    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [isShown]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <s-badge tone="neutral">
        <PolarisWCTruncatedTextWithTooltip text={isShown ? value : defaultPlaceholderHiddenText} />
      </s-badge>
      <div style={{ flexShrink: 0 }}>
        <s-button ref={buttonRef as any} variant="tertiary" icon="view" accessibilityLabel={isShown ? "Hide value" : "Show value"} />
      </div>
    </div>
  );
};
