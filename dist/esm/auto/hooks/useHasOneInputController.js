import { useCallback, useMemo } from "react";
import { useController } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
export const useHasOneInputController = (props) => {
    const { field, control } = props;
    const fieldMetadata = useFieldMetadata(field);
    const { metadata, path } = fieldMetadata;
    const { field: fieldProps, fieldState: { error: fieldError }, } = useController({
        name: path,
        control,
    });
    const value = fieldProps.value;
    const selectedRecord = useMemo(() => {
        if (!value) {
            return undefined;
        }
        return "_unlink" in value && value._unlink ? undefined : value;
    }, [value]);
    console.log({ metadata, path, value, selectedRecord });
    const inverseFieldApiIdentifier = useMemo(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
    }, [metadata.configuration]);
    const relatedModelOptions = useRelatedModelOptions(props);
    const { options, pagination, search, relatedModel } = relatedModelOptions;
    const errorMessage = fieldError?.message || relatedModel.error?.message;
    const isLoading = relatedModel.fetching;
    const onSelectRecord = useCallback((record) => {
        const isAlreadySelected = value?.id === record.id;
        if (value && isAlreadySelected) {
            if ("_unlink" in value && value._unlink) {
                const { _unlink, ...rest } = value;
                fieldProps.onChange(rest);
            }
            else {
                fieldProps.onChange({ ...value, _unlink: { id: record.id, inverseFieldApiIdentifier } });
            }
        }
        else {
            fieldProps.onChange({ ...record, _link: record.id });
        }
    }, [value, inverseFieldApiIdentifier, fieldProps]);
    const onRemoveRecord = useCallback((record) => {
        if (value && "_unlink" in value && value._unlink) {
            const { _unlink, ...rest } = value;
            fieldProps.onChange(rest);
        }
        else {
            fieldProps.onChange({ ...value, _unlink: { id: record.id, inverseFieldApiIdentifier } });
        }
    }, [value, inverseFieldApiIdentifier, fieldProps]);
    return {
        fieldMetadata,
        relatedModelOptions,
        selectedRecord,
        errorMessage,
        isLoading,
        onSelectRecord,
        onRemoveRecord,
    };
};
//# sourceMappingURL=useHasOneInputController.js.map