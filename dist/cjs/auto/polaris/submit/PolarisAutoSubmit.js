"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoSubmit = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Button for submitting the AutoForm values
 *
 * The submission is handled by the  `submit` property on Button
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
const PolarisAutoSubmit = (props) => {
    return (react_1.default.createElement(polaris_1.Button, { submit: true, loading: props.isSubmitting }, props.children ?? "Submit"));
};
exports.PolarisAutoSubmit = PolarisAutoSubmit;
//# sourceMappingURL=PolarisAutoSubmit.js.map