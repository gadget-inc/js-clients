import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

type PolarisAutoNumberInputProps = AutoNumberInputProps & Partial<TextFieldProps>;

/**
 * A number input component for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoNumberInput field="count" />
 * </AutoForm>
 * ```
 * @param props.field - The number field API identifier
 * @param props.label - The label of the number input component
 * @returns The number input component
 */
export const PolarisAutoNumberInput = (props: PolarisAutoNumberInputProps) => {
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
