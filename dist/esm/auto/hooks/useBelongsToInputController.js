import { useCallback } from "react";
import { useFormContext, useWatch } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
export const useBelongsToInputController = (props) => {
    const { field } = props;
    const fieldMetadata = useFieldMetadata(field);
    const { path } = fieldMetadata;
    const { setValue } = useFormContext();
    const relatedModelOptions = useRelatedModelOptions(props);
    const { relatedModel } = relatedModelOptions;
    const value = useWatch({ name: path });
    const selectedRecord = value?.id ? value : undefined;
    const isLoading = relatedModel.fetching;
    const errorMessage = relatedModel.error?.message;
    const onSelectRecord = useCallback((record) => {
        console.log({ path, record });
        setValue(path, record);
    }, [path, setValue]);
    const onRemoveRecord = useCallback(() => {
        const { __typename, ...rest } = value;
        const nullifiedRest = Object.keys(rest).reduce((acc, key) => {
            acc[key] = null;
            return acc;
        }, {});
        setValue(path, { ...nullifiedRest, id: null, __typename });
    }, [path, setValue, value]);
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
//# sourceMappingURL=useBelongsToInputController.js.map