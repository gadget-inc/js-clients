import { useAutoFormMetadata } from "../AutoFormContext.js";
export const useFieldMetadata = (fieldApiIdentifier) => {
    const { model, fields } = useAutoFormMetadata();
    const isModelAction = model && model.apiIdentifier;
    const metaDataPath = isModelAction
        ? model.apiIdentifier + "." + fieldApiIdentifier // Model action
        : fieldApiIdentifier; // Global action
    const targetFieldMetadata = fields.find((field) => field.path === metaDataPath || isFieldCustomParamOnModelAction(fieldApiIdentifier, field));
    if (!targetFieldMetadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return targetFieldMetadata;
};
const isFieldCustomParamOnModelAction = (fieldApiIdentifier, fieldCandidate) => fieldCandidate.metadata.__typename !== "GadgetModelField" && fieldCandidate.path === fieldApiIdentifier;
//# sourceMappingURL=useFieldMetadata.js.map