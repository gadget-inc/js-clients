"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStringInputController = exports.FieldTypeToInputType = void 0;
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
exports.FieldTypeToInputType = {
    [metadata_js_1.FieldType.Number]: "number",
    [metadata_js_1.FieldType.Email]: "email",
    [metadata_js_1.FieldType.Password]: "password",
    [metadata_js_1.FieldType.EncryptedString]: "password",
};
const PlaceholderValues = {
    [metadata_js_1.FieldType.String]: "Enter text",
    [metadata_js_1.FieldType.Number]: "Enter number",
    [metadata_js_1.FieldType.Email]: "example@email.com",
    [metadata_js_1.FieldType.Password]: "Value",
    [metadata_js_1.FieldType.EncryptedString]: "Enter text",
    [metadata_js_1.FieldType.Color]: "Enter color",
    [metadata_js_1.FieldType.Url]: "example.com",
};
const useStringInputController = (props) => {
    const { field: fieldApiIdentifier, ...rest } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const { field: fieldProperties, fieldState: { error }, } = (0, useActionForm_js_1.useController)({
        name: path,
        ...rest,
    });
    const { value, onChange: fieldPropsOnChange, ...restOfFieldProperties } = fieldProperties;
    const onChange = (0, react_1.useCallback)((...args) => {
        fieldPropsOnChange(...args);
        props.afterChange?.(...args);
    }, [fieldPropsOnChange, props.afterChange]);
    const placeholder = PlaceholderValues[metadata.fieldType];
    return {
        id: path,
        label: metadata.name,
        type: exports.FieldTypeToInputType[metadata.fieldType],
        isError: !!error,
        errorMessage: error?.message,
        autoComplete: "off",
        placeholder,
        metadata,
        value: getValue(value, metadata.fieldType),
        onChange,
        ...restOfFieldProperties,
    };
};
exports.useStringInputController = useStringInputController;
const getValue = (value, fieldType) => {
    // JSON fields can have null value which is different from an empty string. In that case, use null directly
    return fieldType === metadata_js_1.FieldType.Json ? value : (value ?? "");
};
//# sourceMappingURL=useStringInputController.js.map