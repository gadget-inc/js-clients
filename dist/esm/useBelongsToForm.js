import { useBelongsToController } from "./auto/hooks/useBelongsToController.js";
import { useRequiredChildComponentsValidator } from "./auto/hooks/useRequiredChildComponentsValidator.js";
import { useSingleRelatedRecordRelationshipForm } from "./useSingleRelatedRecordRelationshipForm.js";
export const useBelongsToForm = (props) => {
    useRequiredChildComponentsValidator(props, "AutoBelongsToForm");
    const { record, relatedModelOptions } = useBelongsToController(props);
    const form = useSingleRelatedRecordRelationshipForm({ ...props, relationshipController: { record, relatedModelOptions } });
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    return { ...form, record, hasRecord };
};
//# sourceMappingURL=useBelongsToForm.js.map