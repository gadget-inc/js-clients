"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasManyInputController = exports.useHasManyController = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const utils_js_1 = require("./utils.js");
const useHasManyController = (props) => {
    const { field } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { path, metadata } = fieldMetadata;
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.HasMany,
    });
    const fieldArray = (0, useActionForm_js_1.useFieldArray)({ name: path, keyName: "_fieldArrayKey" });
    const records = (0, react_1.useMemo)(() => {
        return fieldArray.fields.map((field) => {
            const { _fieldArrayKey, ...rest } = field;
            return rest;
        });
    }, [fieldArray.fields]);
    return {
        fieldArrayPath: path,
        fieldMetadata,
        fieldArray,
        records,
    };
};
exports.useHasManyController = useHasManyController;
const useHasManyInputController = (props) => {
    const { field } = props;
    const { fieldMetadata, fieldArray, records } = (0, exports.useHasManyController)({ field });
    const { metadata } = fieldMetadata;
    const inverseFieldApiIdentifier = (0, react_1.useMemo)(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
    }, [metadata.configuration]);
    const { remove, append, update } = fieldArray;
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)(props);
    const { relatedModel } = relatedModelOptions;
    const errorMessage = relatedModel.error?.message;
    const isLoading = relatedModel.fetching;
    const selectedRecords = (0, react_1.useMemo)(() => {
        return (records ?? []).filter((value) => !("_unlink" in value && value._unlink));
    }, [records]);
    const onRemoveRecord = (0, react_1.useCallback)((record) => {
        const index = records.findIndex((value) => value.id === record.id);
        if (index < 0) {
            return;
        }
        if ("_link" in record) {
            remove(index);
        }
        else {
            update(index, {
                ...record,
                _unlink: { id: record.id, inverseFieldApiIdentifier },
            });
        }
    }, [inverseFieldApiIdentifier, records, remove, update]);
    const onSelectRecord = (0, react_1.useCallback)((record) => {
        const index = (records ?? []).findIndex((value) => value.id === record.id);
        if (index >= 0) {
            const value = records[index];
            if ("_unlink" in value && value._unlink) {
                const { _unlink, ...rest } = value;
                update(index, rest);
            }
            else {
                onRemoveRecord(record);
            }
        }
        else {
            append({
                ...record,
                _link: record.id,
            });
        }
    }, [records, onRemoveRecord, update, append]);
    return {
        fieldMetadata,
        relatedModelOptions,
        selectedRecords,
        errorMessage,
        isLoading,
        onSelectRecord,
        onRemoveRecord,
    };
};
exports.useHasManyInputController = useHasManyInputController;
//# sourceMappingURL=useHasManyController.js.map