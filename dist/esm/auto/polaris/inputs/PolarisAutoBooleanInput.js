import { Checkbox } from "@shopify/polaris";
import React from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import { autoInput } from "../../AutoInput.js";
export const PolarisAutoBooleanInput = autoInput((props) => {
    const { field: _field, control: _control, ...rest } = props;
    const { error, fieldProps, metadata } = useBooleanInputController(props);
    const { value: _value, ...restFieldProps } = fieldProps;
    const label = props.label ?? metadata.name;
    return React.createElement(Checkbox, { ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest, label: label });
});
//# sourceMappingURL=PolarisAutoBooleanInput.js.map