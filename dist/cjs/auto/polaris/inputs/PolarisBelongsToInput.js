"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisBelongsToInput = void 0;
const tslib_1 = require("tslib");
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const polaris_1 = require("@shopify/polaris");
const GadgetProvider_js_1 = require("../../../GadgetProvider.js");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoForm_js_1 = require("../../AutoForm.js");
const useFindMany_js_1 = require("../../../useFindMany.js");
const react_hook_form_1 = require("react-hook-form");
const PolarisBelongsToInput = (props) => {
    const { metadata } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const api = (0, GadgetProvider_js_1.useApi)();
    const fields = (0, AutoForm_js_1.useFormFields)(metadata, {});
    const fieldMetadata = fields.find((field) => field[1].apiIdentifier === props.field);
    if (!fieldMetadata) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const path = fieldMetadata[0];
    const _field = fieldMetadata[1];
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, react_hook_form_1.useController)({
        name: path + ".id",
        rules: { required: _field.requiredArgumentForInput },
    });
    const { ref: _ref, ...field } = fieldProps;
    const config = _field.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const modelManager = (0, api_client_core_1.assert)(api[config.relatedModel.apiIdentifier], "no model manager found for action function");
    const [{ data, fetching, error }, _refetch] = (0, useFindMany_js_1.useFindMany)(modelManager, { first: 25 });
    if (fetching || !data) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    const options = data.map((record) => { return { label: record.name, value: record.id }; });
    return (react_1.default.createElement(polaris_1.Select, { label: _field.name, options: options, ...field, error: fieldError?.message }));
};
exports.PolarisBelongsToInput = PolarisBelongsToInput;
//# sourceMappingURL=PolarisBelongsToInput.js.map