import React, { useEffect, useRef, useState } from "react";
import { defaultPlaceholderHiddenText } from "../../shared/defaults.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";
export const PolarisWCAutoTableEncryptedStringCell = (props) => {
    const { value } = props;
    const [isShown, setIsShown] = useState(false);
    const buttonRef = useRef(null);
    useEffect(() => {
        const button = buttonRef.current;
        if (!button)
            return;
        const handleClick = (e) => {
            // Prevent the row's onClick handler from being called when the button is clicked
            e.stopPropagation();
            e.preventDefault();
            setIsShown(!isShown);
        };
        button.addEventListener("click", handleClick);
        return () => button.removeEventListener("click", handleClick);
    }, [isShown]);
    return (React.createElement("div", { style: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: "4px",
        } },
        React.createElement("s-badge", { tone: "neutral" },
            React.createElement(PolarisWCTruncatedTextWithTooltip, { text: isShown ? value : defaultPlaceholderHiddenText })),
        React.createElement("div", { style: { flexShrink: 0 } },
            React.createElement("s-button", { ref: buttonRef, variant: "tertiary", icon: "view", accessibilityLabel: isShown ? "Hide value" : "Show value" }))));
};
//# sourceMappingURL=PolarisWCAutoTableEncryptedStringCell.js.map