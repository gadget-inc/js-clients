"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasOneInputController = exports.useHasOneController = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const utils_js_1 = require("./utils.js");
const useHasOneController = (props) => {
    const { field } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { path, metadata } = fieldMetadata;
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.HasOne,
    });
    const record = (0, useActionForm_js_1.useWatch)({ name: path });
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)(props);
    const errorMessage = relatedModelOptions.relatedModel.error?.message;
    const isLoading = relatedModelOptions.relatedModel.fetching;
    return {
        record,
        fieldMetadata,
        relatedModelOptions,
        errorMessage,
        isLoading,
    };
};
exports.useHasOneController = useHasOneController;
const useHasOneInputController = (props) => {
    const { field, control } = props;
    const { record: value, fieldMetadata, relatedModelOptions, } = (0, exports.useHasOneController)({
        field,
        recordLabel: { primary: props.optionLabel },
    });
    const { path } = fieldMetadata;
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, useActionForm_js_1.useController)({
        name: path,
        control,
    });
    const selectedRecord = (0, react_1.useMemo)(() => {
        if (!value) {
            return undefined;
        }
        return "_unlink" in value && value._unlink ? undefined : value;
    }, [value]);
    const { relatedModel } = relatedModelOptions;
    const errorMessage = fieldError?.message || relatedModel.error?.message;
    const isLoading = relatedModel.fetching;
    const onSelectRecord = (0, react_1.useCallback)((record) => {
        const isAlreadySelected = value?.id === record.id;
        if (value && isAlreadySelected) {
            if ("_unlink" in value && value._unlink) {
                const { _unlink, ...rest } = value;
                fieldProps.onChange(rest);
            }
            else {
                fieldProps.onChange({ ...value, _unlink: record.id });
            }
        }
        else {
            fieldProps.onChange({ ...record, _link: record.id });
        }
    }, [value, fieldProps]);
    const onRemoveRecord = (0, react_1.useCallback)((record) => {
        if (value && "_unlink" in value && value._unlink) {
            const { _unlink, ...rest } = value;
            fieldProps.onChange(rest);
        }
        else {
            fieldProps.onChange({ ...value, _unlink: record.id });
        }
    }, [value, fieldProps]);
    return {
        fieldMetadata,
        relatedModelOptions,
        selectedRecord,
        errorMessage,
        isLoading,
        onSelectRecord,
        onRemoveRecord,
    };
};
exports.useHasOneInputController = useHasOneInputController;
//# sourceMappingURL=useHasOneController.js.map