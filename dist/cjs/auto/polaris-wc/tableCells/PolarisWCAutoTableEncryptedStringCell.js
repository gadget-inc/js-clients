"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableEncryptedStringCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const defaults_js_1 = require("../../shared/defaults.js");
const PolarisWCTruncatedTextWithTooltip_js_1 = require("../commonComponents/PolarisWCTruncatedTextWithTooltip.js");
const PolarisWCAutoTableEncryptedStringCell = (props) => {
    const { value } = props;
    const [isShown, setIsShown] = (0, react_1.useState)(false);
    const buttonRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
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
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: "4px",
        } },
        react_1.default.createElement("s-badge", { tone: "neutral" },
            react_1.default.createElement(PolarisWCTruncatedTextWithTooltip_js_1.PolarisWCTruncatedTextWithTooltip, { text: isShown ? value : defaults_js_1.defaultPlaceholderHiddenText })),
        react_1.default.createElement("div", { style: { flexShrink: 0 } },
            react_1.default.createElement("s-button", { ref: buttonRef, variant: "tertiary", icon: "view", accessibilityLabel: isShown ? "Hide value" : "Show value" }))));
};
exports.PolarisWCAutoTableEncryptedStringCell = PolarisWCAutoTableEncryptedStringCell;
//# sourceMappingURL=PolarisWCAutoTableEncryptedStringCell.js.map