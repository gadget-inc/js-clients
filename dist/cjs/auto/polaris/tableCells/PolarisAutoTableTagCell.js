"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableTagCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const useTagsForTableCellRenderer_js_1 = require("../../hooks/useTagsForTableCellRenderer.js");
const PolarisAutoTableTagCell = (props) => {
    const { value } = props;
    const [showMore, setShowMore] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    const { shortenedTags, hasOmittedTags } = (0, useTagsForTableCellRenderer_js_1.useTagsForTableCellRenderer)({ value });
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
        }
    }, [shortenedTags]);
    const showMoreComponent = react_1.default.createElement(polaris_1.Text, { as: "span" }, "...");
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "100", wrap: false },
        react_1.default.createElement("div", { style: {
                width: showMore ? "calc(100% - 20px)" : "auto",
                overflowX: "hidden",
            }, ref: ref },
            react_1.default.createElement(polaris_1.InlineStack, { gap: "100", wrap: false },
                shortenedTags.map((tag) => (react_1.default.createElement(polaris_1.Tag, { key: tag }, tag))),
                hasOmittedTags && showMoreComponent)),
        showMore && showMoreComponent));
};
exports.PolarisAutoTableTagCell = PolarisAutoTableTagCell;
//# sourceMappingURL=PolarisAutoTableTagCell.js.map