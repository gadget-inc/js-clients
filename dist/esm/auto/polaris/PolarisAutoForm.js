import { Form, FormLayout, SkeletonBodyText, SkeletonDisplayText } from "@shopify/polaris";
import React from "react";
import { FormProvider } from "react-hook-form";
import { useActionMetadata } from "../../metadata.js";
import { useActionForm } from "../../useActionForm.js";
import { useFormFields, useValidationResolver } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { PolarisAutoInput } from "./inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "./submit/PolarisAutoSubmit.js";
import { PolarisSubmitResultBanner } from "./submit/PolarisSubmitResultBanner.js";
export const PolarisFormSkeleton = () => (React.createElement(React.Fragment, null,
    React.createElement(SkeletonDisplayText, { size: "medium" }),
    React.createElement(SkeletonBodyText, null)));
/**
 * Renders a form for an action on a model automatically using Polaris
 */
export const PolarisAutoForm = (
//polaris form props also take an 'action' property, which we need to omit here.
props) => {
    const { action, record, findBy, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, props);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading }, originalFormMethods, } = useActionForm(action, {
        defaultValues: { [action.modelApiIdentifier]: record },
        findBy,
        resolver: useValidationResolver(metadata),
        send: fields.map(({ path }) => path),
    });
    const autoFormMetadataContext = {
        submit,
        metadata,
        submitResult: {
            isSuccessful: isSubmitSuccessful,
            error: formError ?? metadataError,
        },
    };
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
    if (fetchingMetadata) {
        return (React.createElement(Form, { ...rest, onSubmit: submit },
            React.createElement(FormLayout, null,
                React.createElement(PolarisFormSkeleton, null),
                ";")));
    }
    const formContent = props.children ?? (React.createElement(React.Fragment, null,
        React.createElement(PolarisSubmitResultBanner, null),
        fields.map(({ metadata }) => (React.createElement(PolarisAutoInput, { field: metadata.apiIdentifier, key: metadata.apiIdentifier }))),
        React.createElement(PolarisAutoSubmit, null, props.submitLabel ?? "Submit")));
    return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        React.createElement(FormProvider, { ...originalFormMethods },
            React.createElement(Form, { ...rest, onSubmit: submit },
                React.createElement(FormLayout, null, formContent)))));
};
//# sourceMappingURL=PolarisAutoForm.js.map