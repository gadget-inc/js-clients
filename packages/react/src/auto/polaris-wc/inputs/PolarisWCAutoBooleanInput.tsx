import React, { type ComponentProps, useCallback } from "react";
import { autoInput } from "../../AutoInput.js";
import { useBooleanInputController } from "../../hooks/useBooleanInputController.js";
import type { StringOnlyLabel, AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";

export type PolarisWCAutoBooleanInputProps = StringOnlyLabel<AutoBooleanInputProps> & Partial<ComponentProps<"s-checkbox">>;

/**
 * A boolean checkbox within AutoForm using Polaris Web Components.
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
export const PolarisWCAutoBooleanInput = autoInput((props: PolarisWCAutoBooleanInputProps) => {
  const { field: _field, control: _control, disabled, label: _label, ...rest } = props;
  const { error, fieldProps, metadata } = useBooleanInputController(props);

  const { onChange } = fieldProps;
  const handleChange = useCallback(
    (event: Event) => {
      const target = event.currentTarget as any;
      onChange(target.checked ?? false);
    },
    [onChange]
  );

  // Ensure label is always a string - metadata.name should be string but TypeScript infers it could be ReactNode
  const labelValue: string = typeof props.label === "string" ? props.label : String(metadata.name ?? "");

  return (
    <s-checkbox
      checked={!!fieldProps.value}
      disabled={disabled}
      error={error?.message}
      label={labelValue}
      onChange={handleChange}
      {...rest}
    />
  );
});
