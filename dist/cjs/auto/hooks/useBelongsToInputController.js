"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBelongsToInputController = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModelOptions_js_1 = require("./useRelatedModelOptions.js");
const useBelongsToInputController = (props) => {
    const { field, control } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { path } = fieldMetadata;
    const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const relatedModelOptions = (0, useRelatedModelOptions_js_1.useRelatedModelOptions)(props);
    const { selected, relatedModel } = relatedModelOptions;
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, react_hook_form_1.useController)({
        name: path + ".id",
        control,
    });
    const isLoading = selected.fetching || relatedModel.fetching;
    const errorMessage = fieldError?.message || selected.error?.message || relatedModel.error?.message;
    const retrievedSelectedRecordId = (0, react_1.useMemo)(() => {
        return !selected.fetching && selected.records && selected.records.length ? selected.records[0][`${field}Id`] : null;
    }, [selected.fetching]);
    const selectedRelatedModelRecordMissing = (0, react_1.useMemo)(() => {
        if (!findBy) {
            // Without a find by, there is no retrieved record ID
            return false;
        }
        return !selected.fetching && selected.records && selected.records.length
            ? !selected.records[0].id && !relatedModel.records.map((r) => r.id).includes(fieldProps.value)
            : true;
    }, [findBy, selected.fetching, fieldProps.value, relatedModel.records]);
    (0, react_1.useEffect)(() => {
        // Initializing the controller with the selected record ID from the DB
        if (!selected.fetching && retrievedSelectedRecordId) {
            fieldProps.onChange(retrievedSelectedRecordId);
        }
    }, [selected.fetching]);
    const onSelectRecord = (0, react_1.useCallback)((recordId) => {
        fieldProps.onChange(recordId);
    }, []);
    const onRemoveRecord = (0, react_1.useCallback)(() => {
        fieldProps.onChange(null);
    }, []);
    return {
        fieldMetadata,
        relatedModelOptions,
        onSelectRecord,
        onRemoveRecord,
        selectedRecordId: fieldProps.value,
        selectedRelatedModelRecordMissing,
        isLoading,
        errorMessage,
    };
};
exports.useBelongsToInputController = useBelongsToInputController;
//# sourceMappingURL=useBelongsToInputController.js.map