"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasOneInputController = void 0;
const react_1 = require("react");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const useHasOneInputController = (props) => {
    const { field, control } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { metadata, path } = fieldMetadata;
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, useActionForm_js_1.useController)({
        name: path,
        control,
    });
    const value = fieldProps.value;
    const selectedRecord = (0, react_1.useMemo)(() => {
        if (!value) {
            return undefined;
        }
        return "_unlink" in value && value._unlink ? undefined : value;
    }, [value]);
    console.log({ metadata, path, value, selectedRecord });
    const inverseFieldApiIdentifier = (0, react_1.useMemo)(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
    }, [metadata.configuration]);
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)(props);
    const { options, pagination, search, relatedModel } = relatedModelOptions;
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
                fieldProps.onChange({ ...value, _unlink: { id: record.id, inverseFieldApiIdentifier } });
            }
        }
        else {
            fieldProps.onChange({ ...record, _link: record.id });
        }
    }, [value, inverseFieldApiIdentifier, fieldProps]);
    const onRemoveRecord = (0, react_1.useCallback)((record) => {
        if (value && "_unlink" in value && value._unlink) {
            const { _unlink, ...rest } = value;
            fieldProps.onChange(rest);
        }
        else {
            fieldProps.onChange({ ...value, _unlink: { id: record.id, inverseFieldApiIdentifier } });
        }
    }, [value, inverseFieldApiIdentifier, fieldProps]);
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
//# sourceMappingURL=useHasOneInputController.js.map