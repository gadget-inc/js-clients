"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoForm = exports.useFormFields = exports.useValidationResolver = void 0;
const yup_1 = require("@hookform/resolvers/yup");
const react_1 = require("react");
const metadata_js_1 = require("../metadata.js");
const useActionForm_js_1 = require("../useActionForm.js");
const utils_js_1 = require("../utils.js");
const validationSchema_js_1 = require("../validationSchema.js");
/**
 * React hook for getting the validation schema for a list of fields
 */
const useValidationResolver = (metadata) => {
    return (0, react_1.useMemo)(() => {
        if (!metadata)
            return undefined;
        const action = "action" in metadata ? metadata.action : metadata;
        return (0, yup_1.yupResolver)((0, validationSchema_js_1.validationSchema)(action.inputFields));
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
        const action = "action" in metadata ? metadata.action : metadata;
        const objectFields = action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig");
        const nonObjectFields = action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");
        const includedRootLevelFields = (0, metadata_js_1.filterFieldList)(nonObjectFields, options).map((field) => ({
            path: field.apiIdentifier,
            metadata: field,
        }));
        const includedObjectFields = objectFields.flatMap((objectField) => (0, metadata_js_1.filterFieldList)(objectField.configuration.fields, options).map((innerField) => ({
            path: `${objectField.apiIdentifier}.${innerField.apiIdentifier}`,
            metadata: innerField,
        })));
        return [...includedObjectFields, ...includedRootLevelFields];
    }, [metadata, options]);
};
exports.useFormFields = useFormFields;
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
const useAutoForm = (props) => {
    const { action, record, findBy } = props;
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(props.action);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, exports.useFormFields)(metadata, props);
    const operatesWithRecordId = !!(metadata && "action" in metadata && metadata.action.operatesWithRecordIdentity);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading, dirtyFields }, originalFormMethods, } = (0, useActionForm_js_1.useActionForm)(action, {
        defaultValues: action.type === "globalAction"
            ? {}
            : {
                [action.modelApiIdentifier]: record,
                id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
            },
        findBy,
        resolver: (0, exports.useValidationResolver)(metadata),
        send: () => {
            const fieldsToSend = fields
                .map(({ path }) => path)
                .filter((item) => {
                const isDirty = (0, utils_js_1.get)(dirtyFields, item);
                return isDirty;
            });
            if (operatesWithRecordId) {
                fieldsToSend.push("id");
            }
            return fieldsToSend;
        },
    });
    return {
        metadata,
        fetchingMetadata,
        metadataError,
        fields,
        submit,
        formError,
        isSubmitSuccessful,
        isLoading,
        originalFormMethods,
    };
};
exports.useAutoForm = useAutoForm;
//# sourceMappingURL=AutoForm.js.map