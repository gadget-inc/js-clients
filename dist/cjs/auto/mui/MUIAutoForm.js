"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoForm = exports.MUIFormSkeleton = void 0;
const tslib_1 = require("tslib");
const lab_1 = require("@mui/lab");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_js_1 = require("../../metadata.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const MUIErrorDisplay_js_1 = require("./MUIErrorDisplay.js");
const MUIAutoInput_js_1 = require("./inputs/MUIAutoInput.js");
const MUIFormSkeleton = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(material_1.Skeleton, { animation: "wave" }),
    react_1.default.createElement(material_1.Skeleton, { animation: "wave" })));
exports.MUIFormSkeleton = MUIFormSkeleton;
/**
 * Renders a form for an action on a model automatically using MUI
 */
const MUIAutoForm = (props) => {
    const { action, record, findBy, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(action);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, AutoForm_js_1.useFormFields)(metadata, props);
    // setup the form state for the action
    const { submit, error: formError, formState: { isLoading, isSubmitSuccessful }, originalFormMethods, } = (0, useActionForm_js_1.useActionForm)(action, {
        defaultValues: { [action.modelApiIdentifier]: props.record },
        findBy,
        resolver: (0, AutoForm_js_1.useValidationResolver)(metadata),
        send: fields.map(({ path }) => path),
    });
    const error = formError ?? metadataError;
    if (error && !error.validationErrors) {
        return react_1.default.createElement(MUIErrorDisplay_js_1.MUIErrorDisplay, { error: error });
    }
    if (isSubmitSuccessful) {
        return props.successContent ?? react_1.default.createElement(material_1.Alert, { severity: "success" },
            "Saved ",
            metadata?.name,
            " successfully");
    }
    return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: { submit, metadata } },
        react_1.default.createElement(react_hook_form_1.FormProvider, { ...originalFormMethods },
            react_1.default.createElement(material_1.Grid, { container: true, component: "form", spacing: 2, onSubmit: submit, ...rest },
                fetchingMetadata && react_1.default.createElement(exports.MUIFormSkeleton, null),
                fields.map(({ metadata }) => (react_1.default.createElement(material_1.Grid, { item: true, key: metadata.apiIdentifier, xs: 12 },
                    react_1.default.createElement(MUIAutoInput_js_1.MUIAutoInput, { field: metadata.apiIdentifier })))),
                react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(lab_1.LoadingButton, { loading: isLoading, type: "submit" }, props.submitLabel ?? "Submit"))))));
};
exports.MUIAutoForm = MUIAutoForm;
//# sourceMappingURL=MUIAutoForm.js.map