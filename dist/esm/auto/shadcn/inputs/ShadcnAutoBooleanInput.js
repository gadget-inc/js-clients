import React, { useEffect } from "react";
import { useController, useFormContext } from "../../../useActionForm.js";
import { get } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
export const makeShadcnAutoBooleanInput = ({ Checkbox, Label }) => {
    function ShadcnAutoBooleanInput(props) {
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
        return (React.createElement("div", { className: "flex items-center space-x-2" },
            React.createElement(Checkbox, { ...restFieldProps, id: path, checked: _value, "aria-invalid": !!error, ...rest, disabled: props.disabled ?? false, onCheckedChange: fieldProps.onChange }),
            React.createElement(Label, { htmlFor: path, className: `${props.className ?? ""} ${error ? "text-red-500" : ""}` }, label),
            error && React.createElement(ShadcnRequired, null, error.message)));
    }
    return autoInput(ShadcnAutoBooleanInput);
};
//# sourceMappingURL=ShadcnAutoBooleanInput.js.map