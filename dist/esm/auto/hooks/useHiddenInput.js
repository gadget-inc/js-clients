import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
export const useHiddenInput = (props) => {
    const { field, value } = props;
    const { path, metadata } = useFieldMetadata(field);
    const { setValue, formState } = useFormContext();
    useEffect(() => {
        let setAtPath = path;
        if (metadata.fieldType == GadgetFieldType.BelongsTo) {
            setAtPath = `${path}.id`;
        }
        setValue(setAtPath, value, {
            shouldDirty: true,
        });
    }, [formState.defaultValues, path, setValue, value, metadata.fieldType]);
    return {
        value,
        name: metadata.name,
    };
};
//# sourceMappingURL=useHiddenInput.js.map