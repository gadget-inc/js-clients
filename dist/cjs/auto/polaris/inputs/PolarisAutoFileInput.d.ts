import type { DropZoneProps } from "@shopify/polaris";
import { type AutoFileInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisAutoFileInputProps = AutoFileInputProps & Omit<DropZoneProps, "allowMultiple">;
/**
 * A file input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoFileInput field="fileField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the File field.
 * @param props.label - Label of the File input.
 * @param props.onChange - Called when the file input changes.
 * @returns The AutoFileInput component.
 */
export declare const PolarisAutoFileInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoFileInputProps>;
