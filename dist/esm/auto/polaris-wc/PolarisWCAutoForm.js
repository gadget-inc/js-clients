import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase } from "../../utils.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisWCAutoInput } from "./inputs/PolarisWCAutoInput.js";
import { PolarisWCAutoSubmit } from "./submit/PolarisWCAutoSubmit.js";
import { PolarisWCSubmitErrorBanner, PolarisWCSubmitSuccessfulBanner } from "./submit/PolarisWCSubmitResultBanner.js";
/**
 * Skeleton loader for Polaris Web Components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   {isLoading ? <AutoFormSkeleton /> : <AutoFormContent />}
 * </AutoForm>
 * ```
 */
export const PolarisWCAutoFormSkeleton = () => (React.createElement("s-stack", { gap: "large" }));
/**
 * Renders a form for an action on a model using Polaris Web Components.
 */
export const PolarisWCAutoForm = (props) => {
    const { action, findBy } = props;
    validateAutoFormProps(props);
    // Forces re-render when the action or findBy changes.
    const componentKey = `${"modelApiIdentifier" in action ? `${action.modelApiIdentifier}.` : ""}${action.operationName}.${JSON.stringify(findBy)}`;
    return (React.createElement(AutoFormFieldsFromChildComponentsProvider, { hasCustomFormChildren: React.Children.count(props.children) > 0 },
        React.createElement(PolarisWCAutoFormComponent, { key: componentKey, ...props })));
};
const PolarisWCAutoFormComponent = (props) => {
    const { record: _record, action, findBy, ...rest } = props;
    const { metadata, fetchingMetadata, isLoading, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods, } = useAutoForm(props);
    const formTitle = "title" in props && props.title !== undefined ? props.title : humanizeCamelCase(action.operationName);
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
        return (React.createElement("form", { onSubmit: (e) => {
                e.preventDefault();
                void submit();
            } }, props.loadingSkeleton ?? React.createElement(PolarisWCAutoFormSkeleton, null)));
    }
    const formContent = props.children ?? (React.createElement(React.Fragment, null,
        formTitle && React.createElement("s-heading", { as: "h5" }, formTitle),
        !props.onSuccess && React.createElement(PolarisWCSubmitSuccessfulBanner, null),
        !props.onFailure && React.createElement(PolarisWCSubmitErrorBanner, null),
        !metadataError && (React.createElement(React.Fragment, null,
            fields.map(({ metadata }) => (React.createElement(PolarisWCAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
            React.createElement("div", null,
                React.createElement(PolarisWCAutoSubmit, null, "submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit"))))));
    return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        React.createElement(FormProvider, { ...originalFormMethods },
            React.createElement("div", { style: { opacity: isLoading || isSubmitting ? 0.3 : 1 } },
                React.createElement("form", { onSubmit: (e) => {
                        e.preventDefault();
                        void submit();
                    } },
                    React.createElement("s-stack", { gap: "large" }, formContent))))));
};
//# sourceMappingURL=PolarisWCAutoForm.js.map