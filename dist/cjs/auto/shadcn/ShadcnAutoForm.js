"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutoForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useActionForm_js_1 = require("../../useActionForm.js");
const utils_js_1 = require("../../utils.js");
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormActionValidators_js_1 = require("../AutoFormActionValidators.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const ShadcnAutoInput_js_1 = require("./inputs/ShadcnAutoInput.js");
const ShadcnAutoBelongsToForm_js_1 = require("./inputs/relationships/ShadcnAutoBelongsToForm.js");
const ShadcnAutoHasOneForm_js_1 = require("./inputs/relationships/ShadcnAutoHasOneForm.js");
const ShadcnAutoSubmit_js_1 = require("./submit/ShadcnAutoSubmit.js");
const ShadcnSubmitResultBanner_js_1 = require("./submit/ShadcnSubmitResultBanner.js");
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
const makeAutoForm = (elements) => {
    const { AutoInput, AutoBelongsToInput, AutoHasManyInput, AutoRolesInput, AutoEnumInput, AutoJSONInput, AutoDateTimePicker, AutoPasswordInput, AutoBooleanInput, AutoEncryptedStringInput, AutoStringInput, AutoNumberInput, AutoIdInput, } = (0, ShadcnAutoInput_js_1.makeShadcnAutoInput)(elements);
    const AutoSubmit = (0, ShadcnAutoSubmit_js_1.makeShadcnAutoSubmit)(elements);
    const { SubmitSuccessfulBanner, SubmitErrorBanner, SubmitResultBanner } = (0, ShadcnSubmitResultBanner_js_1.makeSubmitResultBanner)(elements);
    const { Form, Skeleton } = elements;
    const AutoHasOneForm = (0, ShadcnAutoHasOneForm_js_1.makeShadcnAutoHasOneForm)(elements);
    const AutoBelongsToForm = (0, ShadcnAutoBelongsToForm_js_1.makeShadcnAutoBelongsToForm)(elements);
    function AutoForm(props) {
        const { action, findBy } = props;
        (0, AutoFormActionValidators_js_1.validateAutoFormProps)(props);
        // Component key to force re-render when the action or findBy changes
        const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;
        return (react_1.default.createElement(AutoFormContext_js_1.AutoFormFieldsFromChildComponentsProvider, { hasCustomFormChildren: react_1.default.Children.count(props.children) > 0 },
            react_1.default.createElement(AutoFormInner, { key: componentKey, ...props })));
    }
    function AutoFormInner(props) {
        const { record: _record, action, findBy, ...rest } = props;
        const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods, isLoading, } = (0, AutoForm_js_1.useAutoForm)(props);
        const formTitle = "title" in props && props.title !== undefined ? props.title : (0, utils_js_1.humanizeCamelCase)(action.operationName);
        if (props.successContent && isSubmitSuccessful) {
            return props.successContent;
        }
        if (fetchingMetadata) {
            return (react_1.default.createElement(elements.Form, { ...rest, onSubmit: submit },
                react_1.default.createElement(elements.Skeleton, null)));
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
                apiIdentifier: action.modelApiIdentifier,
                namespace: action.namespace,
            },
            fields,
        };
        const formContent = props.children ?? (react_1.default.createElement(react_1.default.Fragment, null,
            formTitle && react_1.default.createElement("h2", { className: "text-2xl font-bold" }, formTitle),
            !props.onSuccess && react_1.default.createElement(SubmitSuccessfulBanner, null),
            !props.onFailure && react_1.default.createElement(SubmitErrorBanner, null),
            !metadataError && (react_1.default.createElement(react_1.default.Fragment, null,
                fields.map(({ metadata }) => (react_1.default.createElement(AutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
                react_1.default.createElement(AutoSubmit, null, "submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit")))));
        return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
            react_1.default.createElement(useActionForm_js_1.FormProvider, { ...originalFormMethods },
                isLoading && react_1.default.createElement(Skeleton, null),
                react_1.default.createElement("div", { hidden: isLoading },
                    react_1.default.createElement(Form, { ...rest, onSubmit: submit }, formContent)))));
    }
    return {
        AutoForm,
        AutoInput,
        AutoSubmit,
        SubmitResultBanner,
        SubmitSuccessfulBanner,
        SubmitErrorBanner,
        AutoHasOneForm,
        AutoBelongsToForm,
        AutoBelongsToInput,
        AutoHasManyInput,
        AutoRolesInput,
        AutoEnumInput,
        AutoJSONInput,
        AutoDateTimePicker,
        AutoPasswordInput,
        AutoBooleanInput,
        AutoEncryptedStringInput,
        AutoStringInput,
        AutoNumberInput,
        AutoIdInput,
    };
};
exports.makeAutoForm = makeAutoForm;
//# sourceMappingURL=ShadcnAutoForm.js.map