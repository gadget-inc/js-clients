"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBelongsToInputController = void 0;
const react_1 = require("react");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const useBelongsToInputController = (props) => {
    const { field, control } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { path } = fieldMetadata;
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)(props);
    const { relatedModel } = relatedModelOptions;
    const { field: { value, onChange }, } = (0, useActionForm_js_1.useController)({
        name: path + ".id",
        control,
    });
    const selectedRecord = relatedModelOptions.relatedModel.records.find((record) => record.id === value);
    const isLoading = relatedModel.fetching;
    const errorMessage = relatedModel.error?.message;
    const onSelectRecord = (0, react_1.useCallback)((record) => {
        onChange(record.id);
    }, [onChange]);
    const onRemoveRecord = (0, react_1.useCallback)(() => {
        onChange(null);
    }, [onChange]);
    return {
        fieldMetadata,
        relatedModelOptions,
        onSelectRecord,
        onRemoveRecord,
        selectedRecord,
        isLoading,
        errorMessage,
    };
};
exports.useBelongsToInputController = useBelongsToInputController;
//# sourceMappingURL=useBelongsToInputController.js.map