import { assert } from "@gadgetinc/api-client-core";
import { useCallback, useMemo } from "react";
import { useFieldArray } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
export const useHasManyThroughController = (props) => {
    const fieldMetadata = useFieldMetadata(props.field);
    const { path, metadata } = fieldMetadata;
    const configuration = metadata.configuration;
    const joinModelHasManyFieldApiIdentifier = assert(configuration.joinModelHasManyFieldApiIdentifier, "joinModelHasManyFieldApiIdentifier is required for hasManyThrough fields");
    const relatedModelOptions = useRelatedModelOptions({
        field: props.field,
        optionLabel: props.primaryLabel,
        secondaryLabel: props.secondaryLabel,
        tertiaryLabel: props.tertiaryLabel,
    });
    const fieldArrayPath = path.replace(metadata.apiIdentifier, joinModelHasManyFieldApiIdentifier);
    const fieldArray = useFieldArray({ name: fieldArrayPath, keyName: "_fieldArrayKey" });
    const records = useMemo(() => {
        return fieldArray.fields.map((field) => {
            const { _fieldArrayKey, ...rest } = field;
            return rest;
        });
    }, [fieldArray.fields]);
    const inverseRelatedModelField = useMemo(() => {
        return metadata.configuration.inverseRelatedModelField?.apiIdentifier;
    }, [metadata.configuration]);
    return {
        fieldArrayPath,
        fieldMetadata,
        fieldArray,
        records,
        relatedModelOptions,
        inverseRelatedModelField,
        joinModelField: joinModelHasManyFieldApiIdentifier,
        joinModelApiIdentifier: configuration.joinModel?.apiIdentifier,
    };
};
export const useHasManyThroughInputController = (props) => {
    const { fieldMetadata, fieldArray, records, relatedModelOptions, inverseRelatedModelField } = useHasManyThroughController(props);
    const { relatedModel } = relatedModelOptions;
    const { remove, append } = fieldArray;
    const selectedRecords = useMemo(() => {
        const siblingRecords = [];
        const seenIds = new Set();
        for (const record of records) {
            if (inverseRelatedModelField && record[inverseRelatedModelField] && !seenIds.has(record[inverseRelatedModelField].id)) {
                siblingRecords.push(record[inverseRelatedModelField]);
                seenIds.add(record[inverseRelatedModelField].id);
            }
        }
        return siblingRecords;
    }, [records, inverseRelatedModelField]);
    const errorMessage = relatedModel.error?.message;
    const isLoading = relatedModel.fetching;
    const onRemoveRecord = useCallback((record) => {
        const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
        if (index < 0) {
            return;
        }
        remove(index);
    }, [inverseRelatedModelField, records, remove]);
    const onSelectRecord = useCallback((record) => {
        const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
        if (index >= 0) {
            remove(index);
        }
        else if (inverseRelatedModelField) {
            append({
                [inverseRelatedModelField]: { ...record, _link: record.id },
            });
        }
    }, [inverseRelatedModelField, records, remove, append]);
    return {
        fieldMetadata,
        relatedModelOptions,
        selectedRecords,
        errorMessage,
        isLoading,
        fieldArray,
        onSelectRecord,
        onRemoveRecord,
    };
};
//# sourceMappingURL=useHasManyThroughController.js.map