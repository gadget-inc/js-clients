"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooleanInputController = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const utils_js_1 = require("../../utils.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const utils_js_2 = require("./utils.js");
const useBooleanInputController = (props) => {
    const { field: fieldApiIdentifier, control } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    (0, utils_js_2.assertFieldType)({ fieldApiIdentifier, actualFieldType: metadata.fieldType, expectedFieldType: graphql_js_1.GadgetFieldType.Boolean });
    const { field: fieldProps, fieldState: { error }, } = (0, useActionForm_js_1.useController)({
        control,
        name: path,
    });
    const { formState: { defaultValues }, } = (0, useActionForm_js_1.useFormContext)();
    (0, react_1.useEffect)(() => {
        if (metadata.requiredArgumentForInput) {
            // when the field is required, this defaults to false to match the UI
            // When not required, the field will have a null value unless it is touched by the user
            const defaultValue = (0, utils_js_1.get)(defaultValues ?? {}, path) ?? false;
            fieldProps.onChange(defaultValue);
        }
    }, [metadata.requiredArgumentForInput, defaultValues]);
    return {
        id: path,
        path,
        fieldProps,
        error,
        metadata,
    };
};
exports.useBooleanInputController = useBooleanInputController;
//# sourceMappingURL=useBooleanInputController.js.map