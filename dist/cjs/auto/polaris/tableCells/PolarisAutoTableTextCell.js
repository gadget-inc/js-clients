"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableTextCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const PolarisAutoTableTextCell = (props) => {
    const { value } = props;
    const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;
    const [isOverflowed, setIsOverflow] = (0, react_1.useState)(false);
    const textElementRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        setIsOverflow(!!textElementRef.current && textElementRef.current.scrollWidth > textElementRef.current.clientWidth);
    }, []);
    const polarisTextWithRef = (react_1.default.createElement("span", { className: "Polaris-Text--root Polaris-Text--block Polaris-Text--truncate", ref: textElementRef }, stringifiedValue));
    if (!isOverflowed) {
        return polarisTextWithRef;
    }
    return (react_1.default.createElement(polaris_1.Tooltip, { content: stringifiedValue, hoverDelay: 500 }, polarisTextWithRef));
};
exports.PolarisAutoTableTextCell = PolarisAutoTableTextCell;
//# sourceMappingURL=PolarisAutoTableTextCell.js.map