"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnEditableOptionLabelButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoRelationshipInputProps_js_1 = require("../../../interfaces/AutoRelationshipInputProps.js");
const utils_js_1 = require("../../utils.js");
const makeShadcnEditableOptionLabelButton = ({ Badge, Button, Label }) => {
    const renderOptionLabel = (0, utils_js_1.makeShadcnRenderOptionLabel)({ Label, Badge, Button });
    return function ({ option }) {
        const showOptionLabel = (0, react_1.useMemo)(() => (0, AutoRelationshipInputProps_js_1.shouldShowOptionLabel)(option), [option]);
        return (react_1.default.createElement(react_1.default.Fragment, null, showOptionLabel && option ? (react_1.default.createElement("div", { className: "flex justify-between w-full items-center" },
            react_1.default.createElement("div", { className: "flex flex-col gap-1 items-start cursor-pointer" },
                renderOptionLabel(option.primary, "primary", true),
                option.secondary && renderOptionLabel(option.secondary, "secondary", true)),
            option.tertiary && (react_1.default.createElement("div", { className: "flex items-center cursor-pointer" }, renderOptionLabel(option.tertiary, "tertiary", true))))) : (react_1.default.createElement(Label, null, "Click to edit..."))));
    };
};
exports.makeShadcnEditableOptionLabelButton = makeShadcnEditableOptionLabelButton;
//# sourceMappingURL=EditableOptionLabelButton.js.map