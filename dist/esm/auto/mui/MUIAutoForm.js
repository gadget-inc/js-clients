import { Grid, Skeleton } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";
import { useAutoForm } from "../AutoForm.js";
import { AutoFormMetadataContext } from "../AutoFormContext.js";
import { MUIAutoInput } from "./inputs/MUIAutoInput.js";
import { MUIAutoSubmit } from "./submit/MUIAutoSubmit.js";
import { MUISubmitErrorBanner, MUISubmitResultBanner } from "./submit/MUISubmitResultBanner.js";
export const MUIFormSkeleton = () => (React.createElement(React.Fragment, null,
    React.createElement(Skeleton, { animation: "wave" }),
    React.createElement(Skeleton, { animation: "wave" })));
/**
 * Renders a form for an action on a model automatically using MUI
 */
export const MUIAutoForm = (props) => {
    const { record: _record, action, findBy, ...rest } = props;
    const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitSuccessful, isLoading, originalFormMethods } = useAutoForm(props);
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
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
    const formContent = props.children ?? (React.createElement(React.Fragment, null,
        !props.onSuccess ? React.createElement(MUISubmitResultBanner, null) : React.createElement(MUISubmitErrorBanner, null),
        fetchingMetadata && React.createElement(MUIFormSkeleton, null),
        !metadataError && (React.createElement(React.Fragment, null,
            fields.map(({ metadata }) => (React.createElement(Grid, { item: true, key: metadata.apiIdentifier, xs: 12 },
                React.createElement(MUIAutoInput, { field: metadata.apiIdentifier })))),
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(MUIAutoSubmit, { loading: isLoading }, props.submitLabel ?? "Submit"))))));
    return (React.createElement(AutoFormMetadataContext.Provider, { value: autoFormMetadataContext },
        React.createElement(FormProvider, { ...originalFormMethods },
            React.createElement(Grid, { container: true, component: "form", spacing: 2, onSubmit: submit, ...rest }, formContent))));
};
//# sourceMappingURL=MUIAutoForm.js.map