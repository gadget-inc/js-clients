export type { OptionsType } from "@gadgetinc/client-hooks";
export { type AutoInputComponent } from "../AutoInput.js";
export type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
export type {
  AutoHasManyThroughFormProps,
  AutoRelationshipFormProps,
  AutoRelationshipInputProps,
} from "../interfaces/AutoRelationshipInputProps.js";
export type {
  AutoBooleanInputProps,
  AutoDateTimeInputProps,
  AutoEncryptedStringInputProps,
  AutoEnumInputProps,
  AutoFileInputProps,
  AutoHiddenInputProps,
  AutoIdInputProps,
  AutoInputProps,
  AutoJSONInputProps,
  AutoNumberInputProps,
  AutoPasswordInputProps,
  AutoRolesInputProps,
  AutoTextInputProps,
} from "../shared/AutoInputTypes.js";
export type { AutoRichTextInputProps } from "../shared/AutoRichTextInputProps.js";
export { GadgetShadcnTailwindSafelist } from "./GadgetShadcnTailwindSafelist.js";
export type { ShadcnAutoFormProps as AutoFormProps } from "./ShadcnAutoForm.js";
export type { ShadcnAutoTableProps as AutoTableProps } from "./ShadcnAutoTable.js";
export * from "./elements.js";
export type { DatePickerProps } from "./inputs/ShadcnAutoDateTimePicker.js";
import { makeAutoButton } from "./ShadcnAutoButton.js";
import { makeAutoForm } from "./ShadcnAutoForm.js";
import { makeAutoTable } from "./ShadcnAutoTable.js";
import type { ShadcnElements } from "./elements.js";

/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export const makeAutocomponents = (elements: ShadcnElements) => {
  return {
    AutoButton: makeAutoButton(elements),
    AutoTable: makeAutoTable(elements),
    ...makeAutoForm(elements),
  };
};
