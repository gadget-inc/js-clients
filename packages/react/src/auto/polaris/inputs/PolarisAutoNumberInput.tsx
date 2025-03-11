import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
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
export const PolarisAutoNumberInput = autoInput((props: PolarisAutoNumberInputProps) => {
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
});
