"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisHasManyInput = void 0;
const tslib_1 = require("tslib");
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const polaris_1 = require("@shopify/polaris");
const GadgetProvider_js_1 = require("../../../GadgetProvider.js");
const react_1 = tslib_1.__importStar(require("react"));
const AutoForm_js_1 = require("../../AutoForm.js");
const useFindMany_js_1 = require("../../../useFindMany.js");
const react_hook_form_1 = require("react-hook-form");
const PolarisHasManyInput = (props) => {
    const { metadata } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const api = (0, GadgetProvider_js_1.useApi)();
    const gadgetFields = (0, AutoForm_js_1.useFormFields)(metadata, {});
    const fieldMetadata = gadgetFields.find((field) => field[1].apiIdentifier === props.field);
    if (!fieldMetadata) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const path = fieldMetadata[0];
    const _field = fieldMetadata[1];
    const { getValues } = (0, react_hook_form_1.useFormContext)();
    const { fields, remove, replace } = (0, react_hook_form_1.useFieldArray)({
        name: path,
    });
    const config = _field.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const modelManager = (0, api_client_core_1.assert)(api[config.relatedModel.apiIdentifier], "no model manager found for action function");
    const [{ data, fetching, error }, _refetch] = (0, useFindMany_js_1.useFindMany)(modelManager, { first: 25 });
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const updateText = (0, react_1.useCallback)((value) => {
        setInputValue(value);
    }, []);
    if (fetching || !data) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    const options = data.map((record) => { return { label: record.name, value: record.id }; });
    const verticalContentMarkup = fields.length > 0 ? (react_1.default.createElement(polaris_1.LegacyStack, { spacing: "extraTight", alignment: "center" }, fields.map((field, i) => {
        const id = getValues(path)[i].id;
        const option = options.find((option) => option.value === id);
        return (react_1.default.createElement(polaris_1.Tag, { key: `option${field.id}`, onRemove: () => {
                const index = fields.findIndex((entry) => entry.id == field.id);
                remove(index);
            } }, option?.label));
    }))) : null;
    const textField = (react_1.default.createElement(polaris_1.Autocomplete.TextField, { onChange: updateText, label: _field.name, value: inputValue, verticalContent: verticalContentMarkup, autoComplete: "off" }));
    return (react_1.default.createElement(polaris_1.Autocomplete, { allowMultiple: true, options: options, selected: fields.map((field, i) => getValues(path)[i].id), textField: textField, onSelect: (selection) => { replace(selection.map((id) => ({ id: id }))); }, listTitle: _field.name }));
};
exports.PolarisHasManyInput = PolarisHasManyInput;
//# sourceMappingURL=PolarisHasManyInput.js.map