import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useFieldMetadata } from "./useFieldMetadata.js";
export const useHiddenInput = (props) => {
    const { field, value } = props;
    const { path, metadata } = useFieldMetadata(field);
    const { setValue, formState } = useFormContext();
    useEffect(() => {
        setValue(path, value, {
            shouldDirty: true,
        });
    }, [formState.defaultValues, path, setValue, value]);
    return {
        value,
        name: metadata.name,
    };
};
//# sourceMappingURL=useHiddenInput.js.map