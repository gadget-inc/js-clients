import React from "react";
import { useHover } from "../../hooks/useHover.js";
/**
 * `s-badge` from Polaris Web Components does not support dismissing the badge natively
 * This component is a workaround to allow dismissing the badge by adding a small icon button to the badge
 */
export const PolarisWCDismissibleBadge = (props) => {
    return (React.createElement("s-badge", { ...props },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "2px" } },
            props.children,
            props.onDismiss && React.createElement(DismissIconButton, { onDismiss: props.onDismiss }))));
};
/**
 * Text based close icon button because Polaris Web Components does not support `s-icon` inside of `s-badge`
 */
const DismissIconButton = ({ onDismiss }) => {
    const [isHovered, hoverProps] = useHover();
    return (React.createElement("div", { ...hoverProps, onClick: () => onDismiss?.(), style: {
            backgroundColor: isHovered ? "rgb(0, 0, 0, 0.05)" : "transparent",
            opacity: isHovered ? 1 : 0.5,
            cursor: "pointer",
            marginBottom: "1px",
            padding: "3px",
            lineHeight: "6px",
            borderRadius: "4px",
            fontSize: "8px",
        } }, "\u2715"));
};
//# sourceMappingURL=PolarisWCDismissibleBadge.js.map