"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoFormComponent = exports.MUIAutoForm = exports.MUIFormSkeleton = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const utils_js_1 = require("../../utils.js");
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormActionValidators_js_1 = require("../AutoFormActionValidators.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const MUIAutoInput_js_1 = require("./inputs/MUIAutoInput.js");
const MUIAutoSubmit_js_1 = require("./submit/MUIAutoSubmit.js");
const MUISubmitResultBanner_js_1 = require("./submit/MUISubmitResultBanner.js");
const MUIFormSkeleton = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(material_1.Skeleton, { animation: "wave" }),
    react_1.default.createElement(material_1.Skeleton, { animation: "wave" })));
exports.MUIFormSkeleton = MUIFormSkeleton;
/**
 * Renders a form for an action on a model automatically using MUI
 */
const MUIAutoForm = (props) => {
    const { action, findBy } = props;
    (0, AutoFormActionValidators_js_1.validateAutoFormProps)(props);
    // Component key to force re-render when the action or findBy changes
    const componentKey = `${action.modelApiIdentifier ?? ""}.${action.operationName}.${JSON.stringify(findBy)}`;
    return react_1.default.createElement(exports.MUIAutoFormComponent, { key: componentKey, ...props });
};
exports.MUIAutoForm = MUIAutoForm;
const MUIAutoFormComponent = (props) => {
    const { record: _record, action, findBy, ...rest } = props;
    const { metadata, fetchingMetadata, metadataError, fields, submit, formError, isSubmitting, isSubmitSuccessful, originalFormMethods } = (0, AutoForm_js_1.useAutoForm)(props);
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
    const formTitle = props.title === undefined ? (0, utils_js_1.humanizeCamelCase)(action.operationName) : props.title;
    if (props.successContent && isSubmitSuccessful) {
        return props.successContent;
    }
    if (fetchingMetadata) {
        return (react_1.default.createElement(material_1.Grid, { container: true, component: "form", spacing: 2, onSubmit: submit, ...rest },
            react_1.default.createElement(exports.MUIFormSkeleton, null)));
    }
    const formContent = props.children ?? (react_1.default.createElement(react_1.default.Fragment, null,
        formTitle && react_1.default.createElement(material_1.Typography, { variant: "h5" }, formTitle),
        !props.onSuccess && react_1.default.createElement(MUISubmitResultBanner_js_1.MUISubmitSuccessfulBanner, null),
        !props.onFailure && react_1.default.createElement(MUISubmitResultBanner_js_1.MUISubmitErrorBanner, null),
        !metadataError && (react_1.default.createElement(react_1.default.Fragment, null,
            fields.map(({ metadata }) => (react_1.default.createElement(material_1.Grid, { item: true, key: metadata.apiIdentifier, xs: 12 },
                react_1.default.createElement(MUIAutoInput_js_1.MUIAutoInput, { field: metadata.apiIdentifier })))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(MUIAutoSubmit_js_1.MUIAutoSubmit, null, props.submitLabel ?? "Submit"))))));
    return (react_1.default.createElement(AutoFormContext_js_1.AutoFormMetadataContext.Provider, { value: autoFormMetadataContext, key: `${action.modelApiIdentifier}.${action.operationName}.${findBy}` },
        react_1.default.createElement(react_hook_form_1.FormProvider, { ...originalFormMethods },
            react_1.default.createElement(material_1.Grid, { container: true, component: "form", spacing: 2, onSubmit: submit, ...rest }, formContent))));
};
exports.MUIAutoFormComponent = MUIAutoFormComponent;
//# sourceMappingURL=MUIAutoForm.js.map