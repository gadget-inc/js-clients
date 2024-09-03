import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import type { Control } from "react-hook-form";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../shared/sharedUtils.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export const PolarisAutoNumberInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { field, control } = props;
  const { type, metadata, value } = useStringInputController({ field, control });
  const fieldType = type as TextFieldProps["type"];

  const step =
    fieldType === "number" &&
    metadata.configuration.__typename === "GadgetNumberConfig" &&
    metadata.configuration.decimals &&
    metadata.configuration.decimals > 0
      ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
      : value
      ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
      : 1;

  return <PolarisAutoTextInput step={step} {...props} />;
};
