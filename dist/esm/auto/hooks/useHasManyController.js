import { useCallback, useMemo } from "react";
import { useFieldArray, useFormContext } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
export const useHasManyController = (props) => {
    const { field } = props;
    const { watch } = useFormContext();
    const fieldMetadata = useFieldMetadata(field);
    const { path } = fieldMetadata;
    const fieldArray = useFieldArray({ name: path, keyName: "_fieldArrayKey" });
    const records = watch(path) ?? [];
    return {
        fieldMetadata,
        fieldArray,
        records,
    };
};
export const useHasManyInputController = (props) => {
    const { fieldMetadata, fieldArray, records } = useHasManyController(props);
    const { metadata } = fieldMetadata;
    const inverseFieldApiIdentifier = useMemo(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
    }, [metadata.configuration]);
    const { remove, append, update } = fieldArray;
    const relatedModelOptions = useRelatedModelOptions(props);
    const { relatedModel } = relatedModelOptions;
    const errorMessage = relatedModel.error?.message;
    const isLoading = relatedModel.fetching;
    const selectedRecords = useMemo(() => {
        return (records ?? []).filter((value) => !("_unlink" in value && value._unlink));
    }, [records]);
    const onRemoveRecord = useCallback((record) => {
        const index = records.findIndex((value) => value.id === record.id);
        if (index < 0) {
            return;
        }
        if ("_link" in record) {
            remove(index);
        }
        else {
            update(index, {
                ...record,
                _unlink: { id: record.id, inverseFieldApiIdentifier },
            });
        }
    }, [inverseFieldApiIdentifier, records, remove, update]);
    const onSelectRecord = useCallback((record) => {
        const index = (records ?? []).findIndex((value) => value.id === record.id);
        if (index >= 0) {
            const value = records[index];
            if ("_unlink" in value && value._unlink) {
                const { _unlink, ...rest } = value;
                update(index, rest);
            }
            else {
                onRemoveRecord(record);
            }
        }
        else {
            append({
                ...record,
                _link: record.id,
            });
        }
    }, [records, onRemoveRecord, update, append]);
    return {
        fieldMetadata,
        relatedModelOptions,
        selectedRecords,
        errorMessage,
        isLoading,
        onSelectRecord,
        onRemoveRecord,
    };
};
//# sourceMappingURL=useHasManyController.js.map