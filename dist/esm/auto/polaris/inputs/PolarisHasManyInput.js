import { assert } from "@gadgetinc/api-client-core";
import { Autocomplete, LegacyStack, Tag } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useApi } from "../../../GadgetProvider.js";
import { useFindMany } from "../../../useFindMany.js";
import { getModelManager } from "../../../utils.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const PolarisHasManyInput = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const api = useApi();
    const { getValues } = useFormContext();
    const { fields, remove, replace } = useFieldArray({
        name: path,
    });
    const config = metadata.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const modelManager = assert(getModelManager(api, config.relatedModel.apiIdentifier, config.relatedModel.namespace), "no model manager found for action function");
    const [{ data, fetching, error }, _refetch] = useFindMany(modelManager, { first: 25 });
    const [inputValue, setInputValue] = useState("");
    const updateText = useCallback((value) => {
        setInputValue(value);
    }, []);
    if (fetching || !data) {
        return React.createElement("p", null, "Loading...");
    }
    const options = data.map((record) => {
        return { label: record.name, value: record.id };
    });
    const verticalContentMarkup = fields.length > 0 ? (React.createElement(LegacyStack, { spacing: "extraTight", alignment: "center" }, fields.map((field, i) => {
        const id = getValues(path)[i].id;
        const option = options.find((option) => option.value === id);
        return (React.createElement(Tag, { key: `option${field.id}`, onRemove: () => {
                const index = fields.findIndex((entry) => entry.id == field.id);
                remove(index);
            } }, option?.label));
    }))) : null;
    const textField = (React.createElement(Autocomplete.TextField, { onChange: updateText, label: metadata.name, value: inputValue, verticalContent: verticalContentMarkup, autoComplete: "off" }));
    return (React.createElement(Autocomplete, { allowMultiple: true, options: options, selected: fields.map((field, i) => getValues(path)[i].id), textField: textField, onSelect: (selection) => {
            replace(selection.map((id) => ({ id: id })));
        }, listTitle: metadata.name }));
};
//# sourceMappingURL=PolarisHasManyInput.js.map