import type { CheckboxProps } from "@shopify/polaris";
import { Checkbox } from "@shopify/polaris";
import React from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";

export const PolarisAutoBooleanInput = autoInput((props: { field: string; control?: Control<any> } & Partial<CheckboxProps>) => {
  const { field: _field, control: _control, ...rest } = props;
  const { error, fieldProps, metadata } = useBooleanInputController(props);

  const { value: _value, ...restFieldProps } = fieldProps;
  const label = props.label ?? metadata.name;

  return <Checkbox {...restFieldProps} checked={!!fieldProps.value} error={error?.message} {...rest} label={label} />;
});
