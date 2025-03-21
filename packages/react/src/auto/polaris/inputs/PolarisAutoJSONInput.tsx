import type { TextFieldProps } from "@shopify/polaris";
import { TextField } from "@shopify/polaris";
import React from "react";
import { useFocus } from "../../../useFocus.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
import { type AutoJSONInputProps } from "../../shared/AutoInputTypes.js";

type PolarisAutoJSONInputProps = AutoJSONInputProps & Partial<Omit<TextFieldProps, "onChange">>;

/**
 * A JSON editor within AutoForm.
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
export const PolarisAutoJSONInput = autoInput((props: PolarisAutoJSONInputProps) => {
  const [isFocused, focusProps] = useFocus();
  const { field: _field, control: _control, ...restOfProps } = props;
  const { type: _type, errorMessage, ...controller } = useJSONInputController(props);

  const label = props.label ?? controller.label;
  return (
    <>
      <TextField
        multiline={4}
        monospaced
        requiredIndicator={controller.metadata.requiredArgumentForInput}
        error={!isFocused && errorMessage && `Invalid JSON: ${errorMessage}`}
        {...getPropsWithoutRef(controller)}
        {...getPropsWithoutRef(focusProps)}
        {...restOfProps}
        label={label}
      />
    </>
  );
});
