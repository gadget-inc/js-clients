"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisStringInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_js_1 = require("../../../metadata.js");
const FieldTypeToInputType = {
    [metadata_js_1.FieldType.Number]: "number",
    [metadata_js_1.FieldType.Email]: "email",
    [metadata_js_1.FieldType.Password]: "password",
    [metadata_js_1.FieldType.EncryptedString]: "password",
};
const PolarisStringInput = (props) => {
    const { field: fieldProps, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
    // omit the ref from the forwarded along props so that we don't get a warning
    const { ref: _ref, ...field } = fieldProps;
    return (react_1.default.createElement(polaris_1.TextField, { label: props.field.name, type: FieldTypeToInputType[props.field.fieldType], autoComplete: "off", ...field, error: error?.message }));
};
exports.PolarisStringInput = PolarisStringInput;
//# sourceMappingURL=PolarisStringInput.js.map