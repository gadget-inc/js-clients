import { Checkbox } from "@shopify/polaris";
import React from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import { autoInput } from "../../AutoInput.js";
/**
 * A boolean checkbox within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBooleanInput field="isActive" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Boolean field.
 * @param props.label - Label of the Boolean checkbox.
 * @returns The AutoBooleanInput component.
 */
export const PolarisAutoBooleanInput = autoInput((props) => {
    const { field: _field, control: _control, ...rest } = props;
    const { error, fieldProps, metadata } = useBooleanInputController(props);
    const { value: _value, ...restFieldProps } = fieldProps;
    const label = props.label ?? metadata.name;
    return React.createElement(Checkbox, { ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest, label: label });
});
//# sourceMappingURL=PolarisAutoBooleanInput.js.map