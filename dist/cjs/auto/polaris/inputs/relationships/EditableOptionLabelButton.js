"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableOptionLabelButton = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const AutoRelationshipInputProps_js_1 = require("../../../interfaces/AutoRelationshipInputProps.js");
const utils_js_1 = require("./utils.js");
const EditableOptionLabelButton = ({ option }) => {
    const showOptionLabel = (0, react_1.useMemo)(() => (0, AutoRelationshipInputProps_js_1.shouldShowOptionLabel)(option), [option]);
    return (react_1.default.createElement(react_1.default.Fragment, null, showOptionLabel && option ? (react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
        react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
            (0, utils_js_1.renderOptionLabel)(option.primary, "primary"),
            option.secondary && (0, utils_js_1.renderOptionLabel)(option.secondary, "secondary")),
        option.tertiary && (0, utils_js_1.renderOptionLabel)(option.tertiary, "tertiary"))) : (react_1.default.createElement(polaris_1.Text, { variant: "bodyMd", as: "h3", tone: "subdued" }, "Click to edit..."))));
};
exports.EditableOptionLabelButton = EditableOptionLabelButton;
//# sourceMappingURL=EditableOptionLabelButton.js.map