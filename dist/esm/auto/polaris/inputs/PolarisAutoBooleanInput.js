import { Checkbox } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const PolarisAutoBooleanInput = (props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    const { field: fieldProps, fieldState: { error }, } = useController({
        control,
        name: path,
    });
    const { value: _value, ...restFieldProps } = fieldProps;
    return React.createElement(Checkbox, { label: metadata.name, ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest });
};
//# sourceMappingURL=PolarisAutoBooleanInput.js.map