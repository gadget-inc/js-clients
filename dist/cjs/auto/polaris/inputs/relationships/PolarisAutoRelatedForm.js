"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoRelatedForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useFieldMetadata_js_1 = require("../../../hooks/useFieldMetadata.js");
const PolarisAutoRelatedForm = (props) => {
    const { field } = props;
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    console.log({ metadata }, "foo foo fas");
    return react_1.default.createElement("div", null, "hi");
};
exports.PolarisAutoRelatedForm = PolarisAutoRelatedForm;
//# sourceMappingURL=PolarisAutoRelatedForm.js.map