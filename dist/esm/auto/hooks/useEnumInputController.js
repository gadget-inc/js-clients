import { useCallback, useMemo, useState } from "react";
import { useController } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
export const useEnumInputController = (props) => {
    const { field: fieldApiIdentifier, control } = props;
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    const config = metadata.configuration;
    if (config.__typename !== "GadgetEnumConfig") {
        throw new Error("Field is not an enum type");
    }
    const { field: fieldProps, fieldState: { error }, } = useController({
        control,
        name: path,
    });
    const [searchValue, setSearchValue] = useState("");
    const selectedOptions = useMemo(() => (typeof fieldProps.value === "string" ? [fieldProps.value] : fieldProps.value ?? []), [fieldProps.value]);
    const providedOptions = useMemo(() => config.options.map((option) => option.name), [config.options]);
    const allOptions = useMemo(() => [...new Set([...selectedOptions, ...providedOptions])], [providedOptions, selectedOptions]);
    const filteredOptions = useMemo(() => allOptions.filter((option) => {
        return !searchValue || option.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase());
    }), [allOptions, searchValue]);
    const onSelectionChange = useCallback((selected) => {
        setSearchValue("");
        if (config.allowMultiple) {
            if (selected === null) {
                fieldProps.onChange([]);
                return;
            }
            const nextSelectedTags = new Set([...selectedOptions]);
            if (nextSelectedTags.has(selected)) {
                nextSelectedTags.delete(selected);
            }
            else {
                nextSelectedTags.add(selected);
            }
            fieldProps.onChange([...nextSelectedTags]);
        }
        else {
            if (selected === null || selectedOptions.includes(selected)) {
                fieldProps.onChange(null);
            }
            else {
                fieldProps.onChange(selected);
            }
        }
    }, [config.allowMultiple, fieldProps, selectedOptions]);
    return {
        allowMultiple: config.allowMultiple,
        allowOther: config.allowOther,
        /** The list of selected options. */
        selectedOptions,
        /** The list of options that are provided by the configuration. */
        providedOptions,
        /** The list of options that are currently visible based on the search query. */
        filteredOptions,
        /** The list of all options that are available to select by combining the selected and provided options. */
        allOptions,
        searchQuery: {
            value: searchValue,
            setValue: setSearchValue,
        },
        /** The callback to handle the selection change */
        onSelectionChange,
        label: metadata.name,
        metadata,
        fieldProps,
        isError: !!error,
        errorMessage: error?.message,
    };
};
//# sourceMappingURL=useEnumInputController.js.map