"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoSubmit = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const PolarisAutoSubmit = (props) => {
    const { submit } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    return (react_1.default.createElement(polaris_1.Button, { submit: true, onClick: submit }, props.children || "Submit"));
};
exports.PolarisAutoSubmit = PolarisAutoSubmit;
//# sourceMappingURL=PolarisAutoSubmit.js.map