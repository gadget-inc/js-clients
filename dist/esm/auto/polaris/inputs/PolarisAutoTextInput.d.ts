import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";
type PolarisAutoTextInputProps = AutoTextInputProps & Partial<TextFieldProps>;
/**
 * A text input within AutoForm.
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
export declare const PolarisAutoTextInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoTextInputProps>;
/**
 * An email input within AutoForm.
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
export declare const PolarisAutoEmailInput: (props: AutoTextInputProps) => React.JSX.Element;
/**
 * A string input within AutoForm.
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
export declare const PolarisAutoStringInput: (props: AutoTextInputProps) => React.JSX.Element;
/**
 * A url input within AutoForm.
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
export declare const PolarisAutoUrlInput: (props: AutoTextInputProps) => React.JSX.Element;
export {};
