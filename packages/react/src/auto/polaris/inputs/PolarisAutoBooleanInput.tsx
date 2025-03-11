import type { CheckboxProps } from "@shopify/polaris";
import { Checkbox } from "@shopify/polaris";
import React from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import { autoInput } from "../../AutoInput.js";
import { type AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";

export type PolarisAutoBooleanInputProps = AutoBooleanInputProps & Partial<CheckboxProps>;

/**
 * A checkbox input that is controlled by react-hook-form
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBooleanInput field="isActive" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Boolean field
 * @param props.label - The label of the checkbox
 * @returns The checkbox input component
 */
export const PolarisAutoBooleanInput = autoInput((props: PolarisAutoBooleanInputProps) => {
  const { field: _field, control: _control, ...rest } = props;
  const { error, fieldProps, metadata } = useBooleanInputController(props);

  const { value: _value, ...restFieldProps } = fieldProps;
  const label = props.label ?? metadata.name;

  return <Checkbox {...restFieldProps} checked={!!fieldProps.value} error={error?.message} {...rest} label={label} />;
});
