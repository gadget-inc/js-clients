"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableTagCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../utils.js");
const PolarisAutoTableTagCell = (props) => {
    const { value } = props;
    const tags = (0, react_1.useMemo)(() => {
        if (Array.isArray(value)) {
            if ((0, utils_js_1.isRoleAssignmentsArray)(value)) {
                return value.map((role) => role.name);
            }
            else if (typeof value[0] === "string") {
                return value;
            }
            else {
                return [];
            }
        }
        else {
            return [value];
        }
    }, [value]);
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "100", wrap: false }, tags.map((tag) => (react_1.default.createElement(polaris_1.Tag, { key: tag, accessibilityLabel: `tag-${tag}` }, tag)))));
};
exports.PolarisAutoTableTagCell = PolarisAutoTableTagCell;
//# sourceMappingURL=PolarisAutoTableTagCell.js.map