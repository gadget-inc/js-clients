import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import type { Control } from "react-hook-form";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export const PolarisAutoNumberInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { field, control } = props;
  const { type, metadata } = useStringInputController({ field, control });
  const fieldType = type as TextFieldProps["type"];

  let step;
  if (
    fieldType === "number" &&
    metadata.configuration.__typename === "GadgetNumberConfig" &&
    metadata.configuration.decimals &&
    metadata.configuration.decimals > 0
  ) {
    step = Number(`0.${"0".repeat(metadata.configuration.decimals - 1)}1`);
  } else {
    step = "any";
  }

  return (
    <PolarisAutoTextInput
      step={step as any} // HTML input allow "any" as a step value, but the TS type from Polaris does not allow it, so we cast it to any type here.
      {...props}
    />
  );
};
