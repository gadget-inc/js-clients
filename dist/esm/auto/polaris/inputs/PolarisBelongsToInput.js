import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { assert } from "@gadgetinc/api-client-core";
import { Select } from "@shopify/polaris";
import { useApi } from "../../../GadgetProvider.js";
import React from "react";
import { useFormFields } from "../../AutoForm.js";
import { useFindMany } from "../../../useFindMany.js";
import { useController } from "react-hook-form";
export const PolarisBelongsToInput = (props) => {
    const { metadata } = useAutoFormMetadata();
    const api = useApi();
    const fields = useFormFields(metadata, {});
    const fieldMetadata = fields.find((field) => field[1].apiIdentifier === props.field);
    if (!fieldMetadata) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const path = fieldMetadata[0];
    const _field = fieldMetadata[1];
    const { field: fieldProps, fieldState: { error: fieldError }, } = useController({
        name: path + ".id",
        rules: { required: _field.requiredArgumentForInput },
    });
    const { ref: _ref, ...field } = fieldProps;
    const config = _field.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const modelManager = assert(api[config.relatedModel.apiIdentifier], "no model manager found for action function");
    const [{ data, fetching, error }, _refetch] = useFindMany(modelManager, { first: 25 });
    if (fetching || !data) {
        return React.createElement("p", null, "Loading...");
    }
    const options = data.map((record) => { return { label: record.name, value: record.id }; });
    return (React.createElement(Select, { label: _field.name, options: options, ...field, error: fieldError?.message }));
};
//# sourceMappingURL=PolarisBelongsToInput.js.map