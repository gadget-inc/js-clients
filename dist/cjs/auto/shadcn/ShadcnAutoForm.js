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
const ShadcnAutoSubmit_js_1 = require("./submit/ShadcnAutoSubmit.js");
const ShadcnSubmitResultBanner_js_1 = require("./submit/ShadcnSubmitResultBanner.js");
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
const makeAutoForm = ({ Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, Label, Checkbox, }) => {
    const ShadcnAutoInput = (0, ShadcnAutoInput_js_1.makeShadcnAutoInput)({ Input, Label, Button, Checkbox });
    const ShadcnAutoSubmit = (0, ShadcnAutoSubmit_js_1.makeShadcnAutoSubmit)({ Button });
    const { ShadcnSubmitSuccessfulBanner, ShadcnSubmitErrorBanner } = (0, ShadcnSubmitResultBanner_js_1.makeSubmitResultBanner)({
        Alert,
        AlertTitle,
        AlertDescription,
        Button,
    });
    return (props) => {
        const { action, findBy } = props;
        (0, AutoFormActionValidators_js_1.validateAutoFormProps)(props);
        // Component key to force re-render when the action or findBy changes
        const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;
        return (react_1.default.createElement(AutoFormContext_js_1.AutoFormFieldsFromChildComponentsProvider, { hasCustomFormChildren: react_1.default.Children.count(props.children) > 0 },
            react_1.default.createElement(ShadcnAutoFormComponent, { key: componentKey, ...props, elements: { Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, ShadcnAutoInput, ShadcnAutoSubmit } })));
    };
    function ShadcnAutoFormComponent(props) {
        const { record: _record, action, findBy, ...rest } = props;
        const { Form, Alert, Skeleton, AlertTitle, AlertDescription, ShadcnAutoInput, ShadcnAutoSubmit, Button } = props.elements;
        const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods, isLoading, } = (0, AutoForm_js_1.useAutoForm)(props);
        const formTitle = props.title === undefined ? (0, utils_js_1.humanizeCamelCase)(action.operationName) : props.title;
        if (props.successContent && isSubmitSuccessful) {
            return props.successContent;
        }
        if (fetchingMetadata) {
            return (react_1.default.createElement(Form, { ...rest, onSubmit: submit },
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
                apiIdentifier: action.modelApiIdentifier,
                namespace: action.namespace,
            },
            fields,
        };
        const formContent = props.children ?? (react_1.default.createElement(react_1.default.Fragment, null,
            formTitle && react_1.default.createElement("h2", { className: "text-2xl font-bold" }, formTitle),
            !props.onSuccess && react_1.default.createElement(ShadcnSubmitSuccessfulBanner, null),
            !props.onFailure && react_1.default.createElement(ShadcnSubmitErrorBanner, null),
            !metadataError && (react_1.default.createElement(react_1.default.Fragment, null,
                fields.map(({ metadata }) => (react_1.default.createElement(ShadcnAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
                react_1.default.createElement(ShadcnAutoSubmit, null, props.submitLabel ?? "Submit")))));
        return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
            react_1.default.createElement(useActionForm_js_1.FormProvider, { ...originalFormMethods },
                isLoading && react_1.default.createElement(Skeleton, null),
                react_1.default.createElement("div", { hidden: isLoading },
                    react_1.default.createElement(Form, { ...rest, onSubmit: submit }, formContent)))));
    }
};
exports.makeAutoForm = makeAutoForm;
//# sourceMappingURL=ShadcnAutoForm.js.map