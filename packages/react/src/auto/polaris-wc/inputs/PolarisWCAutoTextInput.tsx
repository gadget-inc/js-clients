import React, { useCallback } from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";

export type PolarisWCAutoTextInputProps = AutoTextInputProps & {
  type?: string;
  step?: number;
  min?: number;
  placeholder?: string;
  disabled?: boolean;
};

export type PolarisWCTextInputPropsParams = (
  | AutoTextInputProps
  | { field: string; label?: unknown; afterChange?: (...args: any[]) => void }
) & {
  placeholder?: string;
  disabled?: boolean;
};

export type PolarisWCTextInputPropsResult = {
  label: string;
  textFieldProps: {
    label: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    required: boolean | undefined;
    error: string | undefined;
    onChange: (event: Event) => void;
  };
  stringInputController: ReturnType<typeof useStringInputController>;
};

/**
 * Shared hook for Polaris WC text-like inputs (text and number).
 * Sets up string input controller, change handler, label, and base text field props.
 */
export function usePolarisWCTextInputProps(props: PolarisWCTextInputPropsParams): PolarisWCTextInputPropsResult {
  const stringInputController = useStringInputController(props as AutoTextInputProps);

  const handleChange = useCallback(
    (event: Event) => {
      const target = event.currentTarget as HTMLInputElement & { value?: string };
      stringInputController.onChange(target.value ?? "");
    },
    [stringInputController.onChange]
  );

  const label: string = typeof props.label === "string" ? props.label : String(stringInputController.metadata.name ?? "");

  const textFieldProps: PolarisWCTextInputPropsResult["textFieldProps"] = {
    label,
    value: stringInputController.value ?? "",
    placeholder: props.placeholder ?? stringInputController.placeholder,
    disabled: props.disabled,
    required: stringInputController.metadata.requiredArgumentForInput,
    error: stringInputController.errorMessage,
    onChange: handleChange,
  };

  return { label, textFieldProps, stringInputController };
}

/**
 * A text input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoTextInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The field API identifier.
 * @param props.label - Label of the input.
 * @returns The AutoTextInput component.
 */
export const PolarisWCAutoTextInput = autoInput((props: PolarisWCAutoTextInputProps) => {
  const { textFieldProps, stringInputController } = usePolarisWCTextInputProps(props);

  const finalTextFieldProps: Record<string, unknown> = { ...textFieldProps, id: stringInputController.id };

  return <s-text-field {...finalTextFieldProps} autocomplete="off" />;
});

/**
 * An email input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEmailInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The email field API identifier
 * @param props.label - Label of the email input.
 * @returns The AutoEmailInput component
 */
export const PolarisWCAutoEmailInput = (props: PolarisWCAutoTextInputProps) => <PolarisWCAutoTextInput {...props} />;

/**
 * A string input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoStringInput field="name" />
 * </AutoForm>
 * ```
 * @param props.field - The string field API identifier.
 * @param props.label - Label of the string input.
 * @returns The AutoStringInput component
 */
export const PolarisWCAutoStringInput = (props: PolarisWCAutoTextInputProps) => <PolarisWCAutoTextInput {...props} />;

/**
 * A url input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoUrlInput field="website" />
 * </AutoForm>
 * ```
 * @param props.field - The url field API identifier.
 * @param props.label - Label of the url input.
 * @returns The AutoUrlInput component
 */
export const PolarisWCAutoUrlInput = (props: PolarisWCAutoTextInputProps) => <PolarisWCAutoTextInput {...props} />;
