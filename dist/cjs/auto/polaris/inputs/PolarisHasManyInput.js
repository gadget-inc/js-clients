"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisHasManyInput = void 0;
const tslib_1 = require("tslib");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("../../../GadgetProvider.js");
const useFindMany_js_1 = require("../../../useFindMany.js");
const utils_js_1 = require("../../../utils.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const PolarisHasManyInput = (props) => {
    const { path, fieldMetadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const api = (0, GadgetProvider_js_1.useApi)();
    const { getValues } = (0, react_hook_form_1.useFormContext)();
    const { fields, remove, replace } = (0, react_hook_form_1.useFieldArray)({
        name: path,
    });
    const config = fieldMetadata.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const modelManager = (0, api_client_core_1.assert)((0, utils_js_1.getModelManager)(api, config.relatedModel.apiIdentifier, config.relatedModel.namespace), "no model manager found for action function");
    const [{ data, fetching, error }, _refetch] = (0, useFindMany_js_1.useFindMany)(modelManager, { first: 25 });
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const updateText = (0, react_1.useCallback)((value) => {
        setInputValue(value);
    }, []);
    if (fetching || !data) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    const options = data.map((record) => {
        return { label: record.name, value: record.id };
    });
    const verticalContentMarkup = fields.length > 0 ? (react_1.default.createElement(polaris_1.LegacyStack, { spacing: "extraTight", alignment: "center" }, fields.map((field, i) => {
        const id = getValues(path)[i].id;
        const option = options.find((option) => option.value === id);
        return (react_1.default.createElement(polaris_1.Tag, { key: `option${field.id}`, onRemove: () => {
                const index = fields.findIndex((entry) => entry.id == field.id);
                remove(index);
            } }, option?.label));
    }))) : null;
    const textField = (react_1.default.createElement(polaris_1.Autocomplete.TextField, { onChange: updateText, label: fieldMetadata.name, value: inputValue, verticalContent: verticalContentMarkup, autoComplete: "off" }));
    return (react_1.default.createElement(polaris_1.Autocomplete, { allowMultiple: true, options: options, selected: fields.map((field, i) => getValues(path)[i].id), textField: textField, onSelect: (selection) => {
            replace(selection.map((id) => ({ id: id })));
        }, listTitle: fieldMetadata.name }));
};
exports.PolarisHasManyInput = PolarisHasManyInput;
//# sourceMappingURL=PolarisHasManyInput.js.map