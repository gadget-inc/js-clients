"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoForm = exports.useFormFields = exports.useValidationResolver = void 0;
const yup_1 = require("@hookform/resolvers/yup");
const react_1 = require("react");
const metadata_js_1 = require("../metadata.js");
const useActionForm_js_1 = require("../useActionForm.js");
const validationSchema_js_1 = require("../validationSchema.js");
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
    const operatesWithRecordId = !!metadata?.action.operatesWithRecordIdentity;
    const defaultValues = (0, react_1.useMemo)(() => props.defaultValues ?? {
        [action.modelApiIdentifier]: record ?? (!operatesWithRecordId && metadata?.defaultRecord),
        id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
    }, [action.modelApiIdentifier, operatesWithRecordId, metadata?.defaultRecord, record, props.defaultValues]);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading, isReady }, originalFormMethods, } = (0, useActionForm_js_1.useActionForm)(action, {
        defaultValues,
        findBy,
        resolver: (0, exports.useValidationResolver)(metadata),
        send: () => {
            const fieldsToSend = fields
                .map(({ path }) => path)
                .filter((item) => {
                if (props.include) {
                    return props.include?.includes(item);
                }
                else if (props.exclude) {
                    return !props.exclude?.includes(item);
                }
                return true;
            });
            if (operatesWithRecordId) {
                fieldsToSend.push("id");
            }
            return fieldsToSend;
        },
    });
    // we don't have synchronous access to the default values always -- sometimes we need to load them from the metadata. if we do that, then we need to forcibly set them into the form state once they have been loaded
    const hasSetInitialValues = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (isReady && !hasSetInitialValues.current && defaultValues[action.modelApiIdentifier]) {
            hasSetInitialValues.current = true;
            originalFormMethods.reset(defaultValues);
        }
    }, [isReady, defaultValues, originalFormMethods, action.modelApiIdentifier]);
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