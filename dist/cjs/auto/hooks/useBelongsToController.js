"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBelongsToInputController = exports.useBelongsToController = void 0;
const react_1 = require("react");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const useBelongsToController = (props) => {
    const { field, primaryLabel, secondaryLabel, tertiaryLabel } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { path } = fieldMetadata;
    const record = (0, useActionForm_js_1.useWatch)({ name: path });
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)({ field, optionLabel: primaryLabel, secondaryLabel, tertiaryLabel });
    const isLoading = relatedModelOptions.relatedModel.fetching;
    const errorMessage = relatedModelOptions.relatedModel.error?.message;
    return {
        record,
        fieldMetadata,
        relatedModelOptions,
        isLoading,
        errorMessage,
    };
};
exports.useBelongsToController = useBelongsToController;
const useBelongsToInputController = (props) => {
    const { field, control, optionLabel } = props;
    const { fieldMetadata, relatedModelOptions, isLoading, errorMessage } = (0, exports.useBelongsToController)({ field, primaryLabel: optionLabel });
    const { path } = fieldMetadata;
    const { field: { value, onChange }, } = (0, useActionForm_js_1.useController)({
        name: path + ".id",
        control,
    });
    const selectedRecord = relatedModelOptions.relatedModel.records.find((record) => record.id === value);
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
//# sourceMappingURL=useBelongsToController.js.map