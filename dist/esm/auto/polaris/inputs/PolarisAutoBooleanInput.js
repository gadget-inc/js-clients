import { Checkbox } from "@shopify/polaris";
import React, { useEffect } from "react";
import { useController, useFormContext } from "../../../useActionForm.js";
import { get } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const PolarisAutoBooleanInput = autoInput((props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    const { field: fieldProps, fieldState: { error }, } = useController({
        control,
        name: path,
    });
    const { formState: { defaultValues }, } = useFormContext();
    useEffect(() => {
        if (metadata.requiredArgumentForInput) {
            // when the field is required, this defaults to false to match the UI
            // When not required, the field will have a null value unless it is touched by the user
            const defaultValue = get(defaultValues ?? {}, path) ?? false;
            fieldProps.onChange(defaultValue);
        }
    }, [metadata.requiredArgumentForInput, defaultValues]);
    const label = props.label ?? metadata.name;
    const { value: _value, ...restFieldProps } = fieldProps;
    return React.createElement(Checkbox, { ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest, label: label });
});
//# sourceMappingURL=PolarisAutoBooleanInput.js.map