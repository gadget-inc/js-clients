import { TextField } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import { FieldType } from "../../../metadata.js";
const FieldTypeToInputType = {
    [FieldType.Number]: "number",
    [FieldType.Email]: "email",
    [FieldType.Password]: "password",
    [FieldType.EncryptedString]: "password",
};
export const PolarisStringInput = (props) => {
    const { field: fieldProps, fieldState: { error }, } = useController({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
    // omit the ref from the forwarded along props so that we don't get a warning
    const { ref: _ref, ...field } = fieldProps;
    return (React.createElement(TextField, { label: props.field.name, type: FieldTypeToInputType[props.field.fieldType], autoComplete: "off", ...field, error: error?.message }));
};
//# sourceMappingURL=PolarisStringInput.js.map