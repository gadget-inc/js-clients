import { Checkbox } from "@shopify/polaris";
import React from "react";
import { useController } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const PolarisAutoBooleanInput = autoInput((props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    const { field: fieldProps, fieldState: { error }, } = useController({
        control,
        name: path,
    });
    const label = props.label ?? metadata.name;
    const { value: _value, ...restFieldProps } = fieldProps;
    return React.createElement(Checkbox, { ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest, label: label });
});
//# sourceMappingURL=PolarisAutoBooleanInput.js.map