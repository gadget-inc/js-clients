import { useMemo } from "react";
import { GadgetFieldType, } from "../../internal/gql/graphql.js";
import { isRelationshipField } from "../../use-table/helpers.js";
import { getOptionLabelsFromRecordLabel, } from "../interfaces/AutoRelationshipInputProps.js";
import { useMaybeFieldMetadata } from "./useFieldMetadata.js";
export const useSelectedPathsFromRecordLabel = (props) => {
    const { field, recordLabel } = props;
    const { metadata } = useMaybeFieldMetadata(field);
    const selectedPaths = useMemo(() => {
        if (!recordLabel || !metadata || !isRelationshipField(metadata)) {
            return [];
        }
        const fieldConfig = metadata.configuration;
        const selectedPaths = new Set();
        const defaultFieldsToSelect = fieldConfig.relatedModel?.fields
            .filter((field) => !isRelationshipField(field) && field.fieldType !== GadgetFieldType.Password)
            .map((field) => field.apiIdentifier) ?? [];
        getOptionLabelsFromRecordLabel(recordLabel)
            .flatMap((optionLabel) => getSelectedPathsFromOptionLabel(optionLabel, () => defaultFieldsToSelect))
            .forEach((path) => selectedPaths.add(path));
        return Array.from(selectedPaths);
    }, [recordLabel, metadata]);
    return selectedPaths;
};
export const getSelectedPathsFromOptionLabel = (optionLabel, getFieldsToSelectOnRecordLabelCallback) => {
    if (!optionLabel) {
        return [];
    }
    if (Array.isArray(optionLabel)) {
        return optionLabel;
    }
    if (typeof optionLabel === "string") {
        return [optionLabel];
    }
    // Callback instead of explicit selection
    return getFieldsToSelectOnRecordLabelCallback?.().filter((field) => !recordLabelCallbackOmittedFields.includes(field)) ?? [];
};
const recordLabelCallbackOmittedFields = ["createdAt", "updatedAt"];
//# sourceMappingURL=useSelectedPathsFromRecordLabel.js.map