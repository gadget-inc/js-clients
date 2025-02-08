import { useBelongsToController } from "./auto/hooks/useBelongsToController.js";
import { useRequiredChildComponentsValidator } from "./auto/hooks/useRequiredChildComponentsValidator.js";
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
import { useSingleRelatedRecordRelationshipForm } from "./useSingleRelatedRecordRelationshipForm.js";

export const useBelongsToForm = (props: {
  field: string;
  children: React.ReactNode;
  primaryLabel?: OptionLabel;
  secondaryLabel?: OptionLabel;
  tertiaryLabel?: OptionLabel;
}) => {
  useRequiredChildComponentsValidator(props, "AutoBelongsToForm");
  const { record, relatedModelOptions } = useBelongsToController(props);

  const form = useSingleRelatedRecordRelationshipForm({ ...props, relationshipController: { record, relatedModelOptions } });

  const hasRecord = !!(record && !("_unlink" in record && record._unlink));

  return { ...form, record, hasRecord };
};
