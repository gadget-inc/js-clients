"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBelongsToInputController = void 0;
const react_1 = require("react");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const useBelongsToInputController = (props) => {
    const { field } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { path } = fieldMetadata;
    const { setValue } = (0, useActionForm_js_1.useFormContext)();
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)(props);
    const { relatedModel } = relatedModelOptions;
    const value = (0, useActionForm_js_1.useWatch)({ name: path });
    const selectedRecord = value?.id ? value : undefined;
    const isLoading = relatedModel.fetching;
    const errorMessage = relatedModel.error?.message;
    const onSelectRecord = (0, react_1.useCallback)((record) => {
        console.log({ path, record });
        setValue(path, record);
    }, [path, setValue]);
    const onRemoveRecord = (0, react_1.useCallback)(() => {
        const { __typename, ...rest } = value;
        const nullifiedRest = Object.keys(rest).reduce((acc, key) => {
            acc[key] = null;
            return acc;
        }, {});
        setValue(path, { ...nullifiedRest, id: null, __typename });
    }, [path, setValue, value]);
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