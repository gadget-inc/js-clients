import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { assert } from "@gadgetinc/api-client-core";
import { Autocomplete, LegacyStack, Tag } from "@shopify/polaris";
import { useApi } from "../../../GadgetProvider.js";
import React, { useCallback, useState } from "react";
import { useFormFields } from "../../AutoForm.js";
import { useFindMany } from "../../../useFindMany.js";
import { useFieldArray, useFormContext } from "react-hook-form";
export const PolarisHasManyInput = (props) => {
    const { metadata } = useAutoFormMetadata();
    const api = useApi();
    const gadgetFields = useFormFields(metadata, {});
    const fieldMetadata = gadgetFields.find((field) => field[1].apiIdentifier === props.field);
    if (!fieldMetadata) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const path = fieldMetadata[0];
    const _field = fieldMetadata[1];
    const { getValues } = useFormContext();
    const { fields, remove, replace } = useFieldArray({
        name: path,
    });
    const config = _field.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const modelManager = assert(api[config.relatedModel.apiIdentifier], "no model manager found for action function");
    const [{ data, fetching, error }, _refetch] = useFindMany(modelManager, { first: 25 });
    const [inputValue, setInputValue] = useState('');
    const updateText = useCallback((value) => {
        setInputValue(value);
    }, []);
    if (fetching || !data) {
        return React.createElement("p", null, "Loading...");
    }
    const options = data.map((record) => { return { label: record.name, value: record.id }; });
    const verticalContentMarkup = fields.length > 0 ? (React.createElement(LegacyStack, { spacing: "extraTight", alignment: "center" }, fields.map((field, i) => {
        const id = getValues(path)[i].id;
        const option = options.find((option) => option.value === id);
        return (React.createElement(Tag, { key: `option${field.id}`, onRemove: () => {
                const index = fields.findIndex((entry) => entry.id == field.id);
                remove(index);
            } }, option?.label));
    }))) : null;
    const textField = (React.createElement(Autocomplete.TextField, { onChange: updateText, label: _field.name, value: inputValue, verticalContent: verticalContentMarkup, autoComplete: "off" }));
    return (React.createElement(Autocomplete, { allowMultiple: true, options: options, selected: fields.map((field, i) => getValues(path)[i].id), textField: textField, onSelect: (selection) => { replace(selection.map((id) => ({ id: id }))); }, listTitle: _field.name }));
};
//# sourceMappingURL=PolarisHasManyInput.js.map