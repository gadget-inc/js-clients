import { BlockStack, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText, Text } from "@shopify/polaris";
import React from "react";
import { FormProvider } from "../../useActionForm.js";
import { humanizeCamelCase } from "../../utils.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormFieldsFromChildComponentsProvider, AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisAutoInput } from "./inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "./submit/PolarisAutoSubmit.js";
import { PolarisSubmitErrorBanner, PolarisSubmitSuccessfulBanner } from "./submit/PolarisSubmitResultBanner.js";
export const PolarisAutoFormSkeleton = () => (React.createElement(React.Fragment, null,
    React.createElement(FormLayout, null,
        React.createElement(SkeletonDisplayText, { size: "medium" }),
        React.createElement(SkeletonBodyText, null))));
/**
 * Renders a form for an action on a model automatically using Polaris
 */
export const PolarisAutoForm = (props) => {
    const { action, findBy } = props;
    validateAutoFormProps(props);
    // Component key to force re-render when the action or findBy changes
    const componentKey = `${"modelApiIdentifier" in action ? `${action.modelApiIdentifier}.` : ""}${action.operationName}.${JSON.stringify(findBy)}`;
    return (React.createElement(AutoFormFieldsFromChildComponentsProvider, { hasCustomFormChildren: React.Children.count(props.children) > 0 },
        React.createElement(PolarisAutoFormComponent, { key: componentKey, ...props })));
};
const PolarisAutoFormComponent = (
//polaris form props also take an 'action' property, which we need to omit here.
props) => {
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
        return (React.createElement(Form, { ...rest, onSubmit: submit },
            React.createElement(PolarisAutoFormSkeleton, null)));
    }
    const formContent = props.children ?? (React.createElement(React.Fragment, null,
        formTitle && (React.createElement(Text, { variant: "headingLg", as: "h5" }, formTitle)),
        !props.onSuccess && React.createElement(PolarisSubmitSuccessfulBanner, null),
        !props.onFailure && React.createElement(PolarisSubmitErrorBanner, null),
        !metadataError && (React.createElement(React.Fragment, null,
            fields.map(({ metadata }) => (React.createElement(PolarisAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
            React.createElement("div", null,
                React.createElement(PolarisAutoSubmit, null,
                    "submitLabel" in props && props.submitLabel ? props.submitLabel : "Submit",
                    " "))))));
    return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        React.createElement(FormProvider, { ...originalFormMethods },
            React.createElement("div", { style: { opacity: isLoading || isSubmitting ? 0.3 : 1 } },
                React.createElement(Form, { ...rest, onSubmit: submit },
                    React.createElement(BlockStack, { gap: "400" }, formContent))))));
};
//# sourceMappingURL=PolarisAutoForm.js.map