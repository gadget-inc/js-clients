import React, { forwardRef } from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase } from "../../utils.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import { makeShadcnAutoInput } from "./inputs/ShadcnAutoInput.js";
import { makeShadcnAutoBelongsToForm } from "./inputs/relationships/ShadcnAutoBelongsToForm.js";
import { makeShadcnAutoHasManyForm } from "./inputs/relationships/ShadcnAutoHasManyForm.js";
import { makeShadcnAutoHasManyThroughForm } from "./inputs/relationships/ShadcnAutoHasManyThroughForm.js";
import { makeShadcnAutoHasOneForm } from "./inputs/relationships/ShadcnAutoHasOneForm.js";
import { makeShadcnAutoSubmit } from "./submit/ShadcnAutoSubmit.js";
import { makeSubmitResultBanner } from "./submit/ShadcnSubmitResultBanner.js";
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export const makeAutoForm = (elements) => {
    const { Skeleton, cn } = elements;
    const { AutoInput, AutoRolesInput, AutoFileInput, AutoEnumInput, AutoJSONInput, AutoDateTimePicker, AutoPasswordInput, AutoBooleanInput, AutoEncryptedStringInput, AutoStringInput, AutoEmailInput, AutoUrlInput, AutoNumberInput, AutoIdInput, AutoHiddenInput, AutoTextAreaInput, AutoRichTextInput, AutoBelongsToInput, AutoHasManyInput, AutoHasManyThroughInput, AutoHasOneInput, } = makeShadcnAutoInput(elements);
    const AutoSubmit = makeShadcnAutoSubmit(elements);
    const { SubmitSuccessfulBanner, SubmitErrorBanner, SubmitResultBanner } = makeSubmitResultBanner(elements);
    const AutoHasOneForm = makeShadcnAutoHasOneForm(elements);
    const AutoBelongsToForm = makeShadcnAutoBelongsToForm(elements);
    const AutoHasManyForm = makeShadcnAutoHasManyForm(elements);
    const AutoHasManyThroughForm = makeShadcnAutoHasManyThroughForm(elements);
    const FormContainer = forwardRef(({ className, ...props }, ref) => {
        return React.createElement("form", { ref: ref, noValidate: true, className: cn("space-y-6", className), ...props });
    });
    function AutoForm(props) {
        const { action, findBy } = props;
        validateAutoFormProps(props);
        // Component key to force re-render when the action or findBy changes
        const componentKey = `${"modelApiIdentifier" in action ? `${action.modelApiIdentifier}.` : ""}${action.operationName}.${JSON.stringify(findBy)}`;
        return (React.createElement(AutoFormFieldsFromChildComponentsProvider, { hasCustomFormChildren: React.Children.count(props.children) > 0 },
            React.createElement(AutoFormInner, { key: componentKey, ...props })));
    }
    function AutoFormInner(props) {
        const { record: _record, action, findBy, ...rest } = props;
        const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods, isLoading, } = useAutoForm(props);
        const formTitle = "title" in props && props.title !== undefined ? props.title : humanizeCamelCase(action.operationName);
        if (props.successContent && isSubmitSuccessful) {
            return props.successContent;
        }
        if (fetchingMetadata) {
            return (React.createElement(FormContainer, { ...rest, onSubmit: submit },
                React.createElement(Skeleton, null)));
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
        const formContent = props.children ?? (React.createElement(React.Fragment, null,
            formTitle && React.createElement("h2", { className: "text-2xl font-bold" }, formTitle),
            !props.onSuccess && React.createElement(SubmitSuccessfulBanner, null),
            !props.onFailure && React.createElement(SubmitErrorBanner, null),
            !metadataError && (React.createElement(React.Fragment, null,
                fields.map(({ metadata }) => (React.createElement(AutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
                React.createElement(AutoSubmit, null, "submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit")))));
        return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
            React.createElement(FormProvider, { ...originalFormMethods },
                React.createElement(FormContainer, { ...rest, className: cn(`${isLoading || isSubmitting ? "opacity-30" : ""} ${rest.className ?? ""}`), onSubmit: submit }, formContent))));
    }
    return {
        AutoForm,
        AutoInput,
        AutoSubmit,
        SubmitResultBanner,
        SubmitSuccessfulBanner,
        SubmitErrorBanner,
        AutoRolesInput,
        AutoEnumInput,
        AutoFileInput,
        AutoJSONInput,
        AutoDateTimePicker,
        AutoPasswordInput,
        AutoBooleanInput,
        AutoEncryptedStringInput,
        AutoStringInput,
        AutoEmailInput,
        AutoUrlInput,
        AutoNumberInput,
        AutoIdInput,
        AutoHiddenInput,
        AutoTextAreaInput,
        AutoRichTextInput,
        AutoBelongsToInput,
        AutoHasManyInput,
        AutoHasManyThroughInput,
        AutoHasOneInput,
        AutoBelongsToForm,
        AutoHasManyForm,
        AutoHasManyThroughForm,
        AutoHasOneForm,
    };
};
//# sourceMappingURL=ShadcnAutoForm.js.map