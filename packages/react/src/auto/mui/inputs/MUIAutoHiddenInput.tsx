import React from "react";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
import { AutoHiddenInputProps } from "../../shared/AutoInputTypes.js";

/**
 * A hidden input for use within <AutoForm></AutoForm> components. The value is included in form submission without rendering a visible input.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHiddenInput field="fieldA" value="Value included in submission for fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The field API identifier
 * @param props.value - The value to be included in form submission
 * @returns The hidden input component
 */
export const MUIAutoHiddenInput = (props: AutoHiddenInputProps) => {
  const fieldProps = useHiddenInput(props);

  return <input type="hidden" {...fieldProps} />;
};
