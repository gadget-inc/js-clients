"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnumInputController = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const utils_js_1 = require("./utils.js");
const useEnumInputController = (props) => {
    const { field: fieldApiIdentifier, control } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.Enum,
    });
    const config = metadata.configuration;
    if (config.__typename !== "GadgetEnumConfig") {
        throw new Error("Field is not an enum type");
    }
    const { field: fieldProps, fieldState: { error }, } = (0, useActionForm_js_1.useController)({
        control,
        name: path,
    });
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    const selectedOptions = (0, react_1.useMemo)(() => (typeof fieldProps.value === "string" ? [fieldProps.value] : (fieldProps.value ?? [])), [fieldProps.value]);
    const providedOptions = (0, react_1.useMemo)(() => config.options.map((option) => option.name), [config.options]);
    const allOptions = (0, react_1.useMemo)(() => [...new Set([...selectedOptions, ...providedOptions])], [providedOptions, selectedOptions]);
    const filteredOptions = (0, react_1.useMemo)(() => allOptions.filter((option) => {
        return !searchValue || option.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase());
    }), [allOptions, searchValue]);
    const onChange = (0, react_1.useCallback)((...args) => {
        fieldProps.onChange(...args);
        props.afterChange?.(...args);
    }, [fieldProps.onChange, props.afterChange]);
    const onSelectionChange = (0, react_1.useCallback)((selected) => {
        setSearchValue("");
        if (config.allowMultiple) {
            if (selected === null) {
                onChange([]);
                return;
            }
            const nextSelectedTags = new Set([...selectedOptions]);
            if (nextSelectedTags.has(selected)) {
                nextSelectedTags.delete(selected);
            }
            else {
                nextSelectedTags.add(selected);
            }
            onChange([...nextSelectedTags]);
        }
        else {
            if (selected === null || selectedOptions.includes(selected)) {
                onChange(null);
            }
            else {
                onChange(selected);
            }
        }
    }, [config.allowMultiple, onChange, selectedOptions]);
    return {
        path,
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
exports.useEnumInputController = useEnumInputController;
//# sourceMappingURL=useEnumInputController.js.map