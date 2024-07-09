import type { TextFieldProps } from "@shopify/polaris";
import { TextField } from "@shopify/polaris";
import React from "react";
import type { Control } from "react-hook-form";
import { useFocus } from "../../../useFocus.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";

export const PolarisAutoJSONInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { onStringValueChange, error, stringValue, originalController } = useJSONInputController(props);
  const [isFocused, focusProps] = useFocus();

  const { field: _field, control: _control, ...restOfProps } = props;
  const { type: _type, ...restOfOriginalController } = originalController;

  return (
    <>
      <TextField
        multiline={4}
        monospaced
        {...getPropsWithoutRef(restOfOriginalController)}
        value={stringValue}
        onChange={onStringValueChange}
        error={!isFocused && error && `Invalid JSON: ${error.message}`}
        {...getPropsWithoutRef(focusProps)}
        {...restOfProps}
      />
    </>
  );
};
