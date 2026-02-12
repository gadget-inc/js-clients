import React, { type ComponentProps } from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import type { AutoNumberInputProps, StringOnlyLabel } from "../../shared/AutoInputTypes.js";
import { usePolarisWCTextInputProps } from "./PolarisWCAutoTextInput.js";

export type PolarisWCAutoNumberInputProps = StringOnlyLabel<AutoNumberInputProps> & Partial<ComponentProps<"s-number-field">>;

/**
 * A number input within AutoForm using Polaris Web Components.
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
export const PolarisWCAutoNumberInput = autoInput((props: PolarisWCAutoNumberInputProps) => {
  const { textFieldProps, stringInputController } = usePolarisWCTextInputProps(props);
  const { type, metadata, value } = stringInputController;

  const step =
    type === "number" &&
    metadata.configuration.__typename === "GadgetNumberConfig" &&
    metadata.configuration.decimals &&
    metadata.configuration.decimals > 0
      ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
      : value
        ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
        : 1;

  return (
    <s-number-field
      id={stringInputController.id}
      step={step}
      {...textFieldProps}
      value={textFieldProps.value}
      placeholder={props.placeholder ?? textFieldProps.placeholder}
    />
  );
});
