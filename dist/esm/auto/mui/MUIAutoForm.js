import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";
import { humanizeCamelCase } from "../../utils.js";
import { useAutoForm } from "../AutoForm.js";
import { validateAutoFormProps } from "../AutoFormActionValidators.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { MUIAutoInput } from "./inputs/MUIAutoInput.js";
import { MUIAutoSubmit } from "./submit/MUIAutoSubmit.js";
import { MUISubmitErrorBanner, MUISubmitSuccessfulBanner } from "./submit/MUISubmitResultBanner.js";
export const MUIFormSkeleton = () => (React.createElement(React.Fragment, null,
    React.createElement(Skeleton, { animation: "wave" }),
    React.createElement(Skeleton, { animation: "wave" })));
/**
 * Renders a form for an action on a model automatically using MUI
 */
export const MUIAutoForm = (props) => {
    const { action, findBy } = props;
    validateAutoFormProps(props);
    // Component key to force re-render when the action or findBy changes
    const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;
    return React.createElement(MUIAutoFormComponent, { key: componentKey, ...props });
};
export const MUIAutoFormComponent = (props) => {
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
        return (React.createElement(Grid, { container: true, component: "form", spacing: 2, onSubmit: submit, ...rest },
            React.createElement(MUIFormSkeleton, null)));
    }
    const formContent = props.children ?? (React.createElement(React.Fragment, null,
        formTitle && React.createElement(Typography, { variant: "h5" }, formTitle),
        !props.onSuccess && React.createElement(MUISubmitSuccessfulBanner, null),
        !props.onFailure && React.createElement(MUISubmitErrorBanner, null),
        !metadataError && (React.createElement(React.Fragment, null,
            fields.map(({ metadata }) => (React.createElement(Grid, { item: true, key: metadata.apiIdentifier, xs: 12 },
                React.createElement(MUIAutoInput, { field: metadata.apiIdentifier })))),
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(MUIAutoSubmit, null, props.submitLabel ?? "Submit"))))));
    return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext, key: `${action.modelApiIdentifier}.${action.operationName}.${findBy}` },
        React.createElement(FormProvider, { ...originalFormMethods },
            React.createElement(Grid, { container: true, component: "form", spacing: 2, onSubmit: submit, ...rest }, formContent))));
};
//# sourceMappingURL=MUIAutoForm.js.map