"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutoForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../useActionForm.js");
const utils_js_1 = require("../../utils.js");
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormActionValidators_js_1 = require("../AutoFormActionValidators.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useHasManyThroughController_js_1 = require("../hooks/useHasManyThroughController.js");
const ShadcnDefaultPreventedButton_js_1 = require("./ShadcnDefaultPreventedButton.js");
const ShadcnAutoInput_js_1 = require("./inputs/ShadcnAutoInput.js");
const ShadcnAutoBelongsToForm_js_1 = require("./inputs/relationships/ShadcnAutoBelongsToForm.js");
const ShadcnAutoHasManyForm_js_1 = require("./inputs/relationships/ShadcnAutoHasManyForm.js");
const ShadcnAutoHasManyThroughForm_js_1 = require("./inputs/relationships/ShadcnAutoHasManyThroughForm.js");
const ShadcnAutoHasOneForm_js_1 = require("./inputs/relationships/ShadcnAutoHasOneForm.js");
const ShadcnAutoSubmit_js_1 = require("./submit/ShadcnAutoSubmit.js");
const ShadcnSubmitResultBanner_js_1 = require("./submit/ShadcnSubmitResultBanner.js");
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
const makeAutoForm = (elements) => {
    const { Skeleton, cn } = elements;
    const DefaultPreventedButton = (0, ShadcnDefaultPreventedButton_js_1.makeDefaultPreventedButton)(elements);
    const allElements = { ...elements, Button: DefaultPreventedButton };
    const { AutoInput, AutoRolesInput, AutoFileInput, AutoEnumInput, AutoJSONInput, AutoDateTimePicker, AutoPasswordInput, AutoBooleanInput, AutoEncryptedStringInput, AutoStringInput, AutoEmailInput, AutoUrlInput, AutoNumberInput, AutoIdInput, AutoHiddenInput, AutoTextAreaInput, AutoRichTextInput, AutoBelongsToInput, AutoHasManyInput, AutoHasManyThroughInput, AutoHasOneInput, } = (0, ShadcnAutoInput_js_1.makeShadcnAutoInput)(allElements);
    const AutoSubmit = (0, ShadcnAutoSubmit_js_1.makeShadcnAutoSubmit)(allElements);
    const { SubmitSuccessfulBanner, SubmitErrorBanner, SubmitResultBanner } = (0, ShadcnSubmitResultBanner_js_1.makeSubmitResultBanner)(allElements);
    const AutoHasOneForm = (0, ShadcnAutoHasOneForm_js_1.makeShadcnAutoHasOneForm)(allElements);
    const AutoBelongsToForm = (0, ShadcnAutoBelongsToForm_js_1.makeShadcnAutoBelongsToForm)(allElements);
    const AutoHasManyForm = (0, ShadcnAutoHasManyForm_js_1.makeShadcnAutoHasManyForm)(allElements);
    const AutoHasManyThroughForm = (0, ShadcnAutoHasManyThroughForm_js_1.makeShadcnAutoHasManyThroughForm)(allElements);
    const FormContainer = (0, react_1.forwardRef)(({ className, ...props }, ref) => {
        return react_1.default.createElement("form", { ref: ref, noValidate: true, className: cn("space-y-6", className), ...props });
    });
    function AutoForm(props) {
        const { action, findBy } = props;
        (0, AutoFormActionValidators_js_1.validateAutoFormProps)(props);
        // Component key to force re-render when the action or findBy changes
        const componentKey = `${"modelApiIdentifier" in action ? `${action.modelApiIdentifier}.` : ""}${action.operationName}.${JSON.stringify(findBy)}`;
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
            return (react_1.default.createElement(FormContainer, { ...rest, onSubmit: submit },
                react_1.default.createElement(Skeleton, null)));
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
        const formContent = props.children ?? (react_1.default.createElement(react_1.default.Fragment, null,
            formTitle && react_1.default.createElement("h2", { className: "text-2xl font-bold" }, formTitle),
            !props.onSuccess && react_1.default.createElement(SubmitSuccessfulBanner, null),
            !props.onFailure && react_1.default.createElement(SubmitErrorBanner, null),
            !metadataError && (react_1.default.createElement(react_1.default.Fragment, null,
                fields.map(({ metadata }) => (react_1.default.createElement(AutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
                react_1.default.createElement(AutoSubmit, null, "submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit")))));
        return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
            react_1.default.createElement(useActionForm_js_1.FormProvider, { ...originalFormMethods },
                react_1.default.createElement(FormContainer, { ...rest, className: cn(`${isLoading || isSubmitting ? "opacity-30" : ""} ${rest.className ?? ""}`), onSubmit: submit }, formContent))));
    }
    return {
        AutoForm,
        AutoInput,
        AutoBooleanInput,
        AutoDateTimePicker,
        AutoEmailInput,
        AutoEncryptedStringInput,
        AutoEnumInput,
        AutoFileInput,
        AutoHiddenInput,
        AutoIdInput,
        AutoJSONInput,
        AutoNumberInput,
        AutoPasswordInput,
        AutoRichTextInput,
        AutoRolesInput,
        AutoStringInput,
        AutoTextAreaInput,
        AutoUrlInput,
        AutoBelongsToInput,
        AutoHasManyInput,
        AutoHasManyThroughInput,
        AutoHasOneInput,
        AutoBelongsToForm,
        AutoHasManyForm,
        AutoHasManyThroughForm,
        AutoHasManyThroughJoinModelForm: useHasManyThroughController_js_1.AutoHasManyThroughJoinModelForm,
        AutoHasOneForm,
        AutoSubmit,
        SubmitErrorBanner,
        SubmitResultBanner,
        SubmitSuccessfulBanner,
    };
};
exports.makeAutoForm = makeAutoForm;
//# sourceMappingURL=ShadcnAutoForm.js.map