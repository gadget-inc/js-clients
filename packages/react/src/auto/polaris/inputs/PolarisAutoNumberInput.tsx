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

const getStepFromNumberOfDecimals = (numberOfDecimals: number) =>
  numberOfDecimals === 0 ? 1 : Number(`0.${"0".repeat(numberOfDecimals - 1)}1`);

const countNumberOfDecimals = (value: string) => {
  if (value.includes("e")) {
    // +e scientific notation for large numbers does not get decimal steps
    return 0;
  }
  const [, decimals] = value.split(".");
  return decimals?.length ?? 0;
};
