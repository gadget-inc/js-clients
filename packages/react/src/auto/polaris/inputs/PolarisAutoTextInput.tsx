import type { TextFieldProps } from "@shopify/polaris";
import { TextField } from "@shopify/polaris";
import React from "react";
import type { Control } from "react-hook-form";
import { getPropsWithoutRef } from "../../../utils.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";

export const PolarisAutoTextInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { field, control } = props;
  const stringInputController = useStringInputController({ field, control });

  return (
    <TextField
      {...getPropsWithoutRef(stringInputController)}
      requiredIndicator={stringInputController.metadata.requiredArgumentForInput}
      type={stringInputController.type as TextFieldProps["type"]}
      error={stringInputController.errorMessage}
      {...props}
      label={props.label || stringInputController.metadata.name}
    />
  );
};
