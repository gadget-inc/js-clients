"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCEditableOptionLabelButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoRelationshipInputProps_js_1 = require("../../../interfaces/AutoRelationshipInputProps.js");
const utils_js_1 = require("./utils.js");
const PolarisWCEditableOptionLabelButton = ({ option }) => {
    const showOptionLabel = (0, react_1.useMemo)(() => (0, AutoRelationshipInputProps_js_1.shouldShowOptionLabel)(option), [option]);
    return (react_1.default.createElement(react_1.default.Fragment, null, showOptionLabel && option ? (react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } },
            (0, utils_js_1.renderOptionLabel)(option.primary, "primary"),
            option.secondary && (0, utils_js_1.renderOptionLabel)(option.secondary, "secondary")),
        option.tertiary && (0, utils_js_1.renderOptionLabel)(option.tertiary, "tertiary"))) : (react_1.default.createElement("s-text", null, "Click to edit..."))));
};
exports.PolarisWCEditableOptionLabelButton = PolarisWCEditableOptionLabelButton;
//# sourceMappingURL=PolarisWCEditableOptionLabelButton.js.map