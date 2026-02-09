// Import Polaris types for web components - this augments JSX.IntrinsicElements for s-* elements
import type {} from "@shopify/polaris-types";
export { useAutoFormMetadata } from "../AutoFormContext.js";
export type { AutoRichTextInputProps } from "../shared/AutoRichTextInputProps.js";
export { PolarisWCAutoButton as AutoButton, PolarisWCAutoButton } from "./PolarisWCAutoButton.js";
export {
  PolarisWCAutoForm as AutoForm,
  PolarisWCAutoFormSkeleton as AutoFormSkeleton,
  PolarisWCAutoForm,
  PolarisWCAutoFormSkeleton,
} from "./PolarisWCAutoForm.js";
export type { PolarisWCAutoFormProps as AutoFormProps, PolarisWCAutoFormProps } from "./PolarisWCAutoForm.js";
export { PolarisWCAutoTable as AutoTable, PolarisWCAutoTable } from "./PolarisWCAutoTable.js";
export type { PolarisWCAutoTableProps as AutoTableProps, PolarisWCAutoTableProps } from "./PolarisWCAutoTable.js";
export { PolarisWCModal } from "./commonComponents/PolarisWCModal.js";
export type { PolarisWCModalProps } from "./commonComponents/PolarisWCModal.js";
export { PolarisWCPopover } from "./commonComponents/PolarisWCPopover.js";
export type { PolarisWCPopoverPosition, PolarisWCPopoverProps } from "./commonComponents/PolarisWCPopover.js";
export { PolarisWCTruncatedTextWithTooltip } from "./commonComponents/PolarisWCTruncatedTextWithTooltip.js";
export type { PolarisWCTruncatedTextWithTooltipProps } from "./commonComponents/PolarisWCTruncatedTextWithTooltip.js";
export { PolarisWCAutoRichTextInput as AutoRichTextInput } from "./inputs/LazyLoadedPolarisWCAutoRichTextInput.js";
export { PolarisWCAutoBooleanInput as AutoBooleanInput } from "./inputs/PolarisWCAutoBooleanInput.js";
export {
  PolarisWCAutoDateTimePicker as AutoDateTimeInput,
  PolarisWCAutoDateTimePicker as AutoDateTimePicker,
} from "./inputs/PolarisWCAutoDateTimePicker.js";
export { PolarisWCAutoEncryptedStringInput as AutoEncryptedStringInput } from "./inputs/PolarisWCAutoEncryptedStringInput.js";
export { PolarisWCAutoEnumInput as AutoEnumInput } from "./inputs/PolarisWCAutoEnumInput.js";
export { PolarisWCAutoFileInput as AutoFileInput } from "./inputs/PolarisWCAutoFileInput.js";
export { PolarisWCAutoHiddenInput as AutoHiddenInput } from "./inputs/PolarisWCAutoHiddenInput.js";
export { PolarisWCAutoInput as AutoInput, PolarisWCAutoInput } from "./inputs/PolarisWCAutoInput.js";
export { PolarisWCAutoJSONInput as AutoJSONInput } from "./inputs/PolarisWCAutoJSONInput.js";
export { PolarisWCAutoNumberInput as AutoNumberInput } from "./inputs/PolarisWCAutoNumberInput.js";
export { PolarisWCAutoPasswordInput as AutoPasswordInput } from "./inputs/PolarisWCAutoPasswordInput.js";
export { PolarisWCAutoRolesInput as AutoRolesInput } from "./inputs/PolarisWCAutoRolesInput.js";
export {
  PolarisWCAutoEmailInput as AutoEmailInput,
  PolarisWCAutoStringInput as AutoStringInput,
  PolarisWCAutoUrlInput as AutoUrlInput,
} from "./inputs/PolarisWCAutoTextInput.js";
export { PolarisWCCombobox as Combobox, PolarisWCCombobox, PolarisWCComboboxOption } from "./inputs/PolarisWCCombobox.js";
export type {
  PolarisWCComboboxProps as ComboboxProps,
  PolarisWCComboboxOptionProps,
  PolarisWCComboboxProps,
} from "./inputs/PolarisWCCombobox.js";
export { PolarisWCAutoSubmit as AutoSubmit, PolarisWCAutoSubmit } from "./submit/PolarisWCAutoSubmit.js";
export {
  PolarisWCSubmitErrorBanner,
  PolarisWCSubmitResultBanner,
  PolarisWCSubmitSuccessfulBanner,
  PolarisWCSubmitErrorBanner as SubmitErrorBanner,
  PolarisWCSubmitResultBanner as SubmitResultBanner,
  PolarisWCSubmitSuccessfulBanner as SubmitSuccessfulBanner,
} from "./submit/PolarisWCSubmitResultBanner.js";

// Relationship form components
export {
  PolarisWCAutoBelongsToForm as AutoBelongsToForm,
  PolarisWCAutoBelongsToForm,
} from "./inputs/relationships/PolarisWCAutoBelongsToForm.js";
export {
  PolarisWCAutoBelongsToInput as AutoBelongsToInput,
  PolarisWCAutoBelongsToInput,
} from "./inputs/relationships/PolarisWCAutoBelongsToInput.js";
export { PolarisWCAutoHasManyForm as AutoHasManyForm, PolarisWCAutoHasManyForm } from "./inputs/relationships/PolarisWCAutoHasManyForm.js";
export {
  PolarisWCAutoHasManyInput as AutoHasManyInput,
  PolarisWCAutoHasManyInput,
} from "./inputs/relationships/PolarisWCAutoHasManyInput.js";
export {
  PolarisWCAutoHasManyThroughForm as AutoHasManyThroughForm,
  PolarisWCAutoHasManyThroughForm,
} from "./inputs/relationships/PolarisWCAutoHasManyThroughForm.js";
export {
  PolarisWCAutoHasManyThroughInput as AutoHasManyThroughInput,
  PolarisWCAutoHasManyThroughInput,
} from "./inputs/relationships/PolarisWCAutoHasManyThroughInput.js";
export { PolarisWCAutoHasOneForm as AutoHasOneForm, PolarisWCAutoHasOneForm } from "./inputs/relationships/PolarisWCAutoHasOneForm.js";
export { PolarisWCAutoHasOneInput as AutoHasOneInput, PolarisWCAutoHasOneInput } from "./inputs/relationships/PolarisWCAutoHasOneInput.js";
