"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTextInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../utils.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const PolarisAutoTextInput = (props) => {
    const { field, control } = props;
    const stringInputController = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    return (react_1.default.createElement(polaris_1.TextField, { ...(0, utils_js_1.getPropsWithoutRef)(stringInputController), requiredIndicator: stringInputController.metadata.requiredArgumentForInput, type: stringInputController.type, error: stringInputController.isError, helpText: stringInputController.errorMessage, ...props }));
};
exports.PolarisAutoTextInput = PolarisAutoTextInput;
//# sourceMappingURL=PolarisAutoTextInput.js.map