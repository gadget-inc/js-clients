"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoForm = exports.PolarisFormSkeleton = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_js_1 = require("../../metadata.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const PolarisAutoInput_js_1 = require("./inputs/PolarisAutoInput.js");
const PolarisAutoSubmit_js_1 = require("./submit/PolarisAutoSubmit.js");
const PolarisSubmitResultBanner_js_1 = require("./submit/PolarisSubmitResultBanner.js");
const PolarisFormSkeleton = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(polaris_1.SkeletonDisplayText, { size: "medium" }),
    react_1.default.createElement(polaris_1.SkeletonBodyText, null)));
exports.PolarisFormSkeleton = PolarisFormSkeleton;
/**
 * Renders a form for an action on a model automatically using Polaris
 */
const PolarisAutoForm = (
//polaris form props also take an 'action' property, which we need to omit here.
props) => {
    const { action, record, findBy, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(action);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, AutoForm_js_1.useFormFields)(metadata, props);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading }, originalFormMethods, } = (0, useActionForm_js_1.useActionForm)(action, {
        defaultValues: { [action.modelApiIdentifier]: record },
        findBy,
        resolver: (0, AutoForm_js_1.useValidationResolver)(metadata),
        send: fields.map(({ path }) => path),
    });
    const autoFormMetadataContext = {
        submit,
        metadata,
        submitResult: {
            isSuccessful: isSubmitSuccessful,
            error: formError ?? metadataError,
        },
    };
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
    if (fetchingMetadata) {
        return (react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
            react_1.default.createElement(polaris_1.FormLayout, null,
                react_1.default.createElement(exports.PolarisFormSkeleton, null),
                ";")));
    }
    const formContent = props.children ?? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PolarisSubmitResultBanner_js_1.PolarisSubmitResultBanner, null),
        fields.map(({ metadata }) => (react_1.default.createElement(PolarisAutoInput_js_1.PolarisAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
        react_1.default.createElement(PolarisAutoSubmit_js_1.PolarisAutoSubmit, null, props.submitLabel ?? "Submit")));
    return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        react_1.default.createElement(react_hook_form_1.FormProvider, { ...originalFormMethods },
            react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
                react_1.default.createElement(polaris_1.FormLayout, null, formContent)))));
};
exports.PolarisAutoForm = PolarisAutoForm;
//# sourceMappingURL=PolarisAutoForm.js.map