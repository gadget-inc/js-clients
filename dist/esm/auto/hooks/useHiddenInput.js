import { useEffect } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useFormContext } from "../../useActionForm.js";
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
        if (metadata.fieldType == GadgetFieldType.File) {
            throw new Error("Hidden inputs don't support file fields -- please use a real input so the upload is managed properly");
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