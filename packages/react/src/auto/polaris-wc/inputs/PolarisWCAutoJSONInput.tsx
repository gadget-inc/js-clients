// import type * as PolarisTypes from "@shopify/polaris-types";
import React, { useCallback } from "react";
import { useFocus } from "../../../useFocus.js";
import { autoInput } from "../../AutoInput.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
import { type AutoJSONInputProps } from "../../shared/AutoInputTypes.js";

export type PolarisWCAutoJSONInputProps = AutoJSONInputProps & {
  placeholder?: string;
  disabled?: boolean;
};

/**
 * A JSON editor within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoJSONInput field="fieldA" label="Field A" />
 * </AutoForm>
 * ```
 * @param props.field - The JSON field API identifier.
 * @param props.label - Label of the JSON editor.
 * @returns The AutoJSONInput component
 */
export const PolarisWCAutoJSONInput = autoInput((props: PolarisWCAutoJSONInputProps) => {
  const { placeholder, disabled, ...restProps } = props;
  const [isFocused, focusProps] = useFocus();
  const { type: _type, id, errorMessage, label: controllerLabel, metadata, value, onChange } = useJSONInputController(restProps);

  const handleChange = useCallback(
    (event: Event) => {
      const target = event.currentTarget as any;
      onChange(target.value ?? "");
    },
    [onChange]
  );

  // Ensure label is always a string
  const label: string = typeof props.label === "string" ? props.label : String(controllerLabel ?? "");
  const displayError = !isFocused && errorMessage ? `Invalid JSON: ${errorMessage}` : undefined;

  const handleFocus = useCallback(
    (event: Event) => {
      focusProps.onFocus?.(event as any);
    },
    [focusProps.onFocus]
  );

  const handleBlur = useCallback(
    (event: Event) => {
      focusProps.onBlur?.(event as any);
    },
    [focusProps.onBlur]
  );

  return (
    <s-text-area
      id={id}
      label={label}
      value={value ?? ""}
      rows={4}
      placeholder={placeholder}
      disabled={disabled}
      required={metadata.requiredArgumentForInput}
      error={displayError}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
});
