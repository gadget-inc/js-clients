import { type ComponentProps } from "react";
import { type AutoFileInputProps, type StringOnlyLabel } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoFileInputProps = StringOnlyLabel<AutoFileInputProps> & Partial<ComponentProps<"s-drop-zone">>;
/**
 * A file input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoFileInput field="fileField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the File field.
 * @param props.label - Label of the File input.
 * @returns The AutoFileInput component.
 */
export declare const PolarisWCAutoFileInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoFileInputProps>;
