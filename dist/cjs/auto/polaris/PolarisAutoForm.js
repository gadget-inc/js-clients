"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoForm = exports.PolarisAutoFormSkeleton = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const utils_js_1 = require("../../utils.js");
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormActionValidators_js_1 = require("../AutoFormActionValidators.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const PolarisAutoInput_js_1 = require("./inputs/PolarisAutoInput.js");
const PolarisAutoSubmit_js_1 = require("./submit/PolarisAutoSubmit.js");
const PolarisSubmitResultBanner_js_1 = require("./submit/PolarisSubmitResultBanner.js");
const PolarisAutoFormSkeleton = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(polaris_1.SkeletonDisplayText, { size: "medium" }),
    react_1.default.createElement(polaris_1.SkeletonBodyText, null)));
exports.PolarisAutoFormSkeleton = PolarisAutoFormSkeleton;
/**
 * Renders a form for an action on a model automatically using Polaris
 */
const PolarisAutoForm = (
//polaris form props also take an 'action' property, which we need to omit here.
props) => {
    const { action, findBy } = props;
    (0, AutoFormActionValidators_js_1.validateAutoFormProps)(props);
    // Component key to force re-render when the action or findBy changes
    const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;
    return (react_1.default.createElement(PolarisAutoFormComponent, { key: componentKey, ...props }));
};
exports.PolarisAutoForm = PolarisAutoForm;
const PolarisAutoFormComponent = (
//polaris form props also take an 'action' property, which we need to omit here.
props) => {
    const { record: _record, action, findBy, ...rest } = props;
    const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods } = (0, AutoForm_js_1.useAutoForm)(props);
    const autoFormMetadataContext = {
        findBy,
        submit,
        metadata,
        submitResult: {
            isSuccessful: isSubmitSuccessful,
            error: formError ?? metadataError,
            isSubmitting,
        },
        model: {
            apiIdentifier: action.modelApiIdentifier,
            namespace: action.namespace,
        },
        options: {
            include: props.include,
            exclude: props.exclude,
        },
    };
    const formTitle = props.title === undefined ? (0, utils_js_1.humanizeCamelCase)(action.operationName) : props.title;
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
    if (fetchingMetadata) {
        return (react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
            react_1.default.createElement(polaris_1.FormLayout, null,
                react_1.default.createElement(exports.PolarisAutoFormSkeleton, null))));
    }
    const formContent = props.children ?? (react_1.default.createElement(react_1.default.Fragment, null,
        formTitle && (react_1.default.createElement(polaris_1.Text, { variant: "headingLg", as: "h5" }, formTitle)),
        !props.onSuccess && react_1.default.createElement(PolarisSubmitResultBanner_js_1.PolarisSubmitSuccessfulBanner, null),
        !props.onFailure && react_1.default.createElement(PolarisSubmitResultBanner_js_1.PolarisSubmitErrorBanner, null),
        !metadataError && (react_1.default.createElement(react_1.default.Fragment, null,
            fields.map(({ metadata }) => (react_1.default.createElement(PolarisAutoInput_js_1.PolarisAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(PolarisAutoSubmit_js_1.PolarisAutoSubmit, null,
                    props.submitLabel ?? "Submit",
                    " "))))));
    return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        react_1.default.createElement(react_hook_form_1.FormProvider, { ...originalFormMethods },
            react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
                react_1.default.createElement(polaris_1.BlockStack, { gap: "400" }, formContent)))));
};
//# sourceMappingURL=PolarisAutoForm.js.map