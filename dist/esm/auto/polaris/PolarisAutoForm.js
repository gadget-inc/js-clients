import { BlockStack, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText, Text } from "@shopify/polaris";
import React from "react";
import { FormProvider } from "react-hook-form";
import { humanizeCamelCase } from "../../utils.js";
import { useAutoForm } from "../AutoForm.js";
import { TriggerableActionRequiredErrorMessage } from "../AutoFormActionValidators.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisAutoInput } from "./inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "./submit/PolarisAutoSubmit.js";
import { PolarisSubmitErrorBanner, PolarisSubmitSuccessfulBanner } from "./submit/PolarisSubmitResultBanner.js";
export const PolarisFormSkeleton = () => (React.createElement(React.Fragment, null,
    React.createElement(SkeletonDisplayText, { size: "medium" }),
    React.createElement(SkeletonBodyText, null)));
/**
 * Renders a form for an action on a model automatically using Polaris
 */
export const PolarisAutoForm = (
//polaris form props also take an 'action' property, which we need to omit here.
props) => {
    const { action, findBy } = props;
    if (!action) {
        throw new Error(TriggerableActionRequiredErrorMessage);
    }
    // Component key to force re-render when the action or findBy changes
    const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${findBy}`;
    return (React.createElement(PolarisAutoFormComponent, { key: componentKey, ...props }));
};
const PolarisAutoFormComponent = (
//polaris form props also take an 'action' property, which we need to omit here.
props) => {
    const { record: _record, action, findBy, ...rest } = props;
    const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods } = useAutoForm(props);
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
    const formTitle = props.title === undefined ? humanizeCamelCase(action.operationName) : props.title;
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
    if (fetchingMetadata) {
        return (React.createElement(Form, { ...rest, onSubmit: submit },
            React.createElement(FormLayout, null,
                React.createElement(PolarisFormSkeleton, null))));
    }
    const formContent = props.children ?? (React.createElement(React.Fragment, null,
        formTitle && (React.createElement(Text, { variant: "headingLg", as: "h5" }, formTitle)),
        !props.onSuccess && React.createElement(PolarisSubmitSuccessfulBanner, null),
        !props.onFailure && React.createElement(PolarisSubmitErrorBanner, null),
        !metadataError && (React.createElement(React.Fragment, null,
            fields.map(({ metadata }) => (React.createElement(PolarisAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
            React.createElement("div", null,
                React.createElement(PolarisAutoSubmit, null,
                    props.submitLabel ?? "Submit",
                    " "))))));
    return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        React.createElement(FormProvider, { ...originalFormMethods },
            React.createElement(Form, { ...rest, onSubmit: submit },
                React.createElement(BlockStack, { gap: "400" }, formContent)))));
};
//# sourceMappingURL=PolarisAutoForm.js.map