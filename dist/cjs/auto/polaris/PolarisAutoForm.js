"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoForm = exports.PolarisFormSkeleton = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../metadata.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const AutoForm_js_1 = require("../AutoForm.js");
const PolarisErrorDisplay_js_1 = require("./PolarisErrorDisplay.js");
const PolarisFormInput_js_1 = require("./PolarisFormInput.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const react_hook_form_1 = require("react-hook-form");
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
    const { action, include: _include, exclude: _exclude, fields: _fields, submitLabel: _submitLabel, record, findBy, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(action);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, AutoForm_js_1.useFormFields)(metadata, props);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading }, originalFormMethods, } = (0, useActionForm_js_1.useActionForm)(action, {
        defaultValues: { [action.modelApiIdentifier]: record },
        findBy,
        resolver: (0, AutoForm_js_1.useValidationResolver)(metadata),
        send: fields.map(([path]) => path),
    });
    console.log("form data...", originalFormMethods.getValues());
    const error = formError ?? metadataError;
    if (error && !error.valiationErrors) {
        return react_1.default.createElement(PolarisErrorDisplay_js_1.PolarisErrorDisplay, { error: error });
    }
    if (isSubmitSuccessful) {
        return props.successContent ?? react_1.default.createElement(polaris_1.Banner, { title: `Saved ${metadata?.name} successfully.`, tone: "success" });
    }
    if (fetchingMetadata)
        return (react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
            react_1.default.createElement(polaris_1.FormLayout, null,
                react_1.default.createElement(exports.PolarisFormSkeleton, null),
                ";")));
    if (props.children)
        return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: { submit, metadata } },
            react_1.default.createElement(react_hook_form_1.FormProvider, { ...originalFormMethods },
                react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
                    react_1.default.createElement(polaris_1.FormLayout, null, props.children)))));
    return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: { submit, metadata } },
        react_1.default.createElement(react_hook_form_1.FormProvider, { ...originalFormMethods },
            react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
                react_1.default.createElement(polaris_1.FormLayout, null,
                    fields.map(([path, field]) => (react_1.default.createElement(PolarisFormInput_js_1.PolarisFormInput, { key: field.apiIdentifier, path: path, field: field, control: originalFormMethods.control }))),
                    react_1.default.createElement(polaris_1.Button, { loading: isLoading, submit: true, onClick: async () => { submit; } }, props.submitLabel ?? "Submit"))))));
};
exports.PolarisAutoForm = PolarisAutoForm;
//# sourceMappingURL=PolarisAutoForm.js.map