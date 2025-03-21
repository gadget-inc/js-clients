import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
import { type AutoHiddenInputProps } from "../../shared/AutoInputTypes.js";

/**
 * A hidden input within AutoForm. The value is included in form submission without rendering an input.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHiddenInput field="fieldA" value="Value included in submission for fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of field.
 * @param props.value - The value included in form submission.
 * @returns The AutoHiddenInput component.
 */
export const PolarisAutoHiddenInput = autoInput((props: AutoHiddenInputProps) => {
  const fieldProps = useHiddenInput(props);

  return <input type="hidden" {...fieldProps} />;
});
