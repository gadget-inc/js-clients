import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoTextInputProps = AutoTextInputProps & {
    type?: string;
    step?: number;
    min?: number;
    placeholder?: string;
    disabled?: boolean;
};
export type PolarisWCTextInputPropsParams = (AutoTextInputProps | {
    field: string;
    label?: unknown;
    afterChange?: (...args: any[]) => void;
}) & {
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
export declare function usePolarisWCTextInputProps(props: PolarisWCTextInputPropsParams): PolarisWCTextInputPropsResult;
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
export declare const PolarisWCAutoTextInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoTextInputProps>;
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
export declare const PolarisWCAutoEmailInput: (props: PolarisWCAutoTextInputProps) => React.JSX.Element;
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
export declare const PolarisWCAutoStringInput: (props: PolarisWCAutoTextInputProps) => React.JSX.Element;
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
export declare const PolarisWCAutoUrlInput: (props: PolarisWCAutoTextInputProps) => React.JSX.Element;
