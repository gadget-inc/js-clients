"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisBelongsToInput = void 0;
const tslib_1 = require("tslib");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("../../../GadgetProvider.js");
const useFindMany_js_1 = require("../../../useFindMany.js");
const utils_js_1 = require("../../../utils.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const PolarisBelongsToInput = (props) => {
    const api = (0, GadgetProvider_js_1.useApi)();
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, react_hook_form_1.useController)({
        name: path + ".id",
        rules: { required: metadata.requiredArgumentForInput },
    });
    const { ref: _ref, ...field } = fieldProps;
    const config = metadata.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const modelManager = (0, api_client_core_1.assert)((0, utils_js_1.getModelManager)(api, config.relatedModel.apiIdentifier, config.relatedModel.namespace), "no model manager found for action function");
    const [{ data, fetching, error }, _refetch] = (0, useFindMany_js_1.useFindMany)(modelManager, { first: 25 });
    if (fetching || !data) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    const options = data.map((record) => {
        return { label: record.name, value: record.id };
    });
    return react_1.default.createElement(polaris_1.Select, { label: metadata.name, options: options, ...field, error: fieldError?.message });
};
exports.PolarisBelongsToInput = PolarisBelongsToInput;
//# sourceMappingURL=PolarisBelongsToInput.js.map