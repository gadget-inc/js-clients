"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCDismissibleBadge = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useHover_js_1 = require("../../hooks/useHover.js");
/**
 * `s-badge` from Polaris Web Components does not support dismissing the badge natively
 * This component is a workaround to allow dismissing the badge by adding a small icon button to the badge
 */
const PolarisWCDismissibleBadge = (props) => {
    return (react_1.default.createElement("s-badge", { ...props },
        react_1.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "2px" } },
            props.children,
            props.onDismiss && react_1.default.createElement(DismissIconButton, { onDismiss: props.onDismiss }))));
};
exports.PolarisWCDismissibleBadge = PolarisWCDismissibleBadge;
/**
 * Text based close icon button because Polaris Web Components does not support `s-icon` inside of `s-badge`
 */
const DismissIconButton = ({ onDismiss }) => {
    const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
    return (react_1.default.createElement("div", { ...hoverProps, onClick: () => onDismiss?.(), style: {
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