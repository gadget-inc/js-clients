import React, { useMemo } from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import { autoInput } from "../../AutoInput.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
export const makeShadcnAutoBooleanInput = ({ Checkbox, Label }) => {
    function ShadcnAutoBooleanInput(props) {
        const { field: _field, control: _control, ...rest } = props;
        const { path, error, fieldProps, metadata } = useBooleanInputController(props);
        // UUID prefix for the id that links the label and checkbox so the label won't link to the wrong checkbox if there are multiple checkboxes with the same path
        const uuidPrefix = useMemo(() => crypto.randomUUID(), []);
        const { value: _value, ...restFieldProps } = fieldProps;
        const label = props.label ?? metadata.name;
        return (React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement(Checkbox, { ...restFieldProps, id: `${uuidPrefix}-${path}`, checked: _value, "aria-invalid": !!error, ...rest, disabled: props.disabled ?? false, onCheckedChange: fieldProps.onChange }),
            React.createElement(Label, { htmlFor: `${uuidPrefix}-${path}`, className: `${props.className ?? ""} ${error ? "text-red-500" : ""} cursor-pointer` }, label),
            error && React.createElement(ShadcnRequired, null, error.message)));
    }
    return autoInput(ShadcnAutoBooleanInput);
};
//# sourceMappingURL=ShadcnAutoBooleanInput.js.map