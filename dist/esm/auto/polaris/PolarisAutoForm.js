import { BlockStack, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText, Text } from "@shopify/polaris";
import React, { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { humanizeCamelCase } from "../../utils.js";
import { useAutoForm } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisAutoInput } from "./inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "./submit/PolarisAutoSubmit.js";
import { PolarisSubmitErrorBanner, PolarisSubmitResultBanner } from "./submit/PolarisSubmitResultBanner.js";
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
    // Component key to force re-render when the action or findBy changes
    const componentKey = `${action.modelApiIdentifier}.${action.operationName}.${findBy}`;
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
        },
        model: {
            apiIdentifier: action.modelApiIdentifier,
            namespace: action.namespace,
        },
    };
    const humanizedOperationName = useMemo(() => humanizeCamelCase(action.operationName), [action.operationName]);
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
    if (fetchingMetadata) {
        return (React.createElement(Form, { ...rest, onSubmit: submit },
            React.createElement(FormLayout, null,
                React.createElement(PolarisFormSkeleton, null))));
    }
    const formContent = props.children ?? (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: "headingLg", as: "h5" }, humanizedOperationName),
        !props.onSuccess ? React.createElement(PolarisSubmitResultBanner, null) : React.createElement(PolarisSubmitErrorBanner, null),
        !metadataError && (React.createElement(React.Fragment, null,
            fields.map(({ metadata }) => (React.createElement(PolarisAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
            React.createElement("div", null,
                React.createElement(PolarisAutoSubmit, { isSubmitting: isSubmitting }, props.submitLabel ?? "Submit"))))));
    return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        React.createElement(FormProvider, { ...originalFormMethods },
            React.createElement(Form, { ...rest, onSubmit: submit },
                React.createElement(BlockStack, { gap: "400" }, formContent)))));
};
//# sourceMappingURL=PolarisAutoForm.js.map