"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableTagCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../utils.js");
const MAX_TAGS_LENGTH = 5;
const PolarisAutoTableTagCell = (props) => {
    const { value } = props;
    const [showMore, setShowMore] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    const { tags, originalLength } = (0, react_1.useMemo)(() => {
        let formattedTags = [];
        if (Array.isArray(value)) {
            if ((0, utils_js_1.isRoleAssignmentsArray)(value)) {
                formattedTags = value.map((role) => role.name);
            }
            else {
                const compactValues = value.filter((tag) => tag !== null && tag !== undefined);
                formattedTags = compactValues.map((tag) => tag.toString());
            }
        }
        else {
            if (value !== null && value !== undefined) {
                formattedTags = [value];
            }
        }
        return {
            tags: formattedTags.slice(0, MAX_TAGS_LENGTH),
            originalLength: formattedTags.length,
        };
    }, [value]);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
        }
    }, [tags]);
    const showMoreComponent = react_1.default.createElement(polaris_1.Text, { as: "span" }, "...");
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "100", wrap: false },
        react_1.default.createElement("div", { style: {
                width: showMore ? "calc(100% - 20px)" : "auto",
                overflowX: "hidden",
            }, ref: ref },
            react_1.default.createElement(polaris_1.InlineStack, { gap: "100", wrap: false },
                tags.map((tag) => (react_1.default.createElement(polaris_1.Tag, { key: tag }, tag))),
                originalLength > MAX_TAGS_LENGTH && showMoreComponent)),
        showMore && showMoreComponent));
};
exports.PolarisAutoTableTagCell = PolarisAutoTableTagCell;
//# sourceMappingURL=PolarisAutoTableTagCell.js.map