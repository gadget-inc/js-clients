import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

type PolarisAutoNumberInputProps = AutoNumberInputProps & Partial<Omit<TextFieldProps, "value" | "onChange">>;

/**
 * A number input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoNumberInput field="count" />
 * </AutoForm>
 * ```
 * @param props.field - The number field API identifier.
 * @param props.label - Label of the number input.
 * @returns The AutoNumberInput component
 */
export const PolarisAutoNumberInput = autoInput((props: PolarisAutoNumberInputProps) => {
  const { type, metadata, value } = useStringInputController(props);
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
