import React from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import { autoInput } from "../../AutoInput.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
export const makeShadcnAutoBooleanInput = ({ Checkbox, Label }) => {
    function ShadcnAutoBooleanInput(props) {
        const { field: _field, control: _control, ...rest } = props;
        const { path, error, fieldProps, metadata } = useBooleanInputController(props);
        const { value: _value, ...restFieldProps } = fieldProps;
        const label = props.label ?? metadata.name;
        return (React.createElement("div", { className: "flex items-center space-x-2" },
            React.createElement(Checkbox, { ...restFieldProps, id: path, checked: _value, "aria-invalid": !!error, ...rest, disabled: props.disabled ?? false, onCheckedChange: fieldProps.onChange }),
            React.createElement(Label, { htmlFor: path, className: `${props.className ?? ""} ${error ? "text-red-500" : ""}` }, label),
            error && React.createElement(ShadcnRequired, null, error.message)));
    }
    return autoInput(ShadcnAutoBooleanInput);
};
//# sourceMappingURL=ShadcnAutoBooleanInput.js.map