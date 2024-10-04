import type { TextFieldProps } from "@shopify/polaris";
import { TextField } from "@shopify/polaris";
import React from "react";
import type { Control } from "react-hook-form";
import { useFocus } from "../../../useFocus.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";

export const PolarisAutoJSONInput = autoInput(
  (
    props: {
      field: string; // The field API identifier
      control?: Control<any>;
    } & Partial<Omit<TextFieldProps, "onChange">>
  ) => {
    const [isFocused, focusProps] = useFocus();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, errorMessage, ...controller } = useJSONInputController(props);

    const label = props.label ?? controller.label;
    return (
      <>
        <TextField
          multiline={4}
          monospaced
          error={!isFocused && errorMessage && `Invalid JSON: ${errorMessage}`}
          {...getPropsWithoutRef(controller)}
          {...getPropsWithoutRef(focusProps)}
          {...restOfProps}
          label={label}
        />
      </>
    );
  }
);
