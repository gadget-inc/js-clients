"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoForm = exports.MUIFormSkeleton = void 0;
const lab_1 = require("@mui/lab");
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const metadata_js_1 = require("../../metadata.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const AutoForm_js_1 = require("../AutoForm.js");
const MUIErrorDisplay_js_1 = require("./MUIErrorDisplay.js");
const MUIFormInput_js_1 = require("./MUIFormInput.js");
const MUIFormSkeleton = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(material_1.Skeleton, { animation: "wave" }),
    react_1.default.createElement(material_1.Skeleton, { animation: "wave" })));
exports.MUIFormSkeleton = MUIFormSkeleton;
/**
 * Renders a form for an action on a model automatically using MUI
 */
const MUIAutoForm = (props) => {
    const { action, include: _include, exclude: _exclude, fields: _fields, submitLabel: _submitLabel, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(action);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, AutoForm_js_1.useFormFields)(metadata, props);
    // setup the form state for the action
    const { submit, control, error: formError, fetching: formFetching, submissionCompleted, } = (0, useActionForm_js_1.useActionForm)(action, {
        record: props.record,
        resolver: (0, AutoForm_js_1.useValidationResolver)(metadata),
        send: fields.map(([path]) => path),
    });
    const error = formError ?? metadataError;
    if (error && !error.validationErrors) {
        return react_1.default.createElement(MUIErrorDisplay_js_1.MUIErrorDisplay, { error: error });
    }
    if (submissionCompleted) {
        return props.successContent ?? react_1.default.createElement(material_1.Alert, { severity: "success", title: `Saved ${metadata?.name} successfully.` });
    }
    return (react_1.default.createElement(material_1.Grid, { container: true, component: "form", spacing: 2, onSubmit: () => void submit(), ...rest },
        fetchingMetadata && react_1.default.createElement(exports.MUIFormSkeleton, null),
        fields.map(([path, field]) => (react_1.default.createElement(material_1.Grid, { item: true, key: field.apiIdentifier, xs: 12 },
            react_1.default.createElement(MUIFormInput_js_1.MUIFormInput, { path: path, field: field, control: control })))),
        react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
            react_1.default.createElement(lab_1.LoadingButton, { loading: formFetching, type: "submit" }, props.submitLabel ?? "Submit"))));
};
exports.MUIAutoForm = MUIAutoForm;
//# sourceMappingURL=MUIAutoForm.js.map