"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormFields = exports.useValidationResolver = void 0;
const yup_1 = require("@hookform/resolvers/yup");
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const validationSchema_js_1 = require("../../validationSchema.js");
/**
 * React hook for getting the validation schema for a list of fields
 */
const useValidationResolver = (metadata) => {
    return (0, react_1.useMemo)(() => {
        if (!metadata)
            return undefined;
        return (0, yup_1.yupResolver)((0, validationSchema_js_1.validationSchema)(metadata.action.inputFields));
    }, [metadata]);
};
exports.useValidationResolver = useValidationResolver;
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
const useFormFields = (metadata, options) => {
    return (0, react_1.useMemo)(() => {
        if (!metadata)
            return [];
        const objectFields = metadata.action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig");
        const nonObjectFields = metadata.action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");
        const includedRootLevelFields = (0, metadata_js_1.filterFieldList)(nonObjectFields, options).map((field) => [field.apiIdentifier, field]);
        const includedObjectFields = objectFields.flatMap((objectField) => (0, metadata_js_1.filterFieldList)(objectField.configuration.fields, options).map((innerField) => [`${objectField.apiIdentifier}.${innerField.apiIdentifier}`, innerField]));
        return [...includedObjectFields, ...includedRootLevelFields];
    }, [metadata, options]);
};
exports.useFormFields = useFormFields;
//# sourceMappingURL=AutoForm.js.map