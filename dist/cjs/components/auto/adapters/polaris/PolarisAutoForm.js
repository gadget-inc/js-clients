"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoForm = exports.PolarisFormSkeleton = void 0;
const polaris_1 = require("@shopify/polaris");
const react_1 = __importDefault(require("react"));
const metadata_1 = require("../../../../metadata");
const useActionForm_1 = require("../../../../useActionForm");
const AutoForm_1 = require("../../AutoForm");
const PolarisErrorDisplay_1 = require("./PolarisErrorDisplay");
const PolarisFormInput_1 = require("./PolarisFormInput");
const PolarisFormSkeleton = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(polaris_1.SkeletonDisplayText, { size: "medium" }),
    react_1.default.createElement(polaris_1.SkeletonBodyText, null)));
exports.PolarisFormSkeleton = PolarisFormSkeleton;
/**
 * Renders a form for an action on a model automatically using Polaris
 */
const PolarisAutoForm = (props) => {
    const { action, include: _include, exclude: _exclude, fields: _fields, submitLabel: _submitLabel, ...rest } = props;
    // fetch metadata describing this actions inputs and outputs from the backend
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_1.useActionMetadata)(action);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, AutoForm_1.useFormFields)(metadata, props);
    // setup the form state for the action
    const { submit, control, error: formError, fetching: formFetching, submissionCompleted, } = (0, useActionForm_1.useActionForm)(action, {
        record: props.record,
        resolver: (0, AutoForm_1.useValidationResolver)(metadata),
        send: fields.map(([path]) => path),
    });
    const error = formError ?? metadataError;
    if (error && !error.validationErrors) {
        return react_1.default.createElement(PolarisErrorDisplay_1.PolarisErrorDisplay, { error: error });
    }
    if (submissionCompleted) {
        return props.successContent ?? react_1.default.createElement(polaris_1.Banner, { title: `Saved ${metadata?.name} successfully.`, status: "success" });
    }
    return (react_1.default.createElement(polaris_1.Form, { ...rest, onSubmit: submit },
        react_1.default.createElement(polaris_1.FormLayout, null,
            fetchingMetadata && react_1.default.createElement(exports.PolarisFormSkeleton, null),
            fields.map(([path, field]) => (react_1.default.createElement(PolarisFormInput_1.PolarisFormInput, { key: field.apiIdentifier, path: path, field: field, control: control }))),
            react_1.default.createElement(polaris_1.Button, { loading: formFetching, submit: true, onClick: submit }, props.submitLabel ?? "Submit"))));
};
exports.PolarisAutoForm = PolarisAutoForm;
//# sourceMappingURL=PolarisAutoForm.js.map