import type { CheckboxProps } from "@shopify/polaris";
import { Checkbox } from "@shopify/polaris";
import React from "react";
import { useController } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";

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
  const { field: fieldApiIdentifier, control, ...rest } = props;

  const { path, metadata } = useFieldMetadata(fieldApiIdentifier);

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    control,
    name: path,
  });

  const label = props.label ?? metadata.name;
  const { value: _value, ...restFieldProps } = fieldProps;

  return <Checkbox {...restFieldProps} checked={!!fieldProps.value} error={error?.message} {...rest} label={label} />;
});
