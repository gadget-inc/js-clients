import { LoadingButton } from "@mui/lab";
import { Alert, Grid, Skeleton } from "@mui/material";
import React from "react";
import { useActionMetadata } from "../../metadata.js";
import { useActionForm } from "../../useActionForm.js";
import { useFormFields, useValidationResolver } from "../AutoForm.js";
import { MUIErrorDisplay } from "./MUIErrorDisplay.js";
import { MUIFormInput } from "./MUIFormInput.js";
export const MUIFormSkeleton = () => (React.createElement(React.Fragment, null,
    React.createElement(Skeleton, { animation: "wave" }),
    React.createElement(Skeleton, { animation: "wave" })));
/**
 * Renders a form for an action on a model automatically using MUI
 */
export const MUIAutoForm = (props) => {
    const { action, include: _include, exclude: _exclude, fields: _fields, submitLabel: _submitLabel, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, props);
    // setup the form state for the action
    const { submit, control, error: formError, formState: { isLoading, isSubmitSuccessful }, } = useActionForm(action, {
        defaultValues: { [action.modelApiIdentifier]: props.record },
        resolver: useValidationResolver(metadata),
        send: fields.map(([path]) => path),
    });
    const error = formError ?? metadataError;
    if (error && !error.validationErrors) {
        return React.createElement(MUIErrorDisplay, { error: error });
    }
    if (isSubmitSuccessful) {
        return props.successContent ?? React.createElement(Alert, { severity: "success" },
            "Saved ",
            metadata?.name,
            " successfully");
    }
    return (React.createElement(Grid, { container: true, component: "form", spacing: 2, onSubmit: submit, ...rest },
        fetchingMetadata && React.createElement(MUIFormSkeleton, null),
        fields.map(([path, field]) => (React.createElement(Grid, { item: true, key: field.apiIdentifier, xs: 12 },
            React.createElement(MUIFormInput, { path: path, field: field, control: control })))),
        React.createElement(Grid, { item: true, xs: 12 },
            React.createElement(LoadingButton, { loading: isLoading, type: "submit" }, props.submitLabel ?? "Submit"))));
};
//# sourceMappingURL=MUIAutoForm.js.map