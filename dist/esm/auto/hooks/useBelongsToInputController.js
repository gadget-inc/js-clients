import { useCallback, useEffect, useMemo } from "react";
import { useController } from "react-hook-form";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModelOptions.js";
export const useBelongsToInputController = (props) => {
    const { field, control } = props;
    const fieldMetadata = useFieldMetadata(field);
    const { path } = fieldMetadata;
    const { findBy } = useAutoFormMetadata();
    const relatedModelOptions = useRelatedModelOptions(props);
    const { selected, relatedModel } = relatedModelOptions;
    const { field: fieldProps, fieldState: { error: fieldError }, } = useController({
        name: path + ".id",
        control,
    });
    const isLoading = selected.fetching || relatedModel.fetching;
    const errorMessage = fieldError?.message || selected.error?.message || relatedModel.error?.message;
    const retrievedSelectedRecordId = useMemo(() => {
        return !selected.fetching && selected.records && selected.records.length ? selected.records[0][`${field}Id`] : null;
    }, [selected.fetching]);
    const selectedRelatedModelRecordMissing = useMemo(() => {
        if (!findBy) {
            // Without a find by, there is no retrieved record ID
            return false;
        }
        return !selected.fetching && selected.records && selected.records.length
            ? !selected.records[0].id && !relatedModel.records.map((r) => r.id).includes(fieldProps.value)
            : true;
    }, [findBy, selected.fetching, fieldProps.value, relatedModel.records]);
    useEffect(() => {
        // Initializing the controller with the selected record ID from the DB
        if (!selected.fetching && retrievedSelectedRecordId) {
            fieldProps.onChange(retrievedSelectedRecordId);
        }
    }, [selected.fetching]);
    const onSelectRecord = useCallback((recordId) => {
        fieldProps.onChange(recordId);
    }, []);
    const onRemoveRecord = useCallback(() => {
        fieldProps.onChange(null);
    }, []);
    return {
        fieldMetadata,
        relatedModelOptions,
        onSelectRecord,
        onRemoveRecord,
        selectedRecordId: fieldProps.value,
        selectedRelatedModelRecordMissing,
        isLoading,
        errorMessage,
    };
};
//# sourceMappingURL=useBelongsToInputController.js.map