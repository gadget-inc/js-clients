import { Banner, Button, Form, FormLayout, SkeletonBodyText, SkeletonDisplayText } from "@shopify/polaris";
import React from "react";
import { useActionMetadata } from "../../../../metadata";
import { useActionForm } from "../../../../useActionForm";
import { useFormFields, useValidationResolver } from "../../AutoForm";
import { PolarisErrorDisplay } from "./PolarisErrorDisplay";
import { PolarisFormInput } from "./PolarisFormInput";
export const PolarisFormSkeleton = () => (React.createElement(React.Fragment, null,
    React.createElement(SkeletonDisplayText, { size: "medium" }),
    React.createElement(SkeletonBodyText, null)));
/**
 * Renders a form for an action on a model automatically using Polaris
 */
export const PolarisAutoForm = (props) => {
    const { action, include: _include, exclude: _exclude, fields: _fields, submitLabel: _submitLabel, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, props);
    // setup the form state for the action
    const { submit, control, error: formError, fetching: formFetching, submissionCompleted, } = useActionForm(action, {
        record: props.record,
        resolver: useValidationResolver(metadata),
        send: fields.map(([path]) => path),
    });
    const error = formError ?? metadataError;
    if (error && !error.validationErrors) {
        return React.createElement(PolarisErrorDisplay, { error: error });
    }
    if (submissionCompleted) {
        return props.successContent ?? React.createElement(Banner, { title: `Saved ${metadata?.name} successfully.`, status: "success" });
    }
    return (React.createElement(Form, { ...rest, onSubmit: submit },
        React.createElement(FormLayout, null,
            fetchingMetadata && React.createElement(PolarisFormSkeleton, null),
            fields.map(([path, field]) => (React.createElement(PolarisFormInput, { key: field.apiIdentifier, path: path, field: field, control: control }))),
            React.createElement(Button, { loading: formFetching, submit: true, onClick: submit }, props.submitLabel ?? "Submit"))));
};
//# sourceMappingURL=PolarisAutoForm.js.map