"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoForm = exports.PolarisWCAutoFormSkeleton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useActionForm_js_1 = require("../../useActionForm.js");
const utils_js_1 = require("../../utils.js");
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormActionValidators_js_1 = require("../AutoFormActionValidators.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const PolarisWCAutoInput_js_1 = require("./inputs/PolarisWCAutoInput.js");
const PolarisWCAutoSubmit_js_1 = require("./submit/PolarisWCAutoSubmit.js");
const PolarisWCSubmitResultBanner_js_1 = require("./submit/PolarisWCSubmitResultBanner.js");
/**
 * Skeleton loader for Polaris Web Components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   {isLoading ? <AutoFormSkeleton /> : <AutoFormContent />}
 * </AutoForm>
 * ```
 */
const PolarisWCAutoFormSkeleton = () => (react_1.default.createElement("s-stack", { gap: "large" }));
exports.PolarisWCAutoFormSkeleton = PolarisWCAutoFormSkeleton;
/**
 * Renders a form for an action on a model using Polaris Web Components.
 */
const PolarisWCAutoForm = (props) => {
    const { action, findBy } = props;
    (0, AutoFormActionValidators_js_1.validateAutoFormProps)(props);
    // Forces re-render when the action or findBy changes.
    const componentKey = `${"modelApiIdentifier" in action ? `${action.modelApiIdentifier}.` : ""}${action.operationName}.${JSON.stringify(findBy)}`;
    return (react_1.default.createElement(AutoFormContext_js_1.AutoFormFieldsFromChildComponentsProvider, { hasCustomFormChildren: react_1.default.Children.count(props.children) > 0 },
        react_1.default.createElement(PolarisWCAutoFormComponent, { key: componentKey, ...props })));
};
exports.PolarisWCAutoForm = PolarisWCAutoForm;
const PolarisWCAutoFormComponent = (props) => {
    const { record: _record, action, findBy, ...rest } = props;
    const { metadata, fetchingMetadata, isLoading, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods, } = (0, AutoForm_js_1.useAutoForm)(props);
    const formTitle = "title" in props && props.title !== undefined ? props.title : (0, utils_js_1.humanizeCamelCase)(action.operationName);
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
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
            apiIdentifier: "modelApiIdentifier" in action ? action.modelApiIdentifier : undefined,
            namespace: action.namespace,
        },
        fields,
    };
    if (fetchingMetadata) {
        return (react_1.default.createElement("form", { onSubmit: (e) => {
                e.preventDefault();
                void submit();
            } }, props.loadingSkeleton ?? react_1.default.createElement(exports.PolarisWCAutoFormSkeleton, null)));
    }
    const formContent = props.children ?? (react_1.default.createElement(react_1.default.Fragment, null,
        formTitle && react_1.default.createElement("s-heading", { as: "h5" }, formTitle),
        !props.onSuccess && react_1.default.createElement(PolarisWCSubmitResultBanner_js_1.PolarisWCSubmitSuccessfulBanner, null),
        !props.onFailure && react_1.default.createElement(PolarisWCSubmitResultBanner_js_1.PolarisWCSubmitErrorBanner, null),
        !metadataError && (react_1.default.createElement(react_1.default.Fragment, null,
            fields.map(({ metadata }) => (react_1.default.createElement(PolarisWCAutoInput_js_1.PolarisWCAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(PolarisWCAutoSubmit_js_1.PolarisWCAutoSubmit, null, "submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit"))))));
    return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        react_1.default.createElement(useActionForm_js_1.FormProvider, { ...originalFormMethods },
            react_1.default.createElement("div", { style: { opacity: isLoading || isSubmitting ? 0.3 : 1 } },
                react_1.default.createElement("form", { onSubmit: (e) => {
                        e.preventDefault();
                        void submit();
                    } },
                    react_1.default.createElement("s-stack", { gap: "large" }, formContent))))));
};
//# sourceMappingURL=PolarisWCAutoForm.js.map