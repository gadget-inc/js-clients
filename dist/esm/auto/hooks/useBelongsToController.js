import { useCallback } from "react";
import { useController, useWatch } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
export const useBelongsToController = (props) => {
    const { field, primaryLabel, secondaryLabel, tertiaryLabel } = props;
    const fieldMetadata = useFieldMetadata(field);
    const { path } = fieldMetadata;
    const record = useWatch({ name: path });
    const relatedModelOptions = useRelatedModelOptions({ field, optionLabel: primaryLabel, secondaryLabel, tertiaryLabel });
    const isLoading = relatedModelOptions.relatedModel.fetching;
    const errorMessage = relatedModelOptions.relatedModel.error?.message;
    return {
        record,
        fieldMetadata,
        relatedModelOptions,
        isLoading,
        errorMessage,
    };
};
export const useBelongsToInputController = (props) => {
    const { field, control, optionLabel } = props;
    const { fieldMetadata, relatedModelOptions, isLoading, errorMessage } = useBelongsToController({ field, primaryLabel: optionLabel });
    const { path } = fieldMetadata;
    const { field: { value, onChange }, } = useController({
        name: path + ".id",
        control,
    });
    const selectedRecord = relatedModelOptions.relatedModel.records.find((record) => record.id === value);
    const onSelectRecord = useCallback((record) => {
        onChange(record.id);
    }, [onChange]);
    const onRemoveRecord = useCallback(() => {
        onChange(null);
    }, [onChange]);
    return {
        fieldMetadata,
        relatedModelOptions,
        onSelectRecord,
        onRemoveRecord,
        selectedRecord,
        isLoading,
        errorMessage,
    };
};
//# sourceMappingURL=useBelongsToController.js.map