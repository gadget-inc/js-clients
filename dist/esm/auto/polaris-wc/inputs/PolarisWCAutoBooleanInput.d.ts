import { type ComponentProps } from "react";
import type { StringOnlyLabel, AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoBooleanInputProps = StringOnlyLabel<AutoBooleanInputProps> & Partial<ComponentProps<"s-checkbox">>;
/**
 * A boolean checkbox within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBooleanInput field="isActive" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Boolean field.
 * @param props.label - Label of the Boolean checkbox.
 * @returns The AutoBooleanInput component.
 */
export declare const PolarisWCAutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoBooleanInputProps>;
